import * as DB from "tsondb/schema/dsl";
import { READ_ONLY_NOTE } from "./utils.js";

export const DerivedCharacteristic = DB.TypeAlias(import.meta.filename, {
  name: "DerivedCharacteristic",
  comment: "A derived characteristic with its calculated parts.",
  type: () =>
    DB.Object({
      base: DB.Required({
        comment: "The base value." + READ_ONLY_NOTE,
        type: DB.Integer(),
      }),
      modifier: DB.Required({
        comment:
          "The modifier depending on relevant advantages, disadvantages and special abilities." +
          READ_ONLY_NOTE,
        type: DB.Integer(),
      }),
      value: DB.Required({
        comment: "The (final) value." + READ_ONLY_NOTE,
        type: DB.Integer(),
      }),
    }),
});

export const Energy = DB.TypeAlias(import.meta.filename, {
  name: "Energy",
  comment:
    "A derived characteristic representing an energy where points can be purchased and permanently lost.",
  type: () =>
    DB.Object({
      base: DB.Required({
        comment: "The base value." + READ_ONLY_NOTE,
        type: DB.Integer(),
      }),
      modifier: DB.Required({
        comment:
          "The modifier depending on relevant advantages, disadvantages and special abilities." +
          READ_ONLY_NOTE,
        type: DB.Integer(),
      }),
      purchased: DB.Required({
        comment: "The number of points purchased.",
        type: DB.Integer({ minimum: 0 }),
      }),
      permanently_lost: DB.Required({
        comment: "The number of points permanently lost.",
        type: DB.Integer({ minimum: 0 }),
      }),
      maximum: DB.Required({
        comment: "The (final) maximum." + READ_ONLY_NOTE,
        type: DB.Integer(),
      }),
    }),
});

export const EnergyWithBuyBack = DB.TypeAlias(import.meta.filename, {
  name: "EnergyWithBuyBack",
  comment:
    "A derived characteristic representing an energy where points can be purchased and permanently lost, with the option to buy back lost points.",
  type: () =>
    DB.Object({
      base: DB.Required({
        comment: "The base value." + READ_ONLY_NOTE,
        type: DB.Integer(),
      }),
      modifier: DB.Required({
        comment:
          "The modifier depending on relevant advantages, disadvantages and special abilities." +
          READ_ONLY_NOTE,
        type: DB.Integer(),
      }),
      purchased: DB.Required({
        comment: "The number of points purchased.",
        type: DB.Integer({ minimum: 0 }),
      }),
      permanently_lost: DB.Required({
        comment: "The number of points permanently lost.",
        type: DB.Integer({ minimum: 0 }),
      }),
      permanently_lost_bought_back: DB.Required({
        comment: "The number of permanently lost points that have been bought back.",
        type: DB.Integer({ minimum: 0 }),
      }),
      maximum: DB.Required({
        comment: "The (final) maximum." + READ_ONLY_NOTE,
        type: DB.Integer(),
      }),
    }),
});
