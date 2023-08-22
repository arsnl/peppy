import { type Linter } from "eslint";

export type ESLintConfigName =
  | "base"
  | "jest"
  | "next"
  | "prettier"
  | "react"
  | "tailwindcss";

export type VersionEntryValue = {
  level: Linter.StringSeverity;
  entry: string;
};

export type VersionEntryValues = {
  js?: VersionEntryValue;
  ts?: VersionEntryValue;
};

export type VersionEntry = {
  version: string;
  values: VersionEntryValues | null;
};

export type UsedByEntry = {
  versions: VersionEntry[];
};

export type UsedBy = Record<string, UsedByEntry>;

export type Rule = {
  docsUrl: string;
  description: string;
  usedBy: UsedBy;
};

export type Rules = Record<string, Rule>;

const example: Rules = {
  "function-paren-newline": {
    description: "Enforce consistent line breaks inside function parentheses",
    docsUrl: "https://eslint.org/docs/rules/function-paren-newline",
    usedBy: {
      prettier: {
        versions: [
          {
            version: "next",
            values: {
              js: { level: "off", entry: '["off"]' },
              ts: { level: "off", entry: '["off"]' },
            },
          },
        ],
      },
    },
  },
};
