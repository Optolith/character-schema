import {
  Boolean,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { READ_ONLY_NOTE, UUIDv4 } from "./utils.js"

export const ExperienceLevel = TypeAlias(import.meta.filename, {
  name: "ExperienceLevel",
  comment:
    "An object storing the identifiers of the experience level the character started at and the current experience level, derived from total adventure points.",
  type: () =>
    Object({
      start: Required({
        comment: "The start experience level identifier.",
        type: IncludeIdentifier(UUIDv4),
      }),
      current: Required({
        comment: "The current experience level identifier." + READ_ONLY_NOTE,
        type: IncludeIdentifier(UUIDv4),
      }),
    }),
})

export const Race = TypeAlias(import.meta.filename, {
  name: "Race",
  comment: "An object storing the identifiers of the race and its optional race variant.",
  type: () =>
    Object({
      base: Required({
        comment: "The base race.",
        type: IncludeIdentifier(UUIDv4),
      }),
      variant: Optional({
        comment: "The race variant.",
        type: IncludeIdentifier(UUIDv4),
      }),
      selectedAttributeAdjustment: Required({
        comment: "The identifier of the attribute adjustment that has been selected from the race.",
        type: IncludeIdentifier(UUIDv4),
      }),
    }),
})

export const Culture = TypeAlias(import.meta.filename, {
  name: "Culture",
  comment:
    "An object storing the identifier of the culture and if the cultural package has been applied.",
  type: () =>
    Object({
      base: Required({
        comment: "The culture identifier.",
        type: IncludeIdentifier(UUIDv4),
      }),
      isCulturalPackageApplied: Required({
        comment:
          "Describes whether the cultural package has been applied when creating the character.",
        type: Boolean(),
      }),
    }),
})

export const Profession = TypeAlias(import.meta.filename, {
  name: "Profession",
  comment:
    "An object storing the identifiers of the profession, its instance and its optional profession variant.",
  type: () =>
    Object({
      package: Required({
        comment:
          "The profession instance identifier. Profession instances are versions of the same profession but slightly different values, such as in extension rule books existing professions might get an additional style special ability.",
        type: IncludeIdentifier(UUIDv4),
      }),
      variant: Optional({
        comment: "The profession variant identifier.",
        type: IncludeIdentifier(UUIDv4),
      }),
      customName: Optional({
        comment: "A custom name for the profession, if provided.",
        type: String({ minLength: 1 }),
      }),
    }),
})

export const Curriculum = TypeAlias(import.meta.filename, {
  name: "Curriculum",
  comment: "An object storing the identifiers of the curriculum and it’s optional lesson package.",
  type: () =>
    Object({
      educationalInstitution: Required({
        comment: "The educational institution's curriculum identifier.",
        type: IncludeIdentifier(UUIDv4),
      }),
      lessonPackage: Optional({
        comment: "The lesson package identifier.",
        type: IncludeIdentifier(UUIDv4),
      }),
    }),
})
