/**
 * An exported character object from Optolith. Properties that are intended for external use only and thus are ignored when imported by Optolith are marked as read-only.
 * @title Character
 */
export type Character = {
  /**
   * A valid semantic version (https://semver.org), representing the Optolith version this character was created with.
   * @title Optolith Version
   * @pattern ^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$
   */
  version: string
  // The pattern is the recommended regex for semantic versioning:
  // https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string.

  /**
   * The character's name.
   * @title Name
   * @minLength 1
   */
  name: string

  /**
   * Date of character creation, in ISO8601 format.
   * @title Date of Creation
   * @format date-time
   */
  date_created: string

  /**
   * Date of character last modified, in ISO8601 format.
   * @title Date of Last Modification
   * @format date-time
   */
  date_last_modified: string

  /**
   * An object storing all kinds of basic and calculated adventure points.
   * @title Adventure Points
   */
  adventure_points: {
    /**
     * Total adventure points.
     * @minimum 1
     * @integer
     */
    total: number

    /**
     * Adventure points available.
     * @minimum 0
     * @integer
     */
    readonly available: number

    /**
     * Adventure points spent.
     * @minimum 0
     * @integer
     */
    readonly spent: number

    /**
     * Adventure points spent on advantages.
     * @minimum 0
     * @integer
     */
    readonly spent_on_advantages: number

    /**
     * Adventure points spent on magical advantages.
     * @minimum 0
     * @integer
     */
    readonly spent_on_magical_advantages: number

    /**
     * Adventure points spent on blessed advantages.
     * @minimum 0
     * @integer
     */
    readonly spent_on_blessed_advantages: number

    /**
     * Adventure points spent on disadvantages.
     * @minimum 0
     * @integer
     */
    readonly spent_on_disadvantages: number

    /**
     * Adventure points spent on magical disadvantages.
     * @minimum 0
     * @integer
     */
    readonly spent_on_magical_disadvantages: number

    /**
     * Adventure points spent on blessed disadvantages.
     * @minimum 0
     * @integer
     */
    readonly spent_on_blessed_disadvantages: number

    /**
     * Adventure points spent on race.
     * @minimum 0
     * @integer
     */
    readonly spent_on_race: number

    /**
     * Adventure points spent on attributes.
     * @minimum 0
     * @integer
     */
    readonly spent_on_attributes: number

    /**
     * Adventure points spent on skills.
     * @minimum 0
     * @integer
     */
    readonly spent_on_skills: number

    /**
     * Adventure points spent on combat techniques.
     * @minimum 0
     * @integer
     */
    readonly spent_on_combat_techniques: number

    /**
     * Adventure points spent on spells, rituals and its enhancements.
     * @minimum 0
     * @integer
     */
    readonly spent_on_spells: number

    /**
     * Adventure points spent on cantrips.
     * @minimum 0
     * @integer
     */
    readonly spent_on_cantrips: number

    /**
     * Adventure points spent on all kinds of magical actions.
     * @minimum 0
     * @integer
     */
    readonly spent_on_magical_actions: number

    /**
     * Adventure points spent on liturgical chant, ceremonies and its enhancements.
     * @minimum 0
     * @integer
     */
    readonly spent_on_liturgical_chants: number

    /**
     * Adventure points spent on blessings.
     * @minimum 0
     * @integer
     */
    readonly spent_on_blessings: number

    /**
     * Adventure points spent on all kinds of special abilities.
     * @minimum 0
     * @integer
     */
    readonly spent_on_special_abilities: number

    /**
     * Adventure points spent on adding and buying back energy points.
     * @minimum 0
     * @integer
     */
    readonly spent_on_energies: number
  }

  /**
   * An object storing the identifiers of the experience level the character started at and the current experience level, derived from total adventure points.
   * @title Experience Level Settings
   */
  experience_level: {
    /**
     * The start experience level identifier.
     * @minimum 1
     * @maximum 7
     * @integer
     */
    start_id: number

    /**
     * The current experience level identifier.
     * @minimum 1
     * @maximum 7
     * @integer
     */
    readonly current_id: number
  }

  /**
   * Describes whether the character creation is finished.
   * @title Character Creation Finished
   */
  is_character_creation_finished: boolean

  /**
   * An object storing the identifiers of the race and its optional race variant.
   * @title Race Settings
   */
  race: {
    /**
     * The base race identifier.
     * @minimum 1
     * @integer
     */
    id: number

    /**
     * The race variant identifier.
     * @minimum 1
     * @integer
     */
    variant_id?: number

    /**
     * The identifier of the attribute adjustment that has been selected from the race.
     * @minimum 1
     * @maximum 8
     * @integer
     */
    selected_attribute_adjustment_id: number
  }

  /**
   * An object storing the identifier of the culture and if the cultural package has been applied.
   * @title Culture Settings
   */
  culture: {
    /**
     * The culture identifier.
     * @minimum 1
     * @integer
     */
    id: number

    /**
     * Describes whether the cultural package has been applied when creating the character.
     */
    is_cultural_package_applied: boolean
  }

  /**
   * An object storing the identifiers of the profession, its instance and its optional profession variant.
   * @title Profession Settings
   */
  profession: {
    /**
     * The base profession identifier.
     * @minimum 1
     * @integer
     */
    id: number

    /**
     * The profession instance identifier. Profession instances are versions of the same profession but slightly different values, such as in extension rule books existing professions might get an additional style special ability.
     * @minimum 1
     * @integer
     */
    instance_id: number

    /**
     * The profession variant identifier.
     * @minimum 1
     * @integer
     */
    variant_id?: number

    /**
     * A custom name for the profession, if provided.
     * @minLength 1
     */
    custom_name?: string
  }

  /**
   * An object storing the identifiers of the profession, its instance and its optional race variant.
   * @title Curriculum Settings
   */
  curriculum?: {
    /**
     * The educational institution's curriculum identifier.
     * @minimum 1
     * @integer
     */
    educational_institution_id: number

    /**
     * The lesson package identifier.
     * @minimum 1
     * @maximum 2
     * @integer
     */
    lesson_package_id?: number
  }

  /**
   * The rules settings for the character.
   * @title Rules Settings
   */
  rules: {
    /**
     * Whether the character makes use of all publications except for publications with adult content, which have to be specified explicitly using `include_publications`.
     */
    include_all_publications: boolean

    /**
     * Explicitly used publications. If `include_all_publications` is set to `true`, only affects publications that are not covered by `include_all_publications`.
     */
    include_publications: {
      /**
       * The publication identifier.
       * @integer
       */
      id: number
    }[]

    /**
     * Active focus rules.
     */
    active_focus_rules: {
      /**
       * The focus rule identifier.
       * @integer
       */
      id: number
    }[]

    /**
     * Active optional rules.
     * @minimum 1
     * @integer
     */
    active_optional_rules: {
      /**
       * The focus rule identifier.
       * @integer
       */
      id: number

      /**
       * An array of one or more options. The exact meaning of each option varies based on the optional rule.
       * @minItems 1
       */
      options?: (/** @integer @minimum 1 */ number)[]
    }[]
  }

  /**
   * Personal data such as hair color and place of birth.
   * @title Personal Data
   */
  personal_data: {
    /**
     * The character's sex. It does not have to be binary, although it always must be specified how to handle it in the context of binary sex prerequisites. You can also provide a custom sex with a custom name.
      */
    sex: Sex

    /**
     * The family names and/or family members.
     * @minLength 1
     */
    family?: string

    /**
     * The place where the character was born.
     * @minLength 1
     */
    place_of_birth?: string

    /**
     * The date when the character was born.
     * @minLength 1
     */
    date_of_birth?: string

    /**
     * The age of the character.
     * @minLength 1
     */
    age?: string

    /**
     * The hair color of the character.
     */
    hair_color?: Color

    /**
     * The eye color of the character.
     */
    eye_color?: Color

    /**
     * The size of the character.
     * @minLength 1
     */
    size?: string

    /**
     * The weight of the character.
     * @minLength 1
     */
    weight?: string

    /**
     * The character's title(s).
     * @minLength 1
     */
    title?: string

    /**
     * The social status identifier.
     * @minimum 1
     * @maximum 5
     * @integer
     */
    social_status_id?: number

    /**
     * The character's characteristics.
     * @minLength 1
     */
    characteristics?: string

    /**
     * Other information about the character.
     * @minLength 1
     */
    other_info?: string
  }

  /**
   * @title Advantages
   */
  advantages: Activatables

  /**
   * @title Disadvantages
   */
  disadvantages: Activatables

  /**
   * Lists of active special abilities, by group.
   * @title Special Abilities
   */
  special_abilities: {
    /**
     * @title Advanced Combat Special Abilities
     * @minItems 1
     */
    advanced_combat_special_abilities?: Activatables

    /**
     * @title Advanced Karma Special Abilities
     * @minItems 1
     */
    advanced_karma_special_abilities?: Activatables

    /**
     * @title Advanced Magical Special Abilities
     * @minItems 1
     */
    advanced_magical_special_abilities?: Activatables

    /**
     * @title Advanced Skill Special Abilities
     * @minItems 1
     */
    advanced_skill_special_abilities?: Activatables

    /**
     * @title Ancestor Glyphs
     * @minItems 1
     */
    ancestor_glyphs?: Activatables

    /**
     * @title Arcane Orb Enchantments
     * @minItems 1
     */
    arcane_orb_enchantments?: Activatables

    /**
     * @title Attire Enchantments
     * @minItems 1
     */
    attire_enchantments?: Activatables

    /**
     * @title Blessed Traditions
     * @minItems 1
     */
    blessed_traditions?: Activatables

    /**
     * @title Bowl Enchantments
     * @minItems 1
     */
    bowl_enchantments?: Activatables

    /**
     * @title Brawling Special Abilities
     * @minItems 1
     */
    brawling_special_abilities?: Activatables

    /**
     * @title Cauldron Enchantments
     * @minItems 1
     */
    cauldron_enchantments?: Activatables

    /**
     * @title Ceremonial Item Special Abilities
     * @minItems 1
     */
    ceremonial_item_special_abilities?: Activatables

    /**
     * @title Chronicle Enchantments
     * @minItems 1
     */
    chronicle_enchantments?: Activatables

    /**
     * @title Combat Special Abilities
     * @minItems 1
     */
    combat_special_abilities?: Activatables

    /**
     * @title Combat Style Special Abilities
     * @minItems 1
     */
    combat_style_special_abilities?: Activatables

    /**
     * @title Command Special Abilities
     * @minItems 1
     */
    command_special_abilities?: Activatables

    /**
     * @title Dagger Rituals
     * @minItems 1
     */
    dagger_rituals?: Activatables

    /**
     * @title Familiar Special Abilities
     * @minItems 1
     */
    familiar_special_abilities?: Activatables

    /**
     * @title Fate Point Sex Special Abilities
     * @minItems 1
     */
    fate_point_sex_special_abilities?: Activatables

    /**
     * @title Fate Point Special Abilities
     * @minItems 1
     */
    fate_point_special_abilities?: Activatables

    /**
     * @title Fool’s Hat Enchantments
     * @minItems 1
     */
    fools_hat_enchantments?: Activatables

    /**
     * @title General Special Abilities
     * @minItems 1
     */
    general_special_abilities?: Activatables

    /**
     * @title Instrument Enchantments
     * @minItems 1
     */
    instrument_enchantments?: Activatables

    /**
     * @title Karma Special Abilities
     * @minItems 1
     */
    karma_special_abilities?: Activatables

    /**
     * @title Krallenkettenzauber
     * @minItems 1
     */
    krallenkettenzauber?: Activatables

    /**
     * @title Liturgical Style Special Abilities
     * @minItems 1
     */
    liturgical_style_special_abilities?: Activatables

    /**
     * @title Lycantropic Gifts
     * @minItems 1
     */
    lycantropic_gifts?: Activatables

    /**
     * @title Magical Runes
     * @minItems 1
     */
    magical_runes?: Activatables

    /**
     * @title Magical Special Abilities
     * @minItems 1
     */
    magical_special_abilities?: Activatables

    /**
     * @title Magical Traditions
     * @minItems 1
     */
    magical_traditions?: Activatables

    /**
     * @title Magic Style Special Abilities
     * @minItems 1
     */
    magic_style_special_abilities?: Activatables

    /**
     * @title Orb Enchantments
     * @minItems 1
     */
    orb_enchantments?: Activatables

    /**
     * @title Pact Gifts
     * @minItems 1
     */
    pact_gifts?: Activatables

    /**
     * @title Protective/Warding Circle Special Abilities
     * @minItems 1
     */
    protective_warding_circle_special_abilities?: Activatables

    /**
     * @title Ring Enchantments
     * @minItems 1
     */
    ring_enchantments?: Activatables

    /**
     * @title Sermons
     * @minItems 1
     */
    sermons?: Activatables

    /**
     * @title Sex Special Abilities
     * @minItems 1
     */
    sex_special_abilities?: Activatables

    /**
     * @title Sickle Rituals
     * @minItems 1
     */
    sickle_rituals?: Activatables

    /**
     * @title Sikaryan Drain Special Abilities
     * @minItems 1
     */
    sikaryan_drain_special_abilities?: Activatables

    /**
     * @title Skill Style Special Abilities
     * @minItems 1
     */
    skill_style_special_abilities?: Activatables

    /**
     * @title Spell-Sword Enchantments
     * @minItems 1
     */
    spell_sword_enchantments?: Activatables

    /**
     * @title Staff Enchantments
     * @minItems 1
     */
    staff_enchantments?: Activatables

    /**
     * @title Toy Enchantments
     * @minItems 1
     */
    toy_enchantments?: Activatables

    /**
     * @title Trinkhornzauber
     * @minItems 1
     */
    trinkhornzauber?: Activatables

    /**
     * @title Vampiric Gifts
     * @minItems 1
     */
    vampiric_gifts?: Activatables

    /**
     * @title Visions
     * @minItems 1
     */
    visions?: Activatables

    /**
     * @title Wand Enchantments
     * @minItems 1
     */
    wand_enchantments?: Activatables

    /**
     * @title Weapon Enchantments
     * @minItems 1
     */
    weapon_enchantments?: Activatables
  }

  /**
   * A list of attributes with values above 8. Attributes that are not listed here default to 8.
   * @title Attributes
   * @minItems 1
   */
  attributes: Attribute[]

  /**
   * Computed, set and bought values for/of derived characteristics.
   * @title Derived Characteristics
   */
  derived_characteristics: {
    /**
     * @title Life Points
     */
    life_points: Energy

    /**
     * This property does not exist if the character does not have the active advantage Spellcaster and an active magical tradition special ability.
     * @title Arcane Energy
     */
    arcane_energy?: EnergyWithBuyBack

    /**
     * This property does not exist if the character does not have the active advantage Blessed One and an active blessed tradition special ability.
     * @title Karma Points
     */
    karma_points?: EnergyWithBuyBack

    /**
     * @title Spirit
     */
    spirit: DerivedCharacteristic

    /**
     * @title Toughness
     */
    toughness: DerivedCharacteristic

    /**
     * @title Dodge
     */
    dodge: DerivedCharacteristic

    /**
     * @title Initiative
     */
    initiative: DerivedCharacteristic

    /**
     * @title Movement
     */
    movement: DerivedCharacteristic

    /**
     * This property is not present if the required focus rules are not activated.
     * @title Wound Threshold
     */
    wound_threshold: DerivedCharacteristic
  }

  /**
   * A list of skills with values above 0. Skills that are not listed here default to 0.
   * @title Skills
   */
  skills: Skill[]

  /**
   * Lists of combat techniques, by group.
   * @title Combat Techniques
   */
  combat_techniques: {
    /**
     * A list of melee combat techniques with values above 6. Combat techniques that are not listed here default to 6.
     * @title Melee Combat Techniques
     */
    melee: CombatTechnique[]

    /**
     * A list of ranged combat techniques with values above 6. Combat techniques that are not listed here default to 6.
     * @title Ranged Combat Techniques
     */
    ranged: CombatTechnique[]
  }

  /**
   * A list of purchased cantrips.
   * @title Cantrips
   * @minItems 1
   */
  cantrips?: TinyActivatable[]

  /**
   * A list of active spells.
   * @title Spells
   * @minItems 1
   */
  spells?: ActivatableRatedWithEnhancements[]

  /**
   * A list of active rituals.
   * @title Rituals
   * @minItems 1
   */
  rituals?: ActivatableRatedWithEnhancements[]

  /**
   * Lists of magical actions, by group.
   * @title Magical Actions
   * @minProperties 1
   */
  magical_actions: {
    /**
     * A list of active curses.
     * @title Curses
     * @minItems 1
     */
    curses?: ActivatableRated[]

    /**
     * A list of active Elven magical songs.
     * @title Elven Magical Songs
     * @minItems 1
     */
    elven_magical_songs?: ActivatableRated[]

    /**
     * A list of active domination rituals.
     * @title Domination Rituals
     * @minItems 1
     */
    domination_rituals?: ActivatableRated[]

    /**
     * A list of active magical dances.
     * @title Magical Dances
     * @minItems 1
     */
    magical_dances?: ActivatableRated[]

    /**
     * A list of active magical melodies.
     * @title Magical Melodies
     * @minItems 1
     */
    magical_melodies?: ActivatableRated[]

    /**
     * A list of active jester tricks.
     * @title Jester Tricks
     * @minItems 1
     */
    jester_tricks?: ActivatableRated[]

    /**
     * A list of active animist powers.
     * @title Animist Powers
     * @minItems 1
     */
    animist_powers?: ActivatableRated[]

    /**
     * A list of active geode rituals.
     * @title Geode Rituals
     * @minItems 1
     */
    geode_rituals?: ActivatableRated[]

    /**
     * A list of active zibilja rituals.
     * @title Zibilja Rituals
     * @minItems 1
     */
    zibilja_rituals?: ActivatableRated[]
  }

  /**
   * A list of purchased blessings.
   * @title Blessings
   * @minItems 1
   */
  blessings?: TinyActivatable[]

  /**
   * A list of active liturgical chants.
   * @title Liturgical Chants
   * @minItems 1
   */
  liturgical_chants?: ActivatableRatedWithEnhancements[]

  /**
   * A list of active ceremonies.
   * @title Ceremonies
   * @minItems 1
   */
  ceremonies?: ActivatableRatedWithEnhancements[]

  items: {}

  hit_zone_armors?: {}

  /**
   * The money the character owns.
   */
  purse: Purse

  creatures?: {}

  pact?: {}
}

