import { createClient } from "next-sanity";

import { dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "v2023-09-20", // Ensure this matches your API version
  useCdn: false,
});
