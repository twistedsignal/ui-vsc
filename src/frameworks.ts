// Framework specifications. Each entry tells the parser which call shapes
// to recognize and how the framework's quirks (children layout, events as
// props, etc.) should be reflected in completions and inlay hints.
//
// The three "getters" exported below — getEnabledFrameworks,
// getAliasPartition, getDirectInstanceClassNames — are on the hot path:
// they're called 3-5× per completion-provider invocation across ~30
// call sites. Each used to re-read config, re-flatten arrays, and
// re-dedupe via `.includes()` on every call. They're now memoised at
// module level and invalidated by a single config-change listener
// registered once at first import (see `resetFrameworkCaches`).

import * as vscode from "vscode";
import { configChangeAffects, getConfig } from "./configCompat";
import { DIRECT_INSTANTIABLE_CLASS_NAMES } from "./data";

export type FrameworkId = "react" | "roact" | "fusion" | "vide" | "ui";

export type CallShape = "parens" | "curried";

export interface FrameworkSpec {
  id: FrameworkId;
  /** Function-name aliases used to construct elements. */
  aliases: string[];
  /** Optional parens-style wrappers that construct an Instance before binding it. */
  constructorAliases?: string[];
  /** How configured constructor wrappers place children in their bindings table. */
  constructorChildrenLayout?: "inline";
  /**
   * Canonical call shape — what the framework's own documentation
   * uses, and what Luix emits when generating snippet bodies /
   * scaffolds.
   *   - `parens`: `f(a, b, c)` (React, Roact)
   *   - `curried`: Lua sugar `f "x" { ... }` (Fusion, Vide)
   */
  callShape: CallShape;
  /**
   * Every call shape the parser should *recognise* (not just the
   * canonical one). Vide is the motivating case: it accepts both
   * `create "Frame" { ... }` (curried) and `create("Frame", { ... })`
   * / `Vide.create("Frame", { ... })` (parens). Defaults to
   * `[callShape]` when omitted, so existing frameworks behave as
   * before. Aliases of multi-shape frameworks land in *every*
   * recognised bucket of `getAliasPartition()`, so detection regexes
   * for either shape pick them up.
   */
  recognizedCallShapes?: CallShape[];
  /**
   * For "curried" frameworks: how children appear.
   *   - `table-key`: children under a special key like `[Children]`.
   *   - `inline`: children are array-style entries in the same table as
   *     props.
   */
  childrenLayout?: "table-key" | "inline";
  /** For `table-key` childrenLayout, the key name (e.g. `"Children"`). */
  childrenKey?: string;
  /**
   * Whether event names should be merged into the prop-completion list.
   * Vide treats events as plain table keys (`Activated = function()...`)
   * rather than the `[React.Event.X]` bracket form.
   */
  eventsAsProps: boolean;
  /**
   * Whether `Parent = …` is an accepted table key. Fusion and Vide
   * construct real instances and mount them by setting `Parent` in the
   * same table (`New "ScreenGui" { Parent = playerGui }`); React and
   * Roact mount through a root / portal instead, so a bare `Parent`
   * there is a mistake worth flagging. Defaults to false.
   */
  parentAsProp?: boolean;
  /** This API binds an existing Instance instead of constructing one. */
  bindsExistingInstance?: boolean;
}

export const FRAMEWORKS: Record<FrameworkId, FrameworkSpec> = {
  react: {
    id: "react",
    aliases: ["e", "createElement", "React.createElement"],
    callShape: "parens",
    eventsAsProps: false,
  },
  roact: {
    id: "roact",
    aliases: ["Roact.createElement"],
    callShape: "parens",
    eventsAsProps: false,
  },
  fusion: {
    id: "fusion",
    aliases: ["New", "Fusion.New"],
    callShape: "curried",
    childrenLayout: "table-key",
    childrenKey: "Children",
    eventsAsProps: false,
    parentAsProp: true,
  },
  vide: {
    id: "vide",
    // Vide is unique: `create "Frame" { … }` (curried) and
    // `create("Frame", { … })` / `Vide.create("Frame", { … })`
    // (parens) are both valid, idiomatic shapes. The aliases below
    // land in *both* alias buckets via `recognizedCallShapes` so the
    // parser detects either form.
    aliases: ["create", "vide.create", "Vide.create"],
    callShape: "curried",
    recognizedCallShapes: ["parens", "curried"],
    childrenLayout: "inline",
    eventsAsProps: true,
    parentAsProp: true,
  },
  ui: {
    id: "ui",
    aliases: ["ui.bind"],
    callShape: "parens",
    eventsAsProps: true,
    parentAsProp: true,
    bindsExistingInstance: true,
    constructorChildrenLayout: "inline",
  },
};

