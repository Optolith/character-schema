import { SelectOptionIdentifier } from "optolith-database-schema/types/_IdentifierGroup"
import {
  Array,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object as Object_,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { UUIDv4 } from "./utils.js"

export const TinyActivatable = TypeAlias(import.meta.filename, {
  name: "TinyActivatable",
  comment: "A tiny activatable item reference.",
  type: () =>
    Object_({
      id: Required({
        comment: "The identifier.",
        type: IncludeIdentifier(UUIDv4),
      }),
    }),
})

export const Activatable = TypeAlias(import.meta.filename, {
  name: "Activatable",
  comment:
    "An activatable item reference. Activatables are advantages, disadvantages and special abilities.",
  type: () =>
    Object_({
      id: Required({
        comment: "The identifier.",
        type: IncludeIdentifier(UUIDv4),
      }),
    }),
})

export const ActivatableInstance = TypeAlias(import.meta.filename, {
  name: "ActivatableInstance",
  comment: "An instance of an activatable item.",
  type: () =>
    Object_({
      options: Optional({
        comment:
          "One or multiple options for the activatable. The meaning depends on the activatable.",
        type: Array(IncludeIdentifier(ActivatableInstanceOption), { minItems: 1 }),
      }),
      level: Optional({
        comment: "The instance level (if the activatable has levels).",
        type: Integer({ minimum: 1 }),
      }),
      custom_adventure_points_value: Optional({
        comment: "If provided, a custom adventure points value has been set for this instance.",
        type: Integer({ minimum: 0 }),
      }),
    }),
})

export const ActivatableInstanceOption = Enum(import.meta.filename, {
  name: "ActivatableInstanceOption",
  comment: "An activatable option, either predefined or custom.",
  values: () => ({
    Predefined: EnumCase({
      comment: "A predefined option.",
      type: IncludeIdentifier(ReferencedErasedSelectOptionIdentifier),
    }),
    Custom: EnumCase({
      comment: "A custom option.",
      type: String({ minLength: 1 }),
    }),
  }),
})

const ReferencedErasedSelectOptionIdentifier = Enum(import.meta.filename, {
  name: "ReferencedErasedSelectOptionIdentifier",
  values: () =>
    Object.fromEntries(
      Object.keys(SelectOptionIdentifier.type.value.values).map(name => [
        name,
        EnumCase({ type: IncludeIdentifier(UUIDv4) }),
      ])
    ) as Record<
      keyof typeof SelectOptionIdentifier.type.value.values,
      EnumCase<IncludeIdentifier<[], typeof UUIDv4>>
    >,
})
