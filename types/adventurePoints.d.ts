/**
 * An object storing all kinds of basic and calculated adventure points.
 */
export interface AdventurePoints {
  /**
   * Total adventure points.
   */
  total: number

  /**
   * Adventure points available.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly available: number

  /**
   * Adventure points spent.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spent: number

  /**
   * Adventure points spent on advantages.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnAdvantages: number

  /**
   * Adventure points spent on magical advantages.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnMagicalAdvantages: number

  /**
   * Adventure points spent on blessed advantages.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnBlessedAdvantages: number

  /**
   * Adventure points spent on disadvantages.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnDisadvantages: number

  /**
   * Adventure points spent on magical disadvantages.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnMagicalDisadvantages: number

  /**
   * Adventure points spent on blessed disadvantages.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnBlessedDisadvantages: number

  /**
   * Adventure points spent on race.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnRace: number

  /**
   * Adventure points spent on attributes.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnAttributes: number

  /**
   * Adventure points spent on skills.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnSkills: number

  /**
   * Adventure points spent on combat techniques.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnCombatTechniques: number

  /**
   * Adventure points spent on spells, rituals and its enhancements.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnSpells: number

  /**
   * Adventure points spent on cantrips.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnCantrips: number

  /**
   * Adventure points spent on all kinds of magical actions.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnMagicalActions: number

  /**
   * Adventure points spent on liturgical chant, ceremonies and its enhancements.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnLiturgicalChants: number

  /**
   * Adventure points spent on blessings.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnBlessings: number

  /**
   * Adventure points spent on all kinds of special abilities.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnSpecialAbilities: number

  /**
   * Adventure points spent on adding and buying back energy points.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly spentOnEnergies: number
}
