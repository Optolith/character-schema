import {
  Array,
  Boolean,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"
import { UUIDv4 } from "./utils.js"

export const Rules = TypeAlias(import.meta.filename, {
  name: "Rules",
  comment: "The rules settings for the character.",
  type: () =>
    Object({
      includeAllPublications: Required({
        comment:
          "Whether the character makes use of all publications except for publications with adult content and adventures, which have to be specified explicitly using `includePublications`.",
        type: Boolean(),
      }),
      includePublications: Required({
        comment:
          "Explicitly used publications. If `includeAllPublications` is set to `true`, only affects publications that are not covered by `includeAllPublications`.",
        type: Array(IncludeIdentifier(UUIDv4)),
      }),
      focusRules: Required({
        comment: "Active focus rules.",
        type: Array(IncludeIdentifier(FocusRule)),
      }),
      optionalRules: Required({
        comment: "Active optional rules. Each optional rule may have one or more options selected.",
        type: Array(IncludeIdentifier(OptionalRule)),
      }),
    }),
})

export const FocusRule = TypeAlias(import.meta.filename, {
  name: "FocusRule",
  comment: "An active focus rule.",
  type: () =>
    Object({
      id: Required({
        comment: "The focus rule identifier.",
        type: IncludeIdentifier(UUIDv4),
      }),
    }),
})

export const OptionalRule = TypeAlias(import.meta.filename, {
  name: "OptionalRule",
  comment: "An active optional rule. An optional rule may have one or more options selected.",
  type: () =>
    Object({
      id: Required({
        comment: "The optional rule identifier.",
        type: IncludeIdentifier(UUIDv4),
      }),
      options: Optional({
        comment:
          "An array of one or more options. The exact meaning of each option varies based on the optional rule.",
        type: Array(IncludeIdentifier(UUIDv4), { minItems: 1 }),
      }),
    }),
})