/**
 * The character's sex. It does not have to be binary, although it always must be specified how to handle it in the context of binary sex prerequisites. You can also provide a custom sex with a custom name.
 */
export type Sex =
  | BinarySex
  | NonBinarySex
  | CustomSex

/**
 * A binary sex option.
 */
export type BinarySex = {
  type: "Male" | "Female"
}

/**
 * A non-binary sex option.
 */
export type NonBinarySex ={
  type: "BalThani" | "Tsajana"

  /**
   * Defines how a non-binary sex should be treated when checking prerequisites.
   */
  binary_handling: BinaryHandling
}

/**
 * A custom non-binary sex option.
 */
export type CustomSex = {
  type: "Custom"

  /**
   * The custom sex name.
   * @minLength 1
   */
  name: string

  /**
   * Defines how a non-binary sex should be treated when checking prerequisites.
   */
  binary_handling: BinaryHandling
}

/**
 * Defines how a non-binary sex should be treated when checking prerequisites.
 */
export type BinaryHandling = {
  /**
   * Defines if the sex should be treated as male when checking prerequisites.
   */
  as_male: boolean

  /**
   * Defines if the sex should be treated as female when checking prerequisites.
   */
  as_female: boolean
}

export type Color =
  | PredefinedColor
  | CustomColor

