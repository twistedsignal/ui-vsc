// Generated from MaximumADHD/Roblox-Client-Tracker Mini-API-Dump.json.
// Do not edit by hand. Run scripts/generate-roblox-api-data.mjs.

export interface GeneratedClassDef {
  inherits?: string;
  own: string[];
  events?: string[];
}

export const GENERATED_CLASS_HIERARCHY: Record<string, GeneratedClassDef> = {
  "Accessory": {
    "inherits": "Accoutrement",
    "own": [
      "AccessoryType"
    ]
  },
  "AccessoryDescription": {
    "inherits": "Instance",
    "own": [
      "AccessoryType",
      "AssetId",
      "Instance",
      "IsLayered",
      "Order",
      "Position",
      "Rotation",
      "Scale"
    ]
  },
  "AccountService": {
    "inherits": "Instance",
    "own": []
  },
  "Accoutrement": {
    "inherits": "Instance",
    "own": [
      "AttachmentPoint"
    ]
  },
  "AchievementService": {
    "inherits": "Instance",
    "own": []
  },
  "ActivityHistoryEventService": {
    "inherits": "Instance",
    "own": []
  },
  "Actor": {
    "inherits": "Model",
    "own": []
  },
  "AdGui": {
    "inherits": "SurfaceGuiBase",
    "own": [
      "AdShape",
      "EnableVideoAds",
      "FallbackImage",
      "FallbackImageContent"
    ]
  },
  "AdPlacement": {
    "inherits": "Instance",
    "own": [
      "ActivationInstance",
      "AdFormat",
      "PlacementId"
    ]
  },
  "AdPortal": {
    "inherits": "Instance",
    "own": []
  },
  "AdService": {
    "inherits": "Instance",
    "own": []
  },
  "AdvancedDragger": {
    "inherits": "Instance",
    "own": []
  },
  "AirController": {
    "inherits": "ControllerBase",
    "own": [
      "BalanceMaxTorque",
      "BalanceSpeed",
      "MaintainAngularMomentum",
      "MaintainLinearMomentum",
      "MoveMaxForce",
      "TurnMaxTorque",
      "TurnSpeedFactor"
    ]
  },
  "AlignOrientation": {
    "inherits": "Constraint",
    "own": [
      "AlignType",
      "CFrame",
      "LookAtPosition",
      "MaxAngularVelocity",
      "MaxTorque",
      "Mode",
      "PrimaryAxis",
      "PrimaryAxisOnly",
      "ReactionTorqueEnabled",
      "Responsiveness",
      "RigidityEnabled",
      "SecondaryAxis"
    ]
  },
  "AlignPosition": {
    "inherits": "Constraint",
    "own": [
      "ApplyAtCenterOfMass",
      "ForceLimitMode",
      "ForceRelativeTo",
      "MaxAxesForce",
      "MaxForce",
      "MaxVelocity",
      "Mode",
      "Position",
      "ReactionForceEnabled",
      "Responsiveness",
      "RigidityEnabled"
    ]
  },
  "AnalyticsService": {
    "inherits": "Instance",
    "own": []
  },
  "AngularVelocity": {
    "inherits": "Constraint",
    "own": [
      "AngularVelocity",
      "MaxTorque",
      "ReactionTorqueEnabled",
      "RelativeTo"
    ]
  },
  "AnimatedImage": {
    "inherits": "GuiBase",
    "own": []
  },
  "AnimatedImageService": {
    "inherits": "Instance",
    "own": []
  },
  "AnimatedImageTrack": {
    "inherits": "Object",
    "own": []
  },
  "Animation": {
    "inherits": "Instance",
    "own": [
      "AnimationContent",
      "AnimationId"
    ]
  },
  "AnimationClip": {
    "inherits": "Instance",
    "own": [
      "Loop",
      "Priority"
    ]
  },
  "AnimationClipProvider": {
    "inherits": "Instance",
    "own": []
  },
  "AnimationConstraint": {
    "inherits": "Constraint",
    "own": [
      "AngularDamping",
      "AngularStrength",
      "IsKinematic",
      "LinearDamping",
      "LinearStrength",
      "MaxForce",
      "MaxTorque",
      "Transform"
    ]
  },
  "AnimationController": {
    "inherits": "Instance",
    "own": []
  },
  "AnimationFromVideoCreatorService": {
    "inherits": "Instance",
    "own": []
  },
  "AnimationFromVideoCreatorStudioService": {
    "inherits": "Instance",
    "own": []
  },
  "AnimationGraphDefinition": {
    "inherits": "AnimationClip",
    "own": []
  },
  "AnimationImportData": {
    "inherits": "BaseImportData",
    "own": [
      "ForceNewVersion",
      "VersionedAssetId"
    ]
  },
  "AnimationNode": {
    "inherits": "Object",
    "own": []
  },
  "AnimationNodeDefinition": {
    "inherits": "Instance",
    "own": [
      "NodeType"
    ],
    "events": [
      "InputPinsChanged"
    ]
  },
  "AnimationRigData": {
    "inherits": "Instance",
    "own": []
  },
  "AnimationStreamTrack": {
    "inherits": "Instance",
    "own": []
  },
  "AnimationTrack": {
    "inherits": "Instance",
    "own": [
      "Looped",
      "Priority",
      "TimePosition"
    ],
    "events": [
      "DidLoop",
      "Ended",
      "KeyframeReached",
      "Stopped"
    ]
  },
  "AnimationValueNodeDefinition": {
    "inherits": "Instance",
    "own": [
      "NodeType"
    ]
  },
  "AnimationValueOutputDefinition": {
    "inherits": "Instance",
    "own": []
  },
  "Animator": {
    "inherits": "Instance",
    "own": [
      "PreferLodEnabled"
    ],
    "events": [
      "AnimationPlayed"
    ]
  },
  "Annotation": {
    "inherits": "Instance",
    "own": []
  },
  "AnnotationsService": {
    "inherits": "Instance",
    "own": []
  },
  "AppAgeSignalsService": {
    "inherits": "Instance",
    "own": []
  },
  "AppLifecycleObserverService": {
    "inherits": "Instance",
    "own": []
  },
  "AppRatingPromptService": {
    "inherits": "Instance",
    "own": []
  },
  "AppStorageService": {
    "inherits": "LocalStorageService",
    "own": []
  },
  "AppUpdateService": {
    "inherits": "Instance",
    "own": []
  },
  "ArcHandles": {
    "inherits": "HandlesBase",
    "own": [
      "Axes"
    ],
    "events": [
      "MouseButton1Down",
      "MouseButton1Up",
      "MouseDrag",
      "MouseEnter",
      "MouseLeave"
    ]
  },
  "AssetCounterService": {
    "inherits": "Instance",
    "own": []
  },
  "AssetDeliveryProxy": {
    "inherits": "Instance",
    "own": [
      "Interface",
      "Port",
      "StartServer"
    ]
  },
  "AssetImportService": {
    "inherits": "Instance",
    "own": []
  },
  "AssetImportSession": {
    "inherits": "ImportSession",
    "own": []
  },
  "AssetManagerService": {
    "inherits": "Instance",
    "own": []
  },
  "AssetPatchSettings": {
    "inherits": "Instance",
    "own": [
      "ContentId",
      "OutputPath",
      "PatchId"
    ]
  },
  "AssetQualityService": {
    "inherits": "Instance",
    "own": []
  },
  "AssetService": {
    "inherits": "Instance",
    "own": []
  },
  "AssetSoundEffect": {
    "inherits": "CustomSoundEffect",
    "own": []
  },
  "Atmosphere": {
    "inherits": "Instance",
    "own": [
      "Color",
      "Decay",
      "Density",
      "Glare",
      "Haze",
      "Offset"
    ]
  },
  "AtmosphereSensor": {
    "inherits": "SensorBase",
    "own": []
  },
  "Attachment": {
    "inherits": "Instance",
    "own": [
      "Axis",
      "CFrame",
      "SecondaryAxis",
      "Visible",
      "WorldAxis",
      "WorldCFrame",
      "WorldSecondaryAxis"
    ]
  },
  "AudioAnalyzer": {
    "inherits": "Instance",
    "own": [
      "SpectrumEnabled",
      "WindowSize"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioChannelMixer": {
    "inherits": "Instance",
    "own": [
      "Layout"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioChannelSplitter": {
    "inherits": "Instance",
    "own": [
      "Layout"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioChorus": {
    "inherits": "Instance",
    "own": [
      "Bypass",
      "Depth",
      "Mix",
      "Rate"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioCompressor": {
    "inherits": "Instance",
    "own": [
      "Attack",
      "Bypass",
      "MakeupGain",
      "Ratio",
      "Release",
      "Threshold"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioDeviceInput": {
    "inherits": "Instance",
    "own": [
      "AccessType",
      "Muted",
      "Player",
      "Volume"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioDeviceOutput": {
    "inherits": "Instance",
    "own": [
      "Player"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioDistortion": {
    "inherits": "Instance",
    "own": [
      "Bypass",
      "Level"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioEcho": {
    "inherits": "Instance",
    "own": [
      "Bypass",
      "DelayTime",
      "DryLevel",
      "Feedback",
      "RampTime",
      "WetLevel"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioEmitter": {
    "inherits": "Instance",
    "own": [
      "AcousticSimulationEnabled",
      "AudioInteractionGroup",
      "DiffractionEnabled",
      "DistanceAttenuationBounds",
      "DistanceAttenuationMode",
      "OcclusionEnabled",
      "PositionInstance",
      "PositionType",
      "ReverbEnabled"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioEqualizer": {
    "inherits": "Instance",
    "own": [
      "Bypass",
      "HighGain",
      "LowGain",
      "MidGain",
      "MidRange"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioFader": {
    "inherits": "Instance",
    "own": [
      "Bypass",
      "Volume"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioFilter": {
    "inherits": "Instance",
    "own": [
      "Bypass",
      "FilterType",
      "Frequency",
      "Gain",
      "Q"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioFlanger": {
    "inherits": "Instance",
    "own": [
      "Bypass",
      "Depth",
      "Mix",
      "Rate"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioFocusService": {
    "inherits": "Instance",
    "own": []
  },
  "AudioGate": {
    "inherits": "Instance",
    "own": [
      "Attack",
      "Bypass",
      "Release",
      "Threshold"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioLimiter": {
    "inherits": "Instance",
    "own": [
      "Bypass",
      "MaxLevel",
      "Release"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioListener": {
    "inherits": "Instance",
    "own": [
      "AcousticSimulationEnabled",
      "AudioInteractionGroup",
      "DiffractionEnabled",
      "OcclusionEnabled",
      "PositionInstance",
      "PositionType",
      "ReverbEnabled"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioPages": {
    "inherits": "Pages",
    "own": []
  },
  "AudioPitchShifter": {
    "inherits": "Instance",
    "own": [
      "Bypass",
      "Pitch",
      "WindowSize"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioPlayer": {
    "inherits": "Instance",
    "own": [
      "Asset",
      "AutoLoad",
      "AutoPlay",
      "LoopRegion",
      "Looping",
      "PlaybackRegion",
      "PlaybackSpeed",
      "TimePosition",
      "Volume"
    ],
    "events": [
      "Ended",
      "Looped",
      "WiringChanged"
    ]
  },
  "AudioRecorder": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioReverb": {
    "inherits": "Instance",
    "own": [
      "Bypass",
      "DecayRatio",
      "DecayTime",
      "Density",
      "Diffusion",
      "DryLevel",
      "EarlyDelayTime",
      "HighCutFrequency",
      "LateDelayTime",
      "LowShelfFrequency",
      "LowShelfGain",
      "ReferenceFrequency",
      "WetLevel"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioSearchParams": {
    "inherits": "Instance",
    "own": [
      "Album",
      "Artist",
      "AudioSubType",
      "MaxDuration",
      "MinDuration",
      "SearchKeyword",
      "Tag",
      "Title"
    ]
  },
  "AudioSpeechToText": {
    "inherits": "Instance",
    "own": [
      "Enabled",
      "Text"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioTextToSpeech": {
    "inherits": "Instance",
    "own": [
      "Looping",
      "Pitch",
      "PlaybackSpeed",
      "Speed",
      "Text",
      "TimePosition",
      "VoiceId",
      "Volume"
    ],
    "events": [
      "Ended",
      "Looped",
      "WiringChanged"
    ]
  },
  "AudioTremolo": {
    "inherits": "Instance",
    "own": [
      "Bypass",
      "Depth",
      "Duty",
      "Frequency",
      "Shape",
      "Skew",
      "Square"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AudioWindSynthesizer": {
    "inherits": "Instance",
    "own": [
      "Enabled",
      "PositionInstance",
      "PositionType",
      "Profile",
      "Volume"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "AuroraScript": {
    "inherits": "LuaSourceContainer",
    "own": [
      "EnableCulling",
      "EnableLOD",
      "LODCriticality",
      "Priority",
      "Source"
    ]
  },
  "AuroraScriptObject": {
    "inherits": "Instance",
    "own": [
      "FrameId",
      "LODLevel",
      "PriorFrameInvoked"
    ]
  },
  "AuroraScriptService": {
    "inherits": "Instance",
    "own": []
  },
  "AuroraService": {
    "inherits": "Instance",
    "own": [
      "HashRoundingPoint",
      "IgnoreRotation",
      "LockStepIdOffset",
      "RollbackOffset"
    ],
    "events": [
      "FixedRateTick",
      "Step"
    ]
  },
  "AvatarAbilityRules": {
    "inherits": "Instance",
    "own": []
  },
  "AvatarAccessoryRules": {
    "inherits": "Instance",
    "own": []
  },
  "AvatarAnimationRules": {
    "inherits": "Instance",
    "own": []
  },
  "AvatarBodyRules": {
    "inherits": "Instance",
    "own": []
  },
  "AvatarChatService": {
    "inherits": "Instance",
    "own": []
  },
  "AvatarClothingRules": {
    "inherits": "Instance",
    "own": []
  },
  "AvatarCollisionRules": {
    "inherits": "Instance",
    "own": []
  },
  "AvatarCreationService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "AvatarAssetModerationCompleted",
      "AvatarModerationCompleted",
      "AvatarOutfitModerationCompleted"
    ]
  },
  "AvatarEditorService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "PromptAllowInventoryReadAccessCompleted",
      "PromptCreateOutfitCompleted",
      "PromptDeleteOutfitCompleted",
      "PromptRenameOutfitCompleted",
      "PromptSaveAvatarCompleted",
      "PromptSetFavoriteCompleted",
      "PromptUpdateOutfitCompleted"
    ]
  },
  "AvatarImportService": {
    "inherits": "Instance",
    "own": []
  },
  "AvatarRules": {
    "inherits": "Instance",
    "own": []
  },
  "AvatarSettings": {
    "inherits": "Instance",
    "own": []
  },
  "Backpack": {
    "inherits": "Instance",
    "own": []
  },
  "BackpackItem": {
    "inherits": "Model",
    "own": [
      "TextureContent",
      "TextureId"
    ]
  },
  "BadgeService": {
    "inherits": "Instance",
    "own": []
  },
  "BallSocketConstraint": {
    "inherits": "Constraint",
    "own": [
      "LimitsEnabled",
      "MaxFrictionTorque",
      "Radius",
      "Restitution",
      "TwistLimitsEnabled",
      "TwistLowerAngle",
      "TwistUpperAngle",
      "UpperAngle"
    ]
  },
  "BanHistoryPages": {
    "inherits": "Pages",
    "own": []
  },
  "BaseCoreGuiConfiguration": {
    "inherits": "Instance",
    "own": [
      "Enabled"
    ]
  },
  "BaseImportData": {
    "inherits": "Instance",
    "own": [
      "ImportName",
      "ShouldImport"
    ],
    "events": [
      "StatusRemoved",
      "StatusReported"
    ]
  },
  "BasePart": {
    "inherits": "PVInstance",
    "own": [
      "Anchored",
      "AssemblyAngularVelocity",
      "AssemblyLinearVelocity",
      "AudioCanCollide",
      "BackSurface",
      "BottomSurface",
      "BrickColor",
      "CFrame",
      "CanCollide",
      "CanQuery",
      "CanTouch",
      "CastShadow",
      "CollisionGroup",
      "Color",
      "CustomPhysicalProperties",
      "EnableFluidForces",
      "FrontSurface",
      "LeftSurface",
      "Locked",
      "Massless",
      "Material",
      "MaterialVariant",
      "PivotOffset",
      "Reflectance",
      "RightSurface",
      "RootPriority",
      "Rotation",
      "Size",
      "TopSurface",
      "Transparency"
    ],
    "events": [
      "TouchEnded",
      "Touched"
    ]
  },
  "BasePlayerGui": {
    "inherits": "Instance",
    "own": []
  },
  "BaseRemoteEvent": {
    "inherits": "Instance",
    "own": []
  },
  "BaseScript": {
    "inherits": "LuaSourceContainer",
    "own": [
      "Disabled",
      "Enabled"
    ]
  },
  "BaseWrap": {
    "inherits": "Instance",
    "own": []
  },
  "Beam": {
    "inherits": "Instance",
    "own": [
      "Attachment0",
      "Attachment1",
      "Brightness",
      "Color",
      "CurveSize0",
      "CurveSize1",
      "Enabled",
      "FaceCamera",
      "LightEmission",
      "LightInfluence",
      "Segments",
      "Texture",
      "TextureContent",
      "TextureLength",
      "TextureMode",
      "TextureSpeed",
      "Transparency",
      "Width0",
      "Width1",
      "ZOffset"
    ]
  },
  "BevelMesh": {
    "inherits": "DataModelMesh",
    "own": []
  },
  "BillboardGui": {
    "inherits": "LayerCollector",
    "own": [
      "Active",
      "Adornee",
      "AlwaysOnTop",
      "Brightness",
      "ClipsDescendants",
      "DistanceStep",
      "ExtentsOffset",
      "ExtentsOffsetWorldSpace",
      "LightInfluence",
      "MaxDistance",
      "PlayerToHideFrom",
      "Size",
      "SizeOffset",
      "StudsOffset",
      "StudsOffsetWorldSpace"
    ]
  },
  "BinaryStringValue": {
    "inherits": "ValueBase",
    "own": [],
    "events": [
      "Changed"
    ]
  },
  "BindableEvent": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "Event"
    ]
  },
  "BindableFunction": {
    "inherits": "Instance",
    "own": []
  },
  "BlockMesh": {
    "inherits": "BevelMesh",
    "own": []
  },
  "BloomEffect": {
    "inherits": "PostEffect",
    "own": [
      "Intensity",
      "Size",
      "Threshold"
    ]
  },
  "BlurEffect": {
    "inherits": "PostEffect",
    "own": [
      "Size"
    ]
  },
  "BodyAngularVelocity": {
    "inherits": "BodyMover",
    "own": [
      "AngularVelocity",
      "MaxTorque",
      "P"
    ]
  },
  "BodyColors": {
    "inherits": "CharacterAppearance",
    "own": [
      "HeadColor",
      "HeadColor3",
      "LeftArmColor",
      "LeftArmColor3",
      "LeftLegColor",
      "LeftLegColor3",
      "RightArmColor",
      "RightArmColor3",
      "RightLegColor",
      "RightLegColor3",
      "TorsoColor",
      "TorsoColor3"
    ]
  },
  "BodyForce": {
    "inherits": "BodyMover",
    "own": [
      "Force"
    ]
  },
  "BodyGyro": {
    "inherits": "BodyMover",
    "own": [
      "CFrame",
      "D",
      "MaxTorque",
      "P"
    ]
  },
  "BodyMover": {
    "inherits": "Instance",
    "own": []
  },
  "BodyPartDescription": {
    "inherits": "Instance",
    "own": [
      "AssetId",
      "BodyPart",
      "Color",
      "HeadShape",
      "Instance"
    ]
  },
  "BodyPosition": {
    "inherits": "BodyMover",
    "own": [
      "D",
      "MaxForce",
      "P",
      "Position"
    ],
    "events": [
      "ReachedTarget"
    ]
  },
  "BodyThrust": {
    "inherits": "BodyMover",
    "own": [
      "Force",
      "Location"
    ]
  },
  "BodyVelocity": {
    "inherits": "BodyMover",
    "own": [
      "MaxForce",
      "P",
      "Velocity"
    ]
  },
  "Bone": {
    "inherits": "Attachment",
    "own": [
      "Transform"
    ]
  },
  "BoolValue": {
    "inherits": "ValueBase",
    "own": [
      "Value"
    ],
    "events": [
      "Changed"
    ]
  },
  "BoxHandleAdornment": {
    "inherits": "HandleAdornment",
    "own": [
      "Shading",
      "Size"
    ]
  },
  "BranchService": {
    "inherits": "Instance",
    "own": []
  },
  "Breakpoint": {
    "inherits": "Instance",
    "own": []
  },
  "BrickColorValue": {
    "inherits": "ValueBase",
    "own": [
      "Value"
    ],
    "events": [
      "Changed"
    ]
  },
  "BrowserService": {
    "inherits": "Instance",
    "own": []
  },
  "BubbleChatConfiguration": {
    "inherits": "TextChatConfigurations",
    "own": [
      "AdorneeName",
      "BackgroundColor3",
      "BackgroundTransparency",
      "BubbleDuration",
      "BubblesSpacing",
      "Enabled",
      "FontFace",
      "LocalPlayerStudsOffset",
      "MaxBubbles",
      "MaxDistance",
      "MinimizeDistance",
      "TailVisible",
      "TextColor3",
      "TextSize",
      "VerticalStudsOffset"
    ]
  },
  "BubbleChatMessageProperties": {
    "inherits": "TextChatMessageProperties",
    "own": [
      "BackgroundColor3",
      "BackgroundTransparency",
      "FontFace",
      "TailVisible",
      "TextColor3",
      "TextSize"
    ]
  },
  "BugReporterService": {
    "inherits": "Instance",
    "own": []
  },
  "BulkImportService": {
    "inherits": "Instance",
    "own": []
  },
  "BuoyancySensor": {
    "inherits": "SensorBase",
    "own": [
      "FullySubmerged",
      "TouchingSurface"
    ]
  },
  "CacheableContentProvider": {
    "inherits": "Instance",
    "own": []
  },
  "CallingService": {
    "inherits": "Instance",
    "own": []
  },
  "CalloutService": {
    "inherits": "Instance",
    "own": []
  },
  "Camera": {
    "inherits": "PVInstance",
    "own": [
      "CFrame",
      "CameraSubject",
      "CameraType",
      "DiagonalFieldOfView",
      "FieldOfView",
      "FieldOfViewMode",
      "Focus",
      "HeadLocked",
      "HeadScale",
      "MaxAxisFieldOfView",
      "VRTiltAndRollEnabled"
    ],
    "events": [
      "InterpolationFinished"
    ]
  },
  "CanvasGroup": {
    "inherits": "GuiObject",
    "own": [
      "GroupColor3",
      "GroupTransparency"
    ]
  },
  "Capture": {
    "inherits": "Object",
    "own": []
  },
  "CaptureService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "CaptureBegan",
      "CaptureEnded",
      "UserCaptureSaved"
    ]
  },
  "CapturesPages": {
    "inherits": "Pages",
    "own": []
  },
  "CapturesViewConfiguration": {
    "inherits": "BaseCoreGuiConfiguration",
    "own": [
      "Open"
    ]
  },
  "CatalogPages": {
    "inherits": "Pages",
    "own": []
  },
  "CFrameValue": {
    "inherits": "ValueBase",
    "own": [
      "Value"
    ],
    "events": [
      "Changed"
    ]
  },
  "ChangeHistoryService": {
    "inherits": "Instance",
    "own": []
  },
  "ChangeHistoryStreamingService": {
    "inherits": "Instance",
    "own": []
  },
  "ChannelSelectorSoundEffect": {
    "inherits": "CustomSoundEffect",
    "own": [
      "Channel"
    ]
  },
  "ChannelTabsConfiguration": {
    "inherits": "TextChatConfigurations",
    "own": [
      "BackgroundColor3",
      "BackgroundTransparency",
      "Enabled",
      "FontFace",
      "HoverBackgroundColor3",
      "SelectedTabTextColor3",
      "TextColor3",
      "TextSize",
      "TextStrokeColor3",
      "TextStrokeTransparency"
    ]
  },
  "CharacterAppearance": {
    "inherits": "Instance",
    "own": []
  },
  "CharacterMesh": {
    "inherits": "CharacterAppearance",
    "own": [
      "BaseTextureContent",
      "BaseTextureId",
      "BodyPart",
      "MeshContent",
      "MeshId",
      "OverlayTextureContent",
      "OverlayTextureId"
    ]
  },
  "Chat": {
    "inherits": "Instance",
    "own": [
      "BubbleChatEnabled"
    ],
    "events": [
      "Chatted"
    ]
  },
  "ChatInputBarConfiguration": {
    "inherits": "TextChatConfigurations",
    "own": [
      "AutocompleteEnabled",
      "BackgroundColor3",
      "BackgroundTransparency",
      "Enabled",
      "FontFace",
      "KeyboardKeyCode",
      "PlaceholderColor3",
      "TargetTextChannel",
      "TextBox",
      "TextColor3",
      "TextSize",
      "TextStrokeColor3",
      "TextStrokeTransparency"
    ]
  },
  "ChatWindowConfiguration": {
    "inherits": "TextChatConfigurations",
    "own": [
      "BackgroundColor3",
      "BackgroundTransparency",
      "Enabled",
      "FontFace",
      "HeightScale",
      "HorizontalAlignment",
      "TextChannelDisplayMode",
      "TextColor3",
      "TextSize",
      "TextStrokeColor3",
      "TextStrokeTransparency",
      "VerticalAlignment",
      "WidthScale"
    ]
  },
  "ChatWindowMessageProperties": {
    "inherits": "TextChatMessageProperties",
    "own": [
      "FontFace",
      "PrefixTextProperties",
      "TextColor3",
      "TextSize",
      "TextStrokeColor3",
      "TextStrokeTransparency"
    ]
  },
  "ChorusSoundEffect": {
    "inherits": "SoundEffect",
    "own": [
      "Depth",
      "Mix",
      "Rate"
    ]
  },
  "ClickDetector": {
    "inherits": "Instance",
    "own": [
      "CursorIcon",
      "CursorIconContent",
      "MaxActivationDistance"
    ],
    "events": [
      "MouseClick",
      "MouseHoverEnter",
      "MouseHoverLeave",
      "RightMouseClick"
    ]
  },
  "ClientReplicator": {
    "inherits": "NetworkReplicator",
    "own": []
  },
  "ClientStorageService": {
    "inherits": "Instance",
    "own": []
  },
  "ClimbController": {
    "inherits": "ControllerBase",
    "own": [
      "AccelerationTime",
      "BalanceMaxTorque",
      "BalanceSpeed",
      "MoveMaxForce"
    ]
  },
  "Clothing": {
    "inherits": "CharacterAppearance",
    "own": [
      "Color3"
    ]
  },
  "CloudCRUDService": {
    "inherits": "Instance",
    "own": []
  },
  "CloudExecutionService": {
    "inherits": "Instance",
    "own": []
  },
  "CloudLocalizationTable": {
    "inherits": "LocalizationTable",
    "own": []
  },
  "Clouds": {
    "inherits": "Instance",
    "own": [
      "Color",
      "Cover",
      "Density",
      "Enabled"
    ]
  },
  "ClusterPacketCache": {
    "inherits": "Instance",
    "own": []
  },
  "Collaborator": {
    "inherits": "Instance",
    "own": []
  },
  "CollaboratorsService": {
    "inherits": "Instance",
    "own": []
  },
  "CollectionService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "TagAdded",
      "TagRemoved"
    ]
  },
  "Color3Value": {
    "inherits": "ValueBase",
    "own": [
      "Value"
    ],
    "events": [
      "Changed"
    ]
  },
  "ColorCorrectionEffect": {
    "inherits": "PostEffect",
    "own": [
      "Brightness",
      "Contrast",
      "Saturation",
      "TintColor"
    ]
  },
  "ColorGradingEffect": {
    "inherits": "PostEffect",
    "own": [
      "TonemapperPreset"
    ]
  },
  "CommerceService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "PromptCommerceProductPurchaseFinished"
    ]
  },
  "CompositeValueCurve": {
    "inherits": "Instance",
    "own": [
      "CurveType"
    ]
  },
  "CompressorSoundEffect": {
    "inherits": "SoundEffect",
    "own": [
      "Attack",
      "GainMakeup",
      "Ratio",
      "Release",
      "SideChain",
      "Threshold"
    ]
  },
  "ConeHandleAdornment": {
    "inherits": "HandleAdornment",
    "own": [
      "Height",
      "Hollow",
      "Radius",
      "Shading"
    ]
  },
  "ConfigService": {
    "inherits": "Instance",
    "own": []
  },
  "ConfigSnapshot": {
    "inherits": "Object",
    "own": [],
    "events": [
      "UpdateAvailable"
    ]
  },
  "Configuration": {
    "inherits": "Instance",
    "own": []
  },
  "ConfigureServerService": {
    "inherits": "Instance",
    "own": []
  },
  "ConnectivityService": {
    "inherits": "Instance",
    "own": []
  },
  "Constraint": {
    "inherits": "Instance",
    "own": [
      "Attachment0",
      "Attachment1",
      "Color",
      "Enabled",
      "Visible"
    ]
  },
  "ContentProvider": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "AssetFetchFailed"
    ]
  },
  "ContextActionService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "LocalToolEquipped",
      "LocalToolUnequipped"
    ]
  },
  "Controller": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "ButtonChanged"
    ]
  },
  "ControllerBase": {
    "inherits": "Instance",
    "own": [
      "BalanceRigidityEnabled",
      "MoveSpeedFactor"
    ]
  },
  "ControllerManager": {
    "inherits": "Instance",
    "own": [
      "ActiveController",
      "BaseMoveSpeed",
      "BaseTurnSpeed",
      "ClimbSensor",
      "FacingDirection",
      "GroundSensor",
      "MovingDirection",
      "RootPart",
      "UpDirection"
    ]
  },
  "ControllerPartSensor": {
    "inherits": "ControllerSensor",
    "own": [
      "HitFrame",
      "HitNormal",
      "LadderSearchHeight",
      "LadderSearchOffset",
      "SearchDistance",
      "SensedMaterial",
      "SensedPart",
      "SensorMode"
    ]
  },
  "ControllerSensor": {
    "inherits": "SensorBase",
    "own": []
  },
  "ControllerService": {
    "inherits": "Instance",
    "own": []
  },
  "ControlState": {
    "inherits": "Instance",
    "own": [
      "Owner"
    ],
    "events": [
      "OnStateChanged"
    ]
  },
  "CookiesService": {
    "inherits": "Instance",
    "own": []
  },
  "CoreGui": {
    "inherits": "BasePlayerGui",
    "own": []
  },
  "CoreGuiConfiguration": {
    "inherits": "Instance",
    "own": [
      "CapturesViewConfiguration",
      "PlayerListConfiguration",
      "SelfViewConfiguration"
    ]
  },
  "CorePackages": {
    "inherits": "Instance",
    "own": []
  },
  "CoreScript": {
    "inherits": "BaseScript",
    "own": []
  },
  "CoreScriptDebuggingManagerHelper": {
    "inherits": "Instance",
    "own": []
  },
  "CoreScriptSyncService": {
    "inherits": "Instance",
    "own": []
  },
  "CornerWedgePart": {
    "inherits": "BasePart",
    "own": []
  },
  "CreationDBService": {
    "inherits": "Instance",
    "own": []
  },
  "CreatorStoreService": {
    "inherits": "Instance",
    "own": []
  },
  "CrossDMScriptChangeListener": {
    "inherits": "Instance",
    "own": []
  },
  "CSGDictionaryService": {
    "inherits": "FlyweightService",
    "own": []
  },
  "CurveAnimation": {
    "inherits": "AnimationClip",
    "own": []
  },
  "CustomEvent": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "ReceiverConnected",
      "ReceiverDisconnected"
    ]
  },
  "CustomEventReceiver": {
    "inherits": "Instance",
    "own": [
      "Source"
    ],
    "events": [
      "EventConnected",
      "EventDisconnected",
      "SourceValueChanged"
    ]
  },
  "CustomLog": {
    "inherits": "Instance",
    "own": []
  },
  "CustomSoundEffect": {
    "inherits": "SoundEffect",
    "own": []
  },
  "CylinderHandleAdornment": {
    "inherits": "HandleAdornment",
    "own": [
      "Angle",
      "Height",
      "InnerRadius",
      "Radius",
      "Shading"
    ]
  },
  "CylinderMesh": {
    "inherits": "BevelMesh",
    "own": []
  },
  "CylindricalConstraint": {
    "inherits": "SlidingBallConstraint",
    "own": [
      "AngularActuatorType",
      "AngularLimitsEnabled",
      "AngularResponsiveness",
      "AngularRestitution",
      "AngularSpeed",
      "AngularVelocity",
      "InclinationAngle",
      "LowerAngle",
      "MotorMaxAngularAcceleration",
      "MotorMaxTorque",
      "RotationAxisVisible",
      "ServoMaxTorque",
      "TargetAngle",
      "UpperAngle"
    ]
  },
  "DataModel": {
    "inherits": "ServiceProvider",
    "own": [],
    "events": [
      "GraphicsQualityChangeRequest",
      "Loaded",
      "ServerLifecycleChanged",
      "ServerLowMemoryWarning",
      "ServerRestartScheduled"
    ]
  },
  "DataModelDiff": {
    "inherits": "Object",
    "own": []
  },
  "DataModelMesh": {
    "inherits": "Instance",
    "own": [
      "Offset",
      "Scale",
      "VertexColor"
    ]
  },
  "DataModelSession": {
    "inherits": "Instance",
    "own": []
  },
  "DataStore": {
    "inherits": "GlobalDataStore",
    "own": []
  },
  "DataStoreGetOptions": {
    "inherits": "Instance",
    "own": [
      "UseCache"
    ]
  },
  "DataStoreIncrementOptions": {
    "inherits": "Instance",
    "own": []
  },
  "DataStoreInfo": {
    "inherits": "Instance",
    "own": []
  },
  "DataStoreKey": {
    "inherits": "Instance",
    "own": []
  },
  "DataStoreKeyInfo": {
    "inherits": "Instance",
    "own": []
  },
  "DataStoreKeyPages": {
    "inherits": "Pages",
    "own": []
  },
  "DataStoreListingPages": {
    "inherits": "Pages",
    "own": []
  },
  "DataStoreObjectVersionInfo": {
    "inherits": "Instance",
    "own": []
  },
  "DataStoreOptions": {
    "inherits": "Instance",
    "own": [
      "AllScopes"
    ]
  },
  "DataStorePages": {
    "inherits": "Pages",
    "own": []
  },
  "DataStoreService": {
    "inherits": "Instance",
    "own": []
  },
  "DataStoreSetOptions": {
    "inherits": "Instance",
    "own": []
  },
  "DataStoreVersionPages": {
    "inherits": "Pages",
    "own": []
  },
  "Debris": {
    "inherits": "Instance",
    "own": []
  },
  "DebuggablePluginWatcher": {
    "inherits": "Instance",
    "own": []
  },
  "DebuggerBreakpoint": {
    "inherits": "Instance",
    "own": [
      "Condition",
      "ContinueExecution",
      "IsEnabled",
      "LogExpression",
      "isContextDependentBreakpoint"
    ]
  },
  "DebuggerConnection": {
    "inherits": "Instance",
    "own": []
  },
  "DebuggerConnectionManager": {
    "inherits": "Instance",
    "own": []
  },
  "DebuggerLuaResponse": {
    "inherits": "Instance",
    "own": []
  },
  "DebuggerManager": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "DebuggerAdded",
      "DebuggerRemoved"
    ]
  },
  "DebuggerUIService": {
    "inherits": "Instance",
    "own": []
  },
  "DebuggerVariable": {
    "inherits": "Instance",
    "own": []
  },
  "DebuggerWatch": {
    "inherits": "Instance",
    "own": [
      "Expression"
    ]
  },
  "DebugSettings": {
    "inherits": "Instance",
    "own": []
  },
  "Decal": {
    "inherits": "FaceInstance",
    "own": [
      "AutoLocalize",
      "Color3",
      "ColorMap",
      "ColorMapContent",
      "EmissiveStrength",
      "EmissiveTint",
      "Rotation",
      "Texture",
      "TextureContent",
      "Transparency",
      "UVOffset",
      "UVScale",
      "ZIndex"
    ]
  },
  "DeferredAssetManagerService": {
    "inherits": "Instance",
    "own": []
  },
  "DepthOfFieldEffect": {
    "inherits": "PostEffect",
    "own": [
      "FarIntensity",
      "FocusDistance",
      "InFocusRadius",
      "NearIntensity"
    ]
  },
  "DesignFoundationsService": {
    "inherits": "Instance",
    "own": []
  },
  "DeviceDisplayService": {
    "inherits": "Instance",
    "own": []
  },
  "DeviceIdService": {
    "inherits": "Instance",
    "own": []
  },
  "Dialog": {
    "inherits": "Instance",
    "own": [
      "BehaviorType",
      "ConversationDistance",
      "GoodbyeChoiceActive",
      "GoodbyeDialog",
      "InUse",
      "InitialPrompt",
      "Purpose",
      "Tone",
      "TriggerDistance",
      "TriggerOffset"
    ],
    "events": [
      "DialogChoiceSelected"
    ]
  },
  "DialogChoice": {
    "inherits": "Instance",
    "own": [
      "GoodbyeChoiceActive",
      "GoodbyeDialog",
      "ResponseDialog",
      "UserDialog"
    ]
  },
  "DigitsRigDescription": {
    "inherits": "Instance",
    "own": [
      "Index1",
      "Index1TposeAdjustment",
      "Index2",
      "Index2TposeAdjustment",
      "Index3",
      "Index3TposeAdjustment",
      "IndexRange",
      "IndexSize",
      "Middle1",
      "Middle1TposeAdjustment",
      "Middle2",
      "Middle2TposeAdjustment",
      "Middle3",
      "Middle3TposeAdjustment",
      "MiddleRange",
      "MiddleSize",
      "Pinky1",
      "Pinky1TposeAdjustment",
      "Pinky2",
      "Pinky2TposeAdjustment",
      "Pinky3",
      "Pinky3TposeAdjustment",
      "PinkyRange",
      "PinkySize",
      "Ring1",
      "Ring1TposeAdjustment",
      "Ring2",
      "Ring2TposeAdjustment",
      "Ring3",
      "Ring3TposeAdjustment",
      "RingRange",
      "RingSize",
      "Side",
      "Thumb1",
      "Thumb1TposeAdjustment",
      "Thumb2",
      "Thumb2TposeAdjustment",
      "Thumb3",
      "Thumb3TposeAdjustment",
      "ThumbRange",
      "ThumbSize"
    ]
  },
  "DisplayWakeLock": {
    "inherits": "Instance",
    "own": []
  },
  "DistortionSoundEffect": {
    "inherits": "SoundEffect",
    "own": [
      "Level"
    ]
  },
  "DockWidgetPluginGui": {
    "inherits": "PluginGui",
    "own": []
  },
  "DoubleConstrainedValue": {
    "inherits": "ValueBase",
    "own": [
      "MaxValue",
      "MinValue",
      "Value"
    ],
    "events": [
      "Changed"
    ]
  },
  "DraftsService": {
    "inherits": "Instance",
    "own": []
  },
  "DragDetector": {
    "inherits": "ClickDetector",
    "own": [
      "ActivatedCursorIcon",
      "ActivatedCursorIconContent",
      "ApplyAtCenterOfMass",
      "Axis",
      "DragFrame",
      "DragStyle",
      "Enabled",
      "GamepadModeSwitchKeyCode",
      "KeyboardModeSwitchKeyCode",
      "MaxDragAngle",
      "MaxDragTranslation",
      "MaxForce",
      "MaxTorque",
      "MinDragAngle",
      "MinDragTranslation",
      "Orientation",
      "PermissionPolicy",
      "ReferenceInstance",
      "ResponseStyle",
      "Responsiveness",
      "RunLocally",
      "SecondaryAxis",
      "TrackballRadialPullFactor",
      "TrackballRollFactor",
      "VRSwitchKeyCode",
      "WorldAxis",
      "WorldSecondaryAxis"
    ],
    "events": [
      "DragContinue",
      "DragEnd",
      "DragStart"
    ]
  },
  "Dragger": {
    "inherits": "Instance",
    "own": []
  },
  "DraggerService": {
    "inherits": "Instance",
    "own": [
      "AlignDraggedObjects",
      "AngleSnapEnabled",
      "AngleSnapIncrement",
      "AnimateHover",
      "CollisionsEnabled",
      "DraggerCoordinateSpace",
      "DraggerMovementMode",
      "GeometrySnapColor",
      "HoverAnimateFrequency",
      "HoverThickness",
      "JointsEnabled",
      "LinearSnapEnabled",
      "LinearSnapIncrement",
      "ShowHover",
      "ShowPivotIndicator"
    ]
  },
  "DynamicRotate": {
    "inherits": "JointInstance",
    "own": [
      "BaseAngle"
    ]
  },
  "EchoSoundEffect": {
    "inherits": "SoundEffect",
    "own": [
      "Delay",
      "DryLevel",
      "Feedback",
      "WetLevel"
    ]
  },
  "EditableImage": {
    "inherits": "Object",
    "own": []
  },
  "EditableMesh": {
    "inherits": "Object",
    "own": []
  },
  "EditableService": {
    "inherits": "Instance",
    "own": []
  },
  "EditorSourceService": {
    "inherits": "Instance",
    "own": []
  },
  "EncodingService": {
    "inherits": "Instance",
    "own": []
  },
  "EqualizerSoundEffect": {
    "inherits": "SoundEffect",
    "own": [
      "HighGain",
      "LowGain",
      "MidGain"
    ]
  },
  "EulerRotationCurve": {
    "inherits": "Instance",
    "own": [
      "RotationOrder"
    ]
  },
  "EventIngestService": {
    "inherits": "Instance",
    "own": []
  },
  "ExampleV2Service": {
    "inherits": "Instance",
    "own": []
  },
  "ExecutedRemoteCommand": {
    "inherits": "Object",
    "own": [],
    "events": [
      "ReceivedUpdate"
    ]
  },
  "ExperienceAuthService": {
    "inherits": "Instance",
    "own": []
  },
  "ExperienceInviteOptions": {
    "inherits": "Instance",
    "own": [
      "InviteMessageId",
      "InviteUser",
      "LaunchData",
      "PromptMessage"
    ]
  },
  "ExperienceNotificationService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "OptInPromptClosed"
    ]
  },
  "ExperienceService": {
    "inherits": "Instance",
    "own": []
  },
  "ExperienceStateCaptureService": {
    "inherits": "Instance",
    "own": []
  },
  "ExperienceStateRecordingService": {
    "inherits": "Instance",
    "own": []
  },
  "ExplorerFilter": {
    "inherits": "Instance",
    "own": []
  },
  "ExplorerFilterAutocompleter": {
    "inherits": "Instance",
    "own": []
  },
  "ExplorerServiceVisibilityService": {
    "inherits": "Instance",
    "own": []
  },
  "Explosion": {
    "inherits": "Instance",
    "own": [
      "BlastPressure",
      "BlastRadius",
      "DestroyJointRadiusPercent",
      "ExplosionType",
      "Position",
      "TimeScale",
      "Visible"
    ],
    "events": [
      "Hit"
    ]
  },
  "ExternalIdentityService": {
    "inherits": "Instance",
    "own": []
  },
  "FaceAnimatorService": {
    "inherits": "Instance",
    "own": []
  },
  "FaceControls": {
    "inherits": "Instance",
    "own": [
      "ChinRaiser",
      "ChinRaiserUpperLip",
      "Corrugator",
      "EyesLookDown",
      "EyesLookLeft",
      "EyesLookRight",
      "EyesLookUp",
      "FlatPucker",
      "Funneler",
      "JawDrop",
      "JawLeft",
      "JawRight",
      "LeftBrowLowerer",
      "LeftCheekPuff",
      "LeftCheekRaiser",
      "LeftDimpler",
      "LeftEyeClosed",
      "LeftEyeUpperLidRaiser",
      "LeftInnerBrowRaiser",
      "LeftLipCornerDown",
      "LeftLipCornerPuller",
      "LeftLipStretcher",
      "LeftLowerLipDepressor",
      "LeftNoseWrinkler",
      "LeftOuterBrowRaiser",
      "LeftUpperLipRaiser",
      "LipPresser",
      "LipsTogether",
      "LowerLipSuck",
      "MouthLeft",
      "MouthRight",
      "Pucker",
      "RightBrowLowerer",
      "RightCheekPuff",
      "RightCheekRaiser",
      "RightDimpler",
      "RightEyeClosed",
      "RightEyeUpperLidRaiser",
      "RightInnerBrowRaiser",
      "RightLipCornerDown",
      "RightLipCornerPuller",
      "RightLipStretcher",
      "RightLowerLipDepressor",
      "RightNoseWrinkler",
      "RightOuterBrowRaiser",
      "RightUpperLipRaiser",
      "TongueDown",
      "TongueOut",
      "TongueUp",
      "UpperLipSuck"
    ]
  },
  "FaceInstance": {
    "inherits": "Instance",
    "own": [
      "Face"
    ]
  },
  "FacialAgeEstimationService": {
    "inherits": "Instance",
    "own": []
  },
  "FacialAnimationRecordingService": {
    "inherits": "Instance",
    "own": []
  },
  "FacialAnimationStreamingServiceStats": {
    "inherits": "Instance",
    "own": []
  },
  "FacialAnimationStreamingServiceV2": {
    "inherits": "Instance",
    "own": []
  },
  "FacialAnimationStreamingSubsessionStats": {
    "inherits": "Instance",
    "own": []
  },
  "FacsImportData": {
    "inherits": "BaseImportData",
    "own": []
  },
  "Feature": {
    "inherits": "Instance",
    "own": [
      "FaceId",
      "InOut",
      "LeftRight",
      "TopBottom"
    ]
  },
  "FeatureRestrictionManager": {
    "inherits": "Instance",
    "own": []
  },
  "File": {
    "inherits": "Instance",
    "own": []
  },
  "FileManagerService": {
    "inherits": "Instance",
    "own": []
  },
  "FileMesh": {
    "inherits": "DataModelMesh",
    "own": [
      "MeshContent",
      "MeshId",
      "TextureContent",
      "TextureId"
    ]
  },
  "FileSyncReplicationService": {
    "inherits": "Instance",
    "own": []
  },
  "Fire": {
    "inherits": "Instance",
    "own": [
      "Color",
      "Enabled",
      "Heat",
      "SecondaryColor",
      "Size",
      "TimeScale"
    ]
  },
  "Flag": {
    "inherits": "Tool",
    "own": [
      "TeamColor"
    ]
  },
  "FlagStand": {
    "inherits": "Part",
    "own": [
      "TeamColor"
    ],
    "events": [
      "FlagCaptured"
    ]
  },
  "FlagStandService": {
    "inherits": "Instance",
    "own": []
  },
  "FlangeSoundEffect": {
    "inherits": "SoundEffect",
    "own": [
      "Depth",
      "Mix",
      "Rate"
    ]
  },
  "FloatCurve": {
    "inherits": "Instance",
    "own": []
  },
  "FloorWire": {
    "inherits": "GuiBase3d",
    "own": [
      "CycleOffset",
      "From",
      "StudsBetweenTextures",
      "Texture",
      "TextureSize",
      "To",
      "Velocity",
      "WireRadius"
    ]
  },
  "FluidForceSensor": {
    "inherits": "SensorBase",
    "own": []
  },
  "FlyweightService": {
    "inherits": "Instance",
    "own": []
  },
  "Folder": {
    "inherits": "Instance",
    "own": [
      "IconTint"
    ]
  },
  "ForceField": {
    "inherits": "Instance",
    "own": [
      "Visible"
    ]
  },
  "FormFactorPart": {
    "inherits": "BasePart",
    "own": []
  },
  "Frame": {
    "inherits": "GuiObject",
    "own": [
      "Style"
    ]
  },
  "FriendPages": {
    "inherits": "Pages",
    "own": []
  },
  "FriendService": {
    "inherits": "Instance",
    "own": []
  },
  "FunctionalTest": {
    "inherits": "Instance",
    "own": [
      "Description"
    ]
  },
  "GamepadService": {
    "inherits": "Instance",
    "own": []
  },
  "GamePassService": {
    "inherits": "Instance",
    "own": []
  },
  "GameSettings": {
    "inherits": "Instance",
    "own": []
  },
  "GeneratedFolder": {
    "inherits": "Folder",
    "own": []
  },
  "GenerationService": {
    "inherits": "Instance",
    "own": []
  },
  "GenericChallengeService": {
    "inherits": "Instance",
    "own": []
  },
  "GenericSettings": {
    "inherits": "ServiceProvider",
    "own": []
  },
  "Geometry": {
    "inherits": "Instance",
    "own": []
  },
  "GeometryService": {
    "inherits": "Instance",
    "own": []
  },
  "GetTextBoundsParams": {
    "inherits": "Instance",
    "own": [
      "Font",
      "RichText",
      "Size",
      "Text",
      "Width"
    ]
  },
  "GlobalDataStore": {
    "inherits": "Instance",
    "own": []
  },
  "GlobalSettings": {
    "inherits": "GenericSettings",
    "own": []
  },
  "Glue": {
    "inherits": "JointInstance",
    "own": [
      "F0",
      "F1",
      "F2",
      "F3"
    ]
  },
  "GongService": {
    "inherits": "Instance",
    "own": []
  },
  "GroundController": {
    "inherits": "ControllerBase",
    "own": [
      "AccelerationLean",
      "AccelerationTime",
      "BalanceMaxTorque",
      "BalanceSpeed",
      "DecelerationTime",
      "Friction",
      "FrictionWeight",
      "GroundOffset",
      "StandForce",
      "StandSpeed",
      "TurnSpeedFactor"
    ]
  },
  "GroupImportData": {
    "inherits": "BaseImportData",
    "own": [
      "Anchored",
      "ImportAsModelAsset",
      "InsertInWorkspace"
    ]
  },
  "GroupService": {
    "inherits": "Instance",
    "own": []
  },
  "GuiBase": {
    "inherits": "Instance",
    "own": []
  },
  "GuiBase2d": {
    "inherits": "GuiBase",
    "own": [
      "AutoLocalize",
      "RootLocalizationTable",
      "SelectionBehaviorDown",
      "SelectionBehaviorLeft",
      "SelectionBehaviorRight",
      "SelectionBehaviorUp",
      "SelectionGroup"
    ],
    "events": [
      "SelectionChanged"
    ]
  },
  "GuiBase3d": {
    "inherits": "GuiBase",
    "own": [
      "Color3",
      "Transparency",
      "Visible"
    ]
  },
  "GuiButton": {
    "inherits": "GuiObject",
    "own": [
      "AutoButtonColor",
      "HoverHapticEffect",
      "Modal",
      "PressHapticEffect",
      "Selected",
      "Style"
    ],
    "events": [
      "Activated",
      "MouseButton1Click",
      "MouseButton1Down",
      "MouseButton1Up",
      "MouseButton2Click",
      "MouseButton2Down",
      "MouseButton2Up",
      "SecondaryActivated"
    ]
  },
  "GuidRegistryService": {
    "inherits": "Instance",
    "own": []
  },
  "GuiLabel": {
    "inherits": "GuiObject",
    "own": []
  },
  "GuiMain": {
    "inherits": "ScreenGui",
    "own": []
  },
  "GuiObject": {
    "inherits": "GuiBase2d",
    "own": [
      "Active",
      "AnchorPoint",
      "AutomaticSize",
      "BackgroundColor3",
      "BackgroundTransparency",
      "BorderColor3",
      "BorderMode",
      "BorderSizePixel",
      "ClipsDescendants",
      "InputSink",
      "Interactable",
      "LayoutOrder",
      "NextSelectionDown",
      "NextSelectionLeft",
      "NextSelectionRight",
      "NextSelectionUp",
      "Position",
      "Rotation",
      "Selectable",
      "SelectionImageObject",
      "SelectionOrder",
      "Size",
      "SizeConstraint",
      "Visible",
      "ZIndex"
    ],
    "events": [
      "InputBegan",
      "InputChanged",
      "InputEnded",
      "MouseEnter",
      "MouseLeave",
      "MouseMoved",
      "MouseWheelBackward",
      "MouseWheelForward",
      "SelectionGained",
      "SelectionLost",
      "TouchLongPress",
      "TouchPan",
      "TouchPinch",
      "TouchRotate",
      "TouchSwipe",
      "TouchTap"
    ]
  },
  "GuiService": {
    "inherits": "Instance",
    "own": [
      "AutoSelectGuiEnabled",
      "GuiNavigationEnabled",
      "SelectedObject",
      "TouchControlsEnabled"
    ],
    "events": [
      "MenuClosed",
      "MenuOpened"
    ]
  },
  "HandleAdornment": {
    "inherits": "PVAdornment",
    "own": [
      "AdornCullingMode",
      "AlwaysOnTop",
      "CFrame",
      "SizeRelativeOffset",
      "ZIndex"
    ],
    "events": [
      "MouseButton1Down",
      "MouseButton1Up",
      "MouseEnter",
      "MouseLeave"
    ]
  },
  "Handles": {
    "inherits": "HandlesBase",
    "own": [
      "Faces",
      "Style"
    ],
    "events": [
      "MouseButton1Down",
      "MouseButton1Up",
      "MouseDrag",
      "MouseEnter",
      "MouseLeave"
    ]
  },
  "HandlesBase": {
    "inherits": "PartAdornment",
    "own": []
  },
  "HapticEffect": {
    "inherits": "Instance",
    "own": [
      "Looped",
      "Position",
      "Radius",
      "Type"
    ],
    "events": [
      "Ended"
    ]
  },
  "HapticService": {
    "inherits": "Instance",
    "own": []
  },
  "HarmonyService": {
    "inherits": "Instance",
    "own": []
  },
  "Hat": {
    "inherits": "Accoutrement",
    "own": []
  },
  "HeapProfilerService": {
    "inherits": "Instance",
    "own": []
  },
  "HeatmapQueryService": {
    "inherits": "Instance",
    "own": []
  },
  "HeatmapService": {
    "inherits": "Instance",
    "own": []
  },
  "HeightmapImporterService": {
    "inherits": "Instance",
    "own": []
  },
  "HiddenSurfaceRemovalAsset": {
    "inherits": "Instance",
    "own": []
  },
  "Highlight": {
    "inherits": "Instance",
    "own": [
      "Adornee",
      "DepthMode",
      "Enabled",
      "FillColor",
      "FillTransparency",
      "OutlineColor",
      "OutlineTransparency"
    ]
  },
  "HingeConstraint": {
    "inherits": "Constraint",
    "own": [
      "ActuatorType",
      "AngularResponsiveness",
      "AngularSpeed",
      "AngularVelocity",
      "LimitsEnabled",
      "LowerAngle",
      "MotorMaxAcceleration",
      "MotorMaxTorque",
      "Radius",
      "Restitution",
      "ServoMaxTorque",
      "TargetAngle",
      "UpperAngle"
    ]
  },
  "Hint": {
    "inherits": "Message",
    "own": []
  },
  "Hole": {
    "inherits": "Feature",
    "own": []
  },
  "Hopper": {
    "inherits": "Instance",
    "own": []
  },
  "HopperBin": {
    "inherits": "BackpackItem",
    "own": [
      "Active",
      "BinType"
    ],
    "events": [
      "Deselected",
      "Selected"
    ]
  },
  "HSRDataContentProvider": {
    "inherits": "CacheableContentProvider",
    "own": []
  },
  "HttpRbxApiService": {
    "inherits": "Instance",
    "own": []
  },
  "HttpRequest": {
    "inherits": "Instance",
    "own": []
  },
  "HttpService": {
    "inherits": "Instance",
    "own": []
  },
  "Humanoid": {
    "inherits": "Instance",
    "own": [
      "AutoJumpEnabled",
      "AutoRotate",
      "AutomaticScalingEnabled",
      "BreakJointsOnDeath",
      "CameraOffset",
      "DisplayDistanceType",
      "DisplayName",
      "EvaluateStateMachine",
      "Health",
      "HealthDisplayDistance",
      "HealthDisplayType",
      "HipHeight",
      "Jump",
      "JumpHeight",
      "JumpPower",
      "MaxHealth",
      "MaxSlopeAngle",
      "NameDisplayDistance",
      "NameOcclusion",
      "PlatformStand",
      "RequiresNeck",
      "RigType",
      "Sit",
      "TargetPoint",
      "UseJumpPower",
      "WalkSpeed",
      "WalkToPart",
      "WalkToPoint"
    ],
    "events": [
      "ApplyDescriptionFinished",
      "Climbing",
      "Died",
      "FallingDown",
      "FreeFalling",
      "GettingUp",
      "HealthChanged",
      "Jumping",
      "MoveToFinished",
      "PlatformStanding",
      "Ragdoll",
      "Running",
      "Seated",
      "StateChanged",
      "StateEnabledChanged",
      "Strafing",
      "Swimming",
      "Touched"
    ]
  },
  "HumanoidController": {
    "inherits": "Controller",
    "own": []
  },
  "HumanoidDescription": {
    "inherits": "Instance",
    "own": [
      "BackAccessory",
      "BodyTypeScale",
      "ClimbAnimation",
      "DepthScale",
      "Face",
      "FaceAccessory",
      "FallAnimation",
      "FrontAccessory",
      "GraphicTShirt",
      "HairAccessory",
      "HatAccessory",
      "Head",
      "HeadColor",
      "HeadScale",
      "HeightScale",
      "IdleAnimation",
      "JumpAnimation",
      "LeftArm",
      "LeftArmColor",
      "LeftLeg",
      "LeftLegColor",
      "MoodAnimation",
      "NeckAccessory",
      "Pants",
      "ProportionScale",
      "RightArm",
      "RightArmColor",
      "RightLeg",
      "RightLegColor",
      "RunAnimation",
      "Shirt",
      "ShouldersAccessory",
      "StaticFacialAnimation",
      "SwimAnimation",
      "Torso",
      "TorsoColor",
      "UseAvatarSettings",
      "WaistAccessory",
      "WalkAnimation",
      "WidthScale"
    ],
    "events": [
      "EmotesChanged",
      "EquippedEmotesChanged"
    ]
  },
  "HumanoidRigDescription": {
    "inherits": "Instance",
    "own": [
      "Chest",
      "ChestRangeMax",
      "ChestRangeMin",
      "ChestSize",
      "ChestTposeAdjustment",
      "HeadBase",
      "HeadBaseRangeMax",
      "HeadBaseRangeMin",
      "HeadBaseSize",
      "HeadBaseTposeAdjustment",
      "LeftAnkle",
      "LeftAnkleRangeMax",
      "LeftAnkleRangeMin",
      "LeftAnkleSize",
      "LeftAnkleTposeAdjustment",
      "LeftClavicle",
      "LeftClavicleRangeMax",
      "LeftClavicleRangeMin",
      "LeftClavicleSize",
      "LeftClavicleTposeAdjustment",
      "LeftElbow",
      "LeftElbowRangeMax",
      "LeftElbowRangeMin",
      "LeftElbowSize",
      "LeftElbowTposeAdjustment",
      "LeftHip",
      "LeftHipRangeMax",
      "LeftHipRangeMin",
      "LeftHipSize",
      "LeftHipTposeAdjustment",
      "LeftKnee",
      "LeftKneeRangeMax",
      "LeftKneeRangeMin",
      "LeftKneeSize",
      "LeftKneeTposeAdjustment",
      "LeftShoulder",
      "LeftShoulderRangeMax",
      "LeftShoulderRangeMin",
      "LeftShoulderSize",
      "LeftShoulderTposeAdjustment",
      "LeftToeBase",
      "LeftToeBaseRangeMax",
      "LeftToeBaseRangeMin",
      "LeftToeBaseSize",
      "LeftToeBaseTposeAdjustment",
      "LeftWrist",
      "LeftWristRangeMax",
      "LeftWristRangeMin",
      "LeftWristSize",
      "LeftWristTposeAdjustment",
      "Neck",
      "NeckRangeMax",
      "NeckRangeMin",
      "NeckSize",
      "NeckTposeAdjustment",
      "RightAnkle",
      "RightAnkleRangeMax",
      "RightAnkleRangeMin",
      "RightAnkleSize",
      "RightAnkleTposeAdjustment",
      "RightClavicle",
      "RightClavicleRangeMax",
      "RightClavicleRangeMin",
      "RightClavicleSize",
      "RightClavicleTposeAdjustment",
      "RightElbow",
      "RightElbowRangeMax",
      "RightElbowRangeMin",
      "RightElbowSize",
      "RightElbowTposeAdjustment",
      "RightHip",
      "RightHipRangeMax",
      "RightHipRangeMin",
      "RightHipSize",
      "RightHipTposeAdjustment",
      "RightKnee",
      "RightKneeRangeMax",
      "RightKneeRangeMin",
      "RightKneeSize",
      "RightKneeTposeAdjustment",
      "RightShoulder",
      "RightShoulderRangeMax",
      "RightShoulderRangeMin",
      "RightShoulderSize",
      "RightShoulderTposeAdjustment",
      "RightToeBase",
      "RightToeBaseRangeMax",
      "RightToeBaseRangeMin",
      "RightToeBaseSize",
      "RightToeBaseTposeAdjustment",
      "RightWrist",
      "RightWristRangeMax",
      "RightWristRangeMin",
      "RightWristSize",
      "RightWristTposeAdjustment",
      "Root",
      "RootRangeMax",
      "RootRangeMin",
      "RootSize",
      "RootTposeAdjustment",
      "Spine",
      "SpineRangeMax",
      "SpineRangeMin",
      "SpineSize",
      "SpineTposeAdjustment",
      "Waist",
      "WaistRangeMax",
      "WaistRangeMin",
      "WaistSize",
      "WaistTposeAdjustment"
    ]
  },
  "IKControl": {
    "inherits": "Instance",
    "own": [
      "ChainRoot",
      "Enabled",
      "EndEffector",
      "EndEffectorOffset",
      "Offset",
      "Pole",
      "Priority",
      "SmoothTime",
      "Target",
      "Type",
      "Weight"
    ]
  },
  "ILegacyStudioBridge": {
    "inherits": "Instance",
    "own": []
  },
  "ImageButton": {
    "inherits": "GuiButton",
    "own": [
      "HoverImage",
      "HoverImageContent",
      "Image",
      "ImageColor3",
      "ImageContent",
      "ImageRectOffset",
      "ImageRectSize",
      "ImageTransparency",
      "PressedImage",
      "PressedImageContent",
      "ResampleMode",
      "ScaleType",
      "SliceCenter",
      "SliceScale",
      "TileSize"
    ]
  },
  "ImageHandleAdornment": {
    "inherits": "HandleAdornment",
    "own": [
      "Image",
      "ImageContent",
      "Size"
    ]
  },
  "ImageLabel": {
    "inherits": "GuiLabel",
    "own": [
      "Image",
      "ImageColor3",
      "ImageContent",
      "ImageRectOffset",
      "ImageRectSize",
      "ImageTransparency",
      "ResampleMode",
      "ScaleType",
      "SliceCenter",
      "SliceScale",
      "TileSize"
    ]
  },
  "ImageScreenCaptureService": {
    "inherits": "Instance",
    "own": []
  },
  "ImportSession": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "UploadComplete",
      "UploadProgress"
    ]
  },
  "IncrementalPatchBuilder": {
    "inherits": "Instance",
    "own": [
      "AddPathsToBundle",
      "BuildDebouncePeriod",
      "HighCompression",
      "SerializePatch",
      "UseFileLevelCompressionInsteadOfChunk",
      "ZstdCompression"
    ]
  },
  "InputAction": {
    "inherits": "Instance",
    "own": [
      "Enabled",
      "Type"
    ],
    "events": [
      "Pressed",
      "Released",
      "StateChanged"
    ]
  },
  "InputActionLabel": {
    "inherits": "GuiObject",
    "own": [
      "FontFace",
      "ImageColor3",
      "ImageTransparency",
      "InputAction",
      "TextColor3",
      "TextSize",
      "TextTransparency",
      "TextWrapped",
      "TextXAlignment",
      "TextYAlignment"
    ]
  },
  "InputBinding": {
    "inherits": "Instance",
    "own": [
      "Backward",
      "ClampMagnitudeToOne",
      "DisplayImage",
      "DisplayName",
      "Down",
      "Forward",
      "KeyCode",
      "Left",
      "PointerIndex",
      "PressedThreshold",
      "PrimaryModifier",
      "ReleasedThreshold",
      "ResponseCurve",
      "Right",
      "Scale",
      "SecondaryModifier",
      "Type",
      "UIButton",
      "UIModifier",
      "Up",
      "Vector2Scale",
      "Vector3Scale"
    ]
  },
  "InputContext": {
    "inherits": "Instance",
    "own": [
      "Enabled",
      "Priority",
      "Sink"
    ]
  },
  "InputObject": {
    "inherits": "Instance",
    "own": [
      "Delta",
      "KeyCode",
      "Position",
      "UserInputState",
      "UserInputType"
    ]
  },
  "InsertService": {
    "inherits": "Instance",
    "own": []
  },
  "Instance": {
    "inherits": "Object",
    "own": [
      "Archivable",
      "Capabilities",
      "Name",
      "Sandboxed"
    ],
    "events": [
      "AncestryChanged",
      "AttributeChanged",
      "ChildAdded",
      "ChildRemoved",
      "DescendantAdded",
      "DescendantRemoving",
      "Destroying",
      "StyledPropertiesChanged"
    ]
  },
  "InstanceAdornment": {
    "inherits": "GuiBase3d",
    "own": [
      "Adornee"
    ]
  },
  "InstanceExtensionsService": {
    "inherits": "Instance",
    "own": []
  },
  "InstanceFileSyncService": {
    "inherits": "Instance",
    "own": []
  },
  "IntConstrainedValue": {
    "inherits": "ValueBase",
    "own": [
      "MaxValue",
      "MinValue",
      "Value"
    ],
    "events": [
      "Changed"
    ]
  },
  "IntentService": {
    "inherits": "Instance",
    "own": []
  },
  "InternalMessagingService": {
    "inherits": "Instance",
    "own": []
  },
  "InternalMessagingServiceVerifier": {
    "inherits": "Instance",
    "own": []
  },
  "InternalSyncItem": {
    "inherits": "Instance",
    "own": []
  },
  "InternalSyncService": {
    "inherits": "Instance",
    "own": []
  },
  "IntersectOperation": {
    "inherits": "PartOperation",
    "own": []
  },
  "IntValue": {
    "inherits": "ValueBase",
    "own": [
      "Value"
    ],
    "events": [
      "Changed"
    ]
  },
  "InventoryPages": {
    "inherits": "Pages",
    "own": []
  },
  "IXPService": {
    "inherits": "Instance",
    "own": []
  },
  "JointImportData": {
    "inherits": "BaseImportData",
    "own": []
  },
  "JointInstance": {
    "inherits": "Instance",
    "own": [
      "C0",
      "C1",
      "Enabled",
      "Part0",
      "Part1"
    ]
  },
  "JointsService": {
    "inherits": "Instance",
    "own": []
  },
  "KeyboardService": {
    "inherits": "Instance",
    "own": []
  },
  "Keyframe": {
    "inherits": "Instance",
    "own": [
      "Time"
    ]
  },
  "KeyframeMarker": {
    "inherits": "Instance",
    "own": [
      "Value"
    ]
  },
  "KeyframeSequence": {
    "inherits": "AnimationClip",
    "own": []
  },
  "KeyframeSequenceProvider": {
    "inherits": "Instance",
    "own": []
  },
  "LanguageService": {
    "inherits": "Instance",
    "own": []
  },
  "LayerCollector": {
    "inherits": "GuiBase2d",
    "own": [
      "Enabled",
      "ResetOnSpawn",
      "ZIndexBehavior"
    ]
  },
  "LegacyStudioBridge": {
    "inherits": "ILegacyStudioBridge",
    "own": []
  },
  "Light": {
    "inherits": "Instance",
    "own": [
      "Brightness",
      "Color",
      "Enabled",
      "Shadows"
    ]
  },
  "Lighting": {
    "inherits": "Instance",
    "own": [
      "Ambient",
      "Brightness",
      "ClockTime",
      "ColorShift_Bottom",
      "ColorShift_Top",
      "EnvironmentDiffuseScale",
      "EnvironmentSpecularScale",
      "ExposureCompensation",
      "FogColor",
      "FogEnd",
      "FogStart",
      "GeographicLatitude",
      "GlobalShadows",
      "OutdoorAmbient",
      "ShadowSoftness",
      "TimeOfDay"
    ],
    "events": [
      "LightingChanged"
    ]
  },
  "LinearVelocity": {
    "inherits": "Constraint",
    "own": [
      "ForceLimitMode",
      "ForceLimitsEnabled",
      "LineDirection",
      "LineVelocity",
      "MaxAxesForce",
      "MaxForce",
      "MaxPlanarAxesForce",
      "PlaneVelocity",
      "PrimaryTangentAxis",
      "ReactionForceEnabled",
      "RelativeTo",
      "SecondaryTangentAxis",
      "VectorVelocity",
      "VelocityConstraintMode"
    ]
  },
  "LineForce": {
    "inherits": "Constraint",
    "own": [
      "ApplyAtCenterOfMass",
      "InverseSquareLaw",
      "Magnitude",
      "MaxForce",
      "ReactionForceEnabled"
    ]
  },
  "LineHandleAdornment": {
    "inherits": "HandleAdornment",
    "own": [
      "Length",
      "Thickness"
    ]
  },
  "LinkingService": {
    "inherits": "Instance",
    "own": []
  },
  "LiveScriptingService": {
    "inherits": "Instance",
    "own": []
  },
  "LiveSyncService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "SyncStatusChanged"
    ]
  },
  "LocalDebuggerConnection": {
    "inherits": "DebuggerConnection",
    "own": []
  },
  "LocalizationService": {
    "inherits": "Instance",
    "own": []
  },
  "LocalizationTable": {
    "inherits": "Instance",
    "own": [
      "SourceLocaleId"
    ]
  },
  "LocalScript": {
    "inherits": "Script",
    "own": []
  },
  "LocalStorageService": {
    "inherits": "Instance",
    "own": []
  },
  "LodDataEntity": {
    "inherits": "Instance",
    "own": []
  },
  "LodDataService": {
    "inherits": "Instance",
    "own": []
  },
  "Logger": {
    "inherits": "Object",
    "own": [],
    "events": [
      "MessageOut"
    ]
  },
  "LoginService": {
    "inherits": "Instance",
    "own": []
  },
  "LogReporterService": {
    "inherits": "Instance",
    "own": []
  },
  "LogService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "MessageOut"
    ]
  },
  "LuaSettings": {
    "inherits": "Instance",
    "own": []
  },
  "LuaSourceContainer": {
    "inherits": "Instance",
    "own": []
  },
  "LuauExpression": {
    "inherits": "Object",
    "own": []
  },
  "LuauExpressionService": {
    "inherits": "Instance",
    "own": []
  },
  "LuauScriptAnalyzerService": {
    "inherits": "Instance",
    "own": []
  },
  "LuaWebService": {
    "inherits": "Instance",
    "own": []
  },
  "MakeupDescription": {
    "inherits": "Instance",
    "own": [
      "AssetId",
      "Instance",
      "MakeupType",
      "Order"
    ]
  },
  "ManualGlue": {
    "inherits": "ManualSurfaceJointInstance",
    "own": []
  },
  "ManualSurfaceJointInstance": {
    "inherits": "JointInstance",
    "own": []
  },
  "ManualWeld": {
    "inherits": "ManualSurfaceJointInstance",
    "own": []
  },
  "MarkerCurve": {
    "inherits": "Instance",
    "own": []
  },
  "MarketplaceService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "PromptBulkPurchaseFinished",
      "PromptBundlePurchaseFinished",
      "PromptGamePassPurchaseFinished",
      "PromptPremiumPurchaseFinished",
      "PromptProductPurchaseFinished",
      "PromptPurchaseFinished",
      "PromptRobloxSubscriptionPurchaseFinished",
      "PromptSubscriptionPurchaseFinished"
    ]
  },
  "MatchmakingService": {
    "inherits": "Instance",
    "own": []
  },
  "MaterialGenerationService": {
    "inherits": "Instance",
    "own": []
  },
  "MaterialImportData": {
    "inherits": "BaseImportData",
    "own": [
      "DiffuseFilePath",
      "DiffuseVersionedAssetId",
      "EmissiveFilePath",
      "EmissiveVersionedAssetId",
      "MetalnessFilePath",
      "MetalnessVersionedAssetId",
      "NormalFilePath",
      "NormalVersionedAssetId",
      "RoughnessFilePath",
      "RoughnessVersionedAssetId"
    ]
  },
  "MaterialService": {
    "inherits": "Instance",
    "own": []
  },
  "MaterialVariant": {
    "inherits": "Instance",
    "own": [
      "AlphaMode",
      "CustomPhysicalProperties",
      "EmissiveStrength",
      "EmissiveTint",
      "MaterialPattern",
      "StudsPerTile"
    ]
  },
  "MemoryStoreDistributedCounter": {
    "inherits": "Instance",
    "own": []
  },
  "MemoryStoreHashMap": {
    "inherits": "Instance",
    "own": []
  },
  "MemoryStoreHashMapPages": {
    "inherits": "Pages",
    "own": []
  },
  "MemoryStoreQueue": {
    "inherits": "Instance",
    "own": []
  },
  "MemoryStoreService": {
    "inherits": "Instance",
    "own": []
  },
  "MemoryStoreSortedMap": {
    "inherits": "Instance",
    "own": []
  },
  "MemStorageConnection": {
    "inherits": "Instance",
    "own": []
  },
  "MemStorageService": {
    "inherits": "Instance",
    "own": []
  },
  "MeshContentProvider": {
    "inherits": "CacheableContentProvider",
    "own": []
  },
  "MeshImportData": {
    "inherits": "BaseImportData",
    "own": [
      "Anchored",
      "CageMeshIntersectedPreview",
      "CageNonManifoldPreview",
      "CageOverlappingVerticesPreview",
      "CageUVMisMatchedPreview",
      "DoubleSided",
      "IgnoreVertexColors",
      "IrrelevantCageModifiedPreview",
      "MeshHoleDetectedPreview",
      "OuterCageFarExtendedFromMeshPreview",
      "UseImportedPivot",
      "VersionedAssetId"
    ]
  },
  "MeshPart": {
    "inherits": "TriangleMeshPart",
    "own": [
      "DoubleSided",
      "TextureContent",
      "TextureID"
    ]
  },
  "Message": {
    "inherits": "Instance",
    "own": [
      "Text"
    ]
  },
  "MessageBusConnection": {
    "inherits": "Instance",
    "own": []
  },
  "MessageBusService": {
    "inherits": "Instance",
    "own": []
  },
  "MessagingService": {
    "inherits": "Instance",
    "own": []
  },
  "MetaBreakpoint": {
    "inherits": "Instance",
    "own": []
  },
  "MetaBreakpointContext": {
    "inherits": "Instance",
    "own": []
  },
  "MetaBreakpointManager": {
    "inherits": "Instance",
    "own": []
  },
  "MicroProfilerService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "DataChanged"
    ]
  },
  "MLModelDeliveryService": {
    "inherits": "Instance",
    "own": []
  },
  "MLService": {
    "inherits": "Instance",
    "own": []
  },
  "MLSession": {
    "inherits": "Object",
    "own": []
  },
  "Model": {
    "inherits": "PVInstance",
    "own": [
      "ModelStreamingMode",
      "PrimaryPart",
      "WorldPivot"
    ]
  },
  "ModerationService": {
    "inherits": "Instance",
    "own": []
  },
  "ModuleScript": {
    "inherits": "LuaSourceContainer",
    "own": [
      "Source"
    ]
  },
  "MomentsService": {
    "inherits": "Instance",
    "own": []
  },
  "Motor": {
    "inherits": "JointInstance",
    "own": [
      "CurrentAngle",
      "DesiredAngle",
      "MaxVelocity"
    ]
  },
  "Motor6D": {
    "inherits": "Motor",
    "own": []
  },
  "MotorFeature": {
    "inherits": "Feature",
    "own": []
  },
  "Mouse": {
    "inherits": "Instance",
    "own": [
      "Icon",
      "IconContent",
      "TargetFilter"
    ],
    "events": [
      "Button1Down",
      "Button1Up",
      "Button2Down",
      "Button2Up",
      "Idle",
      "Move",
      "WheelBackward",
      "WheelForward"
    ]
  },
  "MouseService": {
    "inherits": "Instance",
    "own": []
  },
  "MultipleDocumentInterfaceInstance": {
    "inherits": "Instance",
    "own": []
  },
  "NegateOperation": {
    "inherits": "PartOperation",
    "own": []
  },
  "NetworkClient": {
    "inherits": "NetworkPeer",
    "own": [],
    "events": [
      "ConnectionAccepted",
      "ConnectionFailed"
    ]
  },
  "NetworkMarker": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "Received"
    ]
  },
  "NetworkPeer": {
    "inherits": "Instance",
    "own": []
  },
  "NetworkReplicator": {
    "inherits": "Instance",
    "own": []
  },
  "NetworkServer": {
    "inherits": "NetworkPeer",
    "own": []
  },
  "NetworkSettings": {
    "inherits": "Instance",
    "own": [
      "IncomingReplicationLag",
      "PrintJoinSizeBreakdown",
      "PrintPhysicsErrors",
      "PrintStreamInstanceQuota",
      "RandomizeJoinInstanceOrder",
      "RenderStreamedRegions",
      "ShowActiveAnimationAsset"
    ]
  },
  "NoCollisionConstraint": {
    "inherits": "Instance",
    "own": [
      "Enabled",
      "Part0",
      "Part1"
    ]
  },
  "Noise": {
    "inherits": "Instance",
    "own": []
  },
  "NonReplicatedCSGDictionaryService": {
    "inherits": "FlyweightService",
    "own": []
  },
  "NotificationService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "Roblox17sConnectionChanged",
      "Roblox17sEventReceived"
    ]
  },
  "NumberPose": {
    "inherits": "PoseBase",
    "own": [
      "Value"
    ]
  },
  "NumberValue": {
    "inherits": "ValueBase",
    "own": [
      "Value"
    ],
    "events": [
      "Changed"
    ]
  },
  "Object": {
    "inherits": "<<<ROOT>>>",
    "own": [],
    "events": [
      "Changed"
    ]
  },
  "ObjectValue": {
    "inherits": "ValueBase",
    "own": [
      "Value"
    ],
    "events": [
      "Changed"
    ]
  },
  "OmniRecommendationsService": {
    "inherits": "Instance",
    "own": []
  },
  "OpenCloudApiV1": {
    "inherits": "Instance",
    "own": []
  },
  "OpenCloudService": {
    "inherits": "Instance",
    "own": []
  },
  "OperationGraph": {
    "inherits": "Instance",
    "own": []
  },
  "OrderedDataStore": {
    "inherits": "GlobalDataStore",
    "own": []
  },
  "OutfitPages": {
    "inherits": "Pages",
    "own": []
  },
  "OutputLink": {
    "inherits": "Object",
    "own": []
  },
  "PackageLink": {
    "inherits": "Instance",
    "own": []
  },
  "Packages": {
    "inherits": "Instance",
    "own": []
  },
  "PackageService": {
    "inherits": "Instance",
    "own": []
  },
  "PackageUIService": {
    "inherits": "Instance",
    "own": []
  },
  "Pages": {
    "inherits": "Instance",
    "own": []
  },
  "Pants": {
    "inherits": "Clothing",
    "own": [
      "PantsTemplate",
      "PantsTemplateContent"
    ]
  },
  "ParabolaAdornment": {
    "inherits": "PVAdornment",
    "own": []
  },
  "Part": {
    "inherits": "FormFactorPart",
    "own": [
      "Shape"
    ]
  },
  "PartAdornment": {
    "inherits": "GuiBase3d",
    "own": [
      "Adornee"
    ]
  },
  "ParticleEmitter": {
    "inherits": "Instance",
    "own": [
      "Acceleration",
      "Brightness",
      "Color",
      "Drag",
      "EmissionDirection",
      "Enabled",
      "FlipbookBlendFrames",
      "FlipbookFramerate",
      "FlipbookIncompatible",
      "FlipbookLayout",
      "FlipbookMode",
      "FlipbookSizeX",
      "FlipbookSizeY",
      "FlipbookStartRandom",
      "Lifetime",
      "LightEmission",
      "LightInfluence",
      "LockedToPart",
      "Orientation",
      "Rate",
      "RotSpeed",
      "Rotation",
      "Shape",
      "ShapeInOut",
      "ShapePartial",
      "ShapeStyle",
      "Size",
      "Speed",
      "SpreadAngle",
      "Squash",
      "Texture",
      "TextureContent",
      "TimeScale",
      "Transparency",
      "VelocityInheritance",
      "WindAffectsDrag",
      "ZOffset"
    ]
  },
  "PartOperation": {
    "inherits": "TriangleMeshPart",
    "own": [
      "UsePartColor"
    ]
  },
  "PartOperationAsset": {
    "inherits": "Instance",
    "own": []
  },
  "PartyEmulatorService": {
    "inherits": "Instance",
    "own": []
  },
  "PatchBundlerFileWatch": {
    "inherits": "Instance",
    "own": []
  },
  "PatchMapping": {
    "inherits": "Instance",
    "own": [
      "FlattenTree",
      "PatchId",
      "TargetPath"
    ]
  },
  "Path": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "Blocked",
      "Unblocked"
    ]
  },
  "Path2D": {
    "inherits": "GuiBase",
    "own": [
      "Closed",
      "Color3",
      "Thickness",
      "Visible",
      "ZIndex"
    ],
    "events": [
      "ControlPointChanged"
    ]
  },
  "Path3D": {
    "inherits": "Instance",
    "own": []
  },
  "PathfindingLink": {
    "inherits": "Instance",
    "own": [
      "Attachment0",
      "Attachment1",
      "IsBidirectional",
      "Label"
    ]
  },
  "PathfindingModifier": {
    "inherits": "Instance",
    "own": [
      "Label",
      "PassThrough"
    ]
  },
  "PathfindingService": {
    "inherits": "Instance",
    "own": []
  },
  "PausedState": {
    "inherits": "Instance",
    "own": []
  },
  "PausedStateBreakpoint": {
    "inherits": "PausedState",
    "own": []
  },
  "PausedStateException": {
    "inherits": "PausedState",
    "own": []
  },
  "PerformanceControlService": {
    "inherits": "Instance",
    "own": []
  },
  "PermissionsService": {
    "inherits": "Instance",
    "own": []
  },
  "PhysicsService": {
    "inherits": "Instance",
    "own": []
  },
  "PhysicsSettings": {
    "inherits": "Instance",
    "own": []
  },
  "PinShortcutService": {
    "inherits": "Instance",
    "own": []
  },
  "PitchShiftSoundEffect": {
    "inherits": "SoundEffect",
    "own": [
      "Octave"
    ]
  },
  "PlaceAssetIdsService": {
    "inherits": "Instance",
    "own": []
  },
  "PlacesService": {
    "inherits": "Instance",
    "own": []
  },
  "PlaceStatsService": {
    "inherits": "Instance",
    "own": []
  },
  "Plane": {
    "inherits": "PlaneConstraint",
    "own": []
  },
  "PlaneConstraint": {
    "inherits": "Constraint",
    "own": []
  },
  "Platform": {
    "inherits": "Part",
    "own": []
  },
  "PlatformCloudStorageService": {
    "inherits": "Instance",
    "own": []
  },
  "PlatformFriendsService": {
    "inherits": "Instance",
    "own": []
  },
  "PlatformLibraries": {
    "inherits": "Instance",
    "own": []
  },
  "Player": {
    "inherits": "Instance",
    "own": [
      "AutoJumpEnabled",
      "CameraMaxZoomDistance",
      "CameraMinZoomDistance",
      "CameraMode",
      "CanLoadCharacterAppearance",
      "Character",
      "CharacterAppearanceId",
      "DevCameraOcclusionMode",
      "DevComputerCameraMode",
      "DevComputerMovementMode",
      "DevEnableMouseLock",
      "DevTouchCameraMode",
      "DevTouchMovementMode",
      "DisplayName",
      "FrustumStreaming",
      "HasVerifiedBadge",
      "HealthDisplayDistance",
      "NameDisplayDistance",
      "Neutral",
      "ReplicationFocus",
      "RespawnLocation",
      "Team",
      "TeamColor",
      "UserId"
    ],
    "events": [
      "CharacterAdded",
      "CharacterAppearanceLoaded",
      "CharacterRemoving",
      "Chatted",
      "Idled",
      "OnTeleport"
    ]
  },
  "PlayerData": {
    "inherits": "Instance",
    "own": []
  },
  "PlayerDataRecord": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "Changed",
      "Flushed",
      "Loaded"
    ]
  },
  "PlayerDataRecordConfig": {
    "inherits": "Instance",
    "own": []
  },
  "PlayerDataService": {
    "inherits": "Instance",
    "own": [
      "LoadFailureBehavior"
    ]
  },
  "PlayerEmulatorService": {
    "inherits": "Instance",
    "own": []
  },
  "PlayerGui": {
    "inherits": "BasePlayerGui",
    "own": [
      "ScreenOrientation",
      "SelectionImageObject"
    ]
  },
  "PlayerHydrationService": {
    "inherits": "Instance",
    "own": []
  },
  "PlayerListConfiguration": {
    "inherits": "BaseCoreGuiConfiguration",
    "own": [
      "Open"
    ]
  },
  "PlayerMouse": {
    "inherits": "Mouse",
    "own": []
  },
  "Players": {
    "inherits": "Instance",
    "own": [
      "CharacterAutoLoads",
      "RespawnTime"
    ],
    "events": [
      "PlayerAdded",
      "PlayerMembershipChanged",
      "PlayerRemoving",
      "UserSubscriptionStatusChanged"
    ]
  },
  "PlayerScripts": {
    "inherits": "Instance",
    "own": []
  },
  "PlayerViewService": {
    "inherits": "Instance",
    "own": []
  },
  "Plugin": {
    "inherits": "Instance",
    "own": []
  },
  "PluginAction": {
    "inherits": "Instance",
    "own": []
  },
  "PluginCapabilities": {
    "inherits": "Instance",
    "own": []
  },
  "PluginConnection": {
    "inherits": "Object",
    "own": []
  },
  "PluginConnectionService": {
    "inherits": "Instance",
    "own": []
  },
  "PluginDebugService": {
    "inherits": "Instance",
    "own": []
  },
  "PluginDragEvent": {
    "inherits": "Instance",
    "own": []
  },
  "PluginGui": {
    "inherits": "LayerCollector",
    "own": [
      "Title"
    ]
  },
  "PluginGuiService": {
    "inherits": "Instance",
    "own": []
  },
  "PluginManagementService": {
    "inherits": "Instance",
    "own": []
  },
  "PluginManager": {
    "inherits": "Instance",
    "own": []
  },
  "PluginManagerInterface": {
    "inherits": "Instance",
    "own": []
  },
  "PluginMenu": {
    "inherits": "Instance",
    "own": [
      "Icon",
      "Title"
    ]
  },
  "PluginMouse": {
    "inherits": "Mouse",
    "own": []
  },
  "PluginPolicyService": {
    "inherits": "Instance",
    "own": []
  },
  "PluginToolbar": {
    "inherits": "Instance",
    "own": []
  },
  "PluginToolbarButton": {
    "inherits": "Instance",
    "own": [
      "ClickableWhenViewportHidden",
      "Enabled",
      "Icon"
    ]
  },
  "PointLight": {
    "inherits": "Light",
    "own": [
      "Range"
    ]
  },
  "PointsService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "PointsAwarded"
    ]
  },
  "PolicyService": {
    "inherits": "Instance",
    "own": []
  },
  "PopLatencyService": {
    "inherits": "Instance",
    "own": []
  },
  "Pose": {
    "inherits": "PoseBase",
    "own": [
      "CFrame"
    ]
  },
  "PoseBase": {
    "inherits": "Instance",
    "own": [
      "EasingDirection",
      "EasingStyle",
      "Weight"
    ]
  },
  "PostEffect": {
    "inherits": "Instance",
    "own": [
      "Enabled"
    ]
  },
  "Preloaded": {
    "inherits": "Instance",
    "own": []
  },
  "PrismaticConstraint": {
    "inherits": "SlidingBallConstraint",
    "own": []
  },
  "ProceduralBehaviorSchedulerService": {
    "inherits": "Instance",
    "own": []
  },
  "ProceduralModel": {
    "inherits": "Model",
    "own": [
      "Generator",
      "Size"
    ]
  },
  "ProcessInstancePhysicsService": {
    "inherits": "Instance",
    "own": []
  },
  "ProximityPrompt": {
    "inherits": "Instance",
    "own": [
      "ActionText",
      "AutoLocalize",
      "ClickablePrompt",
      "Enabled",
      "Exclusivity",
      "GamepadKeyCode",
      "HoldDuration",
      "KeyboardKeyCode",
      "MaxActivationDistance",
      "MaxIndicatorDistance",
      "ObjectText",
      "RequiresLineOfSight",
      "RootLocalizationTable",
      "Style",
      "UIOffset"
    ],
    "events": [
      "IndicatorHidden",
      "IndicatorShown",
      "PromptButtonHoldBegan",
      "PromptButtonHoldEnded",
      "PromptHidden",
      "PromptShown",
      "TriggerEnded",
      "Triggered"
    ]
  },
  "ProximityPromptService": {
    "inherits": "Instance",
    "own": [
      "Enabled",
      "MaxIndicatorsVisible",
      "MaxPromptsVisible"
    ],
    "events": [
      "IndicatorHidden",
      "IndicatorShown",
      "PromptButtonHoldBegan",
      "PromptButtonHoldEnded",
      "PromptHidden",
      "PromptShown",
      "PromptTriggerEnded",
      "PromptTriggered"
    ]
  },
  "PublishService": {
    "inherits": "Instance",
    "own": []
  },
  "PVAdornment": {
    "inherits": "GuiBase3d",
    "own": [
      "Adornee"
    ]
  },
  "PVInstance": {
    "inherits": "Instance",
    "own": []
  },
  "PyramidHandleAdornment": {
    "inherits": "HandleAdornment",
    "own": [
      "Height",
      "Shading",
      "Sides",
      "Size"
    ]
  },
  "QueueService": {
    "inherits": "Instance",
    "own": []
  },
  "QWidgetPluginGui": {
    "inherits": "PluginGui",
    "own": []
  },
  "RayValue": {
    "inherits": "ValueBase",
    "own": [
      "Value"
    ],
    "events": [
      "Changed"
    ]
  },
  "RbxAnalyticsService": {
    "inherits": "Instance",
    "own": []
  },
  "RealtimeMedia": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "AudioInputRequested",
      "OnMessage",
      "WiringChanged"
    ]
  },
  "RecommendationPages": {
    "inherits": "Pages",
    "own": []
  },
  "RecommendationService": {
    "inherits": "Instance",
    "own": []
  },
  "ReflectionMetadata": {
    "inherits": "Instance",
    "own": []
  },
  "ReflectionMetadataCallbacks": {
    "inherits": "Instance",
    "own": []
  },
  "ReflectionMetadataClass": {
    "inherits": "ReflectionMetadataItem",
    "own": [
      "ExplorerImageIndex",
      "ExplorerOrder",
      "Insertable",
      "PreferredParent"
    ]
  },
  "ReflectionMetadataClasses": {
    "inherits": "Instance",
    "own": []
  },
  "ReflectionMetadataEnum": {
    "inherits": "ReflectionMetadataItem",
    "own": []
  },
  "ReflectionMetadataEnumItem": {
    "inherits": "ReflectionMetadataItem",
    "own": []
  },
  "ReflectionMetadataEnums": {
    "inherits": "Instance",
    "own": []
  },
  "ReflectionMetadataEvents": {
    "inherits": "Instance",
    "own": []
  },
  "ReflectionMetadataFunctions": {
    "inherits": "Instance",
    "own": []
  },
  "ReflectionMetadataItem": {
    "inherits": "Instance",
    "own": [
      "Browsable",
      "ClassCategory",
      "ClientOnly",
      "Constraint",
      "Deprecated",
      "EditingDisabled",
      "EditorType",
      "FFlag",
      "IsBackend",
      "PropertyOrder",
      "ScriptContext",
      "ServerOnly",
      "SliderScaling",
      "UIMaximum",
      "UIMinimum",
      "UINumTicks"
    ]
  },
  "ReflectionMetadataMember": {
    "inherits": "ReflectionMetadataItem",
    "own": []
  },
  "ReflectionMetadataProperties": {
    "inherits": "Instance",
    "own": []
  },
  "ReflectionMetadataYieldFunctions": {
    "inherits": "Instance",
    "own": []
  },
  "ReflectionService": {
    "inherits": "Instance",
    "own": []
  },
  "RelativeGui": {
    "inherits": "GuiObject",
    "own": []
  },
  "RemoteCommandService": {
    "inherits": "Instance",
    "own": []
  },
  "RemoteCursorService": {
    "inherits": "Instance",
    "own": []
  },
  "RemoteDebuggerServer": {
    "inherits": "Instance",
    "own": []
  },
  "RemoteEvent": {
    "inherits": "BaseRemoteEvent",
    "own": [],
    "events": [
      "OnClientEvent",
      "OnServerEvent"
    ]
  },
  "RemoteFunction": {
    "inherits": "Instance",
    "own": []
  },
  "RenderingTest": {
    "inherits": "Instance",
    "own": [
      "CFrame",
      "ComparisonDiffThreshold",
      "ComparisonMethod",
      "ComparisonPsnrThreshold",
      "Description",
      "FieldOfView",
      "PerfTest",
      "QualityAuto",
      "QualityLevel",
      "RenderingTestFrameCount",
      "ShouldSkip",
      "Ticket",
      "Timeout"
    ],
    "events": [
      "TestFramesCountdownAboutToStart"
    ]
  },
  "RenderSettings": {
    "inherits": "Instance",
    "own": []
  },
  "ReplicatedFirst": {
    "inherits": "Instance",
    "own": []
  },
  "ReplicatedStorage": {
    "inherits": "Instance",
    "own": []
  },
  "RequestOrchestratorService": {
    "inherits": "Instance",
    "own": []
  },
  "ReverbSoundEffect": {
    "inherits": "SoundEffect",
    "own": [
      "DecayTime",
      "Density",
      "Diffusion",
      "DryLevel",
      "WetLevel"
    ]
  },
  "RibbonNotificationService": {
    "inherits": "Instance",
    "own": []
  },
  "RigidConstraint": {
    "inherits": "Constraint",
    "own": []
  },
  "RobloxPluginGuiService": {
    "inherits": "Instance",
    "own": []
  },
  "RobloxReplicatedStorage": {
    "inherits": "Instance",
    "own": []
  },
  "RobloxSerializableInstance": {
    "inherits": "Instance",
    "own": []
  },
  "RobloxServerStorage": {
    "inherits": "Instance",
    "own": []
  },
  "RocketPropulsion": {
    "inherits": "BodyMover",
    "own": [
      "CartoonFactor",
      "MaxSpeed",
      "MaxThrust",
      "MaxTorque",
      "Target",
      "TargetOffset",
      "TargetRadius",
      "ThrustD",
      "ThrustP",
      "TurnD",
      "TurnP"
    ],
    "events": [
      "ReachedTarget"
    ]
  },
  "RodConstraint": {
    "inherits": "Constraint",
    "own": [
      "Length",
      "LimitAngle0",
      "LimitAngle1",
      "LimitsEnabled",
      "Thickness"
    ]
  },
  "RolloutValidation": {
    "inherits": "Instance",
    "own": []
  },
  "RolloutValidationService": {
    "inherits": "Instance",
    "own": []
  },
  "RomarkRbxAnalyticsService": {
    "inherits": "Instance",
    "own": []
  },
  "RomarkService": {
    "inherits": "Instance",
    "own": []
  },
  "RootImportData": {
    "inherits": "BaseImportData",
    "own": [
      "AddModelToInventory",
      "Anchored",
      "AnimationIdForRestPose",
      "ExistingPackageId",
      "ImportAsModelAsset",
      "ImportAsPackage",
      "InsertInWorkspace",
      "InsertWithScenePosition",
      "InvertNegativeFaces",
      "KeepZeroInfluenceBones",
      "MergeMeshes",
      "PhysicalConstraintType",
      "PreferredUploadId",
      "RestPose",
      "RigScale",
      "RigType",
      "RigVisualization",
      "ScaleFactor",
      "ScaleUnit",
      "UseSceneOriginAsPivot",
      "UsesCages",
      "VersionedAssetId",
      "WorldForward",
      "WorldUp"
    ]
  },
  "RopeConstraint": {
    "inherits": "Constraint",
    "own": [
      "Length",
      "Restitution",
      "Thickness",
      "WinchEnabled",
      "WinchForce",
      "WinchResponsiveness",
      "WinchSpeed",
      "WinchTarget"
    ]
  },
  "Rotate": {
    "inherits": "JointInstance",
    "own": []
  },
  "RotateP": {
    "inherits": "DynamicRotate",
    "own": []
  },
  "RotateV": {
    "inherits": "DynamicRotate",
    "own": []
  },
  "RotationCurve": {
    "inherits": "Instance",
    "own": []
  },
  "RTAnimationTracker": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "TrackerError",
      "TrackerPrompt"
    ]
  },
  "RtMessagingService": {
    "inherits": "Instance",
    "own": []
  },
  "RunningAverageItemDouble": {
    "inherits": "StatsItem",
    "own": []
  },
  "RunningAverageItemInt": {
    "inherits": "StatsItem",
    "own": []
  },
  "RunningAverageTimeIntervalItem": {
    "inherits": "StatsItem",
    "own": []
  },
  "RunService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "Heartbeat",
      "Misprediction",
      "PostSimulation",
      "PreAnimation",
      "PreRender",
      "PreSimulation",
      "RenderStepped",
      "Rollback",
      "Stepped"
    ]
  },
  "RuntimeContentService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "RuntimeContentFail",
      "RuntimeContentQuery",
      "RuntimeContentShare"
    ]
  },
  "RuntimeScriptService": {
    "inherits": "Instance",
    "own": []
  },
  "SafetyService": {
    "inherits": "Instance",
    "own": []
  },
  "SceneAnalysisService": {
    "inherits": "Instance",
    "own": []
  },
  "ScreenGui": {
    "inherits": "LayerCollector",
    "own": [
      "ClipToDeviceSafeArea",
      "DisplayOrder",
      "IgnoreGuiInset",
      "SafeAreaCompatibility",
      "ScreenInsets"
    ]
  },
  "ScreenshotCapture": {
    "inherits": "Capture",
    "own": []
  },
  "ScreenshotHud": {
    "inherits": "Instance",
    "own": [
      "CameraButtonIcon",
      "CameraButtonIconContent",
      "CameraButtonPosition",
      "CloseButtonPosition",
      "CloseWhenScreenshotTaken",
      "HideCoreGuiForCaptures",
      "HidePlayerGuiForCaptures",
      "Visible"
    ]
  },
  "Script": {
    "inherits": "BaseScript",
    "own": [
      "Source"
    ]
  },
  "ScriptBuilder": {
    "inherits": "Instance",
    "own": []
  },
  "ScriptChangeService": {
    "inherits": "Instance",
    "own": []
  },
  "ScriptCloneWatcher": {
    "inherits": "Instance",
    "own": []
  },
  "ScriptCloneWatcherHelper": {
    "inherits": "Instance",
    "own": []
  },
  "ScriptCommitService": {
    "inherits": "Instance",
    "own": []
  },
  "ScriptContext": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "Error"
    ]
  },
  "ScriptDebugger": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "BreakpointAdded",
      "BreakpointRemoved",
      "EncounteredBreak",
      "Resuming",
      "WatchAdded",
      "WatchRemoved"
    ]
  },
  "ScriptDebuggerService": {
    "inherits": "Instance",
    "own": []
  },
  "ScriptDocument": {
    "inherits": "Instance",
    "own": []
  },
  "ScriptEditorService": {
    "inherits": "Instance",
    "own": []
  },
  "ScriptProfilerService": {
    "inherits": "Instance",
    "own": []
  },
  "ScriptRegistrationService": {
    "inherits": "Instance",
    "own": []
  },
  "ScriptRuntime": {
    "inherits": "Instance",
    "own": []
  },
  "ScriptScannerService": {
    "inherits": "Instance",
    "own": []
  },
  "ScriptService": {
    "inherits": "Instance",
    "own": []
  },
  "ScrollingFrame": {
    "inherits": "GuiObject",
    "own": [
      "AutomaticCanvasSize",
      "BottomImage",
      "BottomImageContent",
      "CanvasPosition",
      "CanvasSize",
      "ElasticBehavior",
      "HorizontalScrollBarInset",
      "MidImage",
      "MidImageContent",
      "ScrollBarImageColor3",
      "ScrollBarImageTransparency",
      "ScrollBarThickness",
      "ScrollingDirection",
      "ScrollingEnabled",
      "TopImage",
      "TopImageContent",
      "VerticalScrollBarInset",
      "VerticalScrollBarPosition"
    ]
  },
  "Seat": {
    "inherits": "Part",
    "own": [
      "Disabled"
    ]
  },
  "Selection": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "SelectionChanged"
    ]
  },
  "SelectionBox": {
    "inherits": "InstanceAdornment",
    "own": [
      "LineThickness",
      "SurfaceColor3",
      "SurfaceTransparency"
    ]
  },
  "SelectionHighlightManager": {
    "inherits": "Instance",
    "own": []
  },
  "SelectionLasso": {
    "inherits": "GuiBase3d",
    "own": [
      "Humanoid"
    ]
  },
  "SelectionPartLasso": {
    "inherits": "SelectionLasso",
    "own": [
      "Part"
    ]
  },
  "SelectionPointLasso": {
    "inherits": "SelectionLasso",
    "own": [
      "Point"
    ]
  },
  "SelectionSphere": {
    "inherits": "PVAdornment",
    "own": [
      "SurfaceColor3",
      "SurfaceTransparency"
    ]
  },
  "SelfViewConfiguration": {
    "inherits": "BaseCoreGuiConfiguration",
    "own": [
      "Open"
    ]
  },
  "SensorBase": {
    "inherits": "Instance",
    "own": [
      "UpdateType"
    ],
    "events": [
      "OnSensorOutputChanged"
    ]
  },
  "SerializationService": {
    "inherits": "Instance",
    "own": []
  },
  "ServerReplicator": {
    "inherits": "NetworkReplicator",
    "own": []
  },
  "ServerScriptService": {
    "inherits": "Instance",
    "own": []
  },
  "ServerStorage": {
    "inherits": "Instance",
    "own": []
  },
  "ServiceProvider": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "Close",
      "ServiceAdded",
      "ServiceRemoving"
    ]
  },
  "ServiceVisibilityService": {
    "inherits": "Instance",
    "own": []
  },
  "SessionCheckService": {
    "inherits": "Instance",
    "own": []
  },
  "SessionService": {
    "inherits": "Instance",
    "own": []
  },
  "SharedTableRegistry": {
    "inherits": "Instance",
    "own": []
  },
  "Shirt": {
    "inherits": "Clothing",
    "own": [
      "ShirtTemplate",
      "ShirtTemplateContent"
    ]
  },
  "ShirtGraphic": {
    "inherits": "CharacterAppearance",
    "own": [
      "Color3",
      "Graphic",
      "TextureContent"
    ]
  },
  "SkateboardController": {
    "inherits": "Controller",
    "own": [],
    "events": [
      "AxisChanged"
    ]
  },
  "SkateboardPlatform": {
    "inherits": "Part",
    "own": [
      "Steer",
      "StickyWheels",
      "Throttle"
    ],
    "events": [
      "Equipped",
      "MoveStateChanged",
      "Unequipped"
    ]
  },
  "Skin": {
    "inherits": "CharacterAppearance",
    "own": [
      "SkinColor"
    ]
  },
  "Sky": {
    "inherits": "Instance",
    "own": [
      "CelestialBodiesShown",
      "MoonAngularSize",
      "MoonTextureContent",
      "MoonTextureId",
      "SkyboxBackContent",
      "SkyboxBk",
      "SkyboxDn",
      "SkyboxDownContent",
      "SkyboxFrontContent",
      "SkyboxFt",
      "SkyboxLeftContent",
      "SkyboxLf",
      "SkyboxOrientation",
      "SkyboxRightContent",
      "SkyboxRt",
      "SkyboxUp",
      "SkyboxUpContent",
      "StarCount",
      "SunAngularSize",
      "SunTextureContent",
      "SunTextureId"
    ]
  },
  "SlidingBallConstraint": {
    "inherits": "Constraint",
    "own": [
      "ActuatorType",
      "LimitsEnabled",
      "LinearResponsiveness",
      "LowerLimit",
      "MotorMaxAcceleration",
      "MotorMaxForce",
      "Restitution",
      "ServoMaxForce",
      "Size",
      "Speed",
      "TargetPosition",
      "UpperLimit",
      "Velocity"
    ]
  },
  "SlimAnimationDataEntity": {
    "inherits": "Instance",
    "own": []
  },
  "SlimAnimationReplicationService": {
    "inherits": "Instance",
    "own": []
  },
  "SlimContentProvider": {
    "inherits": "CacheableContentProvider",
    "own": []
  },
  "SlimDebugSettings": {
    "inherits": "Instance",
    "own": []
  },
  "SlimReplicationService": {
    "inherits": "Instance",
    "own": []
  },
  "SlimService": {
    "inherits": "Instance",
    "own": []
  },
  "Smoke": {
    "inherits": "Instance",
    "own": [
      "Color",
      "Enabled",
      "Opacity",
      "RiseVelocity",
      "Size",
      "TimeScale"
    ]
  },
  "SmoothVoxelsUpgraderService": {
    "inherits": "Instance",
    "own": []
  },
  "Snap": {
    "inherits": "JointInstance",
    "own": []
  },
  "SnippetService": {
    "inherits": "Instance",
    "own": []
  },
  "SocialService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "CallInviteStateChanged",
      "GameInvitePromptClosed",
      "PhoneBookPromptClosed",
      "ShareSheetClosed"
    ]
  },
  "SolidModelContentProvider": {
    "inherits": "CacheableContentProvider",
    "own": []
  },
  "Sound": {
    "inherits": "Instance",
    "own": [
      "AcousticSimulationEnabled",
      "LoopRegion",
      "Looped",
      "PlayOnRemove",
      "PlaybackRegion",
      "PlaybackRegionsEnabled",
      "PlaybackSpeed",
      "Playing",
      "RollOffMaxDistance",
      "RollOffMinDistance",
      "RollOffMode",
      "SoundGroup",
      "SoundId",
      "TimePosition",
      "Volume"
    ],
    "events": [
      "DidLoop",
      "Ended",
      "Loaded",
      "Paused",
      "Played",
      "Resumed",
      "Stopped"
    ]
  },
  "SoundEffect": {
    "inherits": "Instance",
    "own": [
      "Enabled",
      "Priority"
    ]
  },
  "SoundGroup": {
    "inherits": "Instance",
    "own": [
      "Volume"
    ]
  },
  "SoundService": {
    "inherits": "Instance",
    "own": [
      "AcousticSimulationEnabled",
      "AmbientReverb",
      "DiffractionEnabled",
      "DistanceFactor",
      "DopplerScale",
      "ListenerCFrame",
      "ListenerObject",
      "ListenerType",
      "OcclusionEnabled",
      "RespectFilteringEnabled",
      "ReverbEnabled",
      "RolloffScale"
    ]
  },
  "SoundShimService": {
    "inherits": "Instance",
    "own": []
  },
  "Sparkles": {
    "inherits": "Instance",
    "own": [
      "Enabled",
      "SparkleColor",
      "TimeScale"
    ]
  },
  "SpawnerService": {
    "inherits": "Instance",
    "own": []
  },
  "SpawnLocation": {
    "inherits": "Part",
    "own": [
      "AllowTeamChangeOnTouch",
      "Duration",
      "Enabled",
      "Neutral",
      "TeamColor"
    ]
  },
  "SpecialMesh": {
    "inherits": "FileMesh",
    "own": [
      "MeshType"
    ]
  },
  "SphereHandleAdornment": {
    "inherits": "HandleAdornment",
    "own": [
      "Radius",
      "Shading"
    ]
  },
  "SpotLight": {
    "inherits": "Light",
    "own": [
      "Angle",
      "Face",
      "Range"
    ]
  },
  "SpringConstraint": {
    "inherits": "Constraint",
    "own": [
      "Coils",
      "Damping",
      "FreeLength",
      "LimitsEnabled",
      "MaxForce",
      "MaxLength",
      "MinLength",
      "Radius",
      "Stiffness",
      "Thickness"
    ]
  },
  "StackFrame": {
    "inherits": "Instance",
    "own": []
  },
  "StandalonePluginScripts": {
    "inherits": "Instance",
    "own": []
  },
  "StandardPages": {
    "inherits": "Pages",
    "own": []
  },
  "StandardQueue": {
    "inherits": "Instance",
    "own": []
  },
  "StarterCharacterScripts": {
    "inherits": "StarterPlayerScripts",
    "own": []
  },
  "StarterGear": {
    "inherits": "Instance",
    "own": []
  },
  "StarterGui": {
    "inherits": "BasePlayerGui",
    "own": [
      "ScreenOrientation",
      "ShowDevelopmentGui"
    ]
  },
  "StarterPack": {
    "inherits": "Instance",
    "own": []
  },
  "StarterPlayer": {
    "inherits": "Instance",
    "own": [
      "AutoJumpEnabled",
      "CameraMaxZoomDistance",
      "CameraMinZoomDistance",
      "CameraMode",
      "CharacterBreakJointsOnDeath",
      "CharacterJumpHeight",
      "CharacterJumpPower",
      "CharacterMaxSlopeAngle",
      "CharacterUseJumpPower",
      "CharacterWalkSpeed",
      "ClassicDeath",
      "DevCameraOcclusionMode",
      "DevComputerCameraMovementMode",
      "DevComputerMovementMode",
      "DevTouchCameraMovementMode",
      "DevTouchMovementMode",
      "EnableMouseLockOption",
      "HealthDisplayDistance",
      "LoadCharacterAppearance",
      "LuaCharacterController",
      "NameDisplayDistance",
      "UserEmotesEnabled"
    ]
  },
  "StarterPlayerScripts": {
    "inherits": "Instance",
    "own": []
  },
  "StartPageService": {
    "inherits": "Instance",
    "own": []
  },
  "StartupMessageService": {
    "inherits": "Instance",
    "own": []
  },
  "StateMachineDefinition": {
    "inherits": "Instance",
    "own": []
  },
  "StateMachineTransitionDefinition": {
    "inherits": "Instance",
    "own": [
      "From",
      "Priority",
      "To"
    ]
  },
  "Stats": {
    "inherits": "Instance",
    "own": []
  },
  "StatsItem": {
    "inherits": "Instance",
    "own": []
  },
  "Status": {
    "inherits": "Model",
    "own": []
  },
  "StopWatchReporter": {
    "inherits": "Instance",
    "own": []
  },
  "StringValue": {
    "inherits": "ValueBase",
    "own": [
      "Value"
    ],
    "events": [
      "Changed"
    ]
  },
  "Studio": {
    "inherits": "Instance",
    "own": []
  },
  "StudioActionOverride": {
    "inherits": "Object",
    "own": []
  },
  "StudioAssetService": {
    "inherits": "Instance",
    "own": []
  },
  "StudioAttachment": {
    "inherits": "Instance",
    "own": [
      "AutoHideParent",
      "IsArrowVisible",
      "Offset",
      "SourceAnchorPoint",
      "TargetAnchorPoint"
    ]
  },
  "StudioCallout": {
    "inherits": "Instance",
    "own": []
  },
  "StudioCameraService": {
    "inherits": "Instance",
    "own": []
  },
  "StudioCaptureService": {
    "inherits": "Instance",
    "own": []
  },
  "StudioData": {
    "inherits": "Instance",
    "own": []
  },
  "StudioDeviceEmulatorService": {
    "inherits": "Instance",
    "own": []
  },
  "StudioDeviceSimulatorService": {
    "inherits": "Instance",
    "own": []
  },
  "StudioObjectBase": {
    "inherits": "Instance",
    "own": []
  },
  "StudioPublishService": {
    "inherits": "Instance",
    "own": []
  },
  "StudioScreenshotCapture": {
    "inherits": "Instance",
    "own": []
  },
  "StudioScriptDebugEventListener": {
    "inherits": "Instance",
    "own": []
  },
  "StudioSdkService": {
    "inherits": "Instance",
    "own": []
  },
  "StudioService": {
    "inherits": "Instance",
    "own": [
      "UseLocalSpace"
    ]
  },
  "StudioTestService": {
    "inherits": "Instance",
    "own": []
  },
  "StudioTheme": {
    "inherits": "Instance",
    "own": []
  },
  "StudioUserService": {
    "inherits": "Instance",
    "own": []
  },
  "StudioWidget": {
    "inherits": "StudioObjectBase",
    "own": []
  },
  "StudioWidgetsService": {
    "inherits": "Instance",
    "own": []
  },
  "StyleBase": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "StyleRulesChanged"
    ]
  },
  "StyleDerive": {
    "inherits": "Instance",
    "own": [
      "Priority",
      "StyleSheet"
    ]
  },
  "StyleLink": {
    "inherits": "Instance",
    "own": [
      "StyleSheet"
    ]
  },
  "StyleQuery": {
    "inherits": "Instance",
    "own": []
  },
  "StyleRule": {
    "inherits": "StyleBase",
    "own": [
      "Priority",
      "Selector"
    ]
  },
  "StyleSheet": {
    "inherits": "StyleBase",
    "own": []
  },
  "StylingService": {
    "inherits": "Instance",
    "own": []
  },
  "SunRaysEffect": {
    "inherits": "PostEffect",
    "own": [
      "Intensity",
      "Spread"
    ]
  },
  "SurfaceAppearance": {
    "inherits": "Instance",
    "own": [
      "AlphaMode",
      "Color",
      "EmissiveStrength",
      "EmissiveTint",
      "ResampleMode"
    ]
  },
  "SurfaceGui": {
    "inherits": "SurfaceGuiBase",
    "own": [
      "AlwaysOnTop",
      "Brightness",
      "CanvasSize",
      "ClipsDescendants",
      "LightInfluence",
      "MaxDistance",
      "PixelsPerStud",
      "SizingMode",
      "ToolPunchThroughDistance",
      "ZOffset"
    ]
  },
  "SurfaceGuiBase": {
    "inherits": "LayerCollector",
    "own": [
      "Active",
      "Adornee",
      "Face"
    ]
  },
  "SurfaceLight": {
    "inherits": "Light",
    "own": [
      "Angle",
      "Face",
      "Range"
    ]
  },
  "SurfaceSelection": {
    "inherits": "PartAdornment",
    "own": [
      "TargetSurface"
    ]
  },
  "SwimController": {
    "inherits": "ControllerBase",
    "own": [
      "AccelerationTime",
      "PitchMaxTorque",
      "PitchSpeedFactor",
      "RollMaxTorque",
      "RollSpeedFactor"
    ]
  },
  "SyncScriptBuilder": {
    "inherits": "ScriptBuilder",
    "own": [
      "CompileTarget",
      "CoverageInfo",
      "DebugInfo",
      "PackAsSource"
    ]
  },
  "SystemThemeService": {
    "inherits": "Instance",
    "own": []
  },
  "TaskScheduler": {
    "inherits": "Instance",
    "own": [
      "ThreadPoolConfig"
    ]
  },
  "Team": {
    "inherits": "Instance",
    "own": [
      "AutoAssignable",
      "TeamColor"
    ],
    "events": [
      "PlayerAdded",
      "PlayerRemoved"
    ]
  },
  "TeamCreateData": {
    "inherits": "Instance",
    "own": []
  },
  "TeamCreatePublishService": {
    "inherits": "Instance",
    "own": []
  },
  "TeamCreateService": {
    "inherits": "Instance",
    "own": []
  },
  "Teams": {
    "inherits": "Instance",
    "own": []
  },
  "TelemetryService": {
    "inherits": "Instance",
    "own": []
  },
  "TeleportAsyncResult": {
    "inherits": "Instance",
    "own": []
  },
  "TeleportOptions": {
    "inherits": "Instance",
    "own": [
      "ReservedServerAccessCode",
      "ServerInstanceId",
      "ShouldReserveServer"
    ]
  },
  "TeleportService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "LocalPlayerArrivedFromTeleport",
      "TeleportInitFailed"
    ]
  },
  "TemporaryCageMeshProvider": {
    "inherits": "Instance",
    "own": []
  },
  "TemporaryScriptService": {
    "inherits": "Instance",
    "own": []
  },
  "Terrain": {
    "inherits": "BasePart",
    "own": [
      "WaterColor",
      "WaterReflectance",
      "WaterTransparency",
      "WaterWaveSize",
      "WaterWaveSpeed"
    ]
  },
  "TerrainDetail": {
    "inherits": "Instance",
    "own": [
      "EmissiveStrength",
      "EmissiveTint",
      "Face",
      "MaterialPattern",
      "StudsPerTile"
    ]
  },
  "TerrainIterateOperation": {
    "inherits": "Object",
    "own": [],
    "events": [
      "Ready"
    ]
  },
  "TerrainModifyOperation": {
    "inherits": "Object",
    "own": [],
    "events": [
      "Ready"
    ]
  },
  "TerrainReadOperation": {
    "inherits": "Object",
    "own": [],
    "events": [
      "Ready"
    ]
  },
  "TerrainRegion": {
    "inherits": "Instance",
    "own": []
  },
  "TerrainWriteOperation": {
    "inherits": "Object",
    "own": []
  },
  "TestCase": {
    "inherits": "Instance",
    "own": []
  },
  "TestService": {
    "inherits": "Instance",
    "own": [
      "AutoRuns",
      "Description",
      "ExecuteWithStudioRun",
      "IsPhysicsEnvironmentalThrottled",
      "IsSleepAllowed",
      "NumberOfPlayers",
      "SimulateSecondsLag",
      "ThrottlePhysicsToRealtime",
      "Timeout"
    ],
    "events": [
      "ServerCollectConditionalResult",
      "ServerCollectResult"
    ]
  },
  "TextBox": {
    "inherits": "GuiObject",
    "own": [
      "ClearTextOnFocus",
      "CursorPosition",
      "FontFace",
      "LineHeight",
      "MaxVisibleGraphemes",
      "MultiLine",
      "OpenTypeFeatures",
      "PlaceholderColor3",
      "PlaceholderText",
      "RichText",
      "SelectionStart",
      "ShowNativeInput",
      "Text",
      "TextColor3",
      "TextDirection",
      "TextEditable",
      "TextScaled",
      "TextSize",
      "TextStrokeColor3",
      "TextStrokeTransparency",
      "TextTransparency",
      "TextTruncate",
      "TextWrapped",
      "TextXAlignment",
      "TextYAlignment"
    ],
    "events": [
      "FocusLost",
      "Focused",
      "ReturnPressedFromOnScreenKeyboard"
    ]
  },
  "TextBoxService": {
    "inherits": "Instance",
    "own": []
  },
  "TextButton": {
    "inherits": "GuiButton",
    "own": [
      "FontFace",
      "LineHeight",
      "MaxVisibleGraphemes",
      "OpenTypeFeatures",
      "RichText",
      "Text",
      "TextColor3",
      "TextDirection",
      "TextScaled",
      "TextSize",
      "TextStrokeColor3",
      "TextStrokeTransparency",
      "TextTransparency",
      "TextTruncate",
      "TextWrapped",
      "TextXAlignment",
      "TextYAlignment"
    ]
  },
  "TextChannel": {
    "inherits": "Instance",
    "own": [
      "AddPlayersOnJoin"
    ],
    "events": [
      "MessageReceived"
    ]
  },
  "TextChannelWindow": {
    "inherits": "GuiObject",
    "own": [
      "FontFace",
      "Target",
      "UseDefaultFont"
    ]
  },
  "TextChatCommand": {
    "inherits": "Instance",
    "own": [
      "AutocompleteVisible",
      "Enabled",
      "PrimaryAlias",
      "SecondaryAlias"
    ],
    "events": [
      "Triggered"
    ]
  },
  "TextChatConfigurations": {
    "inherits": "Instance",
    "own": []
  },
  "TextChatMessage": {
    "inherits": "Instance",
    "own": [
      "BubbleChatMessageProperties",
      "ChatWindowMessageProperties",
      "MessageId",
      "Metadata",
      "PrefixText",
      "Status",
      "Text",
      "TextChannel",
      "TextSource",
      "Timestamp",
      "Translation"
    ]
  },
  "TextChatMessageProperties": {
    "inherits": "Instance",
    "own": [
      "PrefixText",
      "Text",
      "Translation"
    ]
  },
  "TextChatService": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "BubbleDisplayed",
      "MessageReceived",
      "SendingMessage"
    ]
  },
  "TextFilterResult": {
    "inherits": "Instance",
    "own": []
  },
  "TextFilterTranslatedResult": {
    "inherits": "Instance",
    "own": []
  },
  "TextGenerator": {
    "inherits": "Instance",
    "own": [
      "Seed",
      "SystemPrompt",
      "Temperature",
      "TopP"
    ]
  },
  "TextLabel": {
    "inherits": "GuiLabel",
    "own": [
      "FontFace",
      "LineHeight",
      "MaxVisibleGraphemes",
      "OpenTypeFeatures",
      "RichText",
      "Text",
      "TextColor3",
      "TextDirection",
      "TextScaled",
      "TextSize",
      "TextStrokeColor3",
      "TextStrokeTransparency",
      "TextTransparency",
      "TextTruncate",
      "TextWrapped",
      "TextXAlignment",
      "TextYAlignment"
    ]
  },
  "TextService": {
    "inherits": "Instance",
    "own": []
  },
  "TextSource": {
    "inherits": "Instance",
    "own": [
      "CanSend"
    ]
  },
  "Texture": {
    "inherits": "Decal",
    "own": [
      "OffsetStudsU",
      "OffsetStudsV",
      "StudsPerTileU",
      "StudsPerTileV"
    ]
  },
  "TextureGenerationPartGroup": {
    "inherits": "Instance",
    "own": []
  },
  "TextureGenerationService": {
    "inherits": "Instance",
    "own": []
  },
  "TextureGenerationUnwrappingRequest": {
    "inherits": "Instance",
    "own": []
  },
  "ThirdPartyUserService": {
    "inherits": "Instance",
    "own": []
  },
  "ThreadState": {
    "inherits": "Instance",
    "own": []
  },
  "TimerService": {
    "inherits": "Instance",
    "own": []
  },
  "ToastNotificationService": {
    "inherits": "Instance",
    "own": []
  },
  "Tool": {
    "inherits": "BackpackItem",
    "own": [
      "CanBeDropped",
      "Enabled",
      "Grip",
      "ManualActivationOnly",
      "RequiresHandle",
      "ToolTip"
    ],
    "events": [
      "Activated",
      "Deactivated",
      "Equipped",
      "Unequipped"
    ]
  },
  "Torque": {
    "inherits": "Constraint",
    "own": [
      "RelativeTo",
      "Torque"
    ]
  },
  "TorsionSpringConstraint": {
    "inherits": "Constraint",
    "own": [
      "Coils",
      "Damping",
      "LimitsEnabled",
      "MaxAngle",
      "MaxTorque",
      "Radius",
      "Restitution",
      "Stiffness"
    ]
  },
  "TotalCountTimeIntervalItem": {
    "inherits": "StatsItem",
    "own": []
  },
  "TouchInputService": {
    "inherits": "Instance",
    "own": []
  },
  "TouchTransmitter": {
    "inherits": "Instance",
    "own": []
  },
  "TraceRouteService": {
    "inherits": "Instance",
    "own": []
  },
  "TracerService": {
    "inherits": "Instance",
    "own": []
  },
  "TrackerLodController": {
    "inherits": "Instance",
    "own": [
      "AudioMode",
      "VideoExtrapolationMode",
      "VideoLodMode",
      "VideoMode"
    ]
  },
  "TrackerStreamAnimation": {
    "inherits": "Instance",
    "own": []
  },
  "Trail": {
    "inherits": "Instance",
    "own": [
      "Attachment0",
      "Attachment1",
      "Brightness",
      "Color",
      "Enabled",
      "FaceCamera",
      "Lifetime",
      "LightEmission",
      "LightInfluence",
      "MaxLength",
      "MinLength",
      "Texture",
      "TextureContent",
      "TextureLength",
      "TextureMode",
      "Transparency",
      "WidthScale"
    ]
  },
  "Translator": {
    "inherits": "Instance",
    "own": []
  },
  "TremoloSoundEffect": {
    "inherits": "SoundEffect",
    "own": [
      "Depth",
      "Duty",
      "Frequency"
    ]
  },
  "TriangleMeshPart": {
    "inherits": "BasePart",
    "own": []
  },
  "TrussPart": {
    "inherits": "BasePart",
    "own": [
      "Style"
    ]
  },
  "TutorialService": {
    "inherits": "Instance",
    "own": []
  },
  "Tween": {
    "inherits": "TweenBase",
    "own": []
  },
  "TweenBase": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "Completed"
    ]
  },
  "TweenService": {
    "inherits": "Instance",
    "own": []
  },
  "UGCAvatarService": {
    "inherits": "Instance",
    "own": []
  },
  "UGCValidationService": {
    "inherits": "Instance",
    "own": []
  },
  "UIAspectRatioConstraint": {
    "inherits": "UIConstraint",
    "own": [
      "AspectRatio",
      "AspectType",
      "DominantAxis"
    ]
  },
  "UIBase": {
    "inherits": "Instance",
    "own": []
  },
  "UIComponent": {
    "inherits": "UIBase",
    "own": []
  },
  "UIConstraint": {
    "inherits": "UIComponent",
    "own": []
  },
  "UICorner": {
    "inherits": "UIComponent",
    "own": [
      "BottomLeftRadius",
      "BottomRightRadius",
      "CornerRadius",
      "TopLeftRadius",
      "TopRightRadius"
    ]
  },
  "UIDragDetector": {
    "inherits": "UIComponent",
    "own": [
      "ActivatedCursorIcon",
      "ActivatedCursorIconContent",
      "BoundingBehavior",
      "BoundingUI",
      "CursorIcon",
      "CursorIconContent",
      "DragAxis",
      "DragRelativity",
      "DragRotation",
      "DragSpace",
      "DragStyle",
      "DragUDim2",
      "Enabled",
      "MaxDragAngle",
      "MaxDragTranslation",
      "MinDragAngle",
      "MinDragTranslation",
      "ReferenceUIInstance",
      "ResponseStyle",
      "SelectionModeDragSpeed",
      "SelectionModeRotateSpeed",
      "UIDragSpeedAxisMapping"
    ],
    "events": [
      "DragContinue",
      "DragEnd",
      "DragStart"
    ]
  },
  "UIDragDetectorService": {
    "inherits": "Instance",
    "own": []
  },
  "UIFlexItem": {
    "inherits": "UIComponent",
    "own": [
      "FlexMode",
      "GrowRatio",
      "ItemLineAlignment",
      "ShrinkRatio"
    ]
  },
  "UIGradient": {
    "inherits": "UIComponent",
    "own": [
      "Color",
      "Enabled",
      "Offset",
      "Rotation",
      "Scale",
      "TileMode",
      "Transparency",
      "Type"
    ]
  },
  "UIGridLayout": {
    "inherits": "UIGridStyleLayout",
    "own": [
      "CellPadding",
      "CellSize",
      "FillDirectionMaxCells",
      "StartCorner"
    ]
  },
  "UIGridStyleLayout": {
    "inherits": "UILayout",
    "own": [
      "FillDirection",
      "HorizontalAlignment",
      "SortOrder",
      "VerticalAlignment"
    ]
  },
  "UILayout": {
    "inherits": "UIComponent",
    "own": []
  },
  "UIListLayout": {
    "inherits": "UIGridStyleLayout",
    "own": [
      "HorizontalFlex",
      "ItemLineAlignment",
      "Padding",
      "VerticalFlex",
      "Wraps"
    ]
  },
  "UIPadding": {
    "inherits": "UIComponent",
    "own": [
      "PaddingBottom",
      "PaddingLeft",
      "PaddingRight",
      "PaddingTop"
    ]
  },
  "UIPageLayout": {
    "inherits": "UIGridStyleLayout",
    "own": [
      "Animated",
      "Circular",
      "EasingDirection",
      "EasingStyle",
      "GamepadInputEnabled",
      "Padding",
      "ScrollWheelInputEnabled",
      "TouchInputEnabled",
      "TweenTime"
    ],
    "events": [
      "PageEnter",
      "PageLeave",
      "Stopped"
    ]
  },
  "UIScale": {
    "inherits": "UIComponent",
    "own": [
      "Scale"
    ]
  },
  "UIShadow": {
    "inherits": "UIComponent",
    "own": [
      "BlurRadius",
      "Color",
      "Enabled",
      "Inset",
      "Mode",
      "Offset",
      "ShowBehindParent",
      "Spread",
      "Transparency",
      "ZIndex"
    ]
  },
  "UISizeConstraint": {
    "inherits": "UIConstraint",
    "own": [
      "MaxSize",
      "MinSize"
    ]
  },
  "UIStroke": {
    "inherits": "UIComponent",
    "own": [
      "ApplyStrokeMode",
      "BorderOffset",
      "BorderStrokePosition",
      "Color",
      "Enabled",
      "LineJoinMode",
      "StrokeSizingMode",
      "Thickness",
      "Transparency",
      "ZIndex"
    ]
  },
  "UITableLayout": {
    "inherits": "UIGridStyleLayout",
    "own": [
      "FillEmptySpaceColumns",
      "FillEmptySpaceRows",
      "MajorAxis",
      "Padding"
    ]
  },
  "UITextSizeConstraint": {
    "inherits": "UIConstraint",
    "own": [
      "MaxTextSize",
      "MinTextSize"
    ]
  },
  "UnionOperation": {
    "inherits": "PartOperation",
    "own": []
  },
  "UniqueIdLookupService": {
    "inherits": "Instance",
    "own": []
  },
  "UniversalConstraint": {
    "inherits": "Constraint",
    "own": [
      "LimitsEnabled",
      "MaxAngle",
      "Radius",
      "Restitution"
    ]
  },
  "UnreliableRemoteEvent": {
    "inherits": "BaseRemoteEvent",
    "own": [],
    "events": [
      "OnClientEvent",
      "OnServerEvent"
    ]
  },
  "UnvalidatedAssetService": {
    "inherits": "Instance",
    "own": []
  },
  "UserGameSettings": {
    "inherits": "Instance",
    "own": [
      "ComputerCameraMovementMode",
      "ComputerMovementMode",
      "ControlMode",
      "GamepadCameraSensitivity",
      "MouseSensitivity",
      "RCCProfilerRecordFrameRate",
      "RCCProfilerRecordTimeFrame",
      "RotationType",
      "SavedQualityLevel",
      "TouchCameraMovementMode",
      "TouchMovementMode"
    ],
    "events": [
      "FullscreenChanged",
      "StudioModeChanged"
    ]
  },
  "UserInputService": {
    "inherits": "Instance",
    "own": [
      "MouseBehavior",
      "MouseDeltaSensitivity",
      "MouseIcon",
      "MouseIconContent",
      "MouseIconEnabled"
    ],
    "events": [
      "DeviceAccelerationChanged",
      "DeviceGravityChanged",
      "DeviceRotationChanged",
      "GamepadConnected",
      "GamepadDisconnected",
      "InputBegan",
      "InputChanged",
      "InputEnded",
      "JumpRequest",
      "LastInputTypeChanged",
      "PointerAction",
      "TextBoxFocusReleased",
      "TextBoxFocused",
      "TouchDrag",
      "TouchEnded",
      "TouchLongPress",
      "TouchMoved",
      "TouchPan",
      "TouchPinch",
      "TouchRotate",
      "TouchStarted",
      "TouchSwipe",
      "TouchTap",
      "TouchTapInWorld",
      "WindowFocusReleased",
      "WindowFocused"
    ]
  },
  "UserService": {
    "inherits": "Instance",
    "own": []
  },
  "UserSettings": {
    "inherits": "GenericSettings",
    "own": []
  },
  "UserStorageService": {
    "inherits": "LocalStorageService",
    "own": []
  },
  "ValueBase": {
    "inherits": "Instance",
    "own": []
  },
  "ValueCurve": {
    "inherits": "Instance",
    "own": []
  },
  "Vector3Curve": {
    "inherits": "Instance",
    "own": []
  },
  "Vector3Value": {
    "inherits": "ValueBase",
    "own": [
      "Value"
    ],
    "events": [
      "Changed"
    ]
  },
  "VectorForce": {
    "inherits": "Constraint",
    "own": [
      "ApplyAtCenterOfMass",
      "Force",
      "RelativeTo"
    ]
  },
  "VehicleController": {
    "inherits": "Controller",
    "own": []
  },
  "VehicleSeat": {
    "inherits": "BasePart",
    "own": [
      "Disabled",
      "HeadsUpDisplay",
      "MaxSpeed",
      "Steer",
      "SteerFloat",
      "Throttle",
      "ThrottleFloat",
      "Torque",
      "TurnSpeed"
    ]
  },
  "VelocityMotor": {
    "inherits": "JointInstance",
    "own": [
      "CurrentAngle",
      "DesiredAngle",
      "Hole",
      "MaxVelocity"
    ]
  },
  "VersionControlService": {
    "inherits": "Instance",
    "own": []
  },
  "VideoCapture": {
    "inherits": "Capture",
    "own": []
  },
  "VideoCaptureService": {
    "inherits": "Instance",
    "own": []
  },
  "VideoDeviceInput": {
    "inherits": "Instance",
    "own": [
      "Active",
      "CameraId",
      "CaptureQuality"
    ]
  },
  "VideoDisplay": {
    "inherits": "GuiObject",
    "own": [
      "ResampleMode",
      "ScaleType",
      "TileSize",
      "VideoColor3",
      "VideoRectOffset",
      "VideoRectSize",
      "VideoTransparency"
    ],
    "events": [
      "WiringChanged"
    ]
  },
  "VideoFrame": {
    "inherits": "GuiObject",
    "own": [
      "Looped",
      "Playing",
      "RollOffMaxDistance",
      "RollOffMinDistance",
      "RollOffMode",
      "TimePosition",
      "Video",
      "VideoContent",
      "Volume"
    ],
    "events": [
      "DidLoop",
      "Ended",
      "Loaded",
      "Paused",
      "Played"
    ]
  },
  "VideoPlayer": {
    "inherits": "Instance",
    "own": [
      "Looping",
      "PlaybackSpeed",
      "TimePosition",
      "VideoContent",
      "Volume"
    ],
    "events": [
      "DidEnd",
      "DidLoop",
      "PlayFailed",
      "WiringChanged"
    ]
  },
  "VideoSampler": {
    "inherits": "Object",
    "own": []
  },
  "VideoScreenCaptureService": {
    "inherits": "Instance",
    "own": []
  },
  "VideoService": {
    "inherits": "Instance",
    "own": []
  },
  "ViewportCamera": {
    "inherits": "Camera",
    "own": []
  },
  "ViewportFrame": {
    "inherits": "GuiObject",
    "own": [
      "Ambient",
      "CurrentCamera",
      "ImageColor3",
      "ImageTransparency",
      "LightColor",
      "LightDirection"
    ]
  },
  "VirtualInput": {
    "inherits": "Object",
    "own": []
  },
  "VirtualInputManager": {
    "inherits": "Instance",
    "own": []
  },
  "VirtualUser": {
    "inherits": "Instance",
    "own": []
  },
  "VisibilityCheckDispatcher": {
    "inherits": "Instance",
    "own": []
  },
  "Visit": {
    "inherits": "Instance",
    "own": []
  },
  "VisualizationMode": {
    "inherits": "Instance",
    "own": []
  },
  "VisualizationModeCategory": {
    "inherits": "Instance",
    "own": []
  },
  "VisualizationModeService": {
    "inherits": "Instance",
    "own": []
  },
  "VoiceChatInternal": {
    "inherits": "Instance",
    "own": []
  },
  "VoiceChatService": {
    "inherits": "Instance",
    "own": []
  },
  "VoxelBuffer": {
    "inherits": "Object",
    "own": []
  },
  "VRService": {
    "inherits": "Instance",
    "own": [
      "AutomaticScaling",
      "AvatarGestures",
      "ControllerModels",
      "FadeOutViewOnCollision",
      "GuiInputUserCFrame",
      "LaserPointer"
    ],
    "events": [
      "NavigationRequested",
      "TouchpadModeChanged",
      "UserCFrameChanged",
      "UserCFrameEnabled"
    ]
  },
  "VRStatusService": {
    "inherits": "Instance",
    "own": []
  },
  "WebSocketClient": {
    "inherits": "Instance",
    "own": [],
    "events": [
      "Closed",
      "MessageReceived",
      "Opened"
    ]
  },
  "WebSocketService": {
    "inherits": "Instance",
    "own": []
  },
  "WebStreamClient": {
    "inherits": "Object",
    "own": [],
    "events": [
      "Closed",
      "Error",
      "MessageReceived",
      "Opened"
    ]
  },
  "WebViewService": {
    "inherits": "Instance",
    "own": []
  },
  "WedgePart": {
    "inherits": "FormFactorPart",
    "own": []
  },
  "Weld": {
    "inherits": "JointInstance",
    "own": []
  },
  "WeldConstraint": {
    "inherits": "Instance",
    "own": [
      "Enabled",
      "Part0",
      "Part1"
    ]
  },
  "WindowProtocolService": {
    "inherits": "Instance",
    "own": []
  },
  "Wire": {
    "inherits": "Instance",
    "own": [
      "SourceInstance",
      "SourceName",
      "TargetInstance",
      "TargetName"
    ]
  },
  "WireframeHandleAdornment": {
    "inherits": "HandleAdornment",
    "own": [
      "Scale",
      "Thickness"
    ]
  },
  "Workspace": {
    "inherits": "WorldRoot",
    "own": [
      "AirDensity",
      "AirTurbulenceIntensity",
      "AllowThirdPartySales",
      "ClientAnimatorThrottling",
      "CurrentCamera",
      "DistributedGameTime",
      "GlobalWind",
      "Gravity",
      "InsertPoint",
      "Retargeting",
      "StreamingAdaptiveRadius"
    ],
    "events": [
      "PersistentLoaded"
    ]
  },
  "WorkspaceAnnotation": {
    "inherits": "Annotation",
    "own": []
  },
  "WorldModel": {
    "inherits": "WorldRoot",
    "own": [
      "UseWorkspaceCollisionGroups"
    ]
  },
  "WorldRoot": {
    "inherits": "Model",
    "own": []
  },
  "WrapContentProvider": {
    "inherits": "CacheableContentProvider",
    "own": []
  },
  "WrapDeformer": {
    "inherits": "BaseWrap",
    "own": []
  },
  "WrapDeformMeshProvider": {
    "inherits": "Instance",
    "own": []
  },
  "WrapLayer": {
    "inherits": "BaseWrap",
    "own": [
      "AutoSkin",
      "Enabled",
      "Order"
    ]
  },
  "WrapTarget": {
    "inherits": "BaseWrap",
    "own": []
  },
  "WrapTextureTransfer": {
    "inherits": "Instance",
    "own": [
      "ReferenceCageMeshContent",
      "UVMaxBound",
      "UVMinBound"
    ]
  }
};

