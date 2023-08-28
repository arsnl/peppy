// This file is generated automatically
// DO NOT EDIT IT MANUALLY
import { type Rules } from "@/types/eslint";

export const rules: Rules = {
  "class-methods-use-this": {
    description: "Enforce that class methods utilize `this`",
    docsUrl: "https://eslint.org/docs/rules/class-methods-use-this",
    js: {
      entry:
        '[\n  "error",\n  {\n    "enforceForClassFields": true,\n    "exceptMethods": [\n      "render",\n      "getInitialState",\n      "getDefaultProps",\n      "getChildContext",\n      "componentWillMount",\n      "UNSAFE_componentWillMount",\n      "componentDidMount",\n      "componentWillReceiveProps",\n      "UNSAFE_componentWillReceiveProps",\n      "shouldComponentUpdate",\n      "componentWillUpdate",\n      "UNSAFE_componentWillUpdate",\n      "componentDidUpdate",\n      "componentWillUnmount",\n      "componentDidCatch",\n      "getSnapshotBeforeUpdate"\n    ]\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "enforceForClassFields": true,\n    "exceptMethods": [\n      "render",\n      "getInitialState",\n      "getDefaultProps",\n      "getChildContext",\n      "componentWillMount",\n      "UNSAFE_componentWillMount",\n      "componentDidMount",\n      "componentWillReceiveProps",\n      "UNSAFE_componentWillReceiveProps",\n      "shouldComponentUpdate",\n      "componentWillUpdate",\n      "UNSAFE_componentWillUpdate",\n      "componentDidUpdate",\n      "componentWillUnmount",\n      "componentDidCatch",\n      "getSnapshotBeforeUpdate"\n    ]\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "jsx-a11y/accessible-emoji": {
    description:
      "Enforce emojis are wrapped in `<span>` and provide screenreader access",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/accessible-emoji.md",
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/alt-text": {
    description:
      "Enforce all elements that require alternative text have meaningful information to relay back to end user",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/alt-text.md",
    js: {
      entry:
        '[\n  "error",\n  {\n    "area": [],\n    "elements": ["img", "object", "area", "input[type=\\"image\\"]"],\n    "img": [],\n    "input[type=\\"image\\"]": [],\n    "object": []\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "area": [],\n    "elements": ["img", "object", "area", "input[type=\\"image\\"]"],\n    "img": [],\n    "input[type=\\"image\\"]": [],\n    "object": []\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "jsx-a11y/anchor-has-content": {
    description: "Enforce all anchors to contain accessible content",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/anchor-has-content.md",
    js: { entry: '["error", { "components": [] }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "components": [] }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/anchor-is-valid": {
    description: "Enforce all anchors are valid, navigable elements",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/anchor-is-valid.md",
    js: {
      entry:
        '[\n  "error",\n  {\n    "aspects": ["noHref", "invalidHref", "preferButton"],\n    "components": ["Link"],\n    "specialLink": ["to"]\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "aspects": ["noHref", "invalidHref", "preferButton"],\n    "components": ["Link"],\n    "specialLink": ["to"]\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "jsx-a11y/aria-activedescendant-has-tabindex": {
    description: "Enforce elements with aria-activedescendant are tabbable",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/aria-activedescendant-has-tabindex.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/aria-props": {
    description: "Enforce all `aria-*` props are valid",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/aria-props.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/aria-proptypes": {
    description: "Enforce ARIA state and property values are valid",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/aria-proptypes.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/aria-role": {
    description:
      "Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/aria-role.md",
    js: { entry: '["error", { "ignoreNonDOM": false }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "ignoreNonDOM": false }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/aria-unsupported-elements": {
    description:
      "Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/aria-unsupported-elements.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/autocomplete-valid": {
    description: "Enforce that autocomplete attributes are used correctly",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/autocomplete-valid.md",
    js: { entry: '["off", { "inputComponents": [] }]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off", { "inputComponents": [] }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/click-events-have-key-events": {
    description:
      "Enforce a clickable non-interactive element has at least one keyboard event listener",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/click-events-have-key-events.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/control-has-associated-label": {
    description:
      "Enforce that a control (an interactive element) has a text label",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/control-has-associated-label.md",
    js: {
      entry:
        '[\n  "error",\n  {\n    "controlComponents": [],\n    "depth": 5,\n    "ignoreElements": [\n      "audio",\n      "canvas",\n      "embed",\n      "input",\n      "textarea",\n      "tr",\n      "video"\n    ],\n    "ignoreRoles": [\n      "grid",\n      "listbox",\n      "menu",\n      "menubar",\n      "radiogroup",\n      "row",\n      "tablist",\n      "toolbar",\n      "tree",\n      "treegrid"\n    ],\n    "labelAttributes": ["label"]\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "controlComponents": [],\n    "depth": 5,\n    "ignoreElements": [\n      "audio",\n      "canvas",\n      "embed",\n      "input",\n      "textarea",\n      "tr",\n      "video"\n    ],\n    "ignoreRoles": [\n      "grid",\n      "listbox",\n      "menu",\n      "menubar",\n      "radiogroup",\n      "row",\n      "tablist",\n      "toolbar",\n      "tree",\n      "treegrid"\n    ],\n    "labelAttributes": ["label"]\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "jsx-a11y/heading-has-content": {
    description:
      "Enforce heading (`h1`, `h2`, etc) elements contain accessible content",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/heading-has-content.md",
    js: { entry: '["error", { "components": [""] }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "components": [""] }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/html-has-lang": {
    description: "Enforce `<html>` element has `lang` prop",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/html-has-lang.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/iframe-has-title": {
    description: "Enforce iframe elements have a title attribute",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/iframe-has-title.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/img-redundant-alt": {
    description:
      'Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo"',
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/img-redundant-alt.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/interactive-supports-focus": {
    description:
      "Enforce that elements with interactive handlers like `onClick` must be focusable",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/interactive-supports-focus.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/label-has-associated-control": {
    description:
      "Enforce that a `label` tag has a text label and an associated control",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/label-has-associated-control.md",
    js: {
      entry:
        '[\n  "error",\n  {\n    "assert": "both",\n    "controlComponents": [],\n    "depth": 25,\n    "labelAttributes": [],\n    "labelComponents": []\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "assert": "both",\n    "controlComponents": [],\n    "depth": 25,\n    "labelAttributes": [],\n    "labelComponents": []\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "jsx-a11y/label-has-for": {
    description: "Enforce that `<label>` elements have the `htmlFor` prop",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/label-has-for.md",
    js: {
      entry:
        '[\n  "off",\n  {\n    "allowChildren": false,\n    "components": [],\n    "required": { "every": ["nesting", "id"] }\n  }\n]\n',
      level: "off",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "off",\n  {\n    "allowChildren": false,\n    "components": [],\n    "required": { "every": ["nesting", "id"] }\n  }\n]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "jsx-a11y/lang": {
    description: "Enforce lang attribute has a valid value",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/lang.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/media-has-caption": {
    description:
      "Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/media-has-caption.md",
    js: {
      entry: '["error", { "audio": [], "track": [], "video": [] }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "audio": [], "track": [], "video": [] }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "jsx-a11y/mouse-events-have-key-events": {
    description:
      "Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/mouse-events-have-key-events.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/no-access-key": {
    description:
      "Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screenreader",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/no-access-key.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/no-autofocus": {
    description: "Enforce autoFocus prop is not used",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/no-autofocus.md",
    js: { entry: '["error", { "ignoreNonDOM": true }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "ignoreNonDOM": true }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/no-distracting-elements": {
    description: "Enforce distracting elements are not used",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/no-distracting-elements.md",
    js: {
      entry: '["error", { "elements": ["marquee", "blink"] }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "elements": ["marquee", "blink"] }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "jsx-a11y/no-interactive-element-to-noninteractive-role": {
    description:
      "Enforce that interactive elements should not be assigned non-interactive roles",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/no-interactive-element-to-noninteractive-role.md",
    js: {
      entry: '["error", { "tr": ["none", "presentation"] }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "tr": ["none", "presentation"] }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "jsx-a11y/no-noninteractive-element-interactions": {
    description:
      "Enforce that non-interactive elements should not be assigned mouse or keyboard event listeners",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/no-noninteractive-element-interactions.md",
    js: {
      entry:
        '[\n  "error",\n  {\n    "handlers": [\n      "onClick",\n      "onMouseDown",\n      "onMouseUp",\n      "onKeyPress",\n      "onKeyDown",\n      "onKeyUp"\n    ]\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "handlers": [\n      "onClick",\n      "onMouseDown",\n      "onMouseUp",\n      "onKeyPress",\n      "onKeyDown",\n      "onKeyUp"\n    ]\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "jsx-a11y/no-noninteractive-element-to-interactive-role": {
    description:
      "Enforce that non-interactive elements should not be assigned interactive roles",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/no-noninteractive-element-to-interactive-role.md",
    js: {
      entry:
        '[\n  "error",\n  {\n    "li": ["menuitem", "option", "row", "tab", "treeitem"],\n    "ol": [\n      "listbox",\n      "menu",\n      "menubar",\n      "radiogroup",\n      "tablist",\n      "tree",\n      "treegrid"\n    ],\n    "table": ["grid"],\n    "td": ["gridcell"],\n    "ul": [\n      "listbox",\n      "menu",\n      "menubar",\n      "radiogroup",\n      "tablist",\n      "tree",\n      "treegrid"\n    ]\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "li": ["menuitem", "option", "row", "tab", "treeitem"],\n    "ol": [\n      "listbox",\n      "menu",\n      "menubar",\n      "radiogroup",\n      "tablist",\n      "tree",\n      "treegrid"\n    ],\n    "table": ["grid"],\n    "td": ["gridcell"],\n    "ul": [\n      "listbox",\n      "menu",\n      "menubar",\n      "radiogroup",\n      "tablist",\n      "tree",\n      "treegrid"\n    ]\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "jsx-a11y/no-noninteractive-tabindex": {
    description:
      "Enforce that `tabIndex` should only be declared on interactive elements",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/no-noninteractive-tabindex.md",
    js: {
      entry: '["error", { "roles": ["tabpanel"], "tags": [] }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "roles": ["tabpanel"], "tags": [] }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "jsx-a11y/no-onchange": {
    description:
      "Enforce usage of `onBlur` over `onChange` on select menus for accessibility",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/no-onchange.md",
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/no-redundant-roles": {
    description:
      "Enforce explicit role property is not the same as implicit/default role property on element",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/no-redundant-roles.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/no-static-element-interactions": {
    description:
      "Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/no-static-element-interactions.md",
    js: {
      entry:
        '[\n  "error",\n  {\n    "handlers": [\n      "onClick",\n      "onMouseDown",\n      "onMouseUp",\n      "onKeyPress",\n      "onKeyDown",\n      "onKeyUp"\n    ]\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "handlers": [\n      "onClick",\n      "onMouseDown",\n      "onMouseUp",\n      "onKeyPress",\n      "onKeyDown",\n      "onKeyUp"\n    ]\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "jsx-a11y/role-has-required-aria-props": {
    description:
      "Enforce that elements with ARIA roles must have all required attributes for that role",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/role-has-required-aria-props.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/role-supports-aria-props": {
    description:
      "Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/role-supports-aria-props.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/scope": {
    description: "Enforce `scope` prop is only used on `<th>` elements",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/scope.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/tabindex-no-positive": {
    description: "Enforce `tabIndex` value is not greater than zero",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/tabindex-no-positive.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react-hooks/exhaustive-deps": {
    description: "Checks effect dependencies",
    docsUrl:
      "https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react-hooks/rules-of-hooks": {
    description: "Checks rules of Hooks",
    docsUrl:
      "https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/boolean-prop-naming": {
    description: "Enforces consistent naming for boolean props",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/boolean-prop-naming.md",
    js: {
      entry:
        '[\n  "off",\n  {\n    "message": "",\n    "propTypeNames": ["bool", "mutuallyExclusiveTrueProps"],\n    "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+"\n  }\n]\n',
      level: "off",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "off",\n  {\n    "message": "",\n    "propTypeNames": ["bool", "mutuallyExclusiveTrueProps"],\n    "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+"\n  }\n]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "react/button-has-type": {
    description: 'Forbid "button" element without an explicit "type" attribute',
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/button-has-type.md",
    js: {
      entry: '["error", { "button": true, "reset": false, "submit": true }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "button": true, "reset": false, "submit": true }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "react/default-props-match-prop-types": {
    description:
      'Enforce all defaultProps are defined and not "required" in propTypes',
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/default-props-match-prop-types.md",
    js: {
      entry: '["error", { "allowRequiredDefaults": false }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "allowRequiredDefaults": false }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "react/destructuring-assignment": {
    description:
      "Enforce consistent usage of destructuring assignment of props, state, and context",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/destructuring-assignment.md",
    js: { entry: '["error", "always"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "always"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/display-name": {
    description: "Prevent missing displayName in a React component definition",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/display-name.md",
    js: { entry: '["off", { "ignoreTranspilerName": false }]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off", { "ignoreTranspilerName": false }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/forbid-component-props": {
    description: "Forbid certain props on components",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/forbid-component-props.md",
    js: { entry: '["off", { "forbid": [] }]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off", { "forbid": [] }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/forbid-dom-props": {
    description: "Forbid certain props on DOM Nodes",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/forbid-dom-props.md",
    js: { entry: '["off", { "forbid": [] }]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off", { "forbid": [] }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/forbid-elements": {
    description: "Forbid certain elements",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/forbid-elements.md",
    js: { entry: '["off", { "forbid": [] }]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off", { "forbid": [] }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/forbid-foreign-prop-types": {
    description: "Forbid using another component's propTypes",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/forbid-foreign-prop-types.md",
    js: { entry: '["warn", { "allowInPropTypes": true }]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn", { "allowInPropTypes": true }]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "react/forbid-prop-types": {
    description: "Forbid certain propTypes",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/forbid-prop-types.md",
    js: {
      entry:
        '[\n  "error",\n  {\n    "checkChildContextTypes": true,\n    "checkContextTypes": true,\n    "forbid": ["any", "array", "object"]\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "checkChildContextTypes": true,\n    "checkContextTypes": true,\n    "forbid": ["any", "array", "object"]\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "react/function-component-definition": {
    description: "Standardize the way function component get defined (fixable)",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/function-component-definition.md",
    js: {
      entry:
        '[\n  "error",\n  { "namedComponents": "arrow-function", "unnamedComponents": "arrow-function" }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  { "namedComponents": "arrow-function", "unnamedComponents": "arrow-function" }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "react/jsx-boolean-value": {
    description: "Enforce boolean attributes notation in JSX",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-boolean-value.md",
    js: { entry: '["error", "never", { "always": [] }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "never", { "always": [] }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/jsx-curly-brace-presence": {
    description:
      "Disallow unnecessary JSX expressions when literals alone are sufficient or enfore JSX expressions on literals in JSX children or attributes",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-curly-brace-presence.md",
    js: {
      entry: '["error", { "children": "never", "props": "never" }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "children": "never", "props": "never" }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "react/jsx-filename-extension": {
    description: "Restrict file extensions that may contain JSX",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-filename-extension.md",
    js: {
      entry: '["error", { "extensions": [".jsx", ".tsx"] }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "extensions": [".jsx", ".tsx"] }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "react/jsx-fragments": {
    description: "Enforce shorthand or standard form for React fragments",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-fragments.md",
    js: { entry: '["error", "syntax"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "syntax"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/jsx-handler-names": {
    description: "Enforce event handler naming conventions in JSX",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-handler-names.md",
    js: {
      entry:
        '["off", { "eventHandlerPrefix": "handle", "eventHandlerPropPrefix": "on" }]\n',
      level: "off",
    },
    state: "unchanged",
    ts: {
      entry:
        '["off", { "eventHandlerPrefix": "handle", "eventHandlerPropPrefix": "on" }]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "react/jsx-key": {
    description: "Report missing `key` props in iterators/collection literals",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-key.md",
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/jsx-max-depth": {
    description: "Validate JSX maximum depth",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-max-depth.md",
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/jsx-no-bind": {
    description:
      "Prevents usage of Function.prototype.bind and arrow functions in React component props",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-no-bind.md",
    js: {
      entry:
        '[\n  "error",\n  {\n    "allowArrowFunctions": true,\n    "allowBind": false,\n    "allowFunctions": false,\n    "ignoreDOMComponents": true,\n    "ignoreRefs": true\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "allowArrowFunctions": true,\n    "allowBind": false,\n    "allowFunctions": false,\n    "ignoreDOMComponents": true,\n    "ignoreRefs": true\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "react/jsx-no-comment-textnodes": {
    description:
      "Comments inside children section of tag should be placed inside braces",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-no-comment-textnodes.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/jsx-no-constructed-context-values": {
    description: "Prevent react contexts from taking non-stable values",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-no-constructed-context-values.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/jsx-no-duplicate-props": {
    description: "Enforce no duplicate props",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-no-duplicate-props.md",
    js: { entry: '["error", { "ignoreCase": true }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "ignoreCase": true }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/jsx-no-literals": {
    description: "Prevent using string literals in React component definition",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-no-literals.md",
    js: { entry: '["off", { "noStrings": true }]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off", { "noStrings": true }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/jsx-no-script-url": {
    description: "Forbid `javascript:` URLs",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-no-script-url.md",
    js: {
      entry: '["error", [{ "name": "Link", "props": ["to"] }]]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", [{ "name": "Link", "props": ["to"] }]]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "react/jsx-no-target-blank": {
    description:
      'Forbid target="_blank" attribute without rel="noopener noreferrer"',
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-no-target-blank.md",
    js: {
      entry:
        '["error", { "enforceDynamicLinks": "always", "forms": false, "links": true }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '["error", { "enforceDynamicLinks": "always", "forms": false, "links": true }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "react/jsx-no-undef": {
    description: "Disallow undeclared variables in JSX",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-no-undef.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/jsx-no-useless-fragment": {
    description: "Disallow unnecessary fragments",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-no-useless-fragment.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/jsx-pascal-case": {
    description: "Enforce PascalCase for user-defined JSX components",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-pascal-case.md",
    js: {
      entry:
        '[\n  "error",\n  { "allowAllCaps": true, "allowLeadingUnderscore": true, "ignore": [] }\n]\n',
      level: "error",
    },
    state: "changed",
    ts: {
      entry:
        '[\n  "error",\n  { "allowAllCaps": true, "allowLeadingUnderscore": true, "ignore": [] }\n]\n',
      level: "error",
    },
    updates: ["3.0.0", "2.0.0"],
  },
  "react/jsx-sort-default-props": {
    description: "Enforce defaultProps declarations alphabetical sorting",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-sort-default-props.md",
    js: { entry: '["off", { "ignoreCase": true }]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off", { "ignoreCase": true }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/jsx-sort-prop-types": {
    description: "Enforce propTypes declarations alphabetical sorting",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-sort-prop-types.md",
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/jsx-sort-props": {
    description: "Enforce props alphabetical sorting",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-sort-props.md",
    js: {
      entry:
        '[\n  "off",\n  {\n    "callbacksLast": false,\n    "ignoreCase": true,\n    "noSortAlphabetically": false,\n    "reservedFirst": true,\n    "shorthandFirst": false,\n    "shorthandLast": false\n  }\n]\n',
      level: "off",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "off",\n  {\n    "callbacksLast": false,\n    "ignoreCase": true,\n    "noSortAlphabetically": false,\n    "reservedFirst": true,\n    "shorthandFirst": false,\n    "shorthandLast": false\n  }\n]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "react/jsx-uses-react": {
    description: "Prevent React to be marked as unused",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-uses-react.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/jsx-uses-vars": {
    description: "Prevent variables used in JSX to be marked as unused",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/jsx-uses-vars.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-access-state-in-setstate": {
    description: "Reports when this.state is accessed within setState",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-access-state-in-setstate.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-adjacent-inline-elements": {
    description: "Prevent adjacent inline elements not separated by whitespace",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-adjacent-inline-elements.md",
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/no-array-index-key": {
    description: "Prevent usage of Array index in keys",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-array-index-key.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-arrow-function-lifecycle": {
    description:
      "Lifecycle methods should be methods on the prototype, not class fields",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-arrow-function-lifecycle.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-children-prop": {
    description: "Prevent passing of children as props",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-children-prop.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-danger": {
    description: "Prevent usage of dangerous JSX props",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-danger.md",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "react/no-danger-with-children": {
    description:
      "Report when a DOM element is using both children and dangerouslySetInnerHTML",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-danger-with-children.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-deprecated": {
    description: "Prevent usage of deprecated methods",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-deprecated.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-did-mount-set-state": {
    description: "Prevent usage of setState in componentDidMount",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-did-mount-set-state.md",
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/no-did-update-set-state": {
    description: "Prevent usage of setState in componentDidUpdate",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-did-update-set-state.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-direct-mutation-state": {
    description: "Prevent direct mutation of this.state",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-direct-mutation-state.md",
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/no-find-dom-node": {
    description: "Prevent usage of findDOMNode",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-find-dom-node.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-invalid-html-attribute": {
    description: "Prevent usage of invalid attributes",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-invalid-html-attribute.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-is-mounted": {
    description: "Prevent usage of isMounted",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-is-mounted.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-multi-comp": {
    description: "Prevent multiple component definition per file",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-multi-comp.md",
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/no-namespace": {
    description: "Enforce that namespaces are not used in React elements",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-namespace.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-redundant-should-component-update": {
    description: "Flag shouldComponentUpdate when extending PureComponent",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-redundant-should-component-update.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-render-return-value": {
    description: "Prevent usage of the return value of React.render",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-render-return-value.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-set-state": {
    description: "Prevent usage of setState",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-set-state.md",
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/no-string-refs": {
    description:
      "Prevent string definitions for references and prevent referencing `this.refs`",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-string-refs.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-this-in-sfc": {
    description: "Report `this` being used in stateless components",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-this-in-sfc.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-typos": {
    description: "Prevent common typos",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-typos.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-unescaped-entities": {
    description:
      "Detect unescaped HTML entities, which might represent malformed tags",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-unescaped-entities.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-unknown-property": {
    description: "Prevent usage of unknown DOM property",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-unknown-property.md",
    js: { entry: '["error", { "ignore": ["css"] }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "ignore": ["css"] }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-unsafe": {
    description: "Prevent usage of unsafe lifecycle methods",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-unsafe.md",
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/no-unstable-nested-components": {
    description: "Prevent creating unstable components inside components",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-unstable-nested-components.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-unused-class-component-methods": {
    description: "Prevent declaring unused methods of component class",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-unused-class-component-methods.md",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "react/no-unused-prop-types": {
    description: "Prevent definitions of unused prop types",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-unused-prop-types.md",
    js: {
      entry: '["warn", { "customValidators": [], "skipShapeProps": true }]\n',
      level: "warn",
    },
    state: "unchanged",
    ts: {
      entry: '["warn", { "customValidators": [], "skipShapeProps": true }]\n',
      level: "warn",
    },
    updates: ["2.0.0"],
  },
  "react/no-unused-state": {
    description: "Prevent definition of unused state fields",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-unused-state.md",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "react/no-will-update-set-state": {
    description: "Prevent usage of setState in componentWillUpdate",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/no-will-update-set-state.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/prefer-es6-class": {
    description: "Enforce ES5 or ES6 class for React Components",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/prefer-es6-class.md",
    js: { entry: '["error", "always"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "always"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/prefer-exact-props": {
    description: "Prefer exact proptype definitions",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/prefer-exact-props.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/prefer-read-only-props": {
    description: "Require read-only props",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/prefer-read-only-props.md",
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/prefer-stateless-function": {
    description:
      "Enforce stateless components to be written as a pure function",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/prefer-stateless-function.md",
    js: {
      entry: '["error", { "ignorePureComponents": true }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "ignorePureComponents": true }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "react/prop-types": {
    description:
      "Prevent missing props validation in a React component definition",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/prop-types.md",
    js: {
      entry:
        '["error", { "customValidators": [], "ignore": [], "skipUndeclared": false }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '["off", { "customValidators": [], "ignore": [], "skipUndeclared": false }]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "react/react-in-jsx-scope": {
    description: "Prevent missing React when using JSX",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/react-in-jsx-scope.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/require-optimization": {
    description:
      "Enforce React components to have a shouldComponentUpdate method",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/require-optimization.md",
    js: { entry: '["off", { "allowDecorators": [] }]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off", { "allowDecorators": [] }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/require-render-return": {
    description:
      "Enforce ES5 or ES6 class for returning value in render function",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/require-render-return.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/self-closing-comp": {
    description: "Prevent extra closing tags for components without children",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/self-closing-comp.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/sort-comp": {
    description: "Enforce component methods order",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/sort-comp.md",
    js: {
      entry:
        '[\n  "error",\n  {\n    "groups": {\n      "lifecycle": [\n        "displayName",\n        "propTypes",\n        "contextTypes",\n        "childContextTypes",\n        "mixins",\n        "statics",\n        "defaultProps",\n        "constructor",\n        "getDefaultProps",\n        "getInitialState",\n        "state",\n        "getChildContext",\n        "getDerivedStateFromProps",\n        "componentWillMount",\n        "UNSAFE_componentWillMount",\n        "componentDidMount",\n        "componentWillReceiveProps",\n        "UNSAFE_componentWillReceiveProps",\n        "shouldComponentUpdate",\n        "componentWillUpdate",\n        "UNSAFE_componentWillUpdate",\n        "getSnapshotBeforeUpdate",\n        "componentDidUpdate",\n        "componentDidCatch",\n        "componentWillUnmount"\n      ],\n      "rendering": ["/^render.+$/", "render"]\n    },\n    "order": [\n      "static-variables",\n      "static-methods",\n      "instance-variables",\n      "lifecycle",\n      "/^handle.+$/",\n      "/^on.+$/",\n      "getters",\n      "setters",\n      "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",\n      "instance-methods",\n      "everything-else",\n      "rendering"\n    ]\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "groups": {\n      "lifecycle": [\n        "displayName",\n        "propTypes",\n        "contextTypes",\n        "childContextTypes",\n        "mixins",\n        "statics",\n        "defaultProps",\n        "constructor",\n        "getDefaultProps",\n        "getInitialState",\n        "state",\n        "getChildContext",\n        "getDerivedStateFromProps",\n        "componentWillMount",\n        "UNSAFE_componentWillMount",\n        "componentDidMount",\n        "componentWillReceiveProps",\n        "UNSAFE_componentWillReceiveProps",\n        "shouldComponentUpdate",\n        "componentWillUpdate",\n        "UNSAFE_componentWillUpdate",\n        "getSnapshotBeforeUpdate",\n        "componentDidUpdate",\n        "componentDidCatch",\n        "componentWillUnmount"\n      ],\n      "rendering": ["/^render.+$/", "render"]\n    },\n    "order": [\n      "static-variables",\n      "static-methods",\n      "instance-variables",\n      "lifecycle",\n      "/^handle.+$/",\n      "/^on.+$/",\n      "getters",\n      "setters",\n      "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",\n      "instance-methods",\n      "everything-else",\n      "rendering"\n    ]\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "react/sort-prop-types": {
    description: "Enforce propTypes declarations alphabetical sorting",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/sort-prop-types.md",
    js: {
      entry:
        '[\n  "off",\n  {\n    "callbacksLast": false,\n    "ignoreCase": true,\n    "requiredFirst": false,\n    "sortShapeProp": true\n  }\n]\n',
      level: "off",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "off",\n  {\n    "callbacksLast": false,\n    "ignoreCase": true,\n    "requiredFirst": false,\n    "sortShapeProp": true\n  }\n]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "react/state-in-constructor": {
    description:
      "State initialization in an ES6 class component should be in a constructor",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/state-in-constructor.md",
    js: { entry: '["error", "always"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "always"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/static-property-placement": {
    description:
      "Defines where React component static properties should be positioned",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/static-property-placement.md",
    js: { entry: '["error", "property assignment"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "property assignment"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/style-prop-object": {
    description: "Enforce style prop value is an object",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/style-prop-object.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/void-dom-elements-no-children": {
    description:
      "Prevent passing of children to void DOM elements (e.g. `<br />`)",
    docsUrl:
      "https://github.com/jsx-eslint/eslint-plugin-react/tree/main/docs/rules/void-dom-elements-no-children.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
};
