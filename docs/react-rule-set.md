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

#### 🔴 [`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this)

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

#### 🔵 [`jsx-a11y/accessible-emoji`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md)

```js
["off"];
```

#### 🔴 [`jsx-a11y/alt-text`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)

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

#### 🔴 [`jsx-a11y/anchor-has-content`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md)

```js
["error", { components: [] }];
```

#### 🔴 [`jsx-a11y/anchor-is-valid`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md)

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

#### 🔴 [`jsx-a11y/aria-activedescendant-has-tabindex`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md)

```js
["error"];
```

#### 🔴 [`jsx-a11y/aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md)

```js
["error"];
```

#### 🔴 [`jsx-a11y/aria-proptypes`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md)

```js
["error"];
```

#### 🔴 [`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)

```js
["error", { ignoreNonDOM: false }];
```

#### 🔴 [`jsx-a11y/aria-unsupported-elements`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md)

```js
["error"];
```

#### 🔵 [`jsx-a11y/autocomplete-valid`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/autocomplete-valid.md)

```js
["off", { inputComponents: [] }];
```

#### 🔴 [`jsx-a11y/click-events-have-key-events`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md)

```js
["error"];
```

#### 🔴 [`jsx-a11y/control-has-associated-label`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md)

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

#### 🔴 [`jsx-a11y/heading-has-content`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md)

```js
["error", { components: [""] }];
```

#### 🔴 [`jsx-a11y/html-has-lang`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md)

```js
["error"];
```

#### 🔴 [`jsx-a11y/iframe-has-title`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md)

```js
["error"];
```

#### 🔴 [`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)

```js
["error"];
```

#### 🔴 [`jsx-a11y/interactive-supports-focus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md)

```js
["error"];
```

#### 🔴 [`jsx-a11y/label-has-associated-control`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md)

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

#### 🔵 [`jsx-a11y/label-has-for`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md)

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

#### 🔴 [`jsx-a11y/lang`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md)

```js
["error"];
```

#### 🔴 [`jsx-a11y/media-has-caption`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md)

```js
["error", { audio: [], track: [], video: [] }];
```

#### 🔴 [`jsx-a11y/mouse-events-have-key-events`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md)

```js
["error"];
```

#### 🔴 [`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)

```js
["error"];
```

#### 🔴 [`jsx-a11y/no-autofocus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md)

```js
["error", { ignoreNonDOM: true }];
```

#### 🔴 [`jsx-a11y/no-distracting-elements`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md)

```js
["error", { elements: ["marquee", "blink"] }];
```

#### 🔴 [`jsx-a11y/no-interactive-element-to-noninteractive-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md)

```js
["error", { tr: ["none", "presentation"] }];
```

#### 🔴 [`jsx-a11y/no-noninteractive-element-interactions`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md)

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

#### 🔴 [`jsx-a11y/no-noninteractive-element-to-interactive-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md)

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

#### 🔴 [`jsx-a11y/no-noninteractive-tabindex`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md)

```js
["error", { roles: ["tabpanel"], tags: [] }];
```

#### 🔵 [`jsx-a11y/no-onchange`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md)

```js
["off"];
```

#### 🔴 [`jsx-a11y/no-redundant-roles`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md)

```js
["error"];
```

#### 🔴 [`jsx-a11y/no-static-element-interactions`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md)

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

#### 🔴 [`jsx-a11y/role-has-required-aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md)

```js
["error"];
```

#### 🔴 [`jsx-a11y/role-supports-aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md)

```js
["error"];
```

#### 🔴 [`jsx-a11y/scope`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md)

```js
["error"];
```

#### 🔴 [`jsx-a11y/tabindex-no-positive`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md)

```js
["error"];
```

#### 🔴 [`react-hooks/exhaustive-deps`](https://reactjs.org/docs/hooks-rules.html)

```js
["error"];
```

#### 🔴 [`react-hooks/rules-of-hooks`](https://reactjs.org/docs/hooks-rules.html)

```js
["error"];
```

#### 🔵 [`react/boolean-prop-naming`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md)

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

#### 🔴 [`react/button-has-type`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md)

```js
["error", { button: true, reset: false, submit: true }];
```

#### 🔴 [`react/default-props-match-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md)

```js
["error", { allowRequiredDefaults: false }];
```

#### 🔴 [`react/destructuring-assignment`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md)

```js
["error", "always"];
```

#### 🔵 [`react/display-name`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md)

```js
["off", { ignoreTranspilerName: false }];
```

#### 🔵 [`react/forbid-component-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md)

```js
["off", { forbid: [] }];
```

#### 🔵 [`react/forbid-dom-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md)

```js
["off", { forbid: [] }];
```

#### 🔵 [`react/forbid-elements`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md)

```js
["off", { forbid: [] }];
```

#### 🟠 [`react/forbid-foreign-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md)

```js
["warn", { allowInPropTypes: true }];
```

#### 🔴 [`react/forbid-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md)

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

#### 🔴 [`react/function-component-definition`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md)

```js
[
  "error",
  { namedComponents: "arrow-function", unnamedComponents: "arrow-function" },
];
```

#### 🔴 [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

```js
["error", "never", { always: [] }];
```

#### 🔴 [`react/jsx-curly-brace-presence`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md)

```js
["error", { children: "never", props: "never" }];
```

#### 🔴 [`react/jsx-filename-extension`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)

```js
["error", { extensions: [".jsx", ".tsx"] }];
```

#### 🔴 [`react/jsx-fragments`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md)

```js
["error", "syntax"];
```

#### 🔵 [`react/jsx-handler-names`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md)

