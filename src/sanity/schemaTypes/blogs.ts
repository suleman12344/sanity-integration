import { defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "Description",
      type: "string",
    }),
    defineField({
      name: "Image",
      type: "image",
    }),
  ],
});