/**
 * A predefined color.
 */
export type PredefinedColor = {
  type: "Predefined"

  /**
   * The color identifier.
   * @integer
   */
  id: number
}

/**
 * A custom color.
 */
export type CustomColor = {
  type: "Custom"

  /**
   * The custom color name.
   * @minLength 1
   */
  name: string
}

export type DerivedCharacteristic = {
  /**
   * The base value.
   * @integer
   */
  readonly base: number

  /**
   * The modifier depending on relevant advantages, disadvantages and special abilities.
   * @integer
   */
  readonly modifier: number

  /**
   * The (final) value.
   * @integer
   */
  readonly value: number
}

export type Energy = {
  /**
   * The base value.
   * @integer
   */
  readonly base: number

  /**
   * The modifier depending on relevant advantages, disadvantages and special abilities.
   * @integer
   */
  readonly modifier: number

  /**
   * The number of points purchased.
   * @minimum 0
   * @integer
   */
  purchased: number

  /**
   * The number of points permanently lost.
   * @integer
   * @minimum 0
   */
  permanently_lost: number

  /**
   * The (final) maximum.
   * @integer
   */
  readonly maximum: number
}

export type EnergyWithBuyBack = {
  /**
   * The base value.
   * @integer
   */
  readonly base: number

  /**
   * The modifier depending on relevant advantages, disadvantages and special abilities.
   * @integer
   */
  readonly modifier: number

  /**
   * The number of points purchased.
   * @minimum 0
   * @integer
   */
  purchased: number

  /**
   * The number of points permanently lost.
   * @integer
   * @minimum 0
   */
  permanently_lost: number

  /**
   * The number of permanently lost points that have been bought back.
   * @integer
   * @minimum 0
   */
  permanently_lost_bought_back: number

  /**
   * The (final) maximum.
   * @integer
   */
  readonly maximum: number
}

