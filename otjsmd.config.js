// @ts-check
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { jsonSchema } from "optolith-tsjsonschemamd/renderers"

const rootDir = dirname(fileURLToPath(import.meta.url))
const sourceDir = join(rootDir, "src")
const schemaDir = join(rootDir, "schema")

/** @type {import("optolith-tsjsonschemamd").GeneratorOptions} */
export default {
  sourceDir: sourceDir,
  outputs: [
    {
      targetDir: schemaDir,
      renderer: jsonSchema({ spec: "Draft_07", allowAdditionalProperties: true }),
    }
  ],
  clean: true,
  verbose: false
}
