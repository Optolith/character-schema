import {
  Enum,
  EnumCase,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { UUIDv4 } from "./utils.js"

export const PersonalData = TypeAlias(import.meta.filename, {
  name: "PersonalData",
  comment: "Personal data such as hair color and place of birth.",
  type: () =>
    Object({
      sex: Required({
        comment:
          "The character’s sex. It does not have to be binary, although it always must be specified how to handle it in the context of binary sex prerequisites. You can also provide a custom sex with a custom name.",
        type: String({ minLength: 1 }),
      }),
      family: Optional({
        comment: "The family names and/or family members.",
        type: String({ minLength: 1 }),
      }),
      placeOfBirth: Optional({
        comment: "The place where the character was born.",
        type: String({ minLength: 1 }),
      }),
      dateOfBirth: Optional({
        comment: "The date when the character was born.",
        type: String({ minLength: 1 }),
      }),
      age: Optional({
        comment: "The age of the character.",
        type: String({ minLength: 1 }),
      }),
      hairColor: Optional({
        comment: "The hair color of the character.",
        type: IncludeIdentifier(Color),
      }),
      eyeColor: Optional({
        comment: "The eye color of the character.",
        type: IncludeIdentifier(Color),
      }),
      size: Optional({
        comment: "The size of the character.",
        type: String({ minLength: 1 }),
      }),
      weight: Optional({
        comment: "The weight of the character.",
        type: String({ minLength: 1 }),
      }),
      title: Optional({
        comment: "The character’s title(s).",
        type: String({ minLength: 1 }),
      }),
      socialStatus: Optional({
        comment: "The social status.",
        type: IncludeIdentifier(UUIDv4),
      }),
      characteristics: Optional({
        comment: "The character’s characteristics.",
        type: String({ minLength: 1 }),
      }),
      otherInfo: Optional({
        comment: "Other information about the character.",
        type: String({ minLength: 1 }),
      }),
    }),
})

const Color = Enum(import.meta.filename, {
  name: "Color",
  comment: "A color, either predefined or custom.",
  values: () => ({
    Predefined: EnumCase({
      comment: "A predefined color.",
      type: IncludeIdentifier(UUIDv4),
    }),
    Custom: EnumCase({
      comment: "A custom color.",
      type: String({ minLength: 1 }),
    }),
  }),
})
