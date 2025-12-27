import {
  Boolean,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Object,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"

export const Sex = Enum(import.meta.filename, {
  name: "Sex",
  comment:
    "The character’s sex. It does not have to be binary, although it always must be specified how to handle it in the context of binary sex prerequisites. You can also provide a custom sex with a custom name.",
  values: () => ({
    Male: EnumCase({ type: null }),
    Female: EnumCase({ type: null }),
    BalThani: EnumCase({ type: IncludeIdentifier(NonBinarySex) }),
    Tsajana: EnumCase({ type: IncludeIdentifier(NonBinarySex) }),
    Custom: EnumCase({ type: IncludeIdentifier(CustomSex) }),
  }),
})

export const NonBinarySex = TypeAlias(import.meta.filename, {
  name: "NonBinarySex",
  comment: "A non-binary sex option.",
  type: () =>
    Object({
      binaryHandling: Required({
        comment: "Defines how a sex should be treated when checking prerequisites.",
        type: IncludeIdentifier(BinaryHandling),
      }),
    }),
})

export const CustomSex = TypeAlias(import.meta.filename, {
  name: "CustomSex",
  comment: "A custom non-binary sex option.",
  type: () =>
    Object({
      name: Required({
        comment: "The custom sex name.",
        type: String({ minLength: 1 }),
      }),
      binaryHandling: Required({
        comment: "Defines how a sex should be treated when checking prerequisites.",
        type: IncludeIdentifier(BinaryHandling),
      }),
    }),
})

export const BinaryHandling = TypeAlias(import.meta.filename, {
  name: "BinaryHandling",
  comment: "Defines how a sex should be treated when checking prerequisites.",
  type: () =>
    Object({
      asMale: Required({
        comment: "Defines if the sex should be treated as male when checking prerequisites.",
        type: Boolean(),
      }),
      asFemale: Required({
        comment: "Defines if the sex should be treated as female when checking prerequisites.",
        type: Boolean(),
      }),
    }),
})