export const GENERATED_CREATABLE_CLASS_NAMES: ReadonlySet<string> = new Set([
  "Accessory",
  "AccessoryDescription",
  "Accoutrement",
  "Actor",
  "AdGui",
  "AdPlacement",
  "AdPortal",
  "AdvancedDragger",
  "AirController",
  "AlignOrientation",
  "AlignPosition",
  "AngularVelocity",
  "Animation",
  "AnimationConstraint",
  "AnimationController",
  "AnimationGraphDefinition",
  "AnimationNodeDefinition",
  "AnimationRigData",
  "AnimationValueNodeDefinition",
  "AnimationValueOutputDefinition",
  "Animator",
  "Annotation",
  "ArcHandles",
  "Atmosphere",
  "AtmosphereSensor",
  "Attachment",
  "AudioAnalyzer",
  "AudioChannelMixer",
  "AudioChannelSplitter",
  "AudioChorus",
  "AudioCompressor",
  "AudioDeviceInput",
  "AudioDeviceOutput",
  "AudioDistortion",
  "AudioEcho",
  "AudioEmitter",
  "AudioEqualizer",
  "AudioFader",
  "AudioFilter",
  "AudioFlanger",
  "AudioGate",
  "AudioLimiter",
  "AudioListener",
  "AudioPitchShifter",
  "AudioPlayer",
  "AudioRecorder",
  "AudioReverb",
  "AudioSearchParams",
  "AudioSpeechToText",
  "AudioTextToSpeech",
  "AudioTremolo",
  "AudioWindSynthesizer",
  "AuroraScript",
  "AvatarAbilityRules",
  "AvatarAccessoryRules",
  "AvatarAnimationRules",
  "AvatarBodyRules",
  "AvatarClothingRules",
  "AvatarCollisionRules",
  "AvatarRules",
  "Backpack",
  "BallSocketConstraint",
  "Beam",
  "BillboardGui",
  "BinaryStringValue",
  "BindableEvent",
  "BindableFunction",
  "BlockMesh",
  "BloomEffect",
  "BlurEffect",
  "BodyAngularVelocity",
  "BodyColors",
  "BodyForce",
  "BodyGyro",
  "BodyPartDescription",
  "BodyPosition",
  "BodyThrust",
  "BodyVelocity",
  "Bone",
  "BoolValue",
  "BoxHandleAdornment",
  "Breakpoint",
  "BrickColorValue",
  "BubbleChatMessageProperties",
  "BuoyancySensor",
  "Camera",
  "CanvasGroup",
  "CFrameValue",
  "CharacterMesh",
  "ChorusSoundEffect",
  "ClickDetector",
  "ClimbController",
  "Clouds",
  "Color3Value",
  "ColorCorrectionEffect",
  "ColorGradingEffect",
  "CompositeValueCurve",
  "CompressorSoundEffect",
  "ConeHandleAdornment",
  "Configuration",
  "ControllerManager",
  "ControllerPartSensor",
  "ControlState",
  "CornerWedgePart",
  "CSGDictionaryService",
  "CurveAnimation",
  "CustomEvent",
  "CustomEventReceiver",
  "CustomLog",
  "CylinderHandleAdornment",
  "CylinderMesh",
  "CylindricalConstraint",
  "DataStoreGetOptions",
  "DataStoreIncrementOptions",
  "DataStoreOptions",
  "DataStoreSetOptions",
  "DebuggerWatch",
  "Decal",
  "DepthOfFieldEffect",
  "Dialog",
  "DialogChoice",
  "DigitsRigDescription",
  "DistortionSoundEffect",
  "DoubleConstrainedValue",
  "DragDetector",
  "Dragger",
  "EchoSoundEffect",
  "EqualizerSoundEffect",
  "EulerRotationCurve",
  "ExperienceInviteOptions",
  "ExplorerFilter",
  "Explosion",
  "FaceControls",
  "FileMesh",
  "Fire",
  "Flag",
  "FlagStand",
  "FlangeSoundEffect",
  "FloatCurve",
  "FloorWire",
  "FluidForceSensor",
  "FlyweightService",
  "Folder",
  "ForceField",
  "Frame",
  "FunctionalTest",
  "GeneratedFolder",
  "GetTextBoundsParams",
  "Glue",
  "GroundController",
  "GuiMain",
  "Handles",
  "HapticEffect",
  "Hat",
  "HeightmapImporterService",
  "HiddenSurfaceRemovalAsset",
  "Highlight",
  "HingeConstraint",
  "Hint",
  "Hole",
  "HopperBin",
  "Humanoid",
  "HumanoidController",
  "HumanoidDescription",
  "HumanoidRigDescription",
  "IKControl",
  "ImageButton",
  "ImageHandleAdornment",
  "ImageLabel",
  "InputAction",
  "InputActionLabel",
  "InputBinding",
  "InputContext",
  "IntConstrainedValue",
  "InternalSyncItem",
  "IntersectOperation",
  "IntValue",
  "Keyframe",
  "KeyframeMarker",
  "KeyframeSequence",
  "LinearVelocity",
  "LineForce",
  "LineHandleAdornment",
  "LocalizationTable",
  "LocalScript",
  "MakeupDescription",
  "ManualGlue",
  "ManualWeld",
  "MarkerCurve",
  "MaterialVariant",
  "MemoryStoreService",
  "MeshPart",
  "Message",
  "Model",
  "ModuleScript",
  "Motor",
  "Motor6D",
  "MotorFeature",
  "NegateOperation",
  "NoCollisionConstraint",
  "Noise",
  "NonReplicatedCSGDictionaryService",
  "NumberPose",
  "NumberValue",
  "ObjectValue",
  "OperationGraph",
  "Pants",
  "ParabolaAdornment",
  "Part",
  "ParticleEmitter",
  "PartOperation",
  "PartOperationAsset",
  "Path2D",
  "Path3D",
  "PathfindingLink",
  "PathfindingModifier",
  "PitchShiftSoundEffect",
  "Plane",
  "PlaneConstraint",
  "Player",
  "PluginAction",
  "PluginCapabilities",
  "PointLight",
  "Pose",
  "PrismaticConstraint",
  "ProceduralModel",
  "ProximityPrompt",
  "ProximityPromptService",
  "PyramidHandleAdornment",
  "RayValue",
  "RealtimeMedia",
  "ReflectionMetadata",
  "ReflectionMetadataCallbacks",
  "ReflectionMetadataClass",
  "ReflectionMetadataClasses",
  "ReflectionMetadataEnum",
  "ReflectionMetadataEnumItem",
  "ReflectionMetadataEnums",
  "ReflectionMetadataEvents",
  "ReflectionMetadataFunctions",
  "ReflectionMetadataMember",
  "ReflectionMetadataProperties",
  "ReflectionMetadataYieldFunctions",
  "RelativeGui",
  "RemoteEvent",
  "RemoteFunction",
  "RenderingTest",
  "ReverbSoundEffect",
  "RigidConstraint",
  "RocketPropulsion",
  "RodConstraint",
  "RopeConstraint",
  "Rotate",
  "RotateP",
  "RotateV",
  "RotationCurve",
  "RTAnimationTracker",
  "ScreenGui",
  "Script",
  "ScrollingFrame",
  "Seat",
  "SelectionBox",
  "SelectionPartLasso",
  "SelectionPointLasso",
  "SelectionSphere",
  "Shirt",
  "ShirtGraphic",
  "SkateboardController",
  "SkateboardPlatform",
  "Skin",
  "Sky",
  "Smoke",
  "Snap",
  "Sound",
  "SoundGroup",
  "Sparkles",
  "SpawnLocation",
  "SpecialMesh",
  "SphereHandleAdornment",
  "SpotLight",
  "SpringConstraint",
  "StandalonePluginScripts",
  "StarterGear",
  "StateMachineDefinition",
  "StateMachineTransitionDefinition",
  "StringValue",
  "StudioAttachment",
  "StudioCallout",
  "StyleDerive",
  "StyleLink",
  "StyleQuery",
  "StyleRule",
  "StyleSheet",
  "SunRaysEffect",
  "SurfaceAppearance",
  "SurfaceGui",
  "SurfaceLight",
  "SurfaceSelection",
  "SwimController",
  "Team",
  "TeleportOptions",
  "TerrainDetail",
  "TerrainRegion",
  "TestService",
  "TextBox",
  "TextButton",
  "TextChannel",
  "TextChannelWindow",
  "TextChatCommand",
  "TextChatMessageProperties",
  "TextGenerator",
  "TextLabel",
  "Texture",
  "Tool",
  "Torque",
  "TorsionSpringConstraint",
  "TrackerStreamAnimation",
  "Trail",
  "TremoloSoundEffect",
  "TrussPart",
  "Tween",
  "UIAspectRatioConstraint",
  "UICorner",
  "UIDragDetector",
  "UIFlexItem",
  "UIGradient",
  "UIGridLayout",
  "UIListLayout",
  "UIPadding",
  "UIPageLayout",
  "UIScale",
  "UIShadow",
  "UISizeConstraint",
  "UIStroke",
  "UITableLayout",
  "UITextSizeConstraint",
  "UnionOperation",
  "UniversalConstraint",
  "UnreliableRemoteEvent",
  "ValueCurve",
  "Vector3Curve",
  "Vector3Value",
  "VectorForce",
  "VehicleController",
  "VehicleSeat",
  "VelocityMotor",
  "VideoDeviceInput",
  "VideoDisplay",
  "VideoFrame",
  "VideoPlayer",
  "ViewportCamera",
  "ViewportFrame",
  "VirtualInputManager",
  "VisualizationMode",
  "VisualizationModeCategory",
  "WedgePart",
  "Weld",
  "WeldConstraint",
  "Wire",
  "WireframeHandleAdornment",
  "WorkspaceAnnotation",
  "WorldModel",
  "WrapDeformer",
  "WrapLayer",
  "WrapTarget",
  "WrapTextureTransfer"
]);

