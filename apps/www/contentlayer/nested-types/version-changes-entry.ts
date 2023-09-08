import { defineNestedType } from "contentlayer/source-files";
import { STATE_ENUMS } from "../constant";

export const VersionChangesEntry = defineNestedType(() => ({
  name: "VersionChangesEntry",
  fields: {
    ruleKey: {
      type: "string",
      required: true,
    },
    configKey: {
      type: "string",
      required: true,
    },
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
