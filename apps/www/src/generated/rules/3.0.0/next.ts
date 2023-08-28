// This file is generated automatically
// DO NOT EDIT IT MANUALLY
import { type Rules } from "@/types/eslint";

export const rules: Rules = {
  "@next/next/google-font-display": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/google-font-preconnect": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/inline-script-id": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@next/next/next-script-for-ga": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-assign-module-variable": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@next/next/no-before-interactive-script-outside-document": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-css-tags": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-document-import-in-page": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@next/next/no-duplicate-head": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@next/next/no-head-element": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-head-import-in-document": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@next/next/no-html-link-for-pages": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "changed",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["3.0.0", "2.0.0"],
  },
  "@next/next/no-img-element": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-page-custom-font": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-script-component-in-head": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@next/next/no-styled-jsx-in-document": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-sync-scripts": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "changed",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["3.0.0", "2.0.0"],
  },
  "@next/next/no-title-in-document-head": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-typos": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-unwanted-polyfillio": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/alt-text": {
    js: {
      entry:
        '[\n  "error",\n  {\n    "area": [],\n    "elements": ["img", "object", "area", "input[type=\\"image\\"]"],\n    "img": ["Image"],\n    "input[type=\\"image\\"]": [],\n    "object": []\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "area": [],\n    "elements": ["img", "object", "area", "input[type=\\"image\\"]"],\n    "img": ["Image"],\n    "input[type=\\"image\\"]": [],\n    "object": []\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "jsx-a11y/anchor-is-valid": {
    js: {
      entry:
        '[\n  "error",\n  {\n    "aspects": ["invalidHref", "preferButton"],\n    "components": ["Link"],\n    "specialLink": ["hrefLeft", "hrefRight"]\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "aspects": ["invalidHref", "preferButton"],\n    "components": ["Link"],\n    "specialLink": ["hrefLeft", "hrefRight"]\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "react/no-unknown-property": {
    js: {
      entry: '["error", { "ignore": ["css", "jsx", "global"] }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "ignore": ["css", "jsx", "global"] }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "react/react-in-jsx-scope": {
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
};
