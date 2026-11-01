import type { UUIDv4 } from "./utils.js"

/**
 * An object storing the identifiers of the experience level the character started at and the current experience level, derived from total adventure points.
 */
export interface ExperienceLevel {
  /**
   * The start experience level identifier.
   */
  start: UUIDv4

  /**
   * The current experience level identifier.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly current: UUIDv4
}

/**
 * An object storing the identifiers of the race and its optional race variant.
 */
export interface Race {
  /**
   * The base race.
   */
  base: UUIDv4

  /**
   * The race variant.
   */
  variant: UUIDv4

  /**
   * The identifier of the attribute adjustment that has been selected from the race.
   */
  selectedAttributeAdjustment?: UUIDv4
}

/**
 * An object storing the identifier of the culture and if the cultural package has been applied.
 */
export interface Culture {
  /**
   * The culture identifier.
   */
  base: UUIDv4

  /**
   * Describes whether the cultural package has been applied when creating the character.
   */
  isCulturalPackageApplied: boolean
}

/**
 * An object storing the identifiers of the profession, its instance and its optional profession variant.
 */
export interface Profession {
  /**
   * The base profession identifier.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly base: UUIDv4

  /**
   * The profession version identifier.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly version: UUIDv4

  /**
   * The profession package identifier. Profession packages are values of a profession version for a specific experience level. Profession versions are part of the same profession but with slightly different values, such as in extension rule books existing professions might get an additional style special ability.
   */
  package: UUIDv4

  /**
   * The profession variant identifier.
   */
  variant?: UUIDv4

  /**
   * A custom name for the profession, if provided.
   */
  customName?: string
}

/**
 * An object storing the identifiers of the curriculum and it’s optional lesson package.
 */
export interface Curriculum {
  /**
   * The educational institution's curriculum identifier.
   */
  educationalInstitution: UUIDv4

  /**
   * The lesson package identifier.
   */
  lessonPackage?: UUIDv4
}
