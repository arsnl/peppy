import {
  type RuleVersionHistoryEntry,
  type VersionRuleChangesEntry,
} from "contentlayer/generated";

export const getRuleChangesString = (
  entry: RuleVersionHistoryEntry | VersionRuleChangesEntry,
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
