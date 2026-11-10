import type {
  MagicalActionIdentifier,
  SpecialAbilityIdentifier,
} from "@optolith/database-schema/gen"
import type { Activatable } from "./activatables.ts"
import type { AdventurePoints } from "./adventurePoints.ts"
import type { Purse } from "./belongings.ts"
import type { Culture, Curriculum, ExperienceLevel, Profession, Race } from "./creation.ts"
import type { DerivedCharacteristic } from "./derivedCharacteristics.ts"
import type { PersonalData } from "./personalData.ts"
import type {
  ActivatableRated,
  ActivatableRatedWithEnhancements,
  Attribute,
  CombatTechnique,
  Skill,
} from "./rated.ts"
import type { Rules } from "./rules.ts"
import type { UUIDv4 } from "./utils.ts"

export interface CharacterInRaceCultureProfessionSelection {
  phase: "RaceCultureProfession"

  /**
   * A valid semantic version (https://semver.org), representing the character schema version of this file.
   */
  version: string

  /**
   * The character’s name.
   */
  name: string

  /**
   * Date of character creation, in RFC 9557 (extension of ISO 8601 / RFC 3339) format.
   */
  dateCreated: string

  /**
   * Date of character last modified, in RFC 9557 (extension of ISO 8601 / RFC 3339) format.
   */
  dateLastModified: string

  /**
   * An object storing all kinds of basic and calculated adventure points.
   */
  adventurePoints: AdventurePoints

  /**
   * An object storing the identifiers of the experience level the character started at and the current experience level, derived from total adventure points.
   */
  experienceLevel: ExperienceLevel

  /**
   * An object storing the identifiers of the race and its optional race variant.
   */
  race?: Race

  /**
   * An object storing the identifier of the culture and if the cultural package has been applied.
   */
  culture?: Culture

  /**
   * An object storing the identifiers of the profession, its instance and its optional profession variant.
   */
  profession?: Profession

  /**
   * An object storing the identifiers of the curriculum and it’s optional lesson package.
   */
  curriculum?: Curriculum

  /**
   * The rules settings for the character.
   */
  rules: Rules

  /**
   * Personal data such as hair color and place of birth.
   */
  personalData: PersonalData
}

export interface FullCharacter {
  phase: "Improvement" | "Finished"

  /**
   * A valid semantic version (https://semver.org), representing the character schema version of this file.
   */
  version: string

  /**
   * The character’s name.
   */
  name: string

  /**
   * Date of character creation, in RFC 9557 (extension of ISO 8601 / RFC 3339) format.
   */
  dateCreated: string

  /**
   * Date of character last modified, in RFC 9557 (extension of ISO 8601 / RFC 3339) format.
   */
  dateLastModified: string

  /**
   * An object storing all kinds of basic and calculated adventure points.
   */
  adventurePoints: AdventurePoints

  /**
   * An object storing the identifiers of the experience level the character started at and the current experience level, derived from total adventure points.
   */
  experienceLevel: ExperienceLevel

  /**
   * An object storing the identifiers of the race and its optional race variant.
   */
  race: Race

  /**
   * An object storing the identifier of the culture and if the cultural package has been applied.
   */
  culture: Culture

  /**
   * An object storing the identifiers of the profession, its instance and its optional profession variant.
   */
  profession: Profession

  /**
   * An object storing the identifiers of the curriculum and it’s optional lesson package.
   */
  curriculum?: Curriculum

  /**
   * The rules settings for the character.
   */
  rules: Rules

  /**
   * Personal data such as hair color and place of birth.
   */
  personalData: PersonalData

  /**
   * Active advantages.
   */
  advantages?: Record<UUIDv4, Activatable>

  /**
   * Active disadvantages.
   */
  disadvantages?: Record<UUIDv4, Activatable>

  /**
   * Active special abilities, by group.
   *
   * This object may grow if new special ability groups are introduced, which is not considered a breaking change.
   */
  specialAbilities?: {
    [K in SpecialAbilityIdentifier["kind"]]?: Record<UUIDv4, Activatable>
  }

  /**
   * A list of attributes with values above 8. Attributes that are not listed here default to 8.
   */
  attributes?: Record<UUIDv4, Attribute>

  /**
   * Computed, set and bought values for/of derived characteristics.
   */
  derivedCharacteristics: Record<UUIDv4, DerivedCharacteristic>

  /**
   * A list of skills with values above 0. Skills that are not listed here default to 0.
   */
  skills?: Record<UUIDv4, Skill>

  /**
   * Lists of combat techniques, by group.
   */
  combatTechniques?: {
    /**
     * A list of melee combat techniques with values above 6. Combat techniques that are not listed here default to 6.
     */
    melee?: Record<UUIDv4, CombatTechnique>

    /**
     * A list of ranged combat techniques with values above 6. Combat techniques that are not listed here default to 6.
     */
    ranged?: Record<UUIDv4, CombatTechnique>
  }

  /**
   * A list of purchased cantrips.
   */
  cantrips?: UUIDv4[]

  /**
   * A list of active spells.
   */
  spells?: Record<UUIDv4, ActivatableRatedWithEnhancements>

  /**
   * A list of active rituals.
   */
  rituals?: Record<UUIDv4, ActivatableRatedWithEnhancements>

  /**
   * Lists of magical actions, by entity name.
   *
   * This object may grow if new magical actions are introduced, which is not considered a breaking change.
   */
  magicalActions?: {
    [
      K in Exclude<MagicalActionIdentifier["kind"], "AnimistPower" | "Bannzeichen" | "MagicalRune">
    ]?: Record<UUIDv4, ActivatableRated>
  }

  /**
   * A list of purchased blessings.
   */
  blessings?: UUIDv4[]

  /**
   * A list of active liturgical chants.
   */
  liturgicalChants?: Record<UUIDv4, ActivatableRatedWithEnhancements>

  /**
   * A list of active ceremonies.
   */
  ceremonies?: Record<UUIDv4, ActivatableRatedWithEnhancements>

  /**
   * The money the character owns.
   */
  purse: Purse
}

/**
 * An exported character object from Optolith.
 */
export type Character = CharacterInRaceCultureProfessionSelection | FullCharacter

/**
 * The entity’s identifier. A UUID or a locale code if it is registered as the locale entity.
 */
export type Character_ID = UUIDv4
