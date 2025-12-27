import { Integer, Object, Required, TypeAlias } from "tsondb/schema/def"

export const Purse = TypeAlias(import.meta.filename, {
  name: "Purse",
  comment: "The money the character owns.",
  type: () =>
    Object({
      kreutzers: Required({
        comment: "The number of kreutzers the character owns.",
        type: Integer({ minimum: 0 }),
      }),
      halers: Required({
        comment: "The number of halers the character owns.",
        type: Integer({ minimum: 0 }),
      }),
      silverthalers: Required({
        comment: "The number of silverthalers the character owns.",
        type: Integer({ minimum: 0 }),
      }),
      ducats: Required({
        comment: "The number of ducats the character owns.",
        type: Integer({ minimum: 0 }),
      }),
    }),
})
