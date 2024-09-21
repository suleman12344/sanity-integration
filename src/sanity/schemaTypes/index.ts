import { type SchemaTypeDefinition } from "sanity";
import { eventType } from "./eventTypes";
import { blogType } from "./blogs";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, blogType],
};
