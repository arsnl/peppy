// This file is generated automatically
// DO NOT EDIT IT MANUALLY
import { type Rules } from "@/types/eslint";

export const rules: Rules = {
  "class-methods-use-this": {
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
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/alt-text": {
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
    js: { entry: '["error", { "components": [] }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "components": [] }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/anchor-is-valid": {
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
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/aria-props": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/aria-proptypes": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/aria-role": {
    js: { entry: '["error", { "ignoreNonDOM": false }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "ignoreNonDOM": false }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/aria-unsupported-elements": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/autocomplete-valid": {
    js: { entry: '["off", { "inputComponents": [] }]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off", { "inputComponents": [] }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/click-events-have-key-events": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/control-has-associated-label": {
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
    js: { entry: '["error", { "components": [""] }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "components": [""] }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/html-has-lang": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/iframe-has-title": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/img-redundant-alt": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/interactive-supports-focus": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/label-has-associated-control": {
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
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/media-has-caption": {
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
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/no-access-key": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/no-autofocus": {
    js: { entry: '["error", { "ignoreNonDOM": true }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "ignoreNonDOM": true }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/no-distracting-elements": {
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
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/no-redundant-roles": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/no-static-element-interactions": {
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
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/role-supports-aria-props": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/scope": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jsx-a11y/tabindex-no-positive": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react-hooks/exhaustive-deps": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react-hooks/rules-of-hooks": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/boolean-prop-naming": {
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
    js: { entry: '["error", "always"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "always"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/display-name": {
    js: { entry: '["off", { "ignoreTranspilerName": false }]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off", { "ignoreTranspilerName": false }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/forbid-component-props": {
    js: { entry: '["off", { "forbid": [] }]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off", { "forbid": [] }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/forbid-dom-props": {
    js: { entry: '["off", { "forbid": [] }]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off", { "forbid": [] }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/forbid-elements": {
    js: { entry: '["off", { "forbid": [] }]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off", { "forbid": [] }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/forbid-foreign-prop-types": {
    js: { entry: '["warn", { "allowInPropTypes": true }]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn", { "allowInPropTypes": true }]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "react/forbid-prop-types": {
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
    js: { entry: '["error", "never", { "always": [] }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "never", { "always": [] }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/jsx-curly-brace-presence": {
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
    js: { entry: '["error", "syntax"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "syntax"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/jsx-handler-names": {
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
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/jsx-max-depth": {
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/jsx-no-bind": {
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
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/jsx-no-constructed-context-values": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/jsx-no-duplicate-props": {
    js: { entry: '["error", { "ignoreCase": true }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "ignoreCase": true }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/jsx-no-literals": {
    js: { entry: '["off", { "noStrings": true }]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off", { "noStrings": true }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/jsx-no-script-url": {
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
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/jsx-no-useless-fragment": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/jsx-pascal-case": {
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
    js: { entry: '["off", { "ignoreCase": true }]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off", { "ignoreCase": true }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/jsx-sort-prop-types": {
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/jsx-sort-props": {
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
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/jsx-uses-vars": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-access-state-in-setstate": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-adjacent-inline-elements": {
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/no-array-index-key": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-arrow-function-lifecycle": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-children-prop": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-danger": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "react/no-danger-with-children": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-deprecated": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-did-mount-set-state": {
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/no-did-update-set-state": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-direct-mutation-state": {
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/no-find-dom-node": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-invalid-html-attribute": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-is-mounted": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-multi-comp": {
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/no-namespace": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-redundant-should-component-update": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-render-return-value": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-set-state": {
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/no-string-refs": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-this-in-sfc": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-typos": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-unescaped-entities": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-unknown-property": {
    js: { entry: '["error", { "ignore": ["css"] }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "ignore": ["css"] }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-unsafe": {
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/no-unstable-nested-components": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/no-unused-class-component-methods": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "react/no-unused-prop-types": {
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
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "react/no-will-update-set-state": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/prefer-es6-class": {
    js: { entry: '["error", "always"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "always"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/prefer-exact-props": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/prefer-read-only-props": {
    js: { entry: '["off"]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/prefer-stateless-function": {
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
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/require-optimization": {
    js: { entry: '["off", { "allowDecorators": [] }]\n', level: "off" },
    state: "unchanged",
    ts: { entry: '["off", { "allowDecorators": [] }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "react/require-render-return": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/self-closing-comp": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/sort-comp": {
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
    js: { entry: '["error", "always"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "always"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/static-property-placement": {
    js: { entry: '["error", "property assignment"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "property assignment"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/style-prop-object": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "react/void-dom-elements-no-children": {
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
};