const ALL_FRAMEWORK_IDS: FrameworkId[] = [
  "react",
  "roact",
  "fusion",
  "vide",
  "ui",
];

// ---- Cache --------------------------------------------------------------

let _enabledFrameworks: FrameworkSpec[] | undefined;
let _aliasPartition: AliasPartition | undefined;
// `null` here means "cached as definitely undefined" so we can tell a
// cache miss apart from a positive "feature is off" result.
let _directInstanceClasses: ReadonlySet<string> | null | undefined;

function resetFrameworkCaches(): void {
  _enabledFrameworks = undefined;
  _aliasPartition = undefined;
  _directInstanceClasses = undefined;
}

// Wire cache invalidation to every config key these getters read.
// Registered once at module init; the disposable leaks for the lifetime
// of the extension host process, which is acceptable for a single
// per-load registration (no growth over time).
try {
  vscode.workspace.onDidChangeConfiguration((e) => {
    if (
      configChangeAffects(e, "frameworks") ||
      configChangeAffects(e, "react.aliases") ||
      configChangeAffects(e, "roact.aliases") ||
      configChangeAffects(e, "fusion.aliases") ||
      configChangeAffects(e, "vide.aliases") ||
      configChangeAffects(e, "ui.aliases") ||
      configChangeAffects(e, "ui.createAliases") ||
      configChangeAffects(e, "vide.directInstanceCalls")
    ) {
      resetFrameworkCaches();
    }
  });
} catch {
  // `vscode.workspace` is unavailable in some unit-test bootstrap
  // contexts. The cache just stays warm forever in that case, which
  // matches the previous "no cache" behaviour from the caller's view.
}

/**
 * Returns the active framework specs, filtered by the `luix.frameworks`
 * setting and with any per-framework alias overrides applied. Memoised
 * — invalidated on config change.
 */
export function getEnabledFrameworks(): FrameworkSpec[] {
  if (_enabledFrameworks) return _enabledFrameworks;
  const enabled = getConfig<FrameworkId[]>("frameworks", ALL_FRAMEWORK_IDS);
  const ids = Array.isArray(enabled) && enabled.length > 0
    ? enabled.filter((id): id is FrameworkId =>
        ALL_FRAMEWORK_IDS.includes(id as FrameworkId)
      )
    : ALL_FRAMEWORK_IDS;

  const videEnabled = ids.includes("vide");
  _enabledFrameworks = ids.map((id) => {
    const base = FRAMEWORKS[id];
    const override = getConfig<string[]>(`${id}.aliases`, []);
    const aliases = Array.isArray(override) && override.length > 0
      ? override
      : base.aliases;
    if (id === "ui") {
      const configured = getConfig<string[]>("ui.createAliases", []);
      const constructorAliases = !videEnabled && Array.isArray(configured)
        ? configured.filter((alias) => alias.trim().length > 0)
        : [];
      return { ...base, aliases, constructorAliases };
    }
    return aliases === base.aliases ? base : { ...base, aliases };
  });
  return _enabledFrameworks;
}

/**
 * Collected aliases across all enabled frameworks, partitioned by call
 * shape. Parsers use this to build two separate regexes. Memoised —
 * invalidated on config change.
 */
export interface AliasPartition {
  parens: string[];
  curried: string[];
  /** Parens aliases whose first argument is an existing Instance. */
  bindingAliases?: string[];
  /** Aliases of frameworks whose `childrenLayout === "inline"` and
   *  that recognise the `parens` shape. The parens-form parse path
   *  uses this to decide whether the props brace also doubles as the
   *  inline-children container (Vide's `create("Frame", { Child(...) })`
   *  shape). Pre-built here so the parser doesn't have to call back
   *  into `findFrameworkForAlias` per match. Today only Vide qualifies.
   *
   *  Optional so hand-rolled test fixtures and legacy callers stay
   *  compiling; the parser falls back to the legacy
   *  `partition.curried.includes(alias)` behaviour when the field is
   *  absent (which is exactly what those callers had before 1.5.0). */
  parensWithInlineChildren?: string[];
}

