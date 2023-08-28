// This file is generated automatically
// DO NOT EDIT IT MANUALLY
import { type Rules } from "@/types/eslint";

export const rules: Rules = {
  "@next/next/google-font-display": {
    description: "Enforce font-display behavior with Google Fonts",
    docsUrl: "https://nextjs.org/docs/messages/google-font-display",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/google-font-preconnect": {
    description: "Ensure `preconnect` is used with Google Fonts",
    docsUrl: "https://nextjs.org/docs/messages/google-font-preconnect",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/inline-script-id": {
    description:
      "Enforce `id` attribute on `next/script` components with inline content",
    docsUrl: "https://nextjs.org/docs/messages/inline-script-id",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@next/next/next-script-for-ga": {
    description:
      "Prefer `next/script` component when using the inline script for Google Analytics",
    docsUrl: "https://nextjs.org/docs/messages/next-script-for-ga",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-assign-module-variable": {
    description: "Prevent assignment to the `module` variable",
    docsUrl: "https://nextjs.org/docs/messages/no-assign-module-variable",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@next/next/no-before-interactive-script-outside-document": {
    description:
      "Prevent usage of `next/script`'s `beforeInteractive` strategy outside of `pages/_document.js`",
    docsUrl:
      "https://nextjs.org/docs/messages/no-before-interactive-script-outside-document",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-css-tags": {
    description: "Prevent manual stylesheet tags",
    docsUrl: "https://nextjs.org/docs/messages/no-css-tags",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-document-import-in-page": {
    description:
      "Prevent importing `next/document` outside of `pages/_document.js`",
    docsUrl: "https://nextjs.org/docs/messages/no-document-import-in-page",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@next/next/no-duplicate-head": {
    description: "Prevent duplicate usage of `<Head>` in `pages/_document.js`",
    docsUrl: "https://nextjs.org/docs/messages/no-duplicate-head",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@next/next/no-head-element": {
    description: "Prevent usage of `<head>` element",
    docsUrl: "https://nextjs.org/docs/messages/no-head-element",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-head-import-in-document": {
    description: "Prevent usage of `next/head` in `pages/_document.js`",
    docsUrl: "https://nextjs.org/docs/messages/no-head-import-in-document",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@next/next/no-html-link-for-pages": {
    description:
      "Prevent usage of `<a>` elements to navigate to internal Next.js pages",
    docsUrl: "https://nextjs.org/docs/messages/no-html-link-for-pages",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@next/next/no-img-element": {
    description:
      "Prevent usage of `<img>` element due to slower LCP and higher bandwidth",
    docsUrl: "https://nextjs.org/docs/messages/no-img-element",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-page-custom-font": {
    description: "Prevent page-only custom fonts",
    docsUrl: "https://nextjs.org/docs/messages/no-page-custom-font",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-script-component-in-head": {
    description: "Prevent usage of `next/script` in `next/head` component",
    docsUrl: "https://nextjs.org/docs/messages/no-script-component-in-head",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@next/next/no-styled-jsx-in-document": {
    description: "Prevent usage of `styled-jsx` in `pages/_document.js`",
    docsUrl: "https://nextjs.org/docs/messages/no-styled-jsx-in-document",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-sync-scripts": {
    description: "Prevent synchronous scripts",
    docsUrl: "https://nextjs.org/docs/messages/no-sync-scripts",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@next/next/no-title-in-document-head": {
    description:
      "Prevent usage of `<title>` with `Head` component from `next/document`",
    docsUrl: "https://nextjs.org/docs/messages/no-title-in-document-head",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-typos": {
    description: "Prevent common typos in Next.js's data fetching functions",
    docsUrl: "https://nextjs.org/docs/messages/no-typos",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "@next/next/no-unwanted-polyfillio": {
    description: "Prevent duplicate polyfills from Polyfill.io",
    docsUrl: "https://nextjs.org/docs/messages/no-unwanted-polyfillio",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/alt-text": {
    description:
      "Enforce all elements that require alternative text have meaningful information to relay back to end user",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/alt-text.md",
    js: {
      entry:
        '[\n  "error",\n  {\n    "area": [],\n    "elements": ["img", "object", "area", "input[type=\\"image\\"]"],\n    "img": ["Image"],\n    "input[type=\\"image\\"]": [],\n    "object": []\n  }\n]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "area": [],\n    "elements": ["img", "object", "area", "input[type=\\"image\\"]"],\n    "img": ["Image"],\n    "input[type=\\"image\\"]": [],\n    "object": []\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "jsx-a11y/anchor-is-valid": {
    description: "Enforce all anchors are valid, navigable elements",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/anchor-is-valid.md",
    js: {
      entry:
        '[\n  "error",\n  {\n    "aspects": ["invalidHref", "preferButton"],\n    "components": ["Link"],\n    "specialLink": ["hrefLeft", "hrefRight"]\n  }\n]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "aspects": ["invalidHref", "preferButton"],\n    "components": ["Link"],\n    "specialLink": ["hrefLeft", "hrefRight"]\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "react/no-unknown-property": {
    description: "Prevent usage of unknown DOM property",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-unknown-property.md",
    js: {
      entry: '["error", { "ignore": ["css", "jsx", "global"] }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry: '["error", { "ignore": ["css", "jsx", "global"] }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "react/react-in-jsx-scope": {
    description: "Prevent missing React when using JSX",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/react-in-jsx-scope.md",
    js: { entry: '["off"]\n', level: "off" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
};
