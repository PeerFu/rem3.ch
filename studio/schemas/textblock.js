export default {
    name: "textblock",
    title: "textblock",
    type: "document",
    fields: [
      { title: "Title", name: "title", type: "string" },
      {
        title: "Content",
        name: "content",
        type: "array",
        of: [{ type: "block" }],
      },
    ],
  }