import { defineNestedType } from "contentlayer/source-files";
import { STATE_ENUMS } from "../constant";

export const RuleVersionHistoryEntry = defineNestedType(() => ({
  name: "RuleVersionHistoryEntry",
  fields: {
    version: { type: "string", required: true },
    jsState: {
      type: "enum",
      options: STATE_ENUMS,
      required: true,
    },
    tsState: {
      type: "enum",
      options: STATE_ENUMS,
      required: true,
    },
  },
}));
