// This file is generated automatically
// DO NOT EDIT IT MANUALLY
import { type Rules } from "@/types/eslint";

export const rules: Rules = {
  "tailwindcss/classnames-order": {
    description:
      "Enforces a consistent order of the Tailwind CSS classnames and its variants",
    docsUrl:
      "https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/classnames-order.md",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["3.0.0"],
  },
  "tailwindcss/enforces-negative-arbitrary-values": {
    description: "Warns about `-` prefixed classnames using arbitrary values",
    docsUrl:
      "https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/enforces-negative-arbitrary-values.md",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["3.0.0"],
  },
  "tailwindcss/enforces-shorthand": {
    description: "Replaces multiple Tailwind CSS classnames by their shorthand",
    docsUrl:
      "https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/enforces-shorthand.md",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["3.0.0"],
  },
  "tailwindcss/migration-from-tailwind-2": {
    description: "Detect obsolete classnames when upgrading to Tailwind CSS v3",
    docsUrl:
      "https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/migration-from-tailwind-2.md",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["3.0.0"],
  },
  "tailwindcss/no-arbitrary-value": {
    description: "Forbid using arbitrary values in classnames",
    docsUrl:
      "https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-arbitrary-value.md",
    js: { entry: '["off"]\n', level: "off" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["3.0.0"],
  },
  "tailwindcss/no-contradicting-classname": {
    description: 'Avoid contradicting Tailwind CSS classnames (`"w-3 w-5"`)',
    docsUrl:
      "https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-contradicting-classname.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["3.0.0"],
  },
  "tailwindcss/no-custom-classname": {
    description: "Detect classnames which do not belong to Tailwind CSS",
    docsUrl:
      "https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-custom-classname.md",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["3.0.0"],
  },
};