export function getAliasPartition(): AliasPartition {
  if (_aliasPartition) return _aliasPartition;
  const parens: string[] = [];
  const curried: string[] = [];
  const parensWithInlineChildren: string[] = [];
  const bindingAliases: string[] = [];
  for (const framework of getEnabledFrameworks()) {
    // Frameworks default to a single recognised shape (their canonical
    // one). Vide overrides this to register its aliases in both
    // buckets so `create "Frame" { … }` and `create("Frame", { … })`
    // both detect.
    const shapes = framework.recognizedCallShapes ?? [framework.callShape];
    const recognisesParens = shapes.includes("parens");
    const inlineChildren = framework.childrenLayout === "inline";
    for (const shape of shapes) {
      const bucket = shape === "parens" ? parens : curried;
      for (const alias of framework.aliases) {
        if (!bucket.includes(alias)) {
          bucket.push(alias);
        }
      }
    }
    for (const alias of framework.constructorAliases ?? []) {
      if (!parens.includes(alias)) {
        parens.push(alias);
      }
      if (
        framework.constructorChildrenLayout === "inline" &&
        !parensWithInlineChildren.includes(alias)
      ) {
        parensWithInlineChildren.push(alias);
      }
    }
    // Only frameworks whose parens form actually carries inline
    // children (Vide) qualify — scoping by the spec, not just bucket
    // membership, so a cross-framework alias collision (e.g. a user
    // adding "e" to `luix.fusion.aliases`) doesn't trick a React
    // 2-arg call into being parsed as an inline-children container.
    if (recognisesParens && inlineChildren) {
      for (const alias of framework.aliases) {
        if (!parensWithInlineChildren.includes(alias)) {
          parensWithInlineChildren.push(alias);
        }
      }
    }
    if (framework.bindsExistingInstance) {
      for (const alias of framework.aliases) {
        if (!bindingAliases.includes(alias)) bindingAliases.push(alias);
      }
    }
  }
  _aliasPartition = {
    parens,
    curried,
    parensWithInlineChildren,
    bindingAliases,
  };
  return _aliasPartition;
}

/** Whether this exact alias accepts array-style children in its props table. */
export function aliasUsesInlineChildren(alias: string): boolean {
  const framework = findFrameworkForAlias(alias);
  if (!framework) {
    return false;
  }
  if (framework.constructorAliases?.includes(alias)) {
    return framework.constructorChildrenLayout === "inline";
  }
  return framework.childrenLayout === "inline";
}

/**
 * Given a factory alias (e.g. "New" or "e"), look up which framework owns
 * it. Used by callers that need to know which framework matched (e.g. for
 * Vide's events-as-props handling).
 */
export function findFrameworkForAlias(
  alias: string
): FrameworkSpec | undefined {
  for (const framework of getEnabledFrameworks()) {
    if (framework.constructorAliases?.includes(alias)) {
      return framework;
    }
    if (framework.aliases.includes(alias)) {
      return framework;
    }
  }
  return undefined;
}

/**
 * Built-in Roblox class names that should be recognised as targets
 * of Vide's bare-call shape — `Frame({ Size = … })`,
 * `TextButton({ Activated = … })`, etc. Gated by:
 *
 *   1. The Vide framework being in `luix.frameworks` (no point firing
 *      this detection for a React-only project — the React `Frame(…)`
 *      pattern is `e("Frame", …)`).
 *   2. The opt-out setting `luix.vide.directInstanceCalls` being true
 *      (default).
 *
 * Returns undefined when the feature shouldn't apply, so callers can
 * skip the union with workspace components entirely. When applicable,
 * the returned set comes from the bundled Roblox API dump and excludes
 * hidden and `NotCreatable` classes. Memoised.
 */
export function getDirectInstanceClassNames(): ReadonlySet<string> | undefined {
  if (_directInstanceClasses !== undefined) {
    return _directInstanceClasses ?? undefined;
  }
  const frameworks = getEnabledFrameworks();
  if (!frameworks.some((f) => f.id === "vide")) {
    _directInstanceClasses = null;
    return undefined;
  }
  if (!getConfig<boolean>("vide.directInstanceCalls", true)) {
    _directInstanceClasses = null;
    return undefined;
  }
  _directInstanceClasses = DIRECT_INSTANTIABLE_CLASS_NAMES;
  return _directInstanceClasses;
}
