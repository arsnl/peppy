const reactConfig = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "jsx-a11y", "react-hooks"],
  rules: {
    "class-methods-use-this": [
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
    ],
    "jsx-a11y/accessible-emoji": ["off"],
    "jsx-a11y/alt-text": [
      "error",
      {
        area: [],
        elements: ["img", "object", "area", 'input[type="image"]'],
        img: [],
        'input[type="image"]': [],
        object: [],
      },
    ],
    "jsx-a11y/anchor-has-content": [
      "error",
      {
        components: [],
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        aspects: ["noHref", "invalidHref", "preferButton"],
        components: ["Link"],
        specialLink: ["to"],
      },
    ],
    "jsx-a11y/aria-activedescendant-has-tabindex": ["error"],
    "jsx-a11y/aria-props": ["error"],
    "jsx-a11y/aria-proptypes": ["error"],
    "jsx-a11y/aria-role": [
      "error",
      {
        ignoreNonDOM: false,
      },
    ],
    "jsx-a11y/aria-unsupported-elements": ["error"],
    "jsx-a11y/autocomplete-valid": [
      "off",
      {
        inputComponents: [],
      },
    ],
    "jsx-a11y/click-events-have-key-events": ["error"],
    "jsx-a11y/control-has-associated-label": [
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
    ],
    "jsx-a11y/heading-has-content": [
      "error",
      {
        components: [""],
      },
    ],
    "jsx-a11y/html-has-lang": ["error"],
    "jsx-a11y/iframe-has-title": ["error"],
    "jsx-a11y/img-redundant-alt": ["error"],
    "jsx-a11y/interactive-supports-focus": ["error"],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        assert: "both",
        controlComponents: [],
        depth: 25,
        labelAttributes: [],
        labelComponents: [],
      },
    ],
    "jsx-a11y/label-has-for": [
      "off",
      {
        allowChildren: false,
        components: [],
        required: {
          every: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/lang": ["error"],
    "jsx-a11y/media-has-caption": [
      "error",
      {
        audio: [],
        track: [],
        video: [],
      },
    ],
    "jsx-a11y/mouse-events-have-key-events": ["error"],
    "jsx-a11y/no-access-key": ["error"],
    "jsx-a11y/no-autofocus": [
      "error",
      {
        ignoreNonDOM: true,
      },
    ],
    "jsx-a11y/no-distracting-elements": [
      "error",
      {
        elements: ["marquee", "blink"],
      },
    ],
    "jsx-a11y/no-interactive-element-to-noninteractive-role": [
      "error",
      {
        tr: ["none", "presentation"],
      },
    ],
    "jsx-a11y/no-noninteractive-element-interactions": [
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
    ],
    "jsx-a11y/no-noninteractive-element-to-interactive-role": [
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
    ],
    "jsx-a11y/no-noninteractive-tabindex": [
      "error",
      {
        roles: ["tabpanel"],
        tags: [],
      },
    ],
    "jsx-a11y/no-onchange": ["off"],
    "jsx-a11y/no-redundant-roles": ["error"],
    "jsx-a11y/no-static-element-interactions": [
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
    ],
    "jsx-a11y/role-has-required-aria-props": ["error"],
    "jsx-a11y/role-supports-aria-props": ["error"],
    "jsx-a11y/scope": ["error"],
    "jsx-a11y/tabindex-no-positive": ["error"],
    "react-hooks/exhaustive-deps": ["error"],
    "react-hooks/rules-of-hooks": ["error"],
    "react/boolean-prop-naming": [
      "off",
      {
        message: "",
        propTypeNames: ["bool", "mutuallyExclusiveTrueProps"],
        rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
      },
    ],
    "react/button-has-type": [
      "error",
      {
        button: true,
        reset: false,
        submit: true,
      },
    ],
    "react/default-props-match-prop-types": [
      "error",
      {
        allowRequiredDefaults: false,
      },
    ],
    "react/destructuring-assignment": ["error", "always"],
    "react/display-name": [
      "off",
      {
        ignoreTranspilerName: false,
      },
    ],
    "react/forbid-component-props": [
      "off",
      {
        forbid: [],
      },
    ],
    "react/forbid-dom-props": [
      "off",
      {
        forbid: [],
      },
    ],
    "react/forbid-elements": [
      "off",
      {
        forbid: [],
      },
    ],
    "react/forbid-foreign-prop-types": [
      "warn",
      {
        allowInPropTypes: true,
      },
    ],
    "react/forbid-prop-types": [
      "error",
      {
        checkChildContextTypes: true,
        checkContextTypes: true,
        forbid: ["any", "array", "object"],
      },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-boolean-value": [
      "error",
      "never",
      {
        always: [],
      },
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        children: "never",
        props: "never",
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-handler-names": [
      "off",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
      },
    ],
    "react/jsx-key": ["off"],
    "react/jsx-max-depth": ["off"],
    "react/jsx-no-bind": [
      "error",
      {
        allowArrowFunctions: true,
        allowBind: false,
        allowFunctions: false,
        ignoreDOMComponents: true,
        ignoreRefs: true,
      },
    ],
    "react/jsx-no-comment-textnodes": ["error"],
    "react/jsx-no-constructed-context-values": ["error"],
    "react/jsx-no-duplicate-props": [
      "error",
      {
        ignoreCase: true,
      },
    ],
    "react/jsx-no-literals": [
      "off",
      {
        noStrings: true,
      },
    ],
    "react/jsx-no-script-url": [
      "error",
      [
        {
          name: "Link",
          props: ["to"],
        },
      ],
    ],
    "react/jsx-no-target-blank": [
      "error",
      {
        enforceDynamicLinks: "always",
        forms: false,
        links: true,
      },
    ],
    "react/jsx-no-undef": ["error"],
    "react/jsx-no-useless-fragment": ["error"],
    "react/jsx-pascal-case": [
      "error",
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    "react/jsx-sort-default-props": [
      "off",
      {
        ignoreCase: true,
      },
    ],
    "react/jsx-sort-prop-types": ["off"],
    "react/jsx-sort-props": [
      "off",
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    "react/jsx-uses-react": ["error"],
    "react/jsx-uses-vars": ["error"],
    "react/no-access-state-in-setstate": ["error"],
    "react/no-adjacent-inline-elements": ["off"],
    "react/no-array-index-key": ["error"],
    "react/no-arrow-function-lifecycle": ["error"],
    "react/no-children-prop": ["error"],
    "react/no-danger": ["warn"],
    "react/no-danger-with-children": ["error"],
    "react/no-deprecated": ["error"],
    "react/no-did-mount-set-state": ["off"],
    "react/no-did-update-set-state": ["error"],
    "react/no-direct-mutation-state": ["off"],
    "react/no-find-dom-node": ["error"],
    "react/no-invalid-html-attribute": ["error"],
    "react/no-is-mounted": ["error"],
    "react/no-multi-comp": ["off"],
    "react/no-namespace": ["error"],
    "react/no-redundant-should-component-update": ["error"],
    "react/no-render-return-value": ["error"],
    "react/no-set-state": ["off"],
    "react/no-string-refs": ["error"],
    "react/no-this-in-sfc": ["error"],
    "react/no-typos": ["error"],
    "react/no-unescaped-entities": ["error"],
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/no-unsafe": ["off"],
    "react/no-unstable-nested-components": ["error"],
    "react/no-unused-class-component-methods": ["error"],
    "react/no-unused-prop-types": [
      "error",
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],
    "react/no-unused-state": ["error"],
    "react/no-will-update-set-state": ["error"],
    "react/prefer-es6-class": ["error", "always"],
    "react/prefer-exact-props": ["error"],
    "react/prefer-read-only-props": ["off"],
    "react/prefer-stateless-function": [
      "error",
      {
        ignorePureComponents: true,
      },
    ],
    "react/prop-types": [
      "error",
      {
        customValidators: [],
        ignore: [],
        skipUndeclared: false,
      },
    ],
    "react/react-in-jsx-scope": ["error"],
    "react/require-optimization": [
      "off",
      {
        allowDecorators: [],
      },
    ],
    "react/require-render-return": ["error"],
    "react/self-closing-comp": ["error"],
    "react/sort-comp": [
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
    ],
    "react/sort-prop-types": [
      "off",
      {
        callbacksLast: false,
        ignoreCase: true,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],
    "react/state-in-constructor": ["error", "always"],
    "react/static-property-placement": ["error", "property assignment"],
    "react/style-prop-object": ["error"],
    "react/void-dom-elements-no-children": ["error"],
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
    propWrapperFunctions: ["forbidExtraProps", "exact", "Object.freeze"],
  },
};

module.exports = {
  ...reactConfig,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "react/prop-types": ["off"],
      },
    },
  ],
};
