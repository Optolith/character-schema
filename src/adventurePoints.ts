import { Integer, Object, Required, TypeAlias } from "tsondb/schema/def"
import { READ_ONLY_NOTE } from "./utils.js"

export const AdventurePoints = TypeAlias(import.meta.filename, {
  name: "AdventurePoints",
  comment: "An object storing all kinds of basic and calculated adventure points.",
  type: () =>
    Object({
      total: Required({
        comment: "Total adventure points.",
        type: Integer({ minimum: 1 }),
      }),
      available: Required({
        comment: "Adventure points available." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spent: Required({
        comment: "Adventure points spent." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnAdvantages: Required({
        comment: "Adventure points spent on advantages." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnMagicalAdvantages: Required({
        comment: "Adventure points spent on magical advantages." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnBlessedAdvantages: Required({
        comment: "Adventure points spent on blessed advantages." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnDisadvantages: Required({
        comment: "Adventure points spent on disadvantages." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnMagicalAisadvantages: Required({
        comment: "Adventure points spent on magical disadvantages." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnBlessedDisadvantages: Required({
        comment: "Adventure points spent on blessed disadvantages." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnRace: Required({
        comment: "Adventure points spent on race." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnAttributes: Required({
        comment: "Adventure points spent on attributes." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnSkills: Required({
        comment: "Adventure points spent on skills." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnCombatTechniques: Required({
        comment: "Adventure points spent on combat techniques." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnSpells: Required({
        comment: "Adventure points spent on spells, rituals and its enhancements." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnCantrips: Required({
        comment: "Adventure points spent on cantrips." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnMagicalActions: Required({
        comment: "Adventure points spent on all kinds of magical actions." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnMiturgicalChants: Required({
        comment:
          "Adventure points spent on liturgical chant, ceremonies and its enhancements." +
          READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnBlessings: Required({
        comment: "Adventure points spent on blessings." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnSpecialAbilities: Required({
        comment: "Adventure points spent on all kinds of special abilities." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
      spentOnEnergies: Required({
        comment: "Adventure points spent on adding and buying back energy points." + READ_ONLY_NOTE,
        type: Integer({ minimum: 0 }),
      }),
    }),
})
