import * as DB from "tsondb/schema/dsl";

export const READ_ONLY_NOTE =
  "\n\n*Note: This value is read-only and recalculated by Optolith. Setting it to a different value will not influence calculation in Optolith.*";

export const UUIDv4 = DB.TypeAlias(import.meta.filename, {
  name: "UUIDv4",
  comment: "An UUIDv4 identifier of an entry in the Optolith database.",
  type: () =>
    DB.String({
      pattern: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
    }),
});
