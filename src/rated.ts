import * as DB from "tsondb/schema/dsl";
import { UUIDv4 } from "./utils.js";

export const Attribute = DB.TypeAlias(import.meta.filename, {
  name: "Attribute",
  comment: "An attribute with its value.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The attribute identifier.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
      value: DB.Required({
        comment: "The attribute value.",
        type: DB.Integer({ minimum: 9 }),
      }),
    }),
});

export const Skill = DB.TypeAlias(import.meta.filename, {
  name: "Skill",
  comment: "A skill with its rating.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The skill identifier.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
      value: DB.Required({
        comment: "The skill rating.",
        type: DB.Integer({ minimum: 1 }),
      }),
    }),
});

export const CombatTechnique = DB.TypeAlias(import.meta.filename, {
  name: "CombatTechnique",
  comment: "A combat technique with its rating.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The combat technique identifier.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
      value: DB.Required({
        comment: "The combat technique rating.",
        type: DB.Integer({ minimum: 7 }),
      }),
    }),
});

export const ActivatableRated = DB.TypeAlias(import.meta.filename, {
  name: "ActivatableRated",
  comment: "An activatable item with its rating.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The skill identifier.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
      value: DB.Required({
        comment: "The skill rating.",
        type: DB.Integer({ minimum: 0 }),
      }),
    }),
});

export const ActivatableRatedWithEnhancements = DB.TypeAlias(import.meta.filename, {
  name: "ActivatableRatedWithEnhancements",
  comment: "An activatable item with its rating and purchased enhancements.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The skill identifier.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
      value: DB.Required({
        comment: "The skill rating.",
        type: DB.Integer({ minimum: 0 }),
      }),
      enhancements: DB.Required({
        comment: "Purchased enhancements.",
        type: DB.Array(DB.IncludeIdentifier(UUIDv4), {
          minItems: 1,
          uniqueItems: true,
        }),
      }),
    }),
});
