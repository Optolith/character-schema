import {
  MagicalActionIdentifier,
  SpecialAbilityIdentifier,
} from "optolith-database-schema/types/_IdentifierGroup"
import {
  Array,
  Boolean,
  Date,
  Entity,
  IncludeIdentifier,
  Object as Object_,
  Optional,
  Required,
  String,
  type MemberDecl,
} from "tsondb/schema/def"
import { Activatable, TinyActivatable } from "./activatables.js"
import { AdventurePoints } from "./adventurePoints.js"
import { Purse } from "./belongings.js"
import { Culture, Curriculum, ExperienceLevel, Profession, Race } from "./creation.js"
import { DerivedCharacteristic, Energy, EnergyWithBuyBack } from "./derivedCharacteristics.js"
import { PersonalData } from "./personalData.js"
import {
  ActivatableRated,
  ActivatableRatedWithEnhancements,
  Attribute,
  CombatTechnique,
  Skill,
} from "./rated.js"
import { Rules } from "./rules.js"

export const Character = Entity(import.meta.filename, {
  name: "Character",
  namePlural: "Characters",
  comment: "An exported character object from Optolith.",
  type: () =>
    Object_({
      version: Required({
        comment:
          "A valid semantic version (https://semver.org), representing the character schema version of this file.",
        type: String({
          pattern:
            /^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$/,
        }), // The pattern is the recommended regex for semantic versioning: https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string.
      }),
      name: Required({
        comment: "The character’s name.",
        type: String({ minLength: 1 }),
      }),
      dateCreated: Required({
        comment: "Date of character creation, in ISO8601 format.",
        type: Date({ time: true }),
      }),
      dateLastModified: Required({
        comment: "Date of character last modified, in ISO8601 format.",
        type: Date({ time: true }),
      }),
      adventurePoints: Required({
        comment: "An object storing all kinds of basic and calculated adventure points.",
        type: IncludeIdentifier(AdventurePoints),
      }),
      experienceLevel: Required({
        comment:
          "An object storing the identifiers of the experience level the character started at and the current experience level, derived from total adventure points.",
        type: IncludeIdentifier(ExperienceLevel),
      }),
      isCharacterCreationFinished: Required({
        comment: "Describes whether the character creation is finished.",
        type: Boolean(),
      }),
      race: Required({
        comment: "An object storing the identifiers of the race and its optional race variant.",
        type: IncludeIdentifier(Race),
      }),
      culture: Required({
        comment:
          "An object storing the identifier of the culture and if the cultural package has been applied.",
        type: IncludeIdentifier(Culture),
      }),
      profession: Required({
        comment:
          "An object storing the identifiers of the profession, its instance and its optional profession variant.",
        type: IncludeIdentifier(Profession),
      }),
      curriculum: Optional({
        comment:
          "An object storing the identifiers of the curriculum and it’s optional lesson package.",
        type: IncludeIdentifier(Curriculum),
      }),
      rules: Required({
        comment: "The rules settings for the character.",
        type: IncludeIdentifier(Rules),
      }),
      personalData: Required({
        comment: "Personal data such as hair color and place of birth.",
        type: IncludeIdentifier(PersonalData),
      }),
      advantages: Required({
        comment: "A list of active advantages.",
        type: Array(IncludeIdentifier(Activatable), { minItems: 1 }),
      }),
      disadvantages: Required({
        comment: "A list of active disadvantages.",
        type: Array(IncludeIdentifier(Activatable), { minItems: 1 }),
      }),
      specialAbilities: Required({
        comment:
          "Lists of active special abilities, by group.\n\nThis object may grow if new special ability groups are introduced, which is not considered a breaking change.",
        type: Object_(
          Object.fromEntries(
            Object.values(SpecialAbilityIdentifier.type.value.values).map(caseRef => [
              caseRef.type.entity.namePlural.slice(0, 1).toLowerCase() +
                caseRef.type.entity.namePlural.slice(1),
              Optional({ type: Array(IncludeIdentifier(Activatable), { minItems: 1 }) }),
            ])
          ) as Record<string, MemberDecl<Array<IncludeIdentifier<[], typeof Activatable>>, false>>,
          { minProperties: 1 }
        ),
      }),
      attributes: Required({
        comment:
          "A list of attributes with values above 8. Attributes that are not listed here default to 8.",
        type: Array(IncludeIdentifier(Attribute)),
      }),
      derivedCharacteristics: Required({
        comment: "Computed, set and bought values for/of derived characteristics.",
        type: Object_({
          lifePoints: Required({
            type: IncludeIdentifier(Energy),
          }),
          arcaneEnergy: Optional({
            comment:
              "This property does not exist if the character does not have the active advantage Spellcaster and an active magical tradition special ability.",
            type: IncludeIdentifier(EnergyWithBuyBack),
          }),
          karmaPoints: Optional({
            comment:
              "This property does not exist if the character does not have the active advantage Blessed One and an active blessed tradition special ability.",
            type: IncludeIdentifier(EnergyWithBuyBack),
          }),
          spirit: Required({
            type: IncludeIdentifier(DerivedCharacteristic),
          }),
          toughness: Required({
            type: IncludeIdentifier(DerivedCharacteristic),
          }),
          dodge: Required({
            type: IncludeIdentifier(DerivedCharacteristic),
          }),
          initiative: Required({
            type: IncludeIdentifier(DerivedCharacteristic),
          }),
          movement: Required({
            type: IncludeIdentifier(DerivedCharacteristic),
          }),
          woundThreshold: Optional({
            comment: "This property is not present if the required focus rules are not activated.",
            type: IncludeIdentifier(DerivedCharacteristic),
          }),
        }),
      }),
      skills: Required({
        comment:
          "A list of skills with values above 0. Skills that are not listed here default to 0.",
        type: Array(IncludeIdentifier(Skill)),
      }),
      combatTechniques: Required({
        comment: "Lists of combat techniques, by group.",
        type: Object_({
          melee: Required({
            comment:
              "A list of melee combat techniques with values above 6. Combat techniques that are not listed here default to 6.",
            type: Array(IncludeIdentifier(CombatTechnique)),
          }),
          ranged: Required({
            comment:
              "A list of ranged combat techniques with values above 6. Combat techniques that are not listed here default to 6.",
            type: Array(IncludeIdentifier(CombatTechnique)),
          }),
        }),
      }),
      cantrips: Optional({
        comment: "A list of purchased cantrips.",
        type: Array(IncludeIdentifier(TinyActivatable), { minItems: 1 }),
      }),
      spells: Optional({
        comment: "A list of active spells.",
        type: Array(IncludeIdentifier(ActivatableRatedWithEnhancements), { minItems: 1 }),
      }),
      rituals: Optional({
        comment: "A list of active rituals.",
        type: Array(IncludeIdentifier(ActivatableRatedWithEnhancements), { minItems: 1 }),
      }),
      magicalActions: Optional({
        comment:
          "Lists of magical actions, by group.\n\nThis object may grow if new magical actions are introduced, which is not considered a breaking change.",
        type: Object_(
          Object.fromEntries(
            Object.values(MagicalActionIdentifier.type.value.values).map(caseRef => [
              caseRef.type.entity.namePlural.slice(0, 1).toLowerCase() +
                caseRef.type.entity.namePlural.slice(1),
              Optional({ type: Array(IncludeIdentifier(ActivatableRated), { minItems: 1 }) }),
            ])
          ) as Record<
            string,
            MemberDecl<Array<IncludeIdentifier<[], typeof ActivatableRated>>, false>
          >,
          { minProperties: 1 }
        ),
      }),
      blessings: Optional({
        comment: "A list of purchased blessings.",
        type: Array(IncludeIdentifier(TinyActivatable), { minItems: 1 }),
      }),
      liturgicalChants: Optional({
        comment: "A list of active liturgical chants.",
        type: Array(IncludeIdentifier(ActivatableRatedWithEnhancements), { minItems: 1 }),
      }),
      ceremonies: Optional({
        comment: "A list of active ceremonies.",
        type: Array(IncludeIdentifier(ActivatableRatedWithEnhancements), { minItems: 1 }),
      }),

      // items: {}

      // hit_zone_armors?: {}

      purse: Required({
        comment: "The money the character owns.",
        type: IncludeIdentifier(Purse),
      }),

      // creatures?: {}

      // pact?: {}
    }),
})
