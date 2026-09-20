import fs from "node:fs";
import path from "node:path";

const [input, output] = process.argv.slice(2);
if (!input || !output) {
  throw new Error("usage: node scripts/generate-roblox-api-data.mjs <dump.json> <output.ts>");
}

const dump = JSON.parse(fs.readFileSync(input, "utf8"));

function stringTags(value) {
  return (value ?? []).filter((tag) => typeof tag === "string");
}

function hasTag(value, tag) {
  return stringTags(value).includes(tag);
}

function visibleMember(member) {
  return !["Deprecated", "Hidden", "NotScriptable", "ReadOnly"].some((tag) =>
    hasTag(member.Tags, tag)
  );
}

function writableProperty(member) {
  return member.MemberType === "Property" &&
    member.Name !== "Parent" &&
    visibleMember(member) &&
    member.Security?.Write === "None";
}

function visibleEvent(member) {
  return member.MemberType === "Event" && visibleMember(member) &&
    member.Security === "None";
}

function luauType(valueType) {
  if (!valueType?.Name) return undefined;
  if (valueType.Category === "Enum") return `Enum.${valueType.Name}`;
  if (valueType.Category === "Primitive") {
    if (valueType.Name === "bool") return "boolean";
    if (["int", "int64", "float", "double"].includes(valueType.Name)) {
      return "number";
    }
    if (valueType.Name === "string") return "string";
  }
  return valueType.Name;
}

const classes = {};
const creatable = [];
const propTypes = {};

for (const cls of [...dump.Classes].sort((a, b) => a.Name.localeCompare(b.Name))) {
  const properties = cls.Members.filter(writableProperty);
  const events = cls.Members.filter(visibleEvent);
  classes[cls.Name] = {
    ...(cls.Superclass ? { inherits: cls.Superclass } : {}),
    own: properties.map((member) => member.Name).sort(),
    ...(events.length > 0
      ? { events: events.map((member) => member.Name).sort() }
      : {}),
  };

  const classHidden = hasTag(cls.Tags, "Hidden");
  const classNotCreatable = hasTag(cls.Tags, "NotCreatable");
  if (!classHidden && !classNotCreatable) creatable.push(cls.Name);

  const types = {};
  for (const member of properties) {
    const type = luauType(member.ValueType);
    if (type) types[member.Name] = type;
  }
  if (Object.keys(types).length > 0) propTypes[cls.Name] = types;
}

const header = `// Generated from MaximumADHD/Roblox-Client-Tracker Mini-API-Dump.json.\n` +
  `// Do not edit by hand. Run scripts/generate-roblox-api-data.mjs.\n\n`;
const body =
  `export interface GeneratedClassDef {\n` +
  `  inherits?: string;\n  own: string[];\n  events?: string[];\n}\n\n` +
  `export const GENERATED_CLASS_HIERARCHY: Record<string, GeneratedClassDef> = ${JSON.stringify(classes, null, 2)};\n\n` +
  `export const GENERATED_CREATABLE_CLASS_NAMES: ReadonlySet<string> = new Set(${JSON.stringify(creatable, null, 2)});\n\n` +
  `export const GENERATED_PROP_TYPES: Record<string, Record<string, string>> = ${JSON.stringify(propTypes, null, 2)};\n`;

fs.writeFileSync(output, header + body);
console.log(`generated ${Object.keys(classes).length} classes, ${creatable.length} creatable`);
