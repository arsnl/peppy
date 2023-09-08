import {
  type RuleVersionHistoryEntry,
  type VersionChangesEntry,
} from "contentlayer/generated";

export const getChangesString = (
  entry: RuleVersionHistoryEntry | VersionChangesEntry,
) => {
  const { jsState, tsState } = entry;
  const jsStateString =
    jsState === "none" || jsState === "unchanged" ? "" : jsState;
  const tsStateString =
    tsState === "none" || tsState === "unchanged" ? "" : tsState;

  return !!jsStateString && jsStateString === tsStateString
    ? `JavaScript and TypeScript settings ${jsStateString}`
    : `${jsStateString ? `JavaScript settings ${jsStateString}` : ""}${
        jsStateString && tsStateString ? " and " : ""
      }${tsStateString ? `TypeScript settings ${tsStateString}` : ""}`;
};
