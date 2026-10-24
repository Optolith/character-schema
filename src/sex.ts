import * as DB from "tsondb/schema/dsl";

export const Sex = DB.Enum(import.meta.filename, {
  name: "Sex",
  comment:
    "The character’s sex. It does not have to be binary, although it always must be specified how to handle it in the context of binary sex prerequisites. You can also provide a custom sex with a custom name.",
  values: () => ({
    Male: DB.EnumCase({ type: null }),
    Female: DB.EnumCase({ type: null }),
    BalThani: DB.EnumCase({ type: DB.IncludeIdentifier(NonBinarySex) }),
    Tsajana: DB.EnumCase({ type: DB.IncludeIdentifier(NonBinarySex) }),
    Custom: DB.EnumCase({ type: DB.IncludeIdentifier(CustomSex) }),
  }),
});

export const NonBinarySex = DB.TypeAlias(import.meta.filename, {
  name: "NonBinarySex",
  comment: "A non-binary sex option.",
  type: () =>
    DB.Object({
      binaryHandling: DB.Required({
        comment: "Defines how a sex should be treated when checking prerequisites.",
        type: DB.IncludeIdentifier(BinaryHandling),
      }),
    }),
});

export const CustomSex = DB.TypeAlias(import.meta.filename, {
  name: "CustomSex",
  comment: "A custom non-binary sex option.",
  type: () =>
    DB.Object({
      name: DB.Required({
        comment: "The custom sex name.",
        type: DB.String({ minLength: 1 }),
      }),
      binaryHandling: DB.Required({
        comment: "Defines how a sex should be treated when checking prerequisites.",
        type: DB.IncludeIdentifier(BinaryHandling),
      }),
    }),
});

export const BinaryHandling = DB.TypeAlias(import.meta.filename, {
  name: "BinaryHandling",
  comment: "Defines how a sex should be treated when checking prerequisites.",
  type: () =>
    DB.Object({
      asMale: DB.Required({
        comment: "Defines if the sex should be treated as male when checking prerequisites.",
        type: DB.Boolean(),
      }),
      asFemale: DB.Required({
        comment: "Defines if the sex should be treated as female when checking prerequisites.",
        type: DB.Boolean(),
      }),
    }),
});
