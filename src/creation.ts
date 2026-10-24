import * as DB from "tsondb/schema/dsl";
import { READ_ONLY_NOTE, UUIDv4 } from "./utils.js";

export const ExperienceLevel = DB.TypeAlias(import.meta.filename, {
  name: "ExperienceLevel",
  comment:
    "An object storing the identifiers of the experience level the character started at and the current experience level, derived from total adventure points.",
  type: () =>
    DB.Object({
      start: DB.Required({
        comment: "The start experience level identifier.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
      current: DB.Required({
        comment: "The current experience level identifier." + READ_ONLY_NOTE,
        type: DB.IncludeIdentifier(UUIDv4),
      }),
    }),
});

export const Race = DB.TypeAlias(import.meta.filename, {
  name: "Race",
  comment: "An object storing the identifiers of the race and its optional race variant.",
  type: () =>
    DB.Object({
      base: DB.Required({
        comment: "The base race.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
      variant: DB.Optional({
        comment: "The race variant.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
      selectedAttributeAdjustment: DB.Required({
        comment: "The identifier of the attribute adjustment that has been selected from the race.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
    }),
});

export const Culture = DB.TypeAlias(import.meta.filename, {
  name: "Culture",
  comment:
    "An object storing the identifier of the culture and if the cultural package has been applied.",
  type: () =>
    DB.Object({
      base: DB.Required({
        comment: "The culture identifier.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
      isCulturalPackageApplied: DB.Required({
        comment:
          "Describes whether the cultural package has been applied when creating the character.",
        type: DB.Boolean(),
      }),
    }),
});

export const Profession = DB.TypeAlias(import.meta.filename, {
  name: "Profession",
  comment:
    "An object storing the identifiers of the profession, its instance and its optional profession variant.",
  type: () =>
    DB.Object({
      package: DB.Required({
        comment:
          "The profession instance identifier. Profession instances are versions of the same profession but slightly different values, such as in extension rule books existing professions might get an additional style special ability.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
      variant: DB.Optional({
        comment: "The profession variant identifier.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
      customName: DB.Optional({
        comment: "A custom name for the profession, if provided.",
        type: DB.String({ minLength: 1 }),
      }),
    }),
});

export const Curriculum = DB.TypeAlias(import.meta.filename, {
  name: "Curriculum",
  comment: "An object storing the identifiers of the curriculum and it’s optional lesson package.",
  type: () =>
    DB.Object({
      educationalInstitution: DB.Required({
        comment: "The educational institution's curriculum identifier.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
      lessonPackage: DB.Optional({
        comment: "The lesson package identifier.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
    }),
});