export type Attribute = {
  /**
   * The attribute identifier.
   * @integer
   */
  id: number

  /**
   * The attribute value.
   * @minimum 9
   * @integer
   */
  value: number
}

export type Skill = {
  /**
   * The skill identifier.
   * @integer
   */
  id: number

  /**
   * The skill rating.
   * @minimum 1
   * @integer
   */
  value: number
}

export type CombatTechnique = {
  /**
   * The combat technique identifier.
   * @integer
   */
  id: number

  /**
   * The combat technique rating.
   * @minimum 7
   * @integer
   */
  value: number
}

export type ActivatableRated = {
  /**
   * The skill identifier.
   * @integer
   */
  id: number

  /**
   * The skill rating.
   * @minimum 0
   * @integer
   */
  value: number
}

export type ActivatableRatedWithEnhancements = {
  /**
   * The skill identifier.
   * @integer
   */
  id: number

  /**
   * The skill rating.
   * @minimum 0
   * @integer
   */
  value: number

  /**
   * Purchased enhancements.
   * @minItems 1
   * @uniqueItems true
   */
  enhancements?: (/** @integer @minimum 1 */number)[]
}

export type TinyActivatable = {
  /**
   * The identifier.
   * @integer
   */
  id: number
}

/**
 * The money the character owns.
 * @title Purse
 */
