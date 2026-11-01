import type { UUIDv4 } from "./utils.js"

/**
 * The rules settings for the character.
 */
export interface Rules {
  /**
   * Whether the character makes use of all publications except for publications with adult content and adventures, which have to be specified explicitly using `includePublications`.
   */
  includeAllPublications: boolean

  /**
   * Explicitly used publications. If `includeAllPublications` is set to `true`, only affects publications that are not covered by `includeAllPublications`.
   */
  includePublications: UUIDv4[]

  /**
   * Active focus rules.
   */
  focusRules?: FocusRule[]

  /**
   * Active optional rules. Each optional rule may have one or more options selected.
   */
  optionalRules?: OptionalRule[]

  /**
   * Active alternative rules.
   */
  alternativeRules?: AlternativeRule[]
}

/**
 * An active focus rule.
 */
export interface FocusRule {
  /**
   * The focus rule identifier.
   */
  id: UUIDv4
}

/**
 * An active optional rule. An optional rule may have one or more options selected.
 */
export interface OptionalRule {
  /**
   * The optional rule identifier.
   */
  id: UUIDv4

  /**
   * An array of one or more options. The exact meaning of each option varies based on the optional rule.
   */
  options?: UUIDv4[]
}

/**
 * An active alternative rule.
 */
export interface AlternativeRule {
  /**
   * The alternative rule identifier.
   */
  id: UUIDv4
}
