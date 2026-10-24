import * as DB from "tsondb/schema/dsl";
import { UUIDv4 } from "./utils.js";

export const PersonalData = DB.TypeAlias(import.meta.filename, {
  name: "PersonalData",
  comment: "Personal data such as hair color and place of birth.",
  type: () =>
    DB.Object({
      sex: DB.Required({
        comment:
          "The character’s sex. It does not have to be binary, although it always must be specified how to handle it in the context of binary sex prerequisites. You can also provide a custom sex with a custom name.",
        type: DB.String({ minLength: 1 }),
      }),
      family: DB.Optional({
        comment: "The family names and/or family members.",
        type: DB.String({ minLength: 1 }),
      }),
      placeOfBirth: DB.Optional({
        comment: "The place where the character was born.",
        type: DB.String({ minLength: 1 }),
      }),
      dateOfBirth: DB.Optional({
        comment: "The date when the character was born.",
        type: DB.String({ minLength: 1 }),
      }),
      age: DB.Optional({
        comment: "The age of the character.",
        type: DB.String({ minLength: 1 }),
      }),
      hairColor: DB.Optional({
        comment: "The hair color of the character.",
        type: DB.IncludeIdentifier(Color),
      }),
      eyeColor: DB.Optional({
        comment: "The eye color of the character.",
        type: DB.IncludeIdentifier(Color),
      }),
      size: DB.Optional({
        comment: "The size of the character.",
        type: DB.String({ minLength: 1 }),
      }),
      weight: DB.Optional({
        comment: "The weight of the character.",
        type: DB.String({ minLength: 1 }),
      }),
      title: DB.Optional({
        comment: "The character’s title(s).",
        type: DB.String({ minLength: 1 }),
      }),
      socialStatus: DB.Optional({
        comment: "The social status.",
        type: DB.IncludeIdentifier(UUIDv4),
      }),
      characteristics: DB.Optional({
        comment: "The character’s characteristics.",
        type: DB.String({ minLength: 1 }),
      }),
      otherInfo: DB.Optional({
        comment: "Other information about the character.",
        type: DB.String({ minLength: 1 }),
      }),
    }),
});

const Color = DB.Enum(import.meta.filename, {
  name: "Color",
  comment: "A color, either predefined or custom.",
  values: () => ({
    Predefined: DB.EnumCase({
      comment: "A predefined color.",
      type: DB.IncludeIdentifier(UUIDv4),
    }),
    Custom: DB.EnumCase({
      comment: "A custom color.",
      type: DB.String({ minLength: 1 }),
    }),
  }),
});
