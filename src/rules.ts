import * as DB from "tsondb/schema/dsl";
import { UUIDv4 } from "./utils.js";

export const Rules = DB.TypeAlias(import.meta.filename, {
  name: "Rules",
  comment: "The rules settings for the character.",
  type: () =>
    DB.Object({
      includeAllPublications: DB.Required({
        comment:
          "Whether the character makes use of all publications except for publications with adult content and adventures, which have to be specified explicitly using `includePublications`.",
        type: DB.Boolean(),
      }),
      includePublications: DB.Required({
        comment:
          "Explicitly used publications. If `includeAllPublications` is set to `true`, only affects publications that are not covered by `includeAllPublications`.",
        type: DB.Array(DB.IncludeIdentifier(UUIDv4)),
      }),
      focusRules: DB.Required({
        comment: "Active focus rules.",
        type: DB.Array(DB.IncludeIdentifier(FocusRule)),
      }),
      optionalRules: DB.Required({
        comment: "Active optional rules. Each optional rule may have one or more options selected.",
        type: DB.Array(DB.IncludeIdentifier(OptionalRule)),
      }),
    }),
});

export const FocusRule = DB.TypeAlias(import.meta.filename, {
  name: "FocusRule",
  comment: "An active focus rule.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The focus rule identifier.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
    }),
});

export const OptionalRule = DB.TypeAlias(import.meta.filename, {
  name: "OptionalRule",
  comment: "An active optional rule. An optional rule may have one or more options selected.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The optional rule identifier.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
      options: DB.Optional({
        comment:
          "An array of one or more options. The exact meaning of each option varies based on the optional rule.",
        type: DB.Array(DB.IncludeIdentifier(UUIDv4), { minItems: 1 }),
      }),
    }),
});
