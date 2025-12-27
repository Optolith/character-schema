import { join } from "node:path"
import type { GenerationConfig } from "tsondb/config"
import { JsonSchemaOutput } from "tsondb/renderer/jsonschema"
import { TypeScriptOutput } from "tsondb/renderer/ts"
import { Schema } from "./lib/index.js"

const config: GenerationConfig = {
  schema: Schema,
  outputs: [
    TypeScriptOutput({
      targetPath: join(import.meta.dirname, "gen", "types.d.ts"),
    }),
    JsonSchemaOutput({
      targetPath: join(import.meta.dirname, "gen", "types.schema.json"),
    }),
  ],
}

export default config
