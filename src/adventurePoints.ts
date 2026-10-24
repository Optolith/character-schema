import * as DB from "tsondb/schema/dsl";
import { READ_ONLY_NOTE } from "./utils.js";

export const AdventurePoints = DB.TypeAlias(import.meta.filename, {
  name: "AdventurePoints",
  comment: "An object storing all kinds of basic and calculated adventure points.",
  type: () =>
    DB.Object({
      total: DB.Required({
        comment: "Total adventure points.",
        type: DB.Integer({ minimum: 1 }),
      }),
      available: DB.Required({
        comment: "Adventure points available." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spent: DB.Required({
        comment: "Adventure points spent." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnAdvantages: DB.Required({
        comment: "Adventure points spent on advantages." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnMagicalAdvantages: DB.Required({
        comment: "Adventure points spent on magical advantages." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnBlessedAdvantages: DB.Required({
        comment: "Adventure points spent on blessed advantages." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnDisadvantages: DB.Required({
        comment: "Adventure points spent on disadvantages." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnMagicalAisadvantages: DB.Required({
        comment: "Adventure points spent on magical disadvantages." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnBlessedDisadvantages: DB.Required({
        comment: "Adventure points spent on blessed disadvantages." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnRace: DB.Required({
        comment: "Adventure points spent on race." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnAttributes: DB.Required({
        comment: "Adventure points spent on attributes." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnSkills: DB.Required({
        comment: "Adventure points spent on skills." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnCombatTechniques: DB.Required({
        comment: "Adventure points spent on combat techniques." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnSpells: DB.Required({
        comment: "Adventure points spent on spells, rituals and its enhancements." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnCantrips: DB.Required({
        comment: "Adventure points spent on cantrips." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnMagicalActions: DB.Required({
        comment: "Adventure points spent on all kinds of magical actions." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnMiturgicalChants: DB.Required({
        comment:
          "Adventure points spent on liturgical chant, ceremonies and its enhancements." +
          READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnBlessings: DB.Required({
        comment: "Adventure points spent on blessings." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnSpecialAbilities: DB.Required({
        comment: "Adventure points spent on all kinds of special abilities." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
      spentOnEnergies: DB.Required({
        comment: "Adventure points spent on adding and buying back energy points." + READ_ONLY_NOTE,
        type: DB.Integer({ minimum: 0 }),
      }),
    }),
});
