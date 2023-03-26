<div align="center"><img src="../media/readme-banner.png" width="600" role="presentation" /></div>
<h3 align="center">Brilliant ESLint configurations<br/> for happier developers</h3>
<h2 align="center">

`peppy/react` rules

</h2>

Here is the list of rules applied in the `peppy/react` configuration.

These rules are applied to all files. However, TypeScript specific rules override some of these rules for TypeScript files.

The list of these rules is available in the [TypeScript](#typescript) section of this file.

<!-- START rules -->
<div align="center">

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 117   | 87       | 5          | 25          |

</div>

<h4>🔴 <a href="https://eslint.org/docs/rules/class-methods-use-this">class-methods-use-this</a></h4>

```json
[
  {
    "enforceForClassFields": true,
    "exceptMethods": [
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
      "getSnapshotBeforeUpdate"
    ]
  }
]
```

<h4>🔵 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md">jsx-a11y/accessible-emoji</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md">jsx-a11y/alt-text</a></h4>

```json
[
  {
    "area": [],
    "elements": ["img", "object", "area", "input[type=\"image\"]"],
    "img": [],
    "input[type=\"image\"]": [],
    "object": []
  }
]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md">jsx-a11y/anchor-has-content</a></h4>

```json
[{ "components": [] }]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">jsx-a11y/anchor-is-valid</a></h4>

```json
[
  {
    "aspects": ["noHref", "invalidHref", "preferButton"],
    "components": ["Link"],
    "specialLink": ["to"]
  }
]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md">jsx-a11y/aria-activedescendant-has-tabindex</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md">jsx-a11y/aria-props</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md">jsx-a11y/aria-proptypes</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md">jsx-a11y/aria-role</a></h4>

```json
[{ "ignoreNonDOM": false }]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md">jsx-a11y/aria-unsupported-elements</a></h4>
<h4>🔵 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/autocomplete-valid.md">jsx-a11y/autocomplete-valid</a></h4>

```json
[{ "inputComponents": [] }]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md">jsx-a11y/click-events-have-key-events</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md">jsx-a11y/control-has-associated-label</a></h4>

```json
[
  {
    "controlComponents": [],
    "depth": 5,
    "ignoreElements": [
      "audio",
      "canvas",
      "embed",
      "input",
      "textarea",
      "tr",
      "video"
    ],
    "ignoreRoles": [
      "grid",
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "row",
      "tablist",
      "toolbar",
      "tree",
      "treegrid"
    ],
    "labelAttributes": ["label"]
  }
]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md">jsx-a11y/heading-has-content</a></h4>

```json
[{ "components": [""] }]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md">jsx-a11y/html-has-lang</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md">jsx-a11y/iframe-has-title</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md">jsx-a11y/img-redundant-alt</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md">jsx-a11y/interactive-supports-focus</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md">jsx-a11y/label-has-associated-control</a></h4>

```json
[
  {
    "assert": "both",
    "controlComponents": [],
    "depth": 25,
    "labelAttributes": [],
    "labelComponents": []
  }
]
```

<h4>🔵 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md">jsx-a11y/label-has-for</a></h4>

```json
[
  {
    "allowChildren": false,
    "components": [],
    "required": { "every": ["nesting", "id"] }
  }
]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md">jsx-a11y/lang</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md">jsx-a11y/media-has-caption</a></h4>

```json
[{ "audio": [], "track": [], "video": [] }]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md">jsx-a11y/mouse-events-have-key-events</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md">jsx-a11y/no-access-key</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md">jsx-a11y/no-autofocus</a></h4>

```json
[{ "ignoreNonDOM": true }]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md">jsx-a11y/no-distracting-elements</a></h4>

```json
[{ "elements": ["marquee", "blink"] }]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md">jsx-a11y/no-interactive-element-to-noninteractive-role</a></h4>

```json
[{ "tr": ["none", "presentation"] }]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md">jsx-a11y/no-noninteractive-element-interactions</a></h4>

```json
[
  {
    "handlers": [
      "onClick",
      "onMouseDown",
      "onMouseUp",
      "onKeyPress",
      "onKeyDown",
      "onKeyUp"
    ]
  }
]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md">jsx-a11y/no-noninteractive-element-to-interactive-role</a></h4>

```json
[
  {
    "li": ["menuitem", "option", "row", "tab", "treeitem"],
    "ol": [
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "tablist",
      "tree",
      "treegrid"
    ],
    "table": ["grid"],
    "td": ["gridcell"],
    "ul": [
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "tablist",
      "tree",
      "treegrid"
    ]
  }
]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md">jsx-a11y/no-noninteractive-tabindex</a></h4>

```json
[{ "roles": ["tabpanel"], "tags": [] }]
```

<h4>🔵 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md">jsx-a11y/no-onchange</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md">jsx-a11y/no-redundant-roles</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md">jsx-a11y/no-static-element-interactions</a></h4>

```json
[
  {
    "handlers": [
      "onClick",
      "onMouseDown",
      "onMouseUp",
      "onKeyPress",
      "onKeyDown",
      "onKeyUp"
    ]
  }
]
```

<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md">jsx-a11y/role-has-required-aria-props</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md">jsx-a11y/role-supports-aria-props</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md">jsx-a11y/scope</a></h4>
<h4>🔴 <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md">jsx-a11y/tabindex-no-positive</a></h4>
<h4>🔴 <a href="https://reactjs.org/docs/hooks-rules.html">react-hooks/exhaustive-deps</a></h4>
<h4>🔴 <a href="https://reactjs.org/docs/hooks-rules.html">react-hooks/rules-of-hooks</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md">react/boolean-prop-naming</a></h4>

```json
[
  {
    "message": "",
    "propTypeNames": ["bool", "mutuallyExclusiveTrueProps"],
    "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+"
  }
]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md">react/button-has-type</a></h4>

```json
[{ "button": true, "reset": false, "submit": true }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md">react/default-props-match-prop-types</a></h4>

```json
[{ "allowRequiredDefaults": false }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md">react/destructuring-assignment</a></h4>

```json
["always"]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md">react/display-name</a></h4>

```json
[{ "ignoreTranspilerName": false }]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md">react/forbid-component-props</a></h4>

```json
[{ "forbid": [] }]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md">react/forbid-dom-props</a></h4>

```json
[{ "forbid": [] }]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md">react/forbid-elements</a></h4>

```json
[{ "forbid": [] }]
```

<h4>🟠 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md">react/forbid-foreign-prop-types</a></h4>

```json
[{ "allowInPropTypes": true }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md">react/forbid-prop-types</a></h4>

```json
[
  {
    "checkChildContextTypes": true,
    "checkContextTypes": true,
    "forbid": ["any", "array", "object"]
  }
]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md">react/function-component-definition</a></h4>

```json
[{ "namedComponents": "arrow-function", "unnamedComponents": "arrow-function" }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md">react/jsx-boolean-value</a></h4>

```json
["never", { "always": [] }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md">react/jsx-curly-brace-presence</a></h4>

```json
[{ "children": "never", "props": "never" }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md">react/jsx-filename-extension</a></h4>

```json
[{ "extensions": [".jsx", ".tsx"] }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md">react/jsx-fragments</a></h4>

```json
["syntax"]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md">react/jsx-handler-names</a></h4>

```json
[{ "eventHandlerPrefix": "handle", "eventHandlerPropPrefix": "on" }]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md">react/jsx-key</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md">react/jsx-max-depth</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md">react/jsx-no-bind</a></h4>

```json
[
  {
    "allowArrowFunctions": true,
    "allowBind": false,
    "allowFunctions": false,
    "ignoreDOMComponents": true,
    "ignoreRefs": true
  }
]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md">react/jsx-no-comment-textnodes</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md">react/jsx-no-constructed-context-values</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md">react/jsx-no-duplicate-props</a></h4>

```json
[{ "ignoreCase": true }]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md">react/jsx-no-literals</a></h4>

```json
[{ "noStrings": true }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md">react/jsx-no-script-url</a></h4>

```json
[[{ "name": "Link", "props": ["to"] }]]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md">react/jsx-no-target-blank</a></h4>

```json
[{ "enforceDynamicLinks": "always", "forms": false, "links": true }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md">react/jsx-no-undef</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md">react/jsx-no-useless-fragment</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md">react/jsx-pascal-case</a></h4>

```json
[{ "allowAllCaps": true, "allowLeadingUnderscore": true, "ignore": [] }]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md">react/jsx-sort-default-props</a></h4>

```json
[{ "ignoreCase": true }]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md">react/jsx-sort-prop-types</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md">react/jsx-sort-props</a></h4>

```json
[
  {
    "callbacksLast": false,
    "ignoreCase": true,
    "noSortAlphabetically": false,
    "reservedFirst": true,
    "shorthandFirst": false,
    "shorthandLast": false
  }
]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md">react/jsx-uses-react</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md">react/jsx-uses-vars</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md">react/no-access-state-in-setstate</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md">react/no-adjacent-inline-elements</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md">react/no-array-index-key</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md">react/no-arrow-function-lifecycle</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md">react/no-children-prop</a></h4>
<h4>🟠 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md">react/no-danger</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md">react/no-danger-with-children</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md">react/no-deprecated</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md">react/no-did-mount-set-state</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md">react/no-did-update-set-state</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md">react/no-direct-mutation-state</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md">react/no-find-dom-node</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md">react/no-invalid-html-attribute</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md">react/no-is-mounted</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md">react/no-multi-comp</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-namespace.md">react/no-namespace</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md">react/no-redundant-should-component-update</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md">react/no-render-return-value</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md">react/no-set-state</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md">react/no-string-refs</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md">react/no-this-in-sfc</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md">react/no-typos</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md">react/no-unescaped-entities</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md">react/no-unknown-property</a></h4>

```json
[{ "ignore": ["css"] }]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md">react/no-unsafe</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md">react/no-unstable-nested-components</a></h4>
<h4>🟠 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md">react/no-unused-class-component-methods</a></h4>
<h4>🟠 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md">react/no-unused-prop-types</a></h4>

```json
[{ "customValidators": [], "skipShapeProps": true }]
```

<h4>🟠 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md">react/no-unused-state</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md">react/no-will-update-set-state</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md">react/prefer-es6-class</a></h4>

```json
["always"]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md">react/prefer-exact-props</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md">react/prefer-read-only-props</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md">react/prefer-stateless-function</a></h4>

```json
[{ "ignorePureComponents": true }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md">react/prop-types</a></h4>

```json
[{ "customValidators": [], "ignore": [], "skipUndeclared": false }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md">react/react-in-jsx-scope</a></h4>
<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md">react/require-optimization</a></h4>

```json
[{ "allowDecorators": [] }]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md">react/require-render-return</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md">react/self-closing-comp</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md">react/sort-comp</a></h4>

```json
[
  {
    "groups": {
      "lifecycle": [
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
        "componentWillUnmount"
      ],
      "rendering": ["/^render.+$/", "render"]
    },
    "order": [
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
      "rendering"
    ]
  }
]
```

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md">react/sort-prop-types</a></h4>

```json
[
  {
    "callbacksLast": false,
    "ignoreCase": true,
    "requiredFirst": false,
    "sortShapeProp": true
  }
]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md">react/state-in-constructor</a></h4>

```json
["always"]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md">react/static-property-placement</a></h4>

```json
["property assignment"]
```

<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md">react/style-prop-object</a></h4>
<h4>🔴 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md">react/void-dom-elements-no-children</a></h4>
<!-- END rules -->

## TypeScript

Here are the rules that override the basic rules when applied to a TypeScript file.

These rules are only applied on `.ts` and `.tsx` files

<!-- START rules-ts -->
<div align="center">

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 1     | 0        | 0          | 1           |

</div>

<h4>🔵 <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md">react/prop-types</a></h4>

```json
[{ "customValidators": [], "ignore": [], "skipUndeclared": false }]
```

<!-- END rules-ts -->
