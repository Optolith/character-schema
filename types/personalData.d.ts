import type { Sex } from "./sex.js"
import type { UUIDv4 } from "./utils.js"

/**
 * Personal data such as hair color and place of birth.
 */
export interface PersonalData {
  /**
   * The character’s sex. It does not have to be binary, although it always must be specified how to handle it in the context of binary sex prerequisites. You can also provide a custom sex with a custom name.
   */
  sex: Sex

  /**
   * The family names and/or family members.
   */
  family?: string

  /**
   * The place where the character was born.
   */
  placeOfBirth?: string

  /**
   * The date when the character was born.
   */
  dateOfBirth?: string

  /**
   * The age of the character.
   */
  age?: string

  /**
   * The hair color of the character.
   */
  hairColor?: Color

  /**
   * The eye color of the character.
   */
  eyeColor?: Color

  /**
   * The size of the character.
   */
  size?: string

  /**
   * The weight of the character.
   */
  weight?: string

  /**
   * The character’s title(s).
   */
  title?: string

  /**
   * The social status.
   */
  socialStatus?: UUIDv4

  /**
   * The character’s characteristics.
   */
  characteristics?: string

  /**
   * Other information about the character.
   */
  otherInfo?: string
}

/**
 * A color, either predefined or custom.
 */
export type Color =
  | {
      type: "Predefined"
      id: UUIDv4
    }
  | {
      type: "Custom"
      name: string
    }