export const GENERATED_PROP_TYPES: Record<string, Record<string, string>> = {
  "Accessory": {
    "AccessoryType": "Enum.AccessoryType"
  },
  "AccessoryDescription": {
    "AccessoryType": "Enum.AccessoryType",
    "AssetId": "number",
    "Instance": "Instance",
    "IsLayered": "boolean",
    "Order": "number",
    "Position": "Vector3",
    "Rotation": "Vector3",
    "Scale": "Vector3"
  },
  "Accoutrement": {
    "AttachmentPoint": "CFrame"
  },
  "AdGui": {
    "AdShape": "Enum.AdShape",
    "EnableVideoAds": "boolean",
    "FallbackImage": "ContentId",
    "FallbackImageContent": "Content"
  },
  "AdPlacement": {
    "ActivationInstance": "Instance",
    "AdFormat": "Enum.AdFormat",
    "PlacementId": "number"
  },
  "AirController": {
    "BalanceMaxTorque": "number",
    "BalanceSpeed": "number",
    "MaintainAngularMomentum": "boolean",
    "MaintainLinearMomentum": "boolean",
    "MoveMaxForce": "number",
    "TurnMaxTorque": "number",
    "TurnSpeedFactor": "number"
  },
  "AlignOrientation": {
    "AlignType": "Enum.AlignType",
    "CFrame": "CFrame",
    "LookAtPosition": "Vector3",
    "MaxAngularVelocity": "number",
    "MaxTorque": "number",
    "Mode": "Enum.OrientationAlignmentMode",
    "PrimaryAxis": "Vector3",
    "PrimaryAxisOnly": "boolean",
    "ReactionTorqueEnabled": "boolean",
    "Responsiveness": "number",
    "RigidityEnabled": "boolean",
    "SecondaryAxis": "Vector3"
  },
  "AlignPosition": {
    "ApplyAtCenterOfMass": "boolean",
    "ForceLimitMode": "Enum.ForceLimitMode",
    "ForceRelativeTo": "Enum.ActuatorRelativeTo",
    "MaxAxesForce": "Vector3",
    "MaxForce": "number",
    "MaxVelocity": "number",
    "Mode": "Enum.PositionAlignmentMode",
    "Position": "Vector3",
    "ReactionForceEnabled": "boolean",
    "Responsiveness": "number",
    "RigidityEnabled": "boolean"
  },
  "AngularVelocity": {
    "AngularVelocity": "Vector3",
    "MaxTorque": "number",
    "ReactionTorqueEnabled": "boolean",
    "RelativeTo": "Enum.ActuatorRelativeTo"
  },
  "Animation": {
    "AnimationContent": "Content",
    "AnimationId": "ContentId"
  },
  "AnimationClip": {
    "Loop": "boolean",
    "Priority": "Enum.AnimationPriority"
  },
  "AnimationConstraint": {
    "AngularDamping": "number",
    "AngularStrength": "number",
    "IsKinematic": "boolean",
    "LinearDamping": "number",
    "LinearStrength": "number",
    "MaxForce": "number",
    "MaxTorque": "number",
    "Transform": "CFrame"
  },
  "AnimationImportData": {
    "ForceNewVersion": "boolean",
    "VersionedAssetId": "number"
  },
  "AnimationNodeDefinition": {
    "NodeType": "Enum.AnimationNodeType"
  },
  "AnimationTrack": {
    "Looped": "boolean",
    "Priority": "Enum.AnimationPriority",
    "TimePosition": "number"
  },
  "AnimationValueNodeDefinition": {
    "NodeType": "Enum.AnimationValueNodeType"
  },
  "Animator": {
    "PreferLodEnabled": "boolean"
  },
  "ArcHandles": {
    "Axes": "Axes"
  },
  "AssetDeliveryProxy": {
    "Interface": "string",
    "Port": "number",
    "StartServer": "boolean"
  },
  "AssetPatchSettings": {
    "ContentId": "string",
    "OutputPath": "string",
    "PatchId": "string"
  },
  "Atmosphere": {
    "Color": "Color3",
    "Decay": "Color3",
    "Density": "number",
    "Glare": "number",
    "Haze": "number",
    "Offset": "number"
  },
  "Attachment": {
    "Axis": "Vector3",
    "CFrame": "CFrame",
    "SecondaryAxis": "Vector3",
    "Visible": "boolean",
    "WorldAxis": "Vector3",
    "WorldCFrame": "CFrame",
    "WorldSecondaryAxis": "Vector3"
  },
  "AudioAnalyzer": {
    "SpectrumEnabled": "boolean",
    "WindowSize": "Enum.AudioWindowSize"
  },
  "AudioChannelMixer": {
    "Layout": "Enum.AudioChannelLayout"
  },
  "AudioChannelSplitter": {
    "Layout": "Enum.AudioChannelLayout"
  },
  "AudioChorus": {
    "Bypass": "boolean",
    "Depth": "number",
    "Mix": "number",
    "Rate": "number"
  },
  "AudioCompressor": {
    "Attack": "number",
    "Bypass": "boolean",
    "MakeupGain": "number",
    "Ratio": "number",
    "Release": "number",
    "Threshold": "number"
  },
  "AudioDeviceInput": {
    "AccessType": "Enum.AccessModifierType",
    "Muted": "boolean",
    "Player": "Player",
    "Volume": "number"
  },
  "AudioDeviceOutput": {
    "Player": "Player"
  },
  "AudioDistortion": {
    "Bypass": "boolean",
    "Level": "number"
  },
  "AudioEcho": {
    "Bypass": "boolean",
    "DelayTime": "number",
    "DryLevel": "number",
    "Feedback": "number",
    "RampTime": "number",
    "WetLevel": "number"
  },
  "AudioEmitter": {
    "AcousticSimulationEnabled": "boolean",
    "AudioInteractionGroup": "string",
    "DiffractionEnabled": "Enum.SimulationMode",
    "DistanceAttenuationBounds": "NumberRange",
    "DistanceAttenuationMode": "Enum.DistanceAttenuationMode",
    "OcclusionEnabled": "Enum.SimulationMode",
    "PositionInstance": "Instance",
    "PositionType": "Enum.EmitterPositionType",
    "ReverbEnabled": "Enum.SimulationMode"
  },
  "AudioEqualizer": {
    "Bypass": "boolean",
    "HighGain": "number",
    "LowGain": "number",
    "MidGain": "number",
    "MidRange": "NumberRange"
  },
  "AudioFader": {
    "Bypass": "boolean",
    "Volume": "number"
  },
  "AudioFilter": {
    "Bypass": "boolean",
    "FilterType": "Enum.AudioFilterType",
    "Frequency": "number",
    "Gain": "number",
    "Q": "number"
  },
  "AudioFlanger": {
    "Bypass": "boolean",
    "Depth": "number",
    "Mix": "number",
    "Rate": "number"
  },
  "AudioGate": {
    "Attack": "number",
    "Bypass": "boolean",
    "Release": "number",
    "Threshold": "NumberRange"
  },
  "AudioLimiter": {
    "Bypass": "boolean",
    "MaxLevel": "number",
    "Release": "number"
  },
  "AudioListener": {
    "AcousticSimulationEnabled": "boolean",
    "AudioInteractionGroup": "string",
    "DiffractionEnabled": "Enum.SimulationMode",
    "OcclusionEnabled": "Enum.SimulationMode",
    "PositionInstance": "Instance",
    "PositionType": "Enum.ListenerPositionType",
    "ReverbEnabled": "Enum.SimulationMode"
  },
  "AudioPitchShifter": {
    "Bypass": "boolean",
    "Pitch": "number",
    "WindowSize": "Enum.AudioWindowSize"
  },
  "AudioPlayer": {
    "Asset": "ContentId",
    "AutoLoad": "boolean",
    "AutoPlay": "boolean",
    "LoopRegion": "NumberRange",
    "Looping": "boolean",
    "PlaybackRegion": "NumberRange",
    "PlaybackSpeed": "number",
    "TimePosition": "number",
    "Volume": "number"
  },
  "AudioReverb": {
    "Bypass": "boolean",
    "DecayRatio": "number",
    "DecayTime": "number",
    "Density": "number",
    "Diffusion": "number",
    "DryLevel": "number",
    "EarlyDelayTime": "number",
    "HighCutFrequency": "number",
    "LateDelayTime": "number",
    "LowShelfFrequency": "number",
    "LowShelfGain": "number",
    "ReferenceFrequency": "number",
    "WetLevel": "number"
  },
  "AudioSearchParams": {
    "Album": "string",
    "Artist": "string",
    "AudioSubType": "Enum.AudioSubType",
    "MaxDuration": "number",
    "MinDuration": "number",
    "SearchKeyword": "string",
    "Tag": "string",
    "Title": "string"
  },
  "AudioSpeechToText": {
    "Enabled": "boolean",
    "Text": "string"
  },
  "AudioTextToSpeech": {
    "Looping": "boolean",
    "Pitch": "number",
    "PlaybackSpeed": "number",
    "Speed": "number",
    "Text": "string",
    "TimePosition": "number",
    "VoiceId": "string",
    "Volume": "number"
  },
  "AudioTremolo": {
    "Bypass": "boolean",
    "Depth": "number",
    "Duty": "number",
    "Frequency": "number",
    "Shape": "number",
    "Skew": "number",
    "Square": "number"
  },
  "AudioWindSynthesizer": {
    "Enabled": "boolean",
    "PositionInstance": "Instance",
    "PositionType": "Enum.AudioPositionType",
    "Profile": "Enum.WindSoundProfile",
    "Volume": "number"
  },
  "AuroraScript": {
    "EnableCulling": "boolean",
    "EnableLOD": "boolean",
    "LODCriticality": "number",
    "Priority": "number",
    "Source": "ProtectedString"
  },
  "AuroraScriptObject": {
    "FrameId": "number",
    "LODLevel": "number",
    "PriorFrameInvoked": "number"
  },
  "AuroraService": {
    "HashRoundingPoint": "number",
    "IgnoreRotation": "boolean",
    "LockStepIdOffset": "boolean",
    "RollbackOffset": "number"
  },
  "BackpackItem": {
    "TextureContent": "Content",
    "TextureId": "ContentId"
  },
  "BallSocketConstraint": {
    "LimitsEnabled": "boolean",
    "MaxFrictionTorque": "number",
    "Radius": "number",
    "Restitution": "number",
    "TwistLimitsEnabled": "boolean",
    "TwistLowerAngle": "number",
    "TwistUpperAngle": "number",
    "UpperAngle": "number"
  },
  "BaseCoreGuiConfiguration": {
    "Enabled": "boolean"
  },
  "BaseImportData": {
    "ImportName": "string",
    "ShouldImport": "boolean"
  },
  "BasePart": {
    "Anchored": "boolean",
    "AssemblyAngularVelocity": "Vector3",
    "AssemblyLinearVelocity": "Vector3",
    "AudioCanCollide": "boolean",
    "BackSurface": "Enum.SurfaceType",
    "BottomSurface": "Enum.SurfaceType",
    "BrickColor": "BrickColor",
    "CFrame": "CFrame",
    "CanCollide": "boolean",
    "CanQuery": "boolean",
    "CanTouch": "boolean",
    "CastShadow": "boolean",
    "CollisionGroup": "string",
    "Color": "Color3",
    "CustomPhysicalProperties": "PhysicalProperties",
    "EnableFluidForces": "boolean",
    "FrontSurface": "Enum.SurfaceType",
    "LeftSurface": "Enum.SurfaceType",
    "Locked": "boolean",
    "Massless": "boolean",
    "Material": "Enum.Material",
    "MaterialVariant": "string",
    "PivotOffset": "CFrame",
    "Reflectance": "number",
    "RightSurface": "Enum.SurfaceType",
    "RootPriority": "number",
    "Rotation": "Vector3",
    "Size": "Vector3",
    "TopSurface": "Enum.SurfaceType",
    "Transparency": "number"
  },
  "BaseScript": {
    "Disabled": "boolean",
    "Enabled": "boolean"
  },
  "Beam": {
    "Attachment0": "Attachment",
    "Attachment1": "Attachment",
    "Brightness": "number",
    "Color": "ColorSequence",
    "CurveSize0": "number",
    "CurveSize1": "number",
    "Enabled": "boolean",
    "FaceCamera": "boolean",
    "LightEmission": "number",
    "LightInfluence": "number",
    "Segments": "number",
    "Texture": "ContentId",
    "TextureContent": "Content",
    "TextureLength": "number",
    "TextureMode": "Enum.TextureMode",
    "TextureSpeed": "number",
    "Transparency": "NumberSequence",
    "Width0": "number",
    "Width1": "number",
    "ZOffset": "number"
  },
  "BillboardGui": {
    "Active": "boolean",
    "Adornee": "Instance",
    "AlwaysOnTop": "boolean",
    "Brightness": "number",
    "ClipsDescendants": "boolean",
    "DistanceStep": "number",
    "ExtentsOffset": "Vector3",
    "ExtentsOffsetWorldSpace": "Vector3",
    "LightInfluence": "number",
    "MaxDistance": "number",
    "PlayerToHideFrom": "Instance",
    "Size": "UDim2",
    "SizeOffset": "Vector2",
    "StudsOffset": "Vector3",
    "StudsOffsetWorldSpace": "Vector3"
  },
  "BloomEffect": {
    "Intensity": "number",
    "Size": "number",
    "Threshold": "number"
  },
  "BlurEffect": {
    "Size": "number"
  },
  "BodyAngularVelocity": {
    "AngularVelocity": "Vector3",
    "MaxTorque": "Vector3",
    "P": "number"
  },
  "BodyColors": {
    "HeadColor": "BrickColor",
    "HeadColor3": "Color3",
    "LeftArmColor": "BrickColor",
    "LeftArmColor3": "Color3",
    "LeftLegColor": "BrickColor",
    "LeftLegColor3": "Color3",
    "RightArmColor": "BrickColor",
    "RightArmColor3": "Color3",
    "RightLegColor": "BrickColor",
    "RightLegColor3": "Color3",
    "TorsoColor": "BrickColor",
    "TorsoColor3": "Color3"
  },
  "BodyForce": {
    "Force": "Vector3"
  },
  "BodyGyro": {
    "CFrame": "CFrame",
    "D": "number",
    "MaxTorque": "Vector3",
    "P": "number"
  },
  "BodyPartDescription": {
    "AssetId": "number",
    "BodyPart": "Enum.BodyPart",
    "Color": "Color3",
    "HeadShape": "string",
    "Instance": "Instance"
  },
  "BodyPosition": {
    "D": "number",
    "MaxForce": "Vector3",
    "P": "number",
    "Position": "Vector3"
  },
  "BodyThrust": {
    "Force": "Vector3",
    "Location": "Vector3"
  },
  "BodyVelocity": {
    "MaxForce": "Vector3",
    "P": "number",
    "Velocity": "Vector3"
  },
  "Bone": {
    "Transform": "CFrame"
  },
  "BoolValue": {
    "Value": "boolean"
  },
  "BoxHandleAdornment": {
    "Shading": "Enum.AdornShading",
    "Size": "Vector3"
  },
  "BrickColorValue": {
    "Value": "BrickColor"
  },
  "BubbleChatConfiguration": {
    "AdorneeName": "string",
    "BackgroundColor3": "Color3",
    "BackgroundTransparency": "number",
    "BubbleDuration": "number",
    "BubblesSpacing": "number",
    "Enabled": "boolean",
    "FontFace": "Font",
    "LocalPlayerStudsOffset": "Vector3",
    "MaxBubbles": "number",
    "MaxDistance": "number",
    "MinimizeDistance": "number",
    "TailVisible": "boolean",
    "TextColor3": "Color3",
    "TextSize": "number",
    "VerticalStudsOffset": "number"
  },
  "BubbleChatMessageProperties": {
    "BackgroundColor3": "Color3",
    "BackgroundTransparency": "number",
    "FontFace": "Font",
    "TailVisible": "boolean",
    "TextColor3": "Color3",
    "TextSize": "number"
  },
  "BuoyancySensor": {
    "FullySubmerged": "boolean",
    "TouchingSurface": "boolean"
  },
  "Camera": {
    "CFrame": "CFrame",
    "CameraSubject": "Instance",
    "CameraType": "Enum.CameraType",
    "DiagonalFieldOfView": "number",
    "FieldOfView": "number",
    "FieldOfViewMode": "Enum.FieldOfViewMode",
    "Focus": "CFrame",
    "HeadLocked": "boolean",
    "HeadScale": "number",
    "MaxAxisFieldOfView": "number",
    "VRTiltAndRollEnabled": "boolean"
  },
  "CanvasGroup": {
    "GroupColor3": "Color3",
    "GroupTransparency": "number"
  },
  "CapturesViewConfiguration": {
    "Open": "boolean"
  },
  "CFrameValue": {
    "Value": "CFrame"
  },
  "ChannelSelectorSoundEffect": {
    "Channel": "number"
  },
  "ChannelTabsConfiguration": {
    "BackgroundColor3": "Color3",
    "BackgroundTransparency": "number",
    "Enabled": "boolean",
    "FontFace": "Font",
    "HoverBackgroundColor3": "Color3",
    "SelectedTabTextColor3": "Color3",
    "TextColor3": "Color3",
    "TextSize": "number",
    "TextStrokeColor3": "Color3",
    "TextStrokeTransparency": "number"
  },
  "CharacterMesh": {
    "BaseTextureContent": "Content",
    "BaseTextureId": "number",
    "BodyPart": "Enum.BodyPart",
    "MeshContent": "Content",
    "MeshId": "number",
    "OverlayTextureContent": "Content",
    "OverlayTextureId": "number"
  },
  "Chat": {
    "BubbleChatEnabled": "boolean"
  },
  "ChatInputBarConfiguration": {
    "AutocompleteEnabled": "boolean",
    "BackgroundColor3": "Color3",
    "BackgroundTransparency": "number",
    "Enabled": "boolean",
    "FontFace": "Font",
    "KeyboardKeyCode": "Enum.KeyCode",
    "PlaceholderColor3": "Color3",
    "TargetTextChannel": "TextChannel",
    "TextBox": "TextBox",
    "TextColor3": "Color3",
    "TextSize": "number",
    "TextStrokeColor3": "Color3",
    "TextStrokeTransparency": "number"
  },
  "ChatWindowConfiguration": {
    "BackgroundColor3": "Color3",
    "BackgroundTransparency": "number",
    "Enabled": "boolean",
    "FontFace": "Font",
    "HeightScale": "number",
    "HorizontalAlignment": "Enum.HorizontalAlignment",
    "TextChannelDisplayMode": "Enum.TextChannelDisplayMode",
    "TextColor3": "Color3",
    "TextSize": "number",
    "TextStrokeColor3": "Color3",
    "TextStrokeTransparency": "number",
    "VerticalAlignment": "Enum.VerticalAlignment",
    "WidthScale": "number"
  },
  "ChatWindowMessageProperties": {
    "FontFace": "Font",
    "PrefixTextProperties": "ChatWindowMessageProperties",
    "TextColor3": "Color3",
    "TextSize": "number",
    "TextStrokeColor3": "Color3",
    "TextStrokeTransparency": "number"
  },
  "ChorusSoundEffect": {
    "Depth": "number",
    "Mix": "number",
    "Rate": "number"
  },
  "ClickDetector": {
    "CursorIcon": "ContentId",
    "CursorIconContent": "Content",
    "MaxActivationDistance": "number"
  },
  "ClimbController": {
    "AccelerationTime": "number",
    "BalanceMaxTorque": "number",
    "BalanceSpeed": "number",
    "MoveMaxForce": "number"
  },
  "Clothing": {
    "Color3": "Color3"
  },
  "Clouds": {
    "Color": "Color3",
    "Cover": "number",
    "Density": "number",
    "Enabled": "boolean"
  },
  "Color3Value": {
    "Value": "Color3"
  },
  "ColorCorrectionEffect": {
    "Brightness": "number",
    "Contrast": "number",
    "Saturation": "number",
    "TintColor": "Color3"
  },
  "ColorGradingEffect": {
    "TonemapperPreset": "Enum.TonemapperPreset"
  },
  "CompositeValueCurve": {
    "CurveType": "Enum.CompositeValueCurveType"
  },
  "CompressorSoundEffect": {
    "Attack": "number",
    "GainMakeup": "number",
    "Ratio": "number",
    "Release": "number",
    "SideChain": "Instance",
    "Threshold": "number"
  },
  "ConeHandleAdornment": {
    "Height": "number",
    "Hollow": "boolean",
    "Radius": "number",
    "Shading": "Enum.AdornShading"
  },
  "Constraint": {
    "Attachment0": "Attachment",
    "Attachment1": "Attachment",
    "Color": "BrickColor",
    "Enabled": "boolean",
    "Visible": "boolean"
  },
  "ControllerBase": {
    "BalanceRigidityEnabled": "boolean",
    "MoveSpeedFactor": "number"
  },
  "ControllerManager": {
    "ActiveController": "ControllerBase",
    "BaseMoveSpeed": "number",
    "BaseTurnSpeed": "number",
    "ClimbSensor": "ControllerSensor",
    "FacingDirection": "Vector3",
    "GroundSensor": "ControllerSensor",
    "MovingDirection": "Vector3",
    "RootPart": "BasePart",
    "UpDirection": "Vector3"
  },
  "ControllerPartSensor": {
    "HitFrame": "CFrame",
    "HitNormal": "Vector3",
    "LadderSearchHeight": "number",
    "LadderSearchOffset": "number",
    "SearchDistance": "number",
    "SensedMaterial": "Enum.Material",
    "SensedPart": "BasePart",
    "SensorMode": "Enum.SensorMode"
  },
  "ControlState": {
    "Owner": "Player"
  },
  "CoreGuiConfiguration": {
    "CapturesViewConfiguration": "CapturesViewConfiguration",
    "PlayerListConfiguration": "PlayerListConfiguration",
    "SelfViewConfiguration": "SelfViewConfiguration"
  },
  "CustomEventReceiver": {
    "Source": "Instance"
  },
  "CylinderHandleAdornment": {
    "Angle": "number",
    "Height": "number",
    "InnerRadius": "number",
    "Radius": "number",
    "Shading": "Enum.AdornShading"
  },
  "CylindricalConstraint": {
    "AngularActuatorType": "Enum.ActuatorType",
    "AngularLimitsEnabled": "boolean",
    "AngularResponsiveness": "number",
    "AngularRestitution": "number",
    "AngularSpeed": "number",
    "AngularVelocity": "number",
    "InclinationAngle": "number",
    "LowerAngle": "number",
    "MotorMaxAngularAcceleration": "number",
    "MotorMaxTorque": "number",
    "RotationAxisVisible": "boolean",
    "ServoMaxTorque": "number",
    "TargetAngle": "number",
    "UpperAngle": "number"
  },
  "DataModelMesh": {
    "Offset": "Vector3",
    "Scale": "Vector3",
    "VertexColor": "Vector3"
  },
  "DataStoreGetOptions": {
    "UseCache": "boolean"
  },
  "DataStoreOptions": {
    "AllScopes": "boolean"
  },
  "DebuggerBreakpoint": {
    "Condition": "string",
    "ContinueExecution": "boolean",
    "IsEnabled": "boolean",
    "LogExpression": "string",
    "isContextDependentBreakpoint": "boolean"
  },
  "DebuggerWatch": {
    "Expression": "string"
  },
  "Decal": {
    "AutoLocalize": "boolean",
    "Color3": "Color3",
    "ColorMap": "ContentId",
    "ColorMapContent": "Content",
    "EmissiveStrength": "number",
    "EmissiveTint": "Color3",
    "Rotation": "number",
    "Texture": "ContentId",
    "TextureContent": "Content",
    "Transparency": "number",
    "UVOffset": "Vector2",
    "UVScale": "Vector2",
    "ZIndex": "number"
  },
  "DepthOfFieldEffect": {
    "FarIntensity": "number",
    "FocusDistance": "number",
    "InFocusRadius": "number",
    "NearIntensity": "number"
  },
  "Dialog": {
    "BehaviorType": "Enum.DialogBehaviorType",
    "ConversationDistance": "number",
    "GoodbyeChoiceActive": "boolean",
    "GoodbyeDialog": "string",
    "InUse": "boolean",
    "InitialPrompt": "string",
    "Purpose": "Enum.DialogPurpose",
    "Tone": "Enum.DialogTone",
    "TriggerDistance": "number",
    "TriggerOffset": "Vector3"
  },
  "DialogChoice": {
    "GoodbyeChoiceActive": "boolean",
    "GoodbyeDialog": "string",
    "ResponseDialog": "string",
    "UserDialog": "string"
  },
  "DigitsRigDescription": {
    "Index1": "Instance",
    "Index1TposeAdjustment": "CFrame",
    "Index2": "Instance",
    "Index2TposeAdjustment": "CFrame",
    "Index3": "Instance",
    "Index3TposeAdjustment": "CFrame",
    "IndexRange": "Vector3",
    "IndexSize": "number",
    "Middle1": "Instance",
    "Middle1TposeAdjustment": "CFrame",
    "Middle2": "Instance",
    "Middle2TposeAdjustment": "CFrame",
    "Middle3": "Instance",
    "Middle3TposeAdjustment": "CFrame",
    "MiddleRange": "Vector3",
    "MiddleSize": "number",
    "Pinky1": "Instance",
    "Pinky1TposeAdjustment": "CFrame",
    "Pinky2": "Instance",
    "Pinky2TposeAdjustment": "CFrame",
    "Pinky3": "Instance",
    "Pinky3TposeAdjustment": "CFrame",
    "PinkyRange": "Vector3",
    "PinkySize": "number",
    "Ring1": "Instance",
    "Ring1TposeAdjustment": "CFrame",
    "Ring2": "Instance",
    "Ring2TposeAdjustment": "CFrame",
    "Ring3": "Instance",
    "Ring3TposeAdjustment": "CFrame",
    "RingRange": "Vector3",
    "RingSize": "number",
    "Side": "Enum.DigitsRigDescriptionSide",
    "Thumb1": "Instance",
    "Thumb1TposeAdjustment": "CFrame",
    "Thumb2": "Instance",
    "Thumb2TposeAdjustment": "CFrame",
    "Thumb3": "Instance",
    "Thumb3TposeAdjustment": "CFrame",
    "ThumbRange": "Vector3",
    "ThumbSize": "number"
  },
  "DistortionSoundEffect": {
    "Level": "number"
  },
  "DoubleConstrainedValue": {
    "MaxValue": "number",
    "MinValue": "number",
    "Value": "number"
  },
  "DragDetector": {
    "ActivatedCursorIcon": "ContentId",
    "ActivatedCursorIconContent": "Content",
    "ApplyAtCenterOfMass": "boolean",
    "Axis": "Vector3",
    "DragFrame": "CFrame",
    "DragStyle": "Enum.DragDetectorDragStyle",
    "Enabled": "boolean",
    "GamepadModeSwitchKeyCode": "Enum.KeyCode",
    "KeyboardModeSwitchKeyCode": "Enum.KeyCode",
    "MaxDragAngle": "number",
    "MaxDragTranslation": "Vector3",
    "MaxForce": "number",
    "MaxTorque": "number",
    "MinDragAngle": "number",
    "MinDragTranslation": "Vector3",
    "Orientation": "Vector3",
    "PermissionPolicy": "Enum.DragDetectorPermissionPolicy",
    "ReferenceInstance": "Instance",
    "ResponseStyle": "Enum.DragDetectorResponseStyle",
    "Responsiveness": "number",
    "RunLocally": "boolean",
    "SecondaryAxis": "Vector3",
    "TrackballRadialPullFactor": "number",
    "TrackballRollFactor": "number",
    "VRSwitchKeyCode": "Enum.KeyCode",
    "WorldAxis": "Vector3",
    "WorldSecondaryAxis": "Vector3"
  },
  "DraggerService": {
    "AlignDraggedObjects": "boolean",
    "AngleSnapEnabled": "boolean",
    "AngleSnapIncrement": "number",
    "AnimateHover": "boolean",
    "CollisionsEnabled": "boolean",
    "DraggerCoordinateSpace": "Enum.DraggerCoordinateSpace",
    "DraggerMovementMode": "Enum.DraggerMovementMode",
    "GeometrySnapColor": "Color3",
    "HoverAnimateFrequency": "number",
    "HoverThickness": "number",
    "JointsEnabled": "boolean",
    "LinearSnapEnabled": "boolean",
    "LinearSnapIncrement": "number",
    "ShowHover": "boolean",
    "ShowPivotIndicator": "boolean"
  },
  "DynamicRotate": {
    "BaseAngle": "number"
  },
  "EchoSoundEffect": {
    "Delay": "number",
    "DryLevel": "number",
    "Feedback": "number",
    "WetLevel": "number"
  },
  "EqualizerSoundEffect": {
    "HighGain": "number",
    "LowGain": "number",
    "MidGain": "number"
  },
  "EulerRotationCurve": {
    "RotationOrder": "Enum.RotationOrder"
  },
  "ExperienceInviteOptions": {
    "InviteMessageId": "string",
    "InviteUser": "number",
    "LaunchData": "string",
    "PromptMessage": "string"
  },
  "Explosion": {
    "BlastPressure": "number",
    "BlastRadius": "number",
    "DestroyJointRadiusPercent": "number",
    "ExplosionType": "Enum.ExplosionType",
    "Position": "Vector3",
    "TimeScale": "number",
    "Visible": "boolean"
  },
  "FaceControls": {
    "ChinRaiser": "number",
    "ChinRaiserUpperLip": "number",
    "Corrugator": "number",
    "EyesLookDown": "number",
    "EyesLookLeft": "number",
    "EyesLookRight": "number",
    "EyesLookUp": "number",
    "FlatPucker": "number",
    "Funneler": "number",
    "JawDrop": "number",
    "JawLeft": "number",
    "JawRight": "number",
    "LeftBrowLowerer": "number",
    "LeftCheekPuff": "number",
    "LeftCheekRaiser": "number",
    "LeftDimpler": "number",
    "LeftEyeClosed": "number",
    "LeftEyeUpperLidRaiser": "number",
    "LeftInnerBrowRaiser": "number",
    "LeftLipCornerDown": "number",
    "LeftLipCornerPuller": "number",
    "LeftLipStretcher": "number",
    "LeftLowerLipDepressor": "number",
    "LeftNoseWrinkler": "number",
    "LeftOuterBrowRaiser": "number",
    "LeftUpperLipRaiser": "number",
    "LipPresser": "number",
    "LipsTogether": "number",
    "LowerLipSuck": "number",
    "MouthLeft": "number",
    "MouthRight": "number",
    "Pucker": "number",
    "RightBrowLowerer": "number",
    "RightCheekPuff": "number",
    "RightCheekRaiser": "number",
    "RightDimpler": "number",
    "RightEyeClosed": "number",
    "RightEyeUpperLidRaiser": "number",
    "RightInnerBrowRaiser": "number",
    "RightLipCornerDown": "number",
    "RightLipCornerPuller": "number",
    "RightLipStretcher": "number",
    "RightLowerLipDepressor": "number",
    "RightNoseWrinkler": "number",
    "RightOuterBrowRaiser": "number",
    "RightUpperLipRaiser": "number",
    "TongueDown": "number",
    "TongueOut": "number",
    "TongueUp": "number",
    "UpperLipSuck": "number"
  },
  "FaceInstance": {
    "Face": "Enum.NormalId"
  },
  "Feature": {
    "FaceId": "Enum.NormalId",
    "InOut": "Enum.InOut",
    "LeftRight": "Enum.LeftRight",
    "TopBottom": "Enum.TopBottom"
  },
  "FileMesh": {
    "MeshContent": "Content",
    "MeshId": "ContentId",
    "TextureContent": "Content",
    "TextureId": "ContentId"
  },
  "Fire": {
    "Color": "Color3",
    "Enabled": "boolean",
    "Heat": "number",
    "SecondaryColor": "Color3",
    "Size": "number",
    "TimeScale": "number"
  },
  "Flag": {
    "TeamColor": "BrickColor"
  },
  "FlagStand": {
    "TeamColor": "BrickColor"
  },
  "FlangeSoundEffect": {
    "Depth": "number",
    "Mix": "number",
    "Rate": "number"
  },
  "FloorWire": {
    "CycleOffset": "number",
    "From": "BasePart",
    "StudsBetweenTextures": "number",
    "Texture": "ContentId",
    "TextureSize": "Vector2",
    "To": "BasePart",
    "Velocity": "number",
    "WireRadius": "number"
  },
  "Folder": {
    "IconTint": "Color3"
  },
  "ForceField": {
    "Visible": "boolean"
  },
  "Frame": {
    "Style": "Enum.FrameStyle"
  },
  "FunctionalTest": {
    "Description": "string"
  },
  "GetTextBoundsParams": {
    "Font": "Font",
    "RichText": "boolean",
    "Size": "number",
    "Text": "string",
    "Width": "number"
  },
  "Glue": {
    "F0": "Vector3",
    "F1": "Vector3",
    "F2": "Vector3",
    "F3": "Vector3"
  },
  "GroundController": {
    "AccelerationLean": "number",
    "AccelerationTime": "number",
    "BalanceMaxTorque": "number",
    "BalanceSpeed": "number",
    "DecelerationTime": "number",
    "Friction": "number",
    "FrictionWeight": "number",
    "GroundOffset": "number",
    "StandForce": "number",
    "StandSpeed": "number",
    "TurnSpeedFactor": "number"
  },
  "GroupImportData": {
    "Anchored": "boolean",
    "ImportAsModelAsset": "boolean",
    "InsertInWorkspace": "boolean"
  },
  "GuiBase2d": {
    "AutoLocalize": "boolean",
    "RootLocalizationTable": "LocalizationTable",
    "SelectionBehaviorDown": "Enum.SelectionBehavior",
    "SelectionBehaviorLeft": "Enum.SelectionBehavior",
    "SelectionBehaviorRight": "Enum.SelectionBehavior",
    "SelectionBehaviorUp": "Enum.SelectionBehavior",
    "SelectionGroup": "boolean"
  },
  "GuiBase3d": {
    "Color3": "Color3",
    "Transparency": "number",
    "Visible": "boolean"
  },
  "GuiButton": {
    "AutoButtonColor": "boolean",
    "HoverHapticEffect": "HapticEffect",
    "Modal": "boolean",
    "PressHapticEffect": "HapticEffect",
    "Selected": "boolean",
    "Style": "Enum.ButtonStyle"
  },
  "GuiObject": {
    "Active": "boolean",
    "AnchorPoint": "Vector2",
    "AutomaticSize": "Enum.AutomaticSize",
    "BackgroundColor3": "Color3",
    "BackgroundTransparency": "number",
    "BorderColor3": "Color3",
    "BorderMode": "Enum.BorderMode",
    "BorderSizePixel": "number",
    "ClipsDescendants": "boolean",
    "InputSink": "Enum.InputSink",
    "Interactable": "boolean",
    "LayoutOrder": "number",
    "NextSelectionDown": "GuiObject",
    "NextSelectionLeft": "GuiObject",
    "NextSelectionRight": "GuiObject",
    "NextSelectionUp": "GuiObject",
    "Position": "UDim2",
    "Rotation": "number",
    "Selectable": "boolean",
    "SelectionImageObject": "GuiObject",
    "SelectionOrder": "number",
    "Size": "UDim2",
    "SizeConstraint": "Enum.SizeConstraint",
    "Visible": "boolean",
    "ZIndex": "number"
  },
  "GuiService": {
    "AutoSelectGuiEnabled": "boolean",
    "GuiNavigationEnabled": "boolean",
    "SelectedObject": "GuiObject",
    "TouchControlsEnabled": "boolean"
  },
  "HandleAdornment": {
    "AdornCullingMode": "Enum.AdornCullingMode",
    "AlwaysOnTop": "boolean",
    "CFrame": "CFrame",
    "SizeRelativeOffset": "Vector3",
    "ZIndex": "number"
  },
  "Handles": {
    "Faces": "Faces",
    "Style": "Enum.HandlesStyle"
  },
  "HapticEffect": {
    "Looped": "boolean",
    "Position": "Vector3",
    "Radius": "number",
    "Type": "Enum.HapticEffectType"
  },
  "Highlight": {
    "Adornee": "Instance",
    "DepthMode": "Enum.HighlightDepthMode",
    "Enabled": "boolean",
    "FillColor": "Color3",
    "FillTransparency": "number",
    "OutlineColor": "Color3",
    "OutlineTransparency": "number"
  },
  "HingeConstraint": {
    "ActuatorType": "Enum.ActuatorType",
    "AngularResponsiveness": "number",
    "AngularSpeed": "number",
    "AngularVelocity": "number",
    "LimitsEnabled": "boolean",
    "LowerAngle": "number",
    "MotorMaxAcceleration": "number",
    "MotorMaxTorque": "number",
    "Radius": "number",
    "Restitution": "number",
    "ServoMaxTorque": "number",
    "TargetAngle": "number",
    "UpperAngle": "number"
  },
  "HopperBin": {
    "Active": "boolean",
    "BinType": "Enum.BinType"
  },
  "Humanoid": {
    "AutoJumpEnabled": "boolean",
    "AutoRotate": "boolean",
    "AutomaticScalingEnabled": "boolean",
    "BreakJointsOnDeath": "boolean",
    "CameraOffset": "Vector3",
    "DisplayDistanceType": "Enum.HumanoidDisplayDistanceType",
    "DisplayName": "string",
    "EvaluateStateMachine": "boolean",
    "Health": "number",
    "HealthDisplayDistance": "number",
    "HealthDisplayType": "Enum.HumanoidHealthDisplayType",
    "HipHeight": "number",
    "Jump": "boolean",
    "JumpHeight": "number",
    "JumpPower": "number",
    "MaxHealth": "number",
    "MaxSlopeAngle": "number",
    "NameDisplayDistance": "number",
    "NameOcclusion": "Enum.NameOcclusion",
    "PlatformStand": "boolean",
    "RequiresNeck": "boolean",
    "RigType": "Enum.HumanoidRigType",
    "Sit": "boolean",
    "TargetPoint": "Vector3",
    "UseJumpPower": "boolean",
    "WalkSpeed": "number",
    "WalkToPart": "BasePart",
    "WalkToPoint": "Vector3"
  },
  "HumanoidDescription": {
    "BackAccessory": "string",
    "BodyTypeScale": "number",
    "ClimbAnimation": "number",
    "DepthScale": "number",
    "Face": "number",
    "FaceAccessory": "string",
    "FallAnimation": "number",
    "FrontAccessory": "string",
    "GraphicTShirt": "number",
    "HairAccessory": "string",
    "HatAccessory": "string",
    "Head": "number",
    "HeadColor": "Color3",
    "HeadScale": "number",
    "HeightScale": "number",
    "IdleAnimation": "number",
    "JumpAnimation": "number",
    "LeftArm": "number",
    "LeftArmColor": "Color3",
    "LeftLeg": "number",
    "LeftLegColor": "Color3",
    "MoodAnimation": "number",
    "NeckAccessory": "string",
    "Pants": "number",
    "ProportionScale": "number",
    "RightArm": "number",
    "RightArmColor": "Color3",
    "RightLeg": "number",
    "RightLegColor": "Color3",
    "RunAnimation": "number",
    "Shirt": "number",
    "ShouldersAccessory": "string",
    "StaticFacialAnimation": "boolean",
    "SwimAnimation": "number",
    "Torso": "number",
    "TorsoColor": "Color3",
    "UseAvatarSettings": "boolean",
    "WaistAccessory": "string",
    "WalkAnimation": "number",
    "WidthScale": "number"
  },
  "HumanoidRigDescription": {
    "Chest": "Instance",
    "ChestRangeMax": "Vector3",
    "ChestRangeMin": "Vector3",
    "ChestSize": "number",
    "ChestTposeAdjustment": "CFrame",
    "HeadBase": "Instance",
    "HeadBaseRangeMax": "Vector3",
    "HeadBaseRangeMin": "Vector3",
    "HeadBaseSize": "number",
    "HeadBaseTposeAdjustment": "CFrame",
    "LeftAnkle": "Instance",
    "LeftAnkleRangeMax": "Vector3",
    "LeftAnkleRangeMin": "Vector3",
    "LeftAnkleSize": "number",
    "LeftAnkleTposeAdjustment": "CFrame",
    "LeftClavicle": "Instance",
    "LeftClavicleRangeMax": "Vector3",
    "LeftClavicleRangeMin": "Vector3",
    "LeftClavicleSize": "number",
    "LeftClavicleTposeAdjustment": "CFrame",
    "LeftElbow": "Instance",
    "LeftElbowRangeMax": "Vector3",
    "LeftElbowRangeMin": "Vector3",
    "LeftElbowSize": "number",
    "LeftElbowTposeAdjustment": "CFrame",
    "LeftHip": "Instance",
    "LeftHipRangeMax": "Vector3",
    "LeftHipRangeMin": "Vector3",
    "LeftHipSize": "number",
    "LeftHipTposeAdjustment": "CFrame",
    "LeftKnee": "Instance",
    "LeftKneeRangeMax": "Vector3",
    "LeftKneeRangeMin": "Vector3",
    "LeftKneeSize": "number",
    "LeftKneeTposeAdjustment": "CFrame",
    "LeftShoulder": "Instance",
    "LeftShoulderRangeMax": "Vector3",
    "LeftShoulderRangeMin": "Vector3",
    "LeftShoulderSize": "number",
    "LeftShoulderTposeAdjustment": "CFrame",
    "LeftToeBase": "Instance",
    "LeftToeBaseRangeMax": "Vector3",
    "LeftToeBaseRangeMin": "Vector3",
    "LeftToeBaseSize": "number",
    "LeftToeBaseTposeAdjustment": "CFrame",
    "LeftWrist": "Instance",
    "LeftWristRangeMax": "Vector3",
    "LeftWristRangeMin": "Vector3",
    "LeftWristSize": "number",
    "LeftWristTposeAdjustment": "CFrame",
    "Neck": "Instance",
    "NeckRangeMax": "Vector3",
    "NeckRangeMin": "Vector3",
    "NeckSize": "number",
    "NeckTposeAdjustment": "CFrame",
    "RightAnkle": "Instance",
    "RightAnkleRangeMax": "Vector3",
    "RightAnkleRangeMin": "Vector3",
    "RightAnkleSize": "number",
    "RightAnkleTposeAdjustment": "CFrame",
    "RightClavicle": "Instance",
    "RightClavicleRangeMax": "Vector3",
    "RightClavicleRangeMin": "Vector3",
    "RightClavicleSize": "number",
    "RightClavicleTposeAdjustment": "CFrame",
    "RightElbow": "Instance",
    "RightElbowRangeMax": "Vector3",
    "RightElbowRangeMin": "Vector3",
    "RightElbowSize": "number",
    "RightElbowTposeAdjustment": "CFrame",
    "RightHip": "Instance",
    "RightHipRangeMax": "Vector3",
    "RightHipRangeMin": "Vector3",
    "RightHipSize": "number",
    "RightHipTposeAdjustment": "CFrame",
    "RightKnee": "Instance",
    "RightKneeRangeMax": "Vector3",
    "RightKneeRangeMin": "Vector3",
    "RightKneeSize": "number",
    "RightKneeTposeAdjustment": "CFrame",
    "RightShoulder": "Instance",
    "RightShoulderRangeMax": "Vector3",
    "RightShoulderRangeMin": "Vector3",
    "RightShoulderSize": "number",
    "RightShoulderTposeAdjustment": "CFrame",
    "RightToeBase": "Instance",
    "RightToeBaseRangeMax": "Vector3",
    "RightToeBaseRangeMin": "Vector3",
    "RightToeBaseSize": "number",
    "RightToeBaseTposeAdjustment": "CFrame",
    "RightWrist": "Instance",
    "RightWristRangeMax": "Vector3",
    "RightWristRangeMin": "Vector3",
    "RightWristSize": "number",
    "RightWristTposeAdjustment": "CFrame",
    "Root": "Instance",
    "RootRangeMax": "Vector3",
    "RootRangeMin": "Vector3",
    "RootSize": "number",
    "RootTposeAdjustment": "CFrame",
    "Spine": "Instance",
    "SpineRangeMax": "Vector3",
    "SpineRangeMin": "Vector3",
    "SpineSize": "number",
    "SpineTposeAdjustment": "CFrame",
    "Waist": "Instance",
    "WaistRangeMax": "Vector3",
    "WaistRangeMin": "Vector3",
    "WaistSize": "number",
    "WaistTposeAdjustment": "CFrame"
  },
  "IKControl": {
    "ChainRoot": "Instance",
    "Enabled": "boolean",
    "EndEffector": "Instance",
    "EndEffectorOffset": "CFrame",
    "Offset": "CFrame",
    "Pole": "Instance",
    "Priority": "number",
    "SmoothTime": "number",
    "Target": "Instance",
    "Type": "Enum.IKControlType",
    "Weight": "number"
  },
  "ImageButton": {
    "HoverImage": "ContentId",
    "HoverImageContent": "Content",
    "Image": "ContentId",
    "ImageColor3": "Color3",
    "ImageContent": "Content",
    "ImageRectOffset": "Vector2",
    "ImageRectSize": "Vector2",
    "ImageTransparency": "number",
    "PressedImage": "ContentId",
    "PressedImageContent": "Content",
    "ResampleMode": "Enum.ResamplerMode",
    "ScaleType": "Enum.ScaleType",
    "SliceCenter": "Rect",
    "SliceScale": "number",
    "TileSize": "UDim2"
  },
  "ImageHandleAdornment": {
    "Image": "ContentId",
    "ImageContent": "Content",
    "Size": "Vector2"
  },
  "ImageLabel": {
    "Image": "ContentId",
    "ImageColor3": "Color3",
    "ImageContent": "Content",
    "ImageRectOffset": "Vector2",
    "ImageRectSize": "Vector2",
    "ImageTransparency": "number",
    "ResampleMode": "Enum.ResamplerMode",
    "ScaleType": "Enum.ScaleType",
    "SliceCenter": "Rect",
    "SliceScale": "number",
    "TileSize": "UDim2"
  },
  "IncrementalPatchBuilder": {
    "AddPathsToBundle": "boolean",
    "BuildDebouncePeriod": "number",
    "HighCompression": "boolean",
    "SerializePatch": "boolean",
    "UseFileLevelCompressionInsteadOfChunk": "boolean",
    "ZstdCompression": "boolean"
  },
  "InputAction": {
    "Enabled": "boolean",
    "Type": "Enum.InputActionType"
  },
  "InputActionLabel": {
    "FontFace": "Font",
    "ImageColor3": "Color3",
    "ImageTransparency": "number",
    "InputAction": "InputAction",
    "TextColor3": "Color3",
    "TextSize": "number",
    "TextTransparency": "number",
    "TextWrapped": "boolean",
    "TextXAlignment": "Enum.TextXAlignment",
    "TextYAlignment": "Enum.TextYAlignment"
  },
  "InputBinding": {
    "Backward": "Enum.KeyCode",
    "ClampMagnitudeToOne": "boolean",
    "DisplayImage": "Content",
    "DisplayName": "string",
    "Down": "Enum.KeyCode",
    "Forward": "Enum.KeyCode",
    "KeyCode": "Enum.KeyCode",
    "Left": "Enum.KeyCode",
    "PointerIndex": "number",
    "PressedThreshold": "number",
    "PrimaryModifier": "Enum.KeyCode",
    "ReleasedThreshold": "number",
    "ResponseCurve": "number",
    "Right": "Enum.KeyCode",
    "Scale": "number",
    "SecondaryModifier": "Enum.KeyCode",
    "Type": "Enum.InputBindingType",
    "UIButton": "GuiButton",
    "UIModifier": "GuiButton",
    "Up": "Enum.KeyCode",
    "Vector2Scale": "Vector2",
    "Vector3Scale": "Vector3"
  },
  "InputContext": {
    "Enabled": "boolean",
    "Priority": "number",
    "Sink": "boolean"
  },
  "InputObject": {
    "Delta": "Vector3",
    "KeyCode": "Enum.KeyCode",
    "Position": "Vector3",
    "UserInputState": "Enum.UserInputState",
    "UserInputType": "Enum.UserInputType"
  },
  "Instance": {
    "Archivable": "boolean",
    "Capabilities": "SecurityCapabilities",
    "Name": "string",
    "Sandboxed": "boolean"
  },
  "InstanceAdornment": {
    "Adornee": "Instance"
  },
  "IntConstrainedValue": {
    "MaxValue": "number",
    "MinValue": "number",
    "Value": "number"
  },
  "IntValue": {
    "Value": "number"
  },
  "JointInstance": {
    "C0": "CFrame",
    "C1": "CFrame",
    "Enabled": "boolean",
    "Part0": "BasePart",
    "Part1": "BasePart"
  },
  "Keyframe": {
    "Time": "number"
  },
  "KeyframeMarker": {
    "Value": "string"
  },
  "LayerCollector": {
    "Enabled": "boolean",
    "ResetOnSpawn": "boolean",
    "ZIndexBehavior": "Enum.ZIndexBehavior"
  },
  "Light": {
    "Brightness": "number",
    "Color": "Color3",
    "Enabled": "boolean",
    "Shadows": "boolean"
  },
  "Lighting": {
    "Ambient": "Color3",
    "Brightness": "number",
    "ClockTime": "number",
    "ColorShift_Bottom": "Color3",
    "ColorShift_Top": "Color3",
    "EnvironmentDiffuseScale": "number",
    "EnvironmentSpecularScale": "number",
    "ExposureCompensation": "number",
    "FogColor": "Color3",
    "FogEnd": "number",
    "FogStart": "number",
    "GeographicLatitude": "number",
    "GlobalShadows": "boolean",
    "OutdoorAmbient": "Color3",
    "ShadowSoftness": "number",
    "TimeOfDay": "string"
  },
  "LinearVelocity": {
    "ForceLimitMode": "Enum.ForceLimitMode",
    "ForceLimitsEnabled": "boolean",
    "LineDirection": "Vector3",
    "LineVelocity": "number",
    "MaxAxesForce": "Vector3",
    "MaxForce": "number",
    "MaxPlanarAxesForce": "Vector2",
    "PlaneVelocity": "Vector2",
    "PrimaryTangentAxis": "Vector3",
    "ReactionForceEnabled": "boolean",
    "RelativeTo": "Enum.ActuatorRelativeTo",
    "SecondaryTangentAxis": "Vector3",
    "VectorVelocity": "Vector3",
    "VelocityConstraintMode": "Enum.VelocityConstraintMode"
  },
  "LineForce": {
    "ApplyAtCenterOfMass": "boolean",
    "InverseSquareLaw": "boolean",
    "Magnitude": "number",
    "MaxForce": "number",
    "ReactionForceEnabled": "boolean"
  },
  "LineHandleAdornment": {
    "Length": "number",
    "Thickness": "number"
  },
  "LocalizationTable": {
    "SourceLocaleId": "string"
  },
  "MakeupDescription": {
    "AssetId": "number",
    "Instance": "Instance",
    "MakeupType": "Enum.MakeupType",
    "Order": "number"
  },
  "MaterialImportData": {
    "DiffuseFilePath": "string",
    "DiffuseVersionedAssetId": "number",
    "EmissiveFilePath": "string",
    "EmissiveVersionedAssetId": "number",
    "MetalnessFilePath": "string",
    "MetalnessVersionedAssetId": "number",
    "NormalFilePath": "string",
    "NormalVersionedAssetId": "number",
    "RoughnessFilePath": "string",
    "RoughnessVersionedAssetId": "number"
  },
  "MaterialVariant": {
    "AlphaMode": "Enum.AlphaMode",
    "CustomPhysicalProperties": "PhysicalProperties",
    "EmissiveStrength": "number",
    "EmissiveTint": "Color3",
    "MaterialPattern": "Enum.MaterialPattern",
    "StudsPerTile": "number"
  },
  "MeshImportData": {
    "Anchored": "boolean",
    "CageMeshIntersectedPreview": "boolean",
    "CageNonManifoldPreview": "boolean",
    "CageOverlappingVerticesPreview": "boolean",
    "CageUVMisMatchedPreview": "boolean",
    "DoubleSided": "boolean",
    "IgnoreVertexColors": "boolean",
    "IrrelevantCageModifiedPreview": "boolean",
    "MeshHoleDetectedPreview": "boolean",
    "OuterCageFarExtendedFromMeshPreview": "boolean",
    "UseImportedPivot": "boolean",
    "VersionedAssetId": "number"
  },
  "MeshPart": {
    "DoubleSided": "boolean",
    "TextureContent": "Content",
    "TextureID": "ContentId"
  },
  "Message": {
    "Text": "string"
  },
  "Model": {
    "ModelStreamingMode": "Enum.ModelStreamingMode",
    "PrimaryPart": "BasePart",
    "WorldPivot": "CFrame"
  },
  "ModuleScript": {
    "Source": "ProtectedString"
  },
  "Motor": {
    "CurrentAngle": "number",
    "DesiredAngle": "number",
    "MaxVelocity": "number"
  },
  "Mouse": {
    "Icon": "ContentId",
    "IconContent": "Content",
    "TargetFilter": "Instance"
  },
  "NetworkSettings": {
    "IncomingReplicationLag": "number",
    "PrintJoinSizeBreakdown": "boolean",
    "PrintPhysicsErrors": "boolean",
    "PrintStreamInstanceQuota": "boolean",
    "RandomizeJoinInstanceOrder": "boolean",
    "RenderStreamedRegions": "boolean",
    "ShowActiveAnimationAsset": "boolean"
  },
  "NoCollisionConstraint": {
    "Enabled": "boolean",
    "Part0": "BasePart",
    "Part1": "BasePart"
  },
  "NumberPose": {
    "Value": "number"
  },
  "NumberValue": {
    "Value": "number"
  },
  "ObjectValue": {
    "Value": "Instance"
  },
  "Pants": {
    "PantsTemplate": "ContentId",
    "PantsTemplateContent": "Content"
  },
  "Part": {
    "Shape": "Enum.PartType"
  },
  "PartAdornment": {
    "Adornee": "BasePart"
  },
  "ParticleEmitter": {
    "Acceleration": "Vector3",
    "Brightness": "number",
    "Color": "ColorSequence",
    "Drag": "number",
    "EmissionDirection": "Enum.NormalId",
    "Enabled": "boolean",
    "FlipbookBlendFrames": "boolean",
    "FlipbookFramerate": "NumberRange",
    "FlipbookIncompatible": "string",
    "FlipbookLayout": "Enum.ParticleFlipbookLayout",
    "FlipbookMode": "Enum.ParticleFlipbookMode",
    "FlipbookSizeX": "number",
    "FlipbookSizeY": "number",
    "FlipbookStartRandom": "boolean",
    "Lifetime": "NumberRange",
    "LightEmission": "number",
    "LightInfluence": "number",
    "LockedToPart": "boolean",
    "Orientation": "Enum.ParticleOrientation",
    "Rate": "number",
    "RotSpeed": "NumberRange",
    "Rotation": "NumberRange",
    "Shape": "Enum.ParticleEmitterShape",
    "ShapeInOut": "Enum.ParticleEmitterShapeInOut",
    "ShapePartial": "number",
    "ShapeStyle": "Enum.ParticleEmitterShapeStyle",
    "Size": "NumberSequence",
    "Speed": "NumberRange",
    "SpreadAngle": "Vector2",
    "Squash": "NumberSequence",
    "Texture": "ContentId",
    "TextureContent": "Content",
    "TimeScale": "number",
    "Transparency": "NumberSequence",
    "VelocityInheritance": "number",
    "WindAffectsDrag": "boolean",
    "ZOffset": "number"
  },
  "PartOperation": {
    "UsePartColor": "boolean"
  },
  "PatchMapping": {
    "FlattenTree": "boolean",
    "PatchId": "string",
    "TargetPath": "string"
  },
  "Path2D": {
    "Closed": "boolean",
    "Color3": "Color3",
    "Thickness": "number",
    "Visible": "boolean",
    "ZIndex": "number"
  },
  "PathfindingLink": {
    "Attachment0": "Attachment",
    "Attachment1": "Attachment",
    "IsBidirectional": "boolean",
    "Label": "string"
  },
  "PathfindingModifier": {
    "Label": "string",
    "PassThrough": "boolean"
  },
  "PitchShiftSoundEffect": {
    "Octave": "number"
  },
  "Player": {
    "AutoJumpEnabled": "boolean",
    "CameraMaxZoomDistance": "number",
    "CameraMinZoomDistance": "number",
    "CameraMode": "Enum.CameraMode",
    "CanLoadCharacterAppearance": "boolean",
    "Character": "Model",
    "CharacterAppearanceId": "number",
    "DevCameraOcclusionMode": "Enum.DevCameraOcclusionMode",
    "DevComputerCameraMode": "Enum.DevComputerCameraMovementMode",
    "DevComputerMovementMode": "Enum.DevComputerMovementMode",
    "DevEnableMouseLock": "boolean",
    "DevTouchCameraMode": "Enum.DevTouchCameraMovementMode",
    "DevTouchMovementMode": "Enum.DevTouchMovementMode",
    "DisplayName": "string",
    "FrustumStreaming": "Enum.FrustumStreamingMode",
    "HasVerifiedBadge": "boolean",
    "HealthDisplayDistance": "number",
    "NameDisplayDistance": "number",
    "Neutral": "boolean",
    "ReplicationFocus": "Instance",
    "RespawnLocation": "SpawnLocation",
    "Team": "Team",
    "TeamColor": "BrickColor",
    "UserId": "number"
  },
  "PlayerDataService": {
    "LoadFailureBehavior": "Enum.PlayerDataLoadFailureBehavior"
  },
  "PlayerGui": {
    "ScreenOrientation": "Enum.ScreenOrientation",
    "SelectionImageObject": "GuiObject"
  },
  "PlayerListConfiguration": {
    "Open": "boolean"
  },
  "Players": {
    "CharacterAutoLoads": "boolean",
    "RespawnTime": "number"
  },
  "PluginGui": {
    "Title": "string"
  },
  "PluginMenu": {
    "Icon": "string",
    "Title": "string"
  },
  "PluginToolbarButton": {
    "ClickableWhenViewportHidden": "boolean",
    "Enabled": "boolean",
    "Icon": "ContentId"
  },
  "PointLight": {
    "Range": "number"
  },
  "Pose": {
    "CFrame": "CFrame"
  },
  "PoseBase": {
    "EasingDirection": "Enum.PoseEasingDirection",
    "EasingStyle": "Enum.PoseEasingStyle",
    "Weight": "number"
  },
  "PostEffect": {
    "Enabled": "boolean"
  },
  "ProceduralModel": {
    "Generator": "ModuleScript",
    "Size": "Vector3"
  },
  "ProximityPrompt": {
    "ActionText": "string",
    "AutoLocalize": "boolean",
    "ClickablePrompt": "boolean",
    "Enabled": "boolean",
    "Exclusivity": "Enum.ProximityPromptExclusivity",
    "GamepadKeyCode": "Enum.KeyCode",
    "HoldDuration": "number",
    "KeyboardKeyCode": "Enum.KeyCode",
    "MaxActivationDistance": "number",
    "MaxIndicatorDistance": "number",
    "ObjectText": "string",
    "RequiresLineOfSight": "boolean",
    "RootLocalizationTable": "LocalizationTable",
    "Style": "Enum.ProximityPromptStyle",
    "UIOffset": "Vector2"
  },
  "ProximityPromptService": {
    "Enabled": "boolean",
    "MaxIndicatorsVisible": "number",
    "MaxPromptsVisible": "number"
  },
  "PVAdornment": {
    "Adornee": "PVInstance"
  },
  "PyramidHandleAdornment": {
    "Height": "number",
    "Shading": "Enum.AdornShading",
    "Sides": "number",
    "Size": "number"
  },
  "RayValue": {
    "Value": "Ray"
  },
  "ReflectionMetadataClass": {
    "ExplorerImageIndex": "number",
    "ExplorerOrder": "number",
    "Insertable": "boolean",
    "PreferredParent": "string"
  },
  "ReflectionMetadataItem": {
    "Browsable": "boolean",
    "ClassCategory": "string",
    "ClientOnly": "boolean",
    "Constraint": "string",
    "Deprecated": "boolean",
    "EditingDisabled": "boolean",
    "EditorType": "string",
    "FFlag": "string",
    "IsBackend": "boolean",
    "PropertyOrder": "number",
    "ScriptContext": "string",
    "ServerOnly": "boolean",
    "SliderScaling": "string",
    "UIMaximum": "number",
    "UIMinimum": "number",
    "UINumTicks": "number"
  },
  "RenderingTest": {
    "CFrame": "CFrame",
    "ComparisonDiffThreshold": "number",
    "ComparisonMethod": "Enum.RenderingTestComparisonMethod",
    "ComparisonPsnrThreshold": "number",
    "Description": "string",
    "FieldOfView": "number",
    "PerfTest": "boolean",
    "QualityAuto": "boolean",
    "QualityLevel": "number",
    "RenderingTestFrameCount": "number",
    "ShouldSkip": "boolean",
    "Ticket": "string",
    "Timeout": "number"
  },
  "ReverbSoundEffect": {
    "DecayTime": "number",
    "Density": "number",
    "Diffusion": "number",
    "DryLevel": "number",
    "WetLevel": "number"
  },
  "RocketPropulsion": {
    "CartoonFactor": "number",
    "MaxSpeed": "number",
    "MaxThrust": "number",
    "MaxTorque": "Vector3",
    "Target": "BasePart",
    "TargetOffset": "Vector3",
    "TargetRadius": "number",
    "ThrustD": "number",
    "ThrustP": "number",
    "TurnD": "number",
    "TurnP": "number"
  },
  "RodConstraint": {
    "Length": "number",
    "LimitAngle0": "number",
    "LimitAngle1": "number",
    "LimitsEnabled": "boolean",
    "Thickness": "number"
  },
  "RootImportData": {
    "AddModelToInventory": "boolean",
    "Anchored": "boolean",
    "AnimationIdForRestPose": "number",
    "ExistingPackageId": "string",
    "ImportAsModelAsset": "boolean",
    "ImportAsPackage": "boolean",
    "InsertInWorkspace": "boolean",
    "InsertWithScenePosition": "boolean",
    "InvertNegativeFaces": "boolean",
    "KeepZeroInfluenceBones": "boolean",
    "MergeMeshes": "boolean",
    "PhysicalConstraintType": "Enum.PhysicalConstraintType",
    "PreferredUploadId": "number",
    "RestPose": "Enum.RestPose",
    "RigScale": "Enum.RigScale",
    "RigType": "Enum.RigType",
    "RigVisualization": "boolean",
    "ScaleFactor": "number",
    "ScaleUnit": "Enum.MeshScaleUnit",
    "UseSceneOriginAsPivot": "boolean",
    "UsesCages": "boolean",
    "VersionedAssetId": "number",
    "WorldForward": "Enum.NormalId",
    "WorldUp": "Enum.NormalId"
  },
  "RopeConstraint": {
    "Length": "number",
    "Restitution": "number",
    "Thickness": "number",
    "WinchEnabled": "boolean",
    "WinchForce": "number",
    "WinchResponsiveness": "number",
    "WinchSpeed": "number",
    "WinchTarget": "number"
  },
  "ScreenGui": {
    "ClipToDeviceSafeArea": "boolean",
    "DisplayOrder": "number",
    "IgnoreGuiInset": "boolean",
    "SafeAreaCompatibility": "Enum.SafeAreaCompatibility",
    "ScreenInsets": "Enum.ScreenInsets"
  },
  "ScreenshotHud": {
    "CameraButtonIcon": "ContentId",
    "CameraButtonIconContent": "Content",
    "CameraButtonPosition": "UDim2",
    "CloseButtonPosition": "UDim2",
    "CloseWhenScreenshotTaken": "boolean",
    "HideCoreGuiForCaptures": "boolean",
    "HidePlayerGuiForCaptures": "boolean",
    "Visible": "boolean"
  },
  "Script": {
    "Source": "ProtectedString"
  },
  "ScrollingFrame": {
    "AutomaticCanvasSize": "Enum.AutomaticSize",
    "BottomImage": "ContentId",
    "BottomImageContent": "Content",
    "CanvasPosition": "Vector2",
    "CanvasSize": "UDim2",
    "ElasticBehavior": "Enum.ElasticBehavior",
    "HorizontalScrollBarInset": "Enum.ScrollBarInset",
    "MidImage": "ContentId",
    "MidImageContent": "Content",
    "ScrollBarImageColor3": "Color3",
    "ScrollBarImageTransparency": "number",
    "ScrollBarThickness": "number",
    "ScrollingDirection": "Enum.ScrollingDirection",
    "ScrollingEnabled": "boolean",
    "TopImage": "ContentId",
    "TopImageContent": "Content",
    "VerticalScrollBarInset": "Enum.ScrollBarInset",
    "VerticalScrollBarPosition": "Enum.VerticalScrollBarPosition"
  },
  "Seat": {
    "Disabled": "boolean"
  },
  "SelectionBox": {
    "LineThickness": "number",
    "SurfaceColor3": "Color3",
    "SurfaceTransparency": "number"
  },
  "SelectionLasso": {
    "Humanoid": "Humanoid"
  },
  "SelectionPartLasso": {
    "Part": "BasePart"
  },
  "SelectionPointLasso": {
    "Point": "Vector3"
  },
  "SelectionSphere": {
    "SurfaceColor3": "Color3",
    "SurfaceTransparency": "number"
  },
  "SelfViewConfiguration": {
    "Open": "boolean"
  },
  "SensorBase": {
    "UpdateType": "Enum.SensorUpdateType"
  },
  "Shirt": {
    "ShirtTemplate": "ContentId",
    "ShirtTemplateContent": "Content"
  },
  "ShirtGraphic": {
    "Color3": "Color3",
    "Graphic": "ContentId",
    "TextureContent": "Content"
  },
  "SkateboardPlatform": {
    "Steer": "number",
    "StickyWheels": "boolean",
    "Throttle": "number"
  },
  "Skin": {
    "SkinColor": "BrickColor"
  },
  "Sky": {
    "CelestialBodiesShown": "boolean",
    "MoonAngularSize": "number",
    "MoonTextureContent": "Content",
    "MoonTextureId": "ContentId",
    "SkyboxBackContent": "Content",
    "SkyboxBk": "ContentId",
    "SkyboxDn": "ContentId",
    "SkyboxDownContent": "Content",
    "SkyboxFrontContent": "Content",
    "SkyboxFt": "ContentId",
    "SkyboxLeftContent": "Content",
    "SkyboxLf": "ContentId",
    "SkyboxOrientation": "Vector3",
    "SkyboxRightContent": "Content",
    "SkyboxRt": "ContentId",
    "SkyboxUp": "ContentId",
    "SkyboxUpContent": "Content",
    "StarCount": "number",
    "SunAngularSize": "number",
    "SunTextureContent": "Content",
    "SunTextureId": "ContentId"
  },
  "SlidingBallConstraint": {
    "ActuatorType": "Enum.ActuatorType",
    "LimitsEnabled": "boolean",
    "LinearResponsiveness": "number",
    "LowerLimit": "number",
    "MotorMaxAcceleration": "number",
    "MotorMaxForce": "number",
    "Restitution": "number",
    "ServoMaxForce": "number",
    "Size": "number",
    "Speed": "number",
    "TargetPosition": "number",
    "UpperLimit": "number",
    "Velocity": "number"
  },
  "Smoke": {
    "Color": "Color3",
    "Enabled": "boolean",
    "Opacity": "number",
    "RiseVelocity": "number",
    "Size": "number",
    "TimeScale": "number"
  },
  "Sound": {
    "AcousticSimulationEnabled": "boolean",
    "LoopRegion": "NumberRange",
    "Looped": "boolean",
    "PlayOnRemove": "boolean",
    "PlaybackRegion": "NumberRange",
    "PlaybackRegionsEnabled": "boolean",
    "PlaybackSpeed": "number",
    "Playing": "boolean",
    "RollOffMaxDistance": "number",
    "RollOffMinDistance": "number",
    "RollOffMode": "Enum.RollOffMode",
    "SoundGroup": "SoundGroup",
    "SoundId": "ContentId",
    "TimePosition": "number",
    "Volume": "number"
  },
  "SoundEffect": {
    "Enabled": "boolean",
    "Priority": "number"
  },
  "SoundGroup": {
    "Volume": "number"
  },
  "SoundService": {
    "AcousticSimulationEnabled": "boolean",
    "AmbientReverb": "Enum.ReverbType",
    "DiffractionEnabled": "boolean",
    "DistanceFactor": "number",
    "DopplerScale": "number",
    "ListenerCFrame": "CFrame",
    "ListenerObject": "Instance",
    "ListenerType": "Enum.ListenerType",
    "OcclusionEnabled": "boolean",
    "RespectFilteringEnabled": "boolean",
    "ReverbEnabled": "boolean",
    "RolloffScale": "number"
  },
  "Sparkles": {
    "Enabled": "boolean",
    "SparkleColor": "Color3",
    "TimeScale": "number"
  },
  "SpawnLocation": {
    "AllowTeamChangeOnTouch": "boolean",
    "Duration": "number",
    "Enabled": "boolean",
    "Neutral": "boolean",
    "TeamColor": "BrickColor"
  },
  "SpecialMesh": {
    "MeshType": "Enum.MeshType"
  },
  "SphereHandleAdornment": {
    "Radius": "number",
    "Shading": "Enum.AdornShading"
  },
  "SpotLight": {
    "Angle": "number",
    "Face": "Enum.NormalId",
    "Range": "number"
  },
  "SpringConstraint": {
    "Coils": "number",
    "Damping": "number",
    "FreeLength": "number",
    "LimitsEnabled": "boolean",
    "MaxForce": "number",
    "MaxLength": "number",
    "MinLength": "number",
    "Radius": "number",
    "Stiffness": "number",
    "Thickness": "number"
  },
  "StarterGui": {
    "ScreenOrientation": "Enum.ScreenOrientation",
    "ShowDevelopmentGui": "boolean"
  },
  "StarterPlayer": {
    "AutoJumpEnabled": "boolean",
    "CameraMaxZoomDistance": "number",
    "CameraMinZoomDistance": "number",
    "CameraMode": "Enum.CameraMode",
    "CharacterBreakJointsOnDeath": "boolean",
    "CharacterJumpHeight": "number",
    "CharacterJumpPower": "number",
    "CharacterMaxSlopeAngle": "number",
    "CharacterUseJumpPower": "boolean",
    "CharacterWalkSpeed": "number",
    "ClassicDeath": "boolean",
    "DevCameraOcclusionMode": "Enum.DevCameraOcclusionMode",
    "DevComputerCameraMovementMode": "Enum.DevComputerCameraMovementMode",
    "DevComputerMovementMode": "Enum.DevComputerMovementMode",
    "DevTouchCameraMovementMode": "Enum.DevTouchCameraMovementMode",
    "DevTouchMovementMode": "Enum.DevTouchMovementMode",
    "EnableMouseLockOption": "boolean",
    "HealthDisplayDistance": "number",
    "LoadCharacterAppearance": "boolean",
    "LuaCharacterController": "Enum.CharacterControlMode",
    "NameDisplayDistance": "number",
    "UserEmotesEnabled": "boolean"
  },
  "StateMachineTransitionDefinition": {
    "From": "Instance",
    "Priority": "number",
    "To": "Instance"
  },
  "StringValue": {
    "Value": "string"
  },
  "StudioAttachment": {
    "AutoHideParent": "boolean",
    "IsArrowVisible": "boolean",
    "Offset": "Vector2",
    "SourceAnchorPoint": "Vector2",
    "TargetAnchorPoint": "Vector2"
  },
  "StudioService": {
    "UseLocalSpace": "boolean"
  },
  "StyleDerive": {
    "Priority": "number",
    "StyleSheet": "StyleSheet"
  },
  "StyleLink": {
    "StyleSheet": "StyleSheet"
  },
  "StyleRule": {
    "Priority": "number",
    "Selector": "string"
  },
  "SunRaysEffect": {
    "Intensity": "number",
    "Spread": "number"
  },
  "SurfaceAppearance": {
    "AlphaMode": "Enum.AlphaMode",
    "Color": "Color3",
    "EmissiveStrength": "number",
    "EmissiveTint": "Color3",
    "ResampleMode": "Enum.ResamplerMode"
  },
  "SurfaceGui": {
    "AlwaysOnTop": "boolean",
    "Brightness": "number",
    "CanvasSize": "Vector2",
    "ClipsDescendants": "boolean",
    "LightInfluence": "number",
    "MaxDistance": "number",
    "PixelsPerStud": "number",
    "SizingMode": "Enum.SurfaceGuiSizingMode",
    "ToolPunchThroughDistance": "number",
    "ZOffset": "number"
  },
  "SurfaceGuiBase": {
    "Active": "boolean",
    "Adornee": "Instance",
    "Face": "Enum.NormalId"
  },
  "SurfaceLight": {
    "Angle": "number",
    "Face": "Enum.NormalId",
    "Range": "number"
  },
  "SurfaceSelection": {
    "TargetSurface": "Enum.NormalId"
  },
  "SwimController": {
    "AccelerationTime": "number",
    "PitchMaxTorque": "number",
    "PitchSpeedFactor": "number",
    "RollMaxTorque": "number",
    "RollSpeedFactor": "number"
  },
  "SyncScriptBuilder": {
    "CompileTarget": "Enum.CompileTarget",
    "CoverageInfo": "boolean",
    "DebugInfo": "boolean",
    "PackAsSource": "boolean"
  },
  "TaskScheduler": {
    "ThreadPoolConfig": "Enum.ThreadPoolConfig"
  },
  "Team": {
    "AutoAssignable": "boolean",
    "TeamColor": "BrickColor"
  },
  "TeleportOptions": {
    "ReservedServerAccessCode": "string",
    "ServerInstanceId": "string",
    "ShouldReserveServer": "boolean"
  },
  "Terrain": {
    "WaterColor": "Color3",
    "WaterReflectance": "number",
    "WaterTransparency": "number",
    "WaterWaveSize": "number",
    "WaterWaveSpeed": "number"
  },
  "TerrainDetail": {
    "EmissiveStrength": "number",
    "EmissiveTint": "Color3",
    "Face": "Enum.TerrainFace",
    "MaterialPattern": "Enum.MaterialPattern",
    "StudsPerTile": "number"
  },
  "TestService": {
    "AutoRuns": "boolean",
    "Description": "string",
    "ExecuteWithStudioRun": "boolean",
    "IsPhysicsEnvironmentalThrottled": "boolean",
    "IsSleepAllowed": "boolean",
    "NumberOfPlayers": "number",
    "SimulateSecondsLag": "number",
    "ThrottlePhysicsToRealtime": "boolean",
    "Timeout": "number"
  },
  "TextBox": {
    "ClearTextOnFocus": "boolean",
    "CursorPosition": "number",
    "FontFace": "Font",
    "LineHeight": "number",
    "MaxVisibleGraphemes": "number",
    "MultiLine": "boolean",
    "OpenTypeFeatures": "string",
    "PlaceholderColor3": "Color3",
    "PlaceholderText": "string",
    "RichText": "boolean",
    "SelectionStart": "number",
    "ShowNativeInput": "boolean",
    "Text": "string",
    "TextColor3": "Color3",
    "TextDirection": "Enum.TextDirection",
    "TextEditable": "boolean",
    "TextScaled": "boolean",
    "TextSize": "number",
    "TextStrokeColor3": "Color3",
    "TextStrokeTransparency": "number",
    "TextTransparency": "number",
    "TextTruncate": "Enum.TextTruncate",
    "TextWrapped": "boolean",
    "TextXAlignment": "Enum.TextXAlignment",
    "TextYAlignment": "Enum.TextYAlignment"
  },
  "TextButton": {
    "FontFace": "Font",
    "LineHeight": "number",
    "MaxVisibleGraphemes": "number",
    "OpenTypeFeatures": "string",
    "RichText": "boolean",
    "Text": "string",
    "TextColor3": "Color3",
    "TextDirection": "Enum.TextDirection",
    "TextScaled": "boolean",
    "TextSize": "number",
    "TextStrokeColor3": "Color3",
    "TextStrokeTransparency": "number",
    "TextTransparency": "number",
    "TextTruncate": "Enum.TextTruncate",
    "TextWrapped": "boolean",
    "TextXAlignment": "Enum.TextXAlignment",
    "TextYAlignment": "Enum.TextYAlignment"
  },
  "TextChannel": {
    "AddPlayersOnJoin": "boolean"
  },
  "TextChannelWindow": {
    "FontFace": "Font",
    "Target": "TextChannel",
    "UseDefaultFont": "boolean"
  },
  "TextChatCommand": {
    "AutocompleteVisible": "boolean",
    "Enabled": "boolean",
    "PrimaryAlias": "string",
    "SecondaryAlias": "string"
  },
  "TextChatMessage": {
    "BubbleChatMessageProperties": "BubbleChatMessageProperties",
    "ChatWindowMessageProperties": "ChatWindowMessageProperties",
    "MessageId": "string",
    "Metadata": "string",
    "PrefixText": "string",
    "Status": "Enum.TextChatMessageStatus",
    "Text": "string",
    "TextChannel": "TextChannel",
    "TextSource": "TextSource",
    "Timestamp": "DateTime",
    "Translation": "string"
  },
  "TextChatMessageProperties": {
    "PrefixText": "string",
    "Text": "string",
    "Translation": "string"
  },
  "TextGenerator": {
    "Seed": "number",
    "SystemPrompt": "string",
    "Temperature": "number",
    "TopP": "number"
  },
  "TextLabel": {
    "FontFace": "Font",
    "LineHeight": "number",
    "MaxVisibleGraphemes": "number",
    "OpenTypeFeatures": "string",
    "RichText": "boolean",
    "Text": "string",
    "TextColor3": "Color3",
    "TextDirection": "Enum.TextDirection",
    "TextScaled": "boolean",
    "TextSize": "number",
    "TextStrokeColor3": "Color3",
    "TextStrokeTransparency": "number",
    "TextTransparency": "number",
    "TextTruncate": "Enum.TextTruncate",
    "TextWrapped": "boolean",
    "TextXAlignment": "Enum.TextXAlignment",
    "TextYAlignment": "Enum.TextYAlignment"
  },
  "TextSource": {
    "CanSend": "boolean"
  },
  "Texture": {
    "OffsetStudsU": "number",
    "OffsetStudsV": "number",
    "StudsPerTileU": "number",
    "StudsPerTileV": "number"
  },
  "Tool": {
    "CanBeDropped": "boolean",
    "Enabled": "boolean",
    "Grip": "CFrame",
    "ManualActivationOnly": "boolean",
    "RequiresHandle": "boolean",
    "ToolTip": "string"
  },
  "Torque": {
    "RelativeTo": "Enum.ActuatorRelativeTo",
    "Torque": "Vector3"
  },
  "TorsionSpringConstraint": {
    "Coils": "number",
    "Damping": "number",
    "LimitsEnabled": "boolean",
    "MaxAngle": "number",
    "MaxTorque": "number",
    "Radius": "number",
    "Restitution": "number",
    "Stiffness": "number"
  },
  "TrackerLodController": {
    "AudioMode": "Enum.TrackerLodFlagMode",
    "VideoExtrapolationMode": "Enum.TrackerExtrapolationFlagMode",
    "VideoLodMode": "Enum.TrackerLodValueMode",
    "VideoMode": "Enum.TrackerLodFlagMode"
  },
  "Trail": {
    "Attachment0": "Attachment",
    "Attachment1": "Attachment",
    "Brightness": "number",
    "Color": "ColorSequence",
    "Enabled": "boolean",
    "FaceCamera": "boolean",
    "Lifetime": "number",
    "LightEmission": "number",
    "LightInfluence": "number",
    "MaxLength": "number",
    "MinLength": "number",
    "Texture": "ContentId",
    "TextureContent": "Content",
    "TextureLength": "number",
    "TextureMode": "Enum.TextureMode",
    "Transparency": "NumberSequence",
    "WidthScale": "NumberSequence"
  },
  "TremoloSoundEffect": {
    "Depth": "number",
    "Duty": "number",
    "Frequency": "number"
  },
  "TrussPart": {
    "Style": "Enum.Style"
  },
  "UIAspectRatioConstraint": {
    "AspectRatio": "number",
    "AspectType": "Enum.AspectType",
    "DominantAxis": "Enum.DominantAxis"
  },
  "UICorner": {
    "BottomLeftRadius": "UDim",
    "BottomRightRadius": "UDim",
    "CornerRadius": "UDim",
    "TopLeftRadius": "UDim",
    "TopRightRadius": "UDim"
  },
  "UIDragDetector": {
    "ActivatedCursorIcon": "ContentId",
    "ActivatedCursorIconContent": "Content",
    "BoundingBehavior": "Enum.UIDragDetectorBoundingBehavior",
    "BoundingUI": "GuiBase2d",
    "CursorIcon": "ContentId",
    "CursorIconContent": "Content",
    "DragAxis": "Vector2",
    "DragRelativity": "Enum.UIDragDetectorDragRelativity",
    "DragRotation": "number",
    "DragSpace": "Enum.UIDragDetectorDragSpace",
    "DragStyle": "Enum.UIDragDetectorDragStyle",
    "DragUDim2": "UDim2",
    "Enabled": "boolean",
    "MaxDragAngle": "number",
    "MaxDragTranslation": "UDim2",
    "MinDragAngle": "number",
    "MinDragTranslation": "UDim2",
    "ReferenceUIInstance": "GuiObject",
    "ResponseStyle": "Enum.UIDragDetectorResponseStyle",
    "SelectionModeDragSpeed": "UDim2",
    "SelectionModeRotateSpeed": "number",
    "UIDragSpeedAxisMapping": "Enum.UIDragSpeedAxisMapping"
  },
  "UIFlexItem": {
    "FlexMode": "Enum.UIFlexMode",
    "GrowRatio": "number",
    "ItemLineAlignment": "Enum.ItemLineAlignment",
    "ShrinkRatio": "number"
  },
  "UIGradient": {
    "Color": "ColorSequence",
    "Enabled": "boolean",
    "Offset": "Vector2",
    "Rotation": "number",
    "Scale": "number",
    "TileMode": "Enum.GradientTileMode",
    "Transparency": "NumberSequence",
    "Type": "Enum.GradientType"
  },
  "UIGridLayout": {
    "CellPadding": "UDim2",
    "CellSize": "UDim2",
    "FillDirectionMaxCells": "number",
    "StartCorner": "Enum.StartCorner"
  },
  "UIGridStyleLayout": {
    "FillDirection": "Enum.FillDirection",
    "HorizontalAlignment": "Enum.HorizontalAlignment",
    "SortOrder": "Enum.SortOrder",
    "VerticalAlignment": "Enum.VerticalAlignment"
  },
  "UIListLayout": {
    "HorizontalFlex": "Enum.UIFlexAlignment",
    "ItemLineAlignment": "Enum.ItemLineAlignment",
    "Padding": "UDim",
    "VerticalFlex": "Enum.UIFlexAlignment",
    "Wraps": "boolean"
  },
  "UIPadding": {
    "PaddingBottom": "UDim",
    "PaddingLeft": "UDim",
    "PaddingRight": "UDim",
    "PaddingTop": "UDim"
  },
  "UIPageLayout": {
    "Animated": "boolean",
    "Circular": "boolean",
    "EasingDirection": "Enum.EasingDirection",
    "EasingStyle": "Enum.EasingStyle",
    "GamepadInputEnabled": "boolean",
    "Padding": "UDim",
    "ScrollWheelInputEnabled": "boolean",
    "TouchInputEnabled": "boolean",
    "TweenTime": "number"
  },
  "UIScale": {
    "Scale": "number"
  },
  "UIShadow": {
    "BlurRadius": "UDim",
    "Color": "Color3",
    "Enabled": "boolean",
    "Inset": "boolean",
    "Mode": "Enum.ApplyShadowMode",
    "Offset": "UDim2",
    "ShowBehindParent": "boolean",
    "Spread": "UDim2",
    "Transparency": "number",
    "ZIndex": "number"
  },
  "UISizeConstraint": {
    "MaxSize": "Vector2",
    "MinSize": "Vector2"
  },
  "UIStroke": {
    "ApplyStrokeMode": "Enum.ApplyStrokeMode",
    "BorderOffset": "UDim",
    "BorderStrokePosition": "Enum.BorderStrokePosition",
    "Color": "Color3",
    "Enabled": "boolean",
    "LineJoinMode": "Enum.LineJoinMode",
    "StrokeSizingMode": "Enum.StrokeSizingMode",
    "Thickness": "number",
    "Transparency": "number",
    "ZIndex": "number"
  },
  "UITableLayout": {
    "FillEmptySpaceColumns": "boolean",
    "FillEmptySpaceRows": "boolean",
    "MajorAxis": "Enum.TableMajorAxis",
    "Padding": "UDim2"
  },
  "UITextSizeConstraint": {
    "MaxTextSize": "number",
    "MinTextSize": "number"
  },
  "UniversalConstraint": {
    "LimitsEnabled": "boolean",
    "MaxAngle": "number",
    "Radius": "number",
    "Restitution": "number"
  },
  "UserGameSettings": {
    "ComputerCameraMovementMode": "Enum.ComputerCameraMovementMode",
    "ComputerMovementMode": "Enum.ComputerMovementMode",
    "ControlMode": "Enum.ControlMode",
    "GamepadCameraSensitivity": "number",
    "MouseSensitivity": "number",
    "RCCProfilerRecordFrameRate": "number",
    "RCCProfilerRecordTimeFrame": "number",
    "RotationType": "Enum.RotationType",
    "SavedQualityLevel": "Enum.SavedQualitySetting",
    "TouchCameraMovementMode": "Enum.TouchCameraMovementMode",
    "TouchMovementMode": "Enum.TouchMovementMode"
  },
  "UserInputService": {
    "MouseBehavior": "Enum.MouseBehavior",
    "MouseDeltaSensitivity": "number",
    "MouseIcon": "ContentId",
    "MouseIconContent": "Content",
    "MouseIconEnabled": "boolean"
  },
  "Vector3Value": {
    "Value": "Vector3"
  },
  "VectorForce": {
    "ApplyAtCenterOfMass": "boolean",
    "Force": "Vector3",
    "RelativeTo": "Enum.ActuatorRelativeTo"
  },
  "VehicleSeat": {
    "Disabled": "boolean",
    "HeadsUpDisplay": "boolean",
    "MaxSpeed": "number",
    "Steer": "number",
    "SteerFloat": "number",
    "Throttle": "number",
    "ThrottleFloat": "number",
    "Torque": "number",
    "TurnSpeed": "number"
  },
  "VelocityMotor": {
    "CurrentAngle": "number",
    "DesiredAngle": "number",
    "Hole": "Hole",
    "MaxVelocity": "number"
  },
  "VideoDeviceInput": {
    "Active": "boolean",
    "CameraId": "string",
    "CaptureQuality": "Enum.VideoDeviceCaptureQuality"
  },
  "VideoDisplay": {
    "ResampleMode": "Enum.ResamplerMode",
    "ScaleType": "Enum.ScaleType",
    "TileSize": "UDim2",
    "VideoColor3": "Color3",
    "VideoRectOffset": "Vector2",
    "VideoRectSize": "Vector2",
    "VideoTransparency": "number"
  },
  "VideoFrame": {
    "Looped": "boolean",
    "Playing": "boolean",
    "RollOffMaxDistance": "number",
    "RollOffMinDistance": "number",
    "RollOffMode": "Enum.RollOffMode",
    "TimePosition": "number",
    "Video": "ContentId",
    "VideoContent": "Content",
    "Volume": "number"
  },
  "VideoPlayer": {
    "Looping": "boolean",
    "PlaybackSpeed": "number",
    "TimePosition": "number",
    "VideoContent": "Content",
    "Volume": "number"
  },
  "ViewportFrame": {
    "Ambient": "Color3",
    "CurrentCamera": "Camera",
    "ImageColor3": "Color3",
    "ImageTransparency": "number",
    "LightColor": "Color3",
    "LightDirection": "Vector3"
  },
  "VRService": {
    "AutomaticScaling": "Enum.VRScaling",
    "AvatarGestures": "boolean",
    "ControllerModels": "Enum.VRControllerModelMode",
    "FadeOutViewOnCollision": "boolean",
    "GuiInputUserCFrame": "Enum.UserCFrame",
    "LaserPointer": "Enum.VRLaserPointerMode"
  },
  "WeldConstraint": {
    "Enabled": "boolean",
    "Part0": "BasePart",
    "Part1": "BasePart"
  },
  "Wire": {
    "SourceInstance": "Instance",
    "SourceName": "string",
    "TargetInstance": "Instance",
    "TargetName": "string"
  },
  "WireframeHandleAdornment": {
    "Scale": "Vector3",
    "Thickness": "number"
  },
  "Workspace": {
    "AirDensity": "number",
    "AirTurbulenceIntensity": "number",
    "AllowThirdPartySales": "boolean",
    "ClientAnimatorThrottling": "Enum.ClientAnimatorThrottlingMode",
    "CurrentCamera": "Camera",
    "DistributedGameTime": "number",
    "GlobalWind": "Vector3",
    "Gravity": "number",
    "InsertPoint": "Vector3",
    "Retargeting": "Enum.AnimatorRetargetingMode",
    "StreamingAdaptiveRadius": "boolean"
  },
  "WorldModel": {
    "UseWorkspaceCollisionGroups": "boolean"
  },
  "WrapLayer": {
    "AutoSkin": "Enum.WrapLayerAutoSkin",
    "Enabled": "boolean",
    "Order": "number"
  },
  "WrapTextureTransfer": {
    "ReferenceCageMeshContent": "Content",
    "UVMaxBound": "Vector2",
    "UVMinBound": "Vector2"
  }
};
