import { Integer, Object, Required, TypeAlias } from "tsondb/schema/def"
import { READ_ONLY_NOTE } from "./utils.js"

export const DerivedCharacteristic = TypeAlias(import.meta.filename, {
  name: "DerivedCharacteristic",
  comment: "A derived characteristic with its calculated parts.",
  type: () =>
    Object({
      base: Required({
        comment: "The base value." + READ_ONLY_NOTE,
        type: Integer(),
      }),
      modifier: Required({
        comment:
          "The modifier depending on relevant advantages, disadvantages and special abilities." +
          READ_ONLY_NOTE,
        type: Integer(),
      }),
      value: Required({
        comment: "The (final) value." + READ_ONLY_NOTE,
        type: Integer(),
      }),
    }),
})

export const Energy = TypeAlias(import.meta.filename, {
  name: "Energy",
  comment:
    "A derived characteristic representing an energy where points can be purchased and permanently lost.",
  type: () =>
    Object({
      base: Required({
        comment: "The base value." + READ_ONLY_NOTE,
        type: Integer(),
      }),
      modifier: Required({
        comment:
          "The modifier depending on relevant advantages, disadvantages and special abilities." +
          READ_ONLY_NOTE,
        type: Integer(),
      }),
      purchased: Required({
        comment: "The number of points purchased.",
        type: Integer({ minimum: 0 }),
      }),
      permanently_lost: Required({
        comment: "The number of points permanently lost.",
        type: Integer({ minimum: 0 }),
      }),
      maximum: Required({
        comment: "The (final) maximum." + READ_ONLY_NOTE,
        type: Integer(),
      }),
    }),
})

export const EnergyWithBuyBack = TypeAlias(import.meta.filename, {
  name: "EnergyWithBuyBack",
  comment:
    "A derived characteristic representing an energy where points can be purchased and permanently lost, with the option to buy back lost points.",
  type: () =>
    Object({
      base: Required({
        comment: "The base value." + READ_ONLY_NOTE,
        type: Integer(),
      }),
      modifier: Required({
        comment:
          "The modifier depending on relevant advantages, disadvantages and special abilities." +
          READ_ONLY_NOTE,
        type: Integer(),
      }),
      purchased: Required({
        comment: "The number of points purchased.",
        type: Integer({ minimum: 0 }),
      }),
      permanently_lost: Required({
        comment: "The number of points permanently lost.",
        type: Integer({ minimum: 0 }),
      }),
      permanently_lost_bought_back: Required({
        comment: "The number of permanently lost points that have been bought back.",
        type: Integer({ minimum: 0 }),
      }),
      maximum: Required({
        comment: "The (final) maximum." + READ_ONLY_NOTE,
        type: Integer(),
      }),
    }),
})
