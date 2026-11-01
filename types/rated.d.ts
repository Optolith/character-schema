import type { UUIDv4 } from "./utils.js"

/**
 * An attribute with its value.
 */
export interface Attribute {
  /**
   * The attribute value.
   */
  value: number
}

/**
 * A skill with its rating.
 */
export interface Skill {
  /**
   * The skill rating.
   */
  value: number
}

/**
 * A combat technique with its rating.
 */
export interface CombatTechnique {
  /**
   * The combat technique rating.
   */
  value: number
}

/**
 * An activatable item with its rating.
 */
export interface ActivatableRated {
  /**
   * The skill rating.
   */
  value: number
}

/**
 * An activatable item with its rating and purchased enhancements.
 */
export interface ActivatableRatedWithEnhancements {
  /**
   * The skill rating.
   */
  value: number

  /**
   * Purchased enhancements.
   */
  enhancements?: UUIDv4[]
}