export type Purse = {
  /**
   * The number of kreutzers the character owns.
   * @minimum 0
   * @integer
   */
  kreutzers: number

  /**
   * The number of halers the character owns.
   * @minimum 0
   * @integer
   */
  halers: number

  /**
   * The number of silverthalers the character owns.
   * @minimum 0
   * @integer
   */
  silverthalers: number

  /**
   * The number of ducats the character owns.
   * @minimum 0
   * @integer
   */
  ducats: number
}

/**
 * A list of active activatables. Activatables are advantages, disadvantages and special abilities.
 * @title Activatables
 */
export type Activatables = {
  /**
   * The activatable identifier.
   * @integer
   */
  id: number

  /**
   * One or multiple activations of the activatable.
   */
  instances: {
    /**
     * One or multiple options for the activatable. The meaning depends on the activatable.
     * @minItems 1
     */
    options?: (
      | {
        type: "Predefined"

        /**
         * An identifier referencing a different entry.
         */
        id: {
          /**
           * The entry type or `"Generic"` if it references a select option local to the entry.
           */
          type:
            | "Generic"
            | "Blessing"
            | "Cantrip"
            | "TradeSecret"
            | "Script"
            | "AnimalShape"
            | "ArcaneBardTradition"
            | "ArcaneDancerTradition"
            | "SexPractice"
            | "Race"
            | "Culture"
            | "BlessedTradition"
            | "Element"
            | "Property"
            | "Aspect"
            | "Disease"
            | "Poison"
            | "Language"
            | "Skill"
            | "MeleeCombatTechnique"
            | "RangedCombatTechnique"
            | "LiturgicalChant"
            | "Ceremony"
            | "Spell"
            | "Ritual"

          /**
           * The numeric identifier.
           * @integer
           */
          value: number
        }
      }
      | {
        type: "Custom"

        /**
         * A user-entered text.
         * @minLength 1
         */
        value: string
      }
    )[]

    /**
     * The instance level (if the activatable has levels).
     * @minimum 1
     * @integer
     */
    level?: number

    /**
     * If provided, a custom adventure points value has been set for this instance.
     * @minimum 0
     * @integer
     */
    custom_adventure_points_value?: number
  }[]
}[]
