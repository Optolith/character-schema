import { SelectOptionIdentifier } from "@optolith/database-schema/types/_IdentifierGroup";
import * as DB from "tsondb/schema/dsl";
import { UUIDv4 } from "./utils.js";

export const TinyActivatable = DB.TypeAlias(import.meta.filename, {
  name: "TinyActivatable",
  comment: "A tiny activatable item reference.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The identifier.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
    }),
});

export const Activatable = DB.TypeAlias(import.meta.filename, {
  name: "Activatable",
  comment:
    "An activatable item reference. Activatables are advantages, disadvantages and special abilities.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The identifier.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
    }),
});

export const ActivatableInstance = DB.TypeAlias(import.meta.filename, {
  name: "ActivatableInstance",
  comment: "An instance of an activatable item.",
  type: () =>
    DB.Object({
      options: DB.Optional({
        comment:
          "One or multiple options for the activatable. The meaning depends on the activatable.",
        type: DB.Array(DB.IncludeIdentifier(ActivatableInstanceOption), { minItems: 1 }),
      }),
      level: DB.Optional({
        comment: "The instance level (if the activatable has levels).",
        type: DB.Integer({ minimum: 1 }),
      }),
      custom_adventure_points_value: DB.Optional({
        comment: "If provided, a custom adventure points value has been set for this instance.",
        type: DB.Integer({ minimum: 0 }),
      }),
    }),
});

export const ActivatableInstanceOption = DB.Enum(import.meta.filename, {
  name: "ActivatableInstanceOption",
  comment: "An activatable option, either predefined or custom.",
  values: () => ({
    Predefined: DB.EnumCase({
      comment: "A predefined option.",
      type: DB.IncludeIdentifier(ReferencedErasedSelectOptionIdentifier),
    }),
    Custom: DB.EnumCase({
      comment: "A custom option.",
      type: DB.String({ minLength: 1 }),
    }),
  }),
});

const ReferencedErasedSelectOptionIdentifier = DB.Enum(import.meta.filename, {
  name: "ReferencedErasedSelectOptionIdentifier",
  values: () =>
    Object.fromEntries(
      Object.keys(SelectOptionIdentifier.type.value.values).map((name) => [
        name,
        DB.EnumCase({ type: DB.IncludeIdentifier(UUIDv4) }),
      ]),
    ) as Record<
      keyof typeof SelectOptionIdentifier.type.value.values,
      DB.EnumCase<DB.IncludeIdentifier<[], typeof UUIDv4>>
    >,
});
