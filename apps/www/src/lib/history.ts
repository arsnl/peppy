import { type VersionHistory } from "contentlayer/generated";

export const getVersionHistoryChangesString = (
  versionHistory: VersionHistory,
) => {
  const { jsState, tsState } = versionHistory;
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
