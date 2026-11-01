export type DerivedCharacteristic = Energy | EnergyWithBuyBack | DefaultDerivedCharacteristic

/**
 * A derived characteristic with its calculated parts.
 */
export interface DefaultDerivedCharacteristic {
  type: "Default"

  /**
   * The base value.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly base: number

  /**
   * The modifier depending on relevant advantages, disadvantages and special abilities.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly modifier: number

  /**
   * The (final) value.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly value: number
}

/**
 * A derived characteristic representing an energy where points can be purchased and permanently lost.
 */
export interface Energy {
  type: "Energy"

  /**
   * The base value.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly base: number

  /**
   * The modifier depending on relevant advantages, disadvantages and special abilities.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly modifier: number

  /**
   * The number of points purchased.
   */
  purchased: number

  /**
   * The number of points permanently lost.
   */
  permanentlyLost: number

  /**
   * The (final) maximum.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly maximum: number
}

/**
 * A derived characteristic representing an energy where points can be purchased and permanently lost, with the option to buy back lost points.
 */
export interface EnergyWithBuyBack {
  type: "EnergyWithBuyBack"

  /**
   * The base value.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly base: number

  /**
   * The modifier depending on relevant advantages, disadvantages and special abilities.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly modifier: number

  /**
   * The number of points purchased.
   */
  purchased: number

  /**
   * The number of points permanently lost.
   */
  permanentlyLost: number

  /**
   * The number of permanently lost points that have been bought back.
   */
  permanentlyLostBoughtBack: number

  /**
   * The (final) maximum.
   *
   * *Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*
   */
  readonly maximum: number
}
