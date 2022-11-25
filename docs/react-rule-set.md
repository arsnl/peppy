<div align="center"><img src="../media/readme-banner.png" width="600" role="presentation" /></div>
<h3 align="center">Brilliant ESLint configurations<br/> for happier developers</h3>

<h2 align="center">React rule set</h2>

Here are the ESLint rules applied for [React](https://reactjs.org/). These rules are used by the `peppy/react` and `peppy/next` configurations.

These rules use the [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react), [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) and [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) plugins already included in Peppy.

Since Peppy supports TypeScript by default, some rules can be overwritten when applied on a TypeScript file. You will find the list of these rules in the [TypeScript](#typescript) section of this document.

<!-- START rules -->
<div align="center">

### Rules stats

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 117   | 87       | 5          | 25          |

</div>

<details><summary>🔴 <a href="https://eslint.org/docs/rules/class-methods-use-this">class-methods-use-this</a></summary><br/>

```js
[
  "error",
  {
    enforceForClassFields: true,
    exceptMethods: [
      "render",
      "getInitialState",
      "getDefaultProps",
      "getChildContext",
      "componentWillMount",
      "UNSAFE_componentWillMount",
      "componentDidMount",
      "componentWillReceiveProps",
      "UNSAFE_componentWillReceiveProps",
      "shouldComponentUpdate",
      "componentWillUpdate",
      "UNSAFE_componentWillUpdate",
      "componentDidUpdate",
      "componentWillUnmount",
      "componentDidCatch",
      "getSnapshotBeforeUpdate",
    ],
  },
];
```

</details>
<details><summary>🔵 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md">jsx-a11y/accessible-emoji</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md">jsx-a11y/alt-text</a></summary><br/>

```js
[
  "error",
  {
    area: [],
    elements: ["img", "object", "area", 'input[type="image"]'],
    img: [],
    'input[type="image"]': [],
    object: [],
  },
];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md">jsx-a11y/anchor-has-content</a></summary><br/>

```js
["error", { components: [] }];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">jsx-a11y/anchor-is-valid</a></summary><br/>

```js
[
  "error",
  {
    aspects: ["noHref", "invalidHref", "preferButton"],
    components: ["Link"],
    specialLink: ["to"],
  },
];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md">jsx-a11y/aria-activedescendant-has-tabindex</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md">jsx-a11y/aria-props</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md">jsx-a11y/aria-proptypes</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md">jsx-a11y/aria-role</a></summary><br/>

```js
["error", { ignoreNonDOM: false }];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md">jsx-a11y/aria-unsupported-elements</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/autocomplete-valid.md">jsx-a11y/autocomplete-valid</a></summary><br/>

```js
["off", { inputComponents: [] }];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md">jsx-a11y/click-events-have-key-events</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md">jsx-a11y/control-has-associated-label</a></summary><br/>

```js
[
  "error",
  {
    controlComponents: [],
    depth: 5,
    ignoreElements: [
      "audio",
      "canvas",
      "embed",
      "input",
      "textarea",
      "tr",
      "video",
    ],
    ignoreRoles: [
      "grid",
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "row",
      "tablist",
      "toolbar",
      "tree",
      "treegrid",
    ],
    labelAttributes: ["label"],
  },
];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md">jsx-a11y/heading-has-content</a></summary><br/>

```js
["error", { components: [""] }];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md">jsx-a11y/html-has-lang</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md">jsx-a11y/iframe-has-title</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md">jsx-a11y/img-redundant-alt</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md">jsx-a11y/interactive-supports-focus</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md">jsx-a11y/label-has-associated-control</a></summary><br/>

```js
[
  "error",
  {
    assert: "both",
    controlComponents: [],
    depth: 25,
    labelAttributes: [],
    labelComponents: [],
  },
];
```

</details>
<details><summary>🔵 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md">jsx-a11y/label-has-for</a></summary><br/>

```js
[
  "off",
  {
    allowChildren: false,
    components: [],
    required: { every: ["nesting", "id"] },
  },
];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md">jsx-a11y/lang</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md">jsx-a11y/media-has-caption</a></summary><br/>

```js
["error", { audio: [], track: [], video: [] }];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md">jsx-a11y/mouse-events-have-key-events</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md">jsx-a11y/no-access-key</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md">jsx-a11y/no-autofocus</a></summary><br/>

```js
["error", { ignoreNonDOM: true }];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md">jsx-a11y/no-distracting-elements</a></summary><br/>

```js
["error", { elements: ["marquee", "blink"] }];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md">jsx-a11y/no-interactive-element-to-noninteractive-role</a></summary><br/>

```js
["error", { tr: ["none", "presentation"] }];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md">jsx-a11y/no-noninteractive-element-interactions</a></summary><br/>

```js
[
  "error",
  {
    handlers: [
      "onClick",
      "onMouseDown",
      "onMouseUp",
      "onKeyPress",
      "onKeyDown",
      "onKeyUp",
    ],
  },
];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md">jsx-a11y/no-noninteractive-element-to-interactive-role</a></summary><br/>

```js
[
  "error",
  {
    li: ["menuitem", "option", "row", "tab", "treeitem"],
    ol: [
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "tablist",
      "tree",
      "treegrid",
    ],
    table: ["grid"],
    td: ["gridcell"],
    ul: [
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "tablist",
      "tree",
      "treegrid",
    ],
  },
];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md">jsx-a11y/no-noninteractive-tabindex</a></summary><br/>

```js
["error", { roles: ["tabpanel"], tags: [] }];
```

</details>
<details><summary>🔵 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md">jsx-a11y/no-onchange</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md">jsx-a11y/no-redundant-roles</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md">jsx-a11y/no-static-element-interactions</a></summary><br/>

```js
[
  "error",
  {
    handlers: [
      "onClick",
      "onMouseDown",
      "onMouseUp",
      "onKeyPress",
      "onKeyDown",
      "onKeyUp",
    ],
  },
];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md">jsx-a11y/role-has-required-aria-props</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md">jsx-a11y/role-supports-aria-props</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md">jsx-a11y/scope</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md">jsx-a11y/tabindex-no-positive</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://reactjs.org/docs/hooks-rules.html">react-hooks/exhaustive-deps</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://reactjs.org/docs/hooks-rules.html">react-hooks/rules-of-hooks</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md">react/boolean-prop-naming</a></summary><br/>

```js
[
  "off",
  {
    message: "",
    propTypeNames: ["bool", "mutuallyExclusiveTrueProps"],
    rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
  },
];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md">react/button-has-type</a></summary><br/>

```js
["error", { button: true, reset: false, submit: true }];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md">react/default-props-match-prop-types</a></summary><br/>

```js
["error", { allowRequiredDefaults: false }];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md">react/destructuring-assignment</a></summary><br/>

```js
["error", "always"];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md">react/display-name</a></summary><br/>

```js
["off", { ignoreTranspilerName: false }];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md">react/forbid-component-props</a></summary><br/>

```js
["off", { forbid: [] }];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md">react/forbid-dom-props</a></summary><br/>

```js
["off", { forbid: [] }];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md">react/forbid-elements</a></summary><br/>

```js
["off", { forbid: [] }];
```

</details>
<details><summary>🟠 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md">react/forbid-foreign-prop-types</a></summary><br/>

```js
["warn", { allowInPropTypes: true }];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md">react/forbid-prop-types</a></summary><br/>

```js
[
  "error",
  {
    checkChildContextTypes: true,
    checkContextTypes: true,
    forbid: ["any", "array", "object"],
  },
];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md">react/function-component-definition</a></summary><br/>

```js
[
  "error",
  { namedComponents: "arrow-function", unnamedComponents: "arrow-function" },
];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md">react/jsx-boolean-value</a></summary><br/>

```js
["error", "never", { always: [] }];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md">react/jsx-curly-brace-presence</a></summary><br/>

```js
["error", { children: "never", props: "never" }];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md">react/jsx-filename-extension</a></summary><br/>

```js
["error", { extensions: [".jsx", ".tsx"] }];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md">react/jsx-fragments</a></summary><br/>

```js
["error", "syntax"];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md">react/jsx-handler-names</a></summary><br/>

```js
["off", { eventHandlerPrefix: "handle", eventHandlerPropPrefix: "on" }];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md">react/jsx-key</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md">react/jsx-max-depth</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md">react/jsx-no-bind</a></summary><br/>

```js
[
  "error",
  {
    allowArrowFunctions: true,
    allowBind: false,
    allowFunctions: false,
    ignoreDOMComponents: true,
    ignoreRefs: true,
  },
];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md">react/jsx-no-comment-textnodes</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md">react/jsx-no-constructed-context-values</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md">react/jsx-no-duplicate-props</a></summary><br/>

```js
["error", { ignoreCase: true }];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md">react/jsx-no-literals</a></summary><br/>

```js
["off", { noStrings: true }];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md">react/jsx-no-script-url</a></summary><br/>

```js
["error", [{ name: "Link", props: ["to"] }]];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md">react/jsx-no-target-blank</a></summary><br/>

```js
["error", { enforceDynamicLinks: "always", forms: false, links: true }];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md">react/jsx-no-undef</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md">react/jsx-no-useless-fragment</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md">react/jsx-pascal-case</a></summary><br/>

```js
["error", { allowAllCaps: true, ignore: [] }];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md">react/jsx-sort-default-props</a></summary><br/>

```js
["off", { ignoreCase: true }];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md">react/jsx-sort-prop-types</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md">react/jsx-sort-props</a></summary><br/>

```js
[
  "off",
  {
    callbacksLast: false,
    ignoreCase: true,
    noSortAlphabetically: false,
    reservedFirst: true,
    shorthandFirst: false,
    shorthandLast: false,
  },
];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md">react/jsx-uses-react</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md">react/jsx-uses-vars</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md">react/no-access-state-in-setstate</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md">react/no-adjacent-inline-elements</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md">react/no-array-index-key</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md">react/no-arrow-function-lifecycle</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md">react/no-children-prop</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🟠 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md">react/no-danger</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md">react/no-danger-with-children</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md">react/no-deprecated</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md">react/no-did-mount-set-state</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md">react/no-did-update-set-state</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md">react/no-direct-mutation-state</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md">react/no-find-dom-node</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md">react/no-invalid-html-attribute</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md">react/no-is-mounted</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md">react/no-multi-comp</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-namespace.md">react/no-namespace</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md">react/no-redundant-should-component-update</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md">react/no-render-return-value</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md">react/no-set-state</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md">react/no-string-refs</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md">react/no-this-in-sfc</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md">react/no-typos</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md">react/no-unescaped-entities</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md">react/no-unknown-property</a></summary><br/>

```js
["error", { ignore: ["css"] }];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md">react/no-unsafe</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md">react/no-unstable-nested-components</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🟠 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md">react/no-unused-class-component-methods</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🟠 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md">react/no-unused-prop-types</a></summary><br/>

```js
["warn", { customValidators: [], skipShapeProps: true }];
```

</details>
<details><summary>🟠 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md">react/no-unused-state</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md">react/no-will-update-set-state</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md">react/prefer-es6-class</a></summary><br/>

```js
["error", "always"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md">react/prefer-exact-props</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md">react/prefer-read-only-props</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md">react/prefer-stateless-function</a></summary><br/>

```js
["error", { ignorePureComponents: true }];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md">react/prop-types</a></summary><br/>

```js
["error", { customValidators: [], ignore: [], skipUndeclared: false }];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md">react/react-in-jsx-scope</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md">react/require-optimization</a></summary><br/>

```js
["off", { allowDecorators: [] }];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md">react/require-render-return</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md">react/self-closing-comp</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md">react/sort-comp</a></summary><br/>

```js
[
  "error",
  {
    groups: {
      lifecycle: [
        "displayName",
        "propTypes",
        "contextTypes",
        "childContextTypes",
        "mixins",
        "statics",
        "defaultProps",
        "constructor",
        "getDefaultProps",
        "getInitialState",
        "state",
        "getChildContext",
        "getDerivedStateFromProps",
        "componentWillMount",
        "UNSAFE_componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "UNSAFE_componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "UNSAFE_componentWillUpdate",
        "getSnapshotBeforeUpdate",
        "componentDidUpdate",
        "componentDidCatch",
        "componentWillUnmount",
      ],
      rendering: ["/^render.+$/", "render"],
    },
    order: [
      "static-variables",
      "static-methods",
      "instance-variables",
      "lifecycle",
      "/^handle.+$/",
      "/^on.+$/",
      "getters",
      "setters",
      "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
      "instance-methods",
      "everything-else",
      "rendering",
    ],
  },
];
```

</details>
<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md">react/sort-prop-types</a></summary><br/>

```js
[
  "off",
  {
    callbacksLast: false,
    ignoreCase: true,
    requiredFirst: false,
    sortShapeProp: true,
  },
];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md">react/state-in-constructor</a></summary><br/>

```js
["error", "always"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md">react/static-property-placement</a></summary><br/>

```js
["error", "property assignment"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md">react/style-prop-object</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md">react/void-dom-elements-no-children</a></summary><br/>

```js
["error"];
```

</details>
<!-- END rules -->

## TypeScript

Here are the rules that override the basic rules when applied to a TypeScript file.

These rules are only applied on `.ts` and `.tsx` files

<!-- START rules-ts -->
<div align="center">

### Rules stats

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 1     | 0        | 0          | 1           |

</div>

<details><summary>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md">react/prop-types</a></summary><br/>

```js
["off", { customValidators: [], ignore: [], skipUndeclared: false }];
```

</details>
<!-- END rules-ts -->
