import * as TSONDB from "tsondb/schema"
import { Character } from "./character.js"

export const Schema = TSONDB.Schema([Character])

export * from "./activatables.js"
export * from "./adventurePoints.js"
export * from "./belongings.js"
export * from "./character.js"
export * from "./creation.js"
export * from "./derivedCharacteristics.js"
export * from "./personalData.js"
export * from "./rated.js"
export * from "./rules.js"
export * from "./sex.js"
export { UUIDv4 } from "./utils.js"
