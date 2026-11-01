import type { NonEmptyArray } from "@elyukai/utils/array/nonEmpty"
import type { ResolvedSelectOptionIdentifier } from "@optolith/database-schema/cache"

/**
 * An activatable item reference. Activatables are advantages, disadvantages and special abilities.
 */
export interface Activatable {
  /**
   * One or multiple activations of the activatable.
   */
  instances: NonEmptyArray<ActivatableInstance>

  /**
   * A list of bound adventure points. Bound adventure points are granted by the
   * GM and can only be spent on the entry. They don’t affect the costs of
   * buying the activatable entry. They may specify for which configuration of
   * an entry they count, just like a prerequisite.
   */
  boundAdventurePoints?: NonEmptyArray<BoundAdventurePointsForActivatable>
}

/**
 * A single activation of an activatable entry.
 */
export type ActivatableInstance = {
  /**
   * One or multiple options for the activatable. The meaning depends on the activatable.
   */
  options?: ActivatableOption[]

  /**
   * The instance level (if the activatable has levels).
   */
  level?: number

  /**
   * If provided, a custom adventure points value has been set for this instance.
   */
  customAdventurePointsValue?: number
}

/**
 * An option for an activatable entry.
 */
export type ActivatableOption = PredefinedActivatableOption | CustomActivatableOption

/**
 * A predefined option for an activatable entry.
 */
export type PredefinedActivatableOption = {
  type: "Predefined"

  /**
   * An identifier referencing a different entry.
   */
  id: ResolvedSelectOptionIdentifier
}

/**
 * A custom option for an activatable entry, handled as user-entered text.
 */
export type CustomActivatableOption = {
  type: "Custom"

  /**
   * A user-entered text.
   */
  value: string
}

/**
 * Bound adventure points are granted by the GM and can only be spent on the
 * entry. They don’t affect the costs of  buying the activatable entry. They may
 * specify for which configuration of  an entry they count, just like a
 * prerequisite.
 */
export type BoundAdventurePointsForActivatable = {
  /**
   * The granted adventure points.
   */
  adventurePoints: number

  /**
   * The level for which the adventure points have been granted.
   */
  level?: number

  /**
   * The set of options for which the adventure points have been granted.
   */
  options?: ActivatableOption[]
}
