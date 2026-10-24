import * as DB from "tsondb/schema/dsl";

export const Purse = DB.TypeAlias(import.meta.filename, {
  name: "Purse",
  comment: "The money the character owns.",
  type: () =>
    DB.Object({
      kreutzers: DB.Required({
        comment: "The number of kreutzers the character owns.",
        type: DB.Integer({ minimum: 0 }),
      }),
      halers: DB.Required({
        comment: "The number of halers the character owns.",
        type: DB.Integer({ minimum: 0 }),
      }),
      silverthalers: DB.Required({
        comment: "The number of silverthalers the character owns.",
        type: DB.Integer({ minimum: 0 }),
      }),
      ducats: DB.Required({
        comment: "The number of ducats the character owns.",
        type: DB.Integer({ minimum: 0 }),
      }),
    }),
});
