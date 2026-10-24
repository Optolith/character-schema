import {
  MagicalActionIdentifier,
  SpecialAbilityIdentifier,
} from "@optolith/database-schema/types/_IdentifierGroup";
import * as DB from "tsondb/schema/dsl";
import { Activatable, TinyActivatable } from "./activatables.js";
import { AdventurePoints } from "./adventurePoints.js";
import { Purse } from "./belongings.js";
import { Culture, Curriculum, ExperienceLevel, Profession, Race } from "./creation.js";
import { DerivedCharacteristic, Energy, EnergyWithBuyBack } from "./derivedCharacteristics.js";
import { PersonalData } from "./personalData.js";
import {
  ActivatableRated,
  ActivatableRatedWithEnhancements,
  Attribute,
  CombatTechnique,
  Skill,
} from "./rated.js";
import { Rules } from "./rules.js";

export const Character = DB.Entity(import.meta.filename, {
  name: "Character",
  namePlural: "Characters",
  comment: "An exported character object from Optolith.",
  type: () =>
    DB.Object({
      version: DB.Required({
        comment:
          "A valid semantic version (https://semver.org), representing the character schema version of this file.",
        type: DB.String({
          pattern:
            /^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$/,
        }), // The pattern is the recommended regex for semantic versioning: https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string.
      }),
      name: DB.Required({
        comment: "The character’s name.",
        type: DB.String({ minLength: 1 }),
      }),
      dateCreated: DB.Required({
        comment: "Date of character creation, in ISO8601 format.",
        type: DB.Date({ time: true }),
      }),
      dateLastModified: DB.Required({
        comment: "Date of character last modified, in ISO8601 format.",
        type: DB.Date({ time: true }),
      }),
      adventurePoints: DB.Required({
        comment: "An object storing all kinds of basic and calculated adventure points.",
        type: DB.IncludeIdentifier(AdventurePoints),
      }),
      experienceLevel: DB.Required({
        comment:
          "An object storing the identifiers of the experience level the character started at and the current experience level, derived from total adventure points.",
        type: DB.IncludeIdentifier(ExperienceLevel),
      }),
      isCharacterCreationFinished: DB.Required({
        comment: "Describes whether the character creation is finished.",
        type: DB.Boolean(),
      }),
      race: DB.Required({
        comment: "An object storing the identifiers of the race and its optional race variant.",
        type: DB.IncludeIdentifier(Race),
      }),
      culture: DB.Required({
        comment:
          "An object storing the identifier of the culture and if the cultural package has been applied.",
        type: DB.IncludeIdentifier(Culture),
      }),
      profession: DB.Required({
        comment:
          "An object storing the identifiers of the profession, its instance and its optional profession variant.",
        type: DB.IncludeIdentifier(Profession),
      }),
      curriculum: DB.Optional({
        comment:
          "An object storing the identifiers of the curriculum and it’s optional lesson package.",
        type: DB.IncludeIdentifier(Curriculum),
      }),
      rules: DB.Required({
        comment: "The rules settings for the character.",
        type: DB.IncludeIdentifier(Rules),
      }),
      personalData: DB.Required({
        comment: "Personal data such as hair color and place of birth.",
        type: DB.IncludeIdentifier(PersonalData),
      }),
      advantages: DB.Required({
        comment: "A list of active advantages.",
        type: DB.Array(DB.IncludeIdentifier(Activatable), { minItems: 1 }),
      }),
      disadvantages: DB.Required({
        comment: "A list of active disadvantages.",
        type: DB.Array(DB.IncludeIdentifier(Activatable), { minItems: 1 }),
      }),
      specialAbilities: DB.Required({
        comment:
          "Lists of active special abilities, by group.\n\nThis object may grow if new special ability groups are introduced, which is not considered a breaking change.",
        type: DB.Object(
          Object.fromEntries(
            Object.values(SpecialAbilityIdentifier.type.value.values).map((caseRef) => [
              caseRef.type.entity.namePlural.slice(0, 1).toLowerCase() +
                caseRef.type.entity.namePlural.slice(1),
              DB.Optional({ type: DB.Array(DB.IncludeIdentifier(Activatable), { minItems: 1 }) }),
            ]),
          ) as Record<
            string,
            DB.MemberDecl<DB.Array<DB.IncludeIdentifier<[], typeof Activatable>>, false>
          >,
          { minProperties: 1 },
        ),
      }),
      attributes: DB.Required({
        comment:
          "A list of attributes with values above 8. Attributes that are not listed here default to 8.",
        type: DB.Array(DB.IncludeIdentifier(Attribute)),
      }),
      derivedCharacteristics: DB.Required({
        comment: "Computed, set and bought values for/of derived characteristics.",
        type: DB.Object({
          lifePoints: DB.Required({
            type: DB.IncludeIdentifier(Energy),
          }),
          arcaneEnergy: DB.Optional({
            comment:
              "This property does not exist if the character does not have the active advantage Spellcaster and an active magical tradition special ability.",
            type: DB.IncludeIdentifier(EnergyWithBuyBack),
          }),
          karmaPoints: DB.Optional({
            comment:
              "This property does not exist if the character does not have the active advantage Blessed One and an active blessed tradition special ability.",
            type: DB.IncludeIdentifier(EnergyWithBuyBack),
          }),
          spirit: DB.Required({
            type: DB.IncludeIdentifier(DerivedCharacteristic),
          }),
          toughness: DB.Required({
            type: DB.IncludeIdentifier(DerivedCharacteristic),
          }),
          dodge: DB.Required({
            type: DB.IncludeIdentifier(DerivedCharacteristic),
          }),
          initiative: DB.Required({
            type: DB.IncludeIdentifier(DerivedCharacteristic),
          }),
          movement: DB.Required({
            type: DB.IncludeIdentifier(DerivedCharacteristic),
          }),
          fatePoints: DB.Required({
            type: DB.IncludeIdentifier(DerivedCharacteristic),
          }),
          woundThreshold: DB.Optional({
            comment: "This property is not present if the required focus rules are not activated.",
            type: DB.IncludeIdentifier(DerivedCharacteristic),
          }),
        }),
      }),
      skills: DB.Required({
        comment:
          "A list of skills with values above 0. Skills that are not listed here default to 0.",
        type: DB.Array(DB.IncludeIdentifier(Skill)),
      }),
      combatTechniques: DB.Required({
        comment: "Lists of combat techniques, by group.",
        type: DB.Object({
          melee: DB.Required({
            comment:
              "A list of melee combat techniques with values above 6. Combat techniques that are not listed here default to 6.",
            type: DB.Array(DB.IncludeIdentifier(CombatTechnique)),
          }),
          ranged: DB.Required({
            comment:
              "A list of ranged combat techniques with values above 6. Combat techniques that are not listed here default to 6.",
            type: DB.Array(DB.IncludeIdentifier(CombatTechnique)),
          }),
        }),
      }),
      cantrips: DB.Optional({
        comment: "A list of purchased cantrips.",
        type: DB.Array(DB.IncludeIdentifier(TinyActivatable), { minItems: 1 }),
      }),
      spells: DB.Optional({
        comment: "A list of active spells.",
        type: DB.Array(DB.IncludeIdentifier(ActivatableRatedWithEnhancements), { minItems: 1 }),
      }),
      rituals: DB.Optional({
        comment: "A list of active rituals.",
        type: DB.Array(DB.IncludeIdentifier(ActivatableRatedWithEnhancements), { minItems: 1 }),
      }),
      magicalActions: DB.Optional({
        comment:
          "Lists of magical actions, by group.\n\nThis object may grow if new magical actions are introduced, which is not considered a breaking change.",
        type: DB.Object(
          Object.fromEntries(
            Object.values(MagicalActionIdentifier.type.value.values).map((caseRef) => [
              caseRef.type.entity.namePlural.slice(0, 1).toLowerCase() +
                caseRef.type.entity.namePlural.slice(1),
              DB.Optional({
                type: DB.Array(DB.IncludeIdentifier(ActivatableRated), { minItems: 1 }),
              }),
            ]),
          ) as Record<
            string,
            DB.MemberDecl<DB.Array<DB.IncludeIdentifier<[], typeof ActivatableRated>>, false>
          >,
          { minProperties: 1 },
        ),
      }),
      blessings: DB.Optional({
        comment: "A list of purchased blessings.",
        type: DB.Array(DB.IncludeIdentifier(TinyActivatable), { minItems: 1 }),
      }),
      liturgicalChants: DB.Optional({
        comment: "A list of active liturgical chants.",
        type: DB.Array(DB.IncludeIdentifier(ActivatableRatedWithEnhancements), { minItems: 1 }),
      }),
      ceremonies: DB.Optional({
        comment: "A list of active ceremonies.",
        type: DB.Array(DB.IncludeIdentifier(ActivatableRatedWithEnhancements), { minItems: 1 }),
      }),

      // items: {}

      // hit_zone_armors?: {}

      purse: DB.Required({
        comment: "The money the character owns.",
        type: DB.IncludeIdentifier(Purse),
      }),

      // creatures?: {}

      // pact?: {}
    }),
});
