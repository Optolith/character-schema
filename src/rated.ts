import { Array, IncludeIdentifier, Integer, Object, Required, TypeAlias } from "tsondb/schema/def"
import { UUIDv4 } from "./utils.js"

export const Attribute = TypeAlias(import.meta.filename, {
  name: "Attribute",
  comment: "An attribute with its value.",
  type: () =>
    Object({
      id: Required({
        comment: "The attribute identifier.",
        type: IncludeIdentifier(UUIDv4),
      }),
      value: Required({
        comment: "The attribute value.",
        type: Integer({ minimum: 9 }),
      }),
    }),
})

export const Skill = TypeAlias(import.meta.filename, {
  name: "Skill",
  comment: "A skill with its rating.",
  type: () =>
    Object({
      id: Required({
        comment: "The skill identifier.",
        type: IncludeIdentifier(UUIDv4),
      }),
      value: Required({
        comment: "The skill rating.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

export const CombatTechnique = TypeAlias(import.meta.filename, {
  name: "CombatTechnique",
  comment: "A combat technique with its rating.",
  type: () =>
    Object({
      id: Required({
        comment: "The combat technique identifier.",
        type: IncludeIdentifier(UUIDv4),
      }),
      value: Required({
        comment: "The combat technique rating.",
        type: Integer({ minimum: 7 }),
      }),
    }),
})

export const ActivatableRated = TypeAlias(import.meta.filename, {
  name: "ActivatableRated",
  comment: "An activatable item with its rating.",
  type: () =>
    Object({
      id: Required({
        comment: "The skill identifier.",
        type: IncludeIdentifier(UUIDv4),
      }),
      value: Required({
        comment: "The skill rating.",
        type: Integer({ minimum: 0 }),
      }),
    }),
})

export const ActivatableRatedWithEnhancements = TypeAlias(import.meta.filename, {
  name: "ActivatableRatedWithEnhancements",
  comment: "An activatable item with its rating and purchased enhancements.",
  type: () =>
    Object({
      id: Required({
        comment: "The skill identifier.",
        type: IncludeIdentifier(UUIDv4),
      }),
      value: Required({
        comment: "The skill rating.",
        type: Integer({ minimum: 0 }),
      }),
      enhancements: Required({
        comment: "Purchased enhancements.",
        type: Array(IncludeIdentifier(UUIDv4), {
          minItems: 1,
          uniqueItems: true,
        }),
      }),
    }),
})