```js
["off", { eventHandlerPrefix: "handle", eventHandlerPropPrefix: "on" }];
```

#### 🔵 [`react/jsx-key`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)

```js
["off"];
```

#### 🔵 [`react/jsx-max-depth`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md)

```js
["off"];
```

#### 🔴 [`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

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

#### 🔴 [`react/jsx-no-comment-textnodes`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md)

```js
["error"];
```

#### 🔴 [`react/jsx-no-constructed-context-values`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md)

```js
["error"];
```

#### 🔴 [`react/jsx-no-duplicate-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md)

```js
["error", { ignoreCase: true }];
```

#### 🔵 [`react/jsx-no-literals`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md)

```js
["off", { noStrings: true }];
```

#### 🔴 [`react/jsx-no-script-url`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md)

```js
["error", [{ name: "Link", props: ["to"] }]];
```

#### 🔴 [`react/jsx-no-target-blank`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md)

```js
["error", { enforceDynamicLinks: "always", forms: false, links: true }];
```

#### 🔴 [`react/jsx-no-undef`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md)

```js
["error"];
```

#### 🔴 [`react/jsx-no-useless-fragment`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md)

```js
["error"];
```

#### 🔴 [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

```js
["error", { allowAllCaps: true, ignore: [] }];
```

#### 🔵 [`react/jsx-sort-default-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md)

```js
["off", { ignoreCase: true }];
```

#### 🔵 [`react/jsx-sort-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md)

```js
["off"];
```

#### 🔵 [`react/jsx-sort-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md)

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

#### 🔴 [`react/jsx-uses-react`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md)

```js
["error"];
```

#### 🔴 [`react/jsx-uses-vars`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md)

```js
["error"];
```

#### 🔴 [`react/no-access-state-in-setstate`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md)

```js
["error"];
```

#### 🔵 [`react/no-adjacent-inline-elements`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md)

```js
["off"];
```

#### 🔴 [`react/no-array-index-key`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)

```js
["error"];
```

#### 🔴 [`react/no-arrow-function-lifecycle`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md)

```js
["error"];
```

#### 🔴 [`react/no-children-prop`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md)

```js
["error"];
```

#### 🟠 [`react/no-danger`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md)

```js
["warn"];
```

#### 🔴 [`react/no-danger-with-children`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md)

```js
["error"];
```

#### 🔴 [`react/no-deprecated`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md)

```js
["error"];
```

#### 🔵 [`react/no-did-mount-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md)

```js
["off"];
```

#### 🔴 [`react/no-did-update-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md)

```js
["error"];
```

#### 🔵 [`react/no-direct-mutation-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md)

```js
["off"];
```

#### 🔴 [`react/no-find-dom-node`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md)

```js
["error"];
```

#### 🔴 [`react/no-invalid-html-attribute`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md)

```js
["error"];
```

#### 🔴 [`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)

```js
["error"];
```

#### 🔵 [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md)

```js
["off"];
```

#### 🔴 [`react/no-namespace`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-namespace.md)

```js
["error"];
```

#### 🔴 [`react/no-redundant-should-component-update`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md)

```js
["error"];
```

#### 🔴 [`react/no-render-return-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md)

```js
["error"];
```

#### 🔵 [`react/no-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md)

```js
["off"];
```

#### 🔴 [`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

```js
["error"];
```

#### 🔴 [`react/no-this-in-sfc`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md)

```js
["error"];
```

#### 🔴 [`react/no-typos`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md)

```js
["error"];
```

#### 🔴 [`react/no-unescaped-entities`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md)

```js
["error"];
```

#### 🔴 [`react/no-unknown-property`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md)

```js
["error", { ignore: ["css"] }];
```

#### 🔵 [`react/no-unsafe`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md)

```js
["off"];
```

#### 🔴 [`react/no-unstable-nested-components`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md)

```js
["error"];
```

#### 🟠 [`react/no-unused-class-component-methods`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md)

```js
["warn"];
```

#### 🟠 [`react/no-unused-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md)

```js
["warn", { customValidators: [], skipShapeProps: true }];
```

#### 🟠 [`react/no-unused-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md)

```js
["warn"];
```

#### 🔴 [`react/no-will-update-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md)

```js
["error"];
```

#### 🔴 [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md)

```js
["error", "always"];
```

#### 🔴 [`react/prefer-exact-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md)

```js
["error"];
```

#### 🔵 [`react/prefer-read-only-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md)

```js
["off"];
```

#### 🔴 [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

```js
["error", { ignorePureComponents: true }];
```

#### 🔴 [`react/prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)

```js
["error", { customValidators: [], ignore: [], skipUndeclared: false }];
```

#### 🔴 [`react/react-in-jsx-scope`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)

```js
["error"];
```

#### 🔵 [`react/require-optimization`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md)

```js
["off", { allowDecorators: [] }];
```

#### 🔴 [`react/require-render-return`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)

```js
["error"];
```

#### 🔴 [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

```js
["error"];
```

#### 🔴 [`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

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

#### 🔵 [`react/sort-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md)

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

#### 🔴 [`react/state-in-constructor`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md)

```js
["error", "always"];
```

#### 🔴 [`react/static-property-placement`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md)

```js
["error", "property assignment"];
```

#### 🔴 [`react/style-prop-object`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md)

```js
["error"];
```

#### 🔴 [`react/void-dom-elements-no-children`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md)

```js
["error"];
```

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

#### 🔵 [`react/prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)

```js
["off", { customValidators: [], ignore: [], skipUndeclared: false }];
```

<!-- END rules-ts -->
