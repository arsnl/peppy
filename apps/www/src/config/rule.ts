type Rule = { description: string };

export const rulesConfig: Record<string, Rule> = {
  "@babel/object-curly-spacing": {
    description: "Enforce consistent spacing inside braces",
  },
  "@babel/semi": {
    description: "Require or disallow semicolons instead of ASI",
  },
  "@next/next/google-font-display": {
    description: "Enforce font-display behavior with Google Fonts",
  },
  "@next/next/google-font-preconnect": {
    description: "Ensure `preconnect` is used with Google Fonts",
  },
  "@next/next/inline-script-id": {
    description:
      "Enforce `id` attribute on `next/script` components with inline content",
  },
  "@next/next/next-script-for-ga": {
    description:
      "Prefer `next/script` component when using the inline script for Google Analytics",
  },
  "@next/next/no-assign-module-variable": {
    description: "Prevent assignment to the `module` variable",
  },
  "@next/next/no-async-client-component": {
    description: "Client components cannot be async functions",
  },
  "@next/next/no-before-interactive-script-outside-document": {
    description:
      "Prevent usage of `next/script`'s `beforeInteractive` strategy outside of `pages/_document.js`",
  },
  "@next/next/no-css-tags": {
    description: "Prevent manual stylesheet tags",
  },
  "@next/next/no-document-import-in-page": {
    description:
      "Prevent importing `next/document` outside of `pages/_document.js`",
  },
  "@next/next/no-duplicate-head": {
    description: "Prevent duplicate usage of `<Head>` in `pages/_document.js`",
  },
  "@next/next/no-head-element": {
    description: "Prevent usage of `<head>` element",
  },
  "@next/next/no-head-import-in-document": {
    description: "Prevent usage of `next/head` in `pages/_document.js`",
  },
  "@next/next/no-html-link-for-pages": {
    description:
      "Prevent usage of `<a>` elements to navigate to internal Next.js pages",
  },
  "@next/next/no-img-element": {
    description:
      "Prevent usage of `<img>` element due to slower LCP and higher bandwidth",
  },
  "@next/next/no-page-custom-font": {
    description: "Prevent page-only custom fonts",
  },
  "@next/next/no-script-component-in-head": {
    description: "Prevent usage of `next/script` in `next/head` component",
  },
  "@next/next/no-styled-jsx-in-document": {
    description: "Prevent usage of `styled-jsx` in `pages/_document.js`",
  },
  "@next/next/no-sync-scripts": {
    description: "Prevent synchronous scripts",
  },
  "@next/next/no-title-in-document-head": {
    description:
      "Prevent usage of `<title>` with `Head` component from `next/document`",
  },
  "@next/next/no-typos": {
    description: "Prevent common typos in Next.js's data fetching functions",
  },
  "@next/next/no-unwanted-polyfillio": {
    description: "Prevent duplicate polyfills from Polyfill.io",
  },
  "@typescript-eslint/block-spacing": {
    description:
      "Disallow or enforce spaces inside of blocks after opening block and before closing block",
  },
  "@typescript-eslint/brace-style": {
    description: "Enforce consistent brace style for blocks",
  },
  "@typescript-eslint/comma-dangle": {
    description: "Require or disallow trailing commas",
  },
  "@typescript-eslint/comma-spacing": {
    description: "Enforce consistent spacing before and after commas",
  },
  "@typescript-eslint/consistent-type-exports": {
    description: "Enforces consistent usage of type exports",
  },
  "@typescript-eslint/consistent-type-imports": {
    description: "Enforces consistent usage of type imports",
  },
  "@typescript-eslint/default-param-last": {
    description: "Enforce default parameters to be last",
  },
  "@typescript-eslint/dot-notation": {
    description: "Enforce dot notation whenever possible",
  },
  "@typescript-eslint/func-call-spacing": {
    description:
      "Require or disallow spacing between function identifiers and their invocations",
  },
  "@typescript-eslint/indent": {
    description: "Enforce consistent indentation",
  },
  "@typescript-eslint/key-spacing": {
    description:
      "Enforce consistent spacing between property names and type annotations in types and interfaces",
  },
  "@typescript-eslint/keyword-spacing": {
    description: "Enforce consistent spacing before and after keywords",
  },
  "@typescript-eslint/lines-around-comment": {
    description: "Require empty lines around comments",
  },
  "@typescript-eslint/lines-between-class-members": {
    description: "Require or disallow an empty line between class members",
  },
  "@typescript-eslint/member-delimiter-style": {
    description:
      "Require a specific member delimiter style for interfaces and type literals",
  },
  "@typescript-eslint/naming-convention": {
    description: "Enforces naming conventions for everything across a codebase",
  },
  "@typescript-eslint/no-array-constructor": {
    description: "Disallow `Array` constructors",
  },
  "@typescript-eslint/no-dupe-class-members": {
    description: "Disallow duplicate class members",
  },
  "@typescript-eslint/no-empty-function": {
    description: "Disallow empty functions",
  },
  "@typescript-eslint/no-extra-parens": {
    description: "Disallow unnecessary parentheses",
  },
  "@typescript-eslint/no-extra-semi": {
    description: "Disallow unnecessary semicolons",
  },
  "@typescript-eslint/no-implied-eval": {
    description: "Disallow the use of `eval()`",
  },
  "@typescript-eslint/no-loop-func": {
    description:
      "Disallow function declarations that contain unsafe references inside loop statements",
  },
  "@typescript-eslint/no-loss-of-precision": {
    description: "Disallow Number Literals That Lose Precision",
  },
  "@typescript-eslint/no-redeclare": {
    description: "Disallow variable redeclaration",
  },
  "@typescript-eslint/no-shadow": {
    description:
      "Disallow variable declarations from shadowing variables declared in the outer scope",
  },
  "@typescript-eslint/no-throw-literal": {
    description: "Disallow throwing literals as exceptions",
  },
  "@typescript-eslint/no-unused-expressions": {
    description: "Disallow unused expressions",
  },
  "@typescript-eslint/no-unused-vars": {
    description: "Disallow unused variables",
  },
  "@typescript-eslint/no-useless-constructor": {
    description: "Disallow unnecessary constructors",
  },
  "@typescript-eslint/object-curly-spacing": {
    description: "Enforce consistent spacing inside braces",
  },
  "@typescript-eslint/quotes": {
    description:
      "Enforce the consistent use of either backticks, double, or single quotes",
  },
  "@typescript-eslint/return-await": {
    description: "Disallow unnecessary `return await`",
  },
  "@typescript-eslint/semi": {
    description: "Require or disallow semicolons instead of ASI",
  },
  "@typescript-eslint/space-before-blocks": {
    description: "Enforce consistent spacing before blocks",
  },
  "@typescript-eslint/space-before-function-paren": {
    description: "Enforce consistent spacing before function parenthesis",
  },
  "@typescript-eslint/space-infix-ops": {
    description: "Require spacing around infix operators",
  },
  "@typescript-eslint/type-annotation-spacing": {
    description: "Require consistent spacing around type annotations",
  },
  "array-bracket-newline": {
    description:
      "Enforce linebreaks after opening and before closing array brackets",
  },
  "array-bracket-spacing": {
    description: "Enforce consistent spacing inside array brackets",
  },
  "array-callback-return": {
    description: "Enforce `return` statements in callbacks of array methods",
  },
  "array-element-newline": {
    description: "Enforce line breaks after each array element",
  },
  "arrow-body-style": {
    description: "Require braces in arrow function body",
  },
  "arrow-parens": {
    description: "Require parentheses around arrow function arguments",
  },
  "arrow-spacing": {
    description:
      "Enforce consistent spacing before and after the arrow in arrow functions",
  },
  "babel/object-curly-spacing": {
    description: "Enforce consistent spacing inside braces",
  },
  "babel/quotes": {
    description:
      "Enforce the consistent use of either backticks, double, or single quotes",
  },
  "babel/semi": {
    description: "Require or disallow semicolons instead of ASI",
  },
  "block-scoped-var": {
    description:
      "Enforce the use of variables within the scope they are defined",
  },
  "block-spacing": {
    description:
      "Disallow or enforce spaces inside of blocks after opening block and before closing block",
  },
  "brace-style": {
    description: "Enforce consistent brace style for blocks",
  },
  camelcase: {
    description: "Enforce camelCase naming convention",
  },
  "class-methods-use-this": {
    description: "Enforce that class methods utilize `this`",
  },
  "comma-dangle": {
    description: "Require or disallow trailing commas",
  },
  "comma-spacing": {
    description: "Enforce consistent spacing before and after commas",
  },
  "comma-style": {
    description: "Enforce consistent comma style",
  },
  "computed-property-spacing": {
    description: "Enforce consistent spacing inside computed property brackets",
  },
  "consistent-return": {
    description:
      "Require `return` statements to either always or never specify values",
  },
  "constructor-super": {
    description: "Require `super()` calls in constructors",
  },
  curly: {
    description: "Enforce consistent brace style for all control statements",
  },
  "default-case": {
    description: "Require `default` cases in `switch` statements",
  },
  "default-case-last": {
    description: "Enforce default parameters to be last",
  },
  "default-param-last": {
    description: "Enforce default parameters to be last",
  },
  "dot-location": {
    description: "Enforce consistent newlines before and after dots",
  },
  "dot-notation": {
    description: "Enforce dot notation whenever possible",
  },
  "eol-last": {
    description: "Require or disallow newline at the end of files",
  },
  eqeqeq: {
    description: "Require the use of `===` and `!==`",
  },
  "flowtype/boolean-style": {
    description: "Enforces a particular style for boolean type annotations",
  },
  "flowtype/delimiter-dangle": {
    description:
      "Enforces consistent use of trailing commas in Object and Tuple annotations",
  },
  "flowtype/generic-spacing": {
    description:
      "Enforces consistent spacing within generic type annotation parameters",
  },
  "flowtype/object-type-curly-spacing": {
    description: "Enforces consistent spacing inside braces of object types",
  },
  "flowtype/object-type-delimiter": {
    description:
      "Enforces consistent separators between properties in Flow object types",
  },
  "flowtype/quotes": {
    description:
      "Enforces single quotes or double quotes around string literals",
  },
  "flowtype/semi": {
    description: "Enforces consistent use of semicolons after type aliases",
  },
  "flowtype/space-after-type-colon": {
    description: "Enforces consistent spacing after the type annotation colon",
  },
  "flowtype/space-before-generic-bracket": {
    description:
      "Enforces consistent spacing before the opening `<` of generic type annotation parameters",
  },
  "flowtype/space-before-type-colon": {
    description: "Enforces consistent spacing before the type annotation colon",
  },
  "flowtype/union-intersection-spacing": {
    description:
      "Enforces consistent spacing around union and intersection type separators (`|` and `&`)",
  },
  "for-direction": {
    description:
      'Enforce "for" loop update clause moving the counter in the right direction',
  },
  "func-call-spacing": {
    description:
      "Require or disallow spacing between function identifiers and their invocations",
  },
  "func-names": {
    description: "Require or disallow named `function` expressions",
  },
  "function-call-argument-newline": {
    description: "Enforce line breaks between arguments of a function call",
  },
  "function-paren-newline": {
    description: "Enforce consistent line breaks inside function parentheses",
  },
  "generator-star": {
    description:
      "Enforces consistent spacing around the asterisk in generator functions",
  },
  "generator-star-spacing": {
    description:
      "Enforce consistent spacing around `*` operators in generator functions",
  },
  "getter-return": {
    description: "Enforce `return` statements in getters",
  },
  "global-require": {
    description:
      "Require `require()` calls to be placed at top-level module scope",
  },
  "grouped-accessor-pairs": {
    description:
      "Require grouped accessor pairs in object literals and classes",
  },
  "guard-for-in": {
    description: "Require `for-in` loops to include an `if` statement",
  },
  "implicit-arrow-linebreak": {
    description: "Enforce the location of arrow function bodies",
  },
  "import/export": {
    description: "Forbid any invalid exports, i.e. re-export of the same name",
  },
  "import/extensions": {
    description:
      "Ensure consistent use of file extension within the import path",
  },
  "import/first": {
    description: "Ensure all imports appear before other statements",
  },
  "import/named": {
    description:
      "Ensure named imports correspond to a named export in the remote file",
  },
  "import/newline-after-import": {
    description: "Enforce a newline after import statements",
  },
  "import/no-absolute-path": {
    description: "Forbid import of modules using absolute paths",
  },
  "import/no-amd": {
    description: "Forbid AMD `require` and `define` calls",
  },
  "import/no-cycle": {
    description:
      "Forbid a module from importing a module with a dependency path back to itself",
  },
  "import/no-duplicates": {
    description: "Forbid repeated import of the same module in multiple places",
  },
  "import/no-dynamic-require": {
    description: "Forbid `require()` calls with expressions",
  },
  "import/no-extraneous-dependencies": {
    description: "Forbid the use of extraneous packages",
  },
  "import/no-import-module-exports": {
    description: "Forbid import statements with CommonJS module.exports",
  },
  "import/no-mutable-exports": {
    description: "Forbid the use of mutable exports with `var` or `let`",
  },
  "import/no-named-as-default": {
    description: "Forbid use of exported name as identifier of default export",
  },
  "import/no-named-as-default-member": {
    description: "Forbid use of exported name as property of default export",
  },
  "import/no-named-default": {
    description: "Forbid named default exports",
  },
  "import/no-relative-packages": {
    description: "Forbid importing packages through relative paths",
  },
  "import/no-self-import": {
    description: "Forbid a module from importing itself",
  },
  "import/no-unresolved": {
    description: "Ensure imports point to a file/module that can be resolved",
  },
  "import/no-useless-path-segments": {
    description:
      "Forbid unnecessary path segments in import and require statements",
  },
  "import/no-webpack-loader-syntax": {
    description: "Forbid webpack loader syntax in imports",
  },
  indent: {
    description: "Enforce consistent indentation",
  },
  "indent-legacy": {
    description: "Enforce consistent indentation",
  },
  "jest/expect-expect": {
    description: "Enforce assertion to be made in a test body",
  },
  "jest/no-alias-methods": {
    description: "Disallow alias methods",
  },
  "jest/no-commented-out-tests": {
    description: "Disallow commented out tests",
  },
  "jest/no-conditional-expect": {
    description: "Disallow calling `expect` conditionally",
  },
  "jest/no-deprecated-functions": {
    description: "Disallow use of deprecated functions",
  },
  "jest/no-disabled-tests": {
    description: "Disallow disabled tests",
  },
  "jest/no-done-callback": {
    description: "Disallow using a callback in asynchronous tests and hooks",
  },
  "jest/no-export": {
    description: "Disallow using `exports` in files containing tests",
  },
  "jest/no-focused-tests": {
    description: "Disallow focused tests",
  },
  "jest/no-identical-title": {
    description: "Disallow identical titles",
  },
  "jest/no-interpolation-in-snapshots": {
    description: "Disallow string interpolation inside snapshots",
  },
  "jest/no-jasmine-globals": {
    description: "Disallow Jasmine globals",
  },
  "jest/no-mocks-import": {
    description: "Disallow manually importing from `__mocks__`",
  },
  "jest/no-standalone-expect": {
    description: "Disallow using `expect` outside of `it` or `test` blocks",
  },
  "jest/no-test-prefixes": {
    description: "Require using `.only` and `.skip` over `f` and `x`",
  },
  "jest/prefer-to-be": {
    description: "Suggest using `toBe()` for primitive literals",
  },
  "jest/prefer-to-contain": {
    description: "Suggest using `toContain()`",
  },
  "jest/prefer-to-have-length": {
    description: "Suggest using `toHaveLength()`",
  },
  "jest/valid-describe-callback": {
    description: "Enforce valid `describe()` callback",
  },
  "jest/valid-expect": {
    description: "Enforce valid `expect()` usage",
  },
  "jest/valid-expect-in-promise": {
    description:
      "Require promises that have expectations in their chain to be valid",
  },
  "jest/valid-title": {
    description: "Enforce valid titles",
  },
  "jsx-a11y/accessible-emoji": {
    description:
      "Enforce emojis are wrapped in `<span>` and provide screenreader access",
  },
  "jsx-a11y/alt-text": {
    description:
      "Enforce all elements that require alternative text have meaningful information to relay back to end user",
  },
  "jsx-a11y/anchor-has-content": {
    description: "Enforce all anchors to contain accessible content",
  },
  "jsx-a11y/anchor-is-valid": {
    description: "Enforce all anchors are valid, navigable elements",
  },
  "jsx-a11y/aria-activedescendant-has-tabindex": {
    description: "Enforce elements with aria-activedescendant are tabbable",
  },
  "jsx-a11y/aria-props": {
    description: "Enforce all `aria-*` props are valid",
  },
  "jsx-a11y/aria-proptypes": {
    description: "Enforce ARIA state and property values are valid",
  },
  "jsx-a11y/aria-role": {
    description:
      "Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role",
  },
  "jsx-a11y/aria-unsupported-elements": {
    description:
      "Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes",
  },
  "jsx-a11y/autocomplete-valid": {
    description: "Enforce that autocomplete attributes are used correctly",
  },
  "jsx-a11y/click-events-have-key-events": {
    description:
      "Enforce a clickable non-interactive element has at least one keyboard event listener",
  },
  "jsx-a11y/control-has-associated-label": {
    description:
      "Enforce that a control (an interactive element) has a text label",
  },
  "jsx-a11y/heading-has-content": {
    description:
      "Enforce heading (`h1`, `h2`, etc) elements contain accessible content",
  },
  "jsx-a11y/html-has-lang": {
    description: "Enforce `<html>` element has `lang` prop",
  },
  "jsx-a11y/iframe-has-title": {
    description: "Enforce iframe elements have a title attribute",
  },
  "jsx-a11y/img-redundant-alt": {
    description:
      'Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo"',
  },
  "jsx-a11y/interactive-supports-focus": {
    description:
      "Enforce that elements with interactive handlers like `onClick` must be focusable",
  },
  "jsx-a11y/label-has-associated-control": {
    description:
      "Enforce that a `label` tag has a text label and an associated control",
  },
  "jsx-a11y/label-has-for": {
    description: "Enforce that `<label>` elements have the `htmlFor` prop",
  },
  "jsx-a11y/lang": {
    description: "Enforce lang attribute has a valid value",
  },
  "jsx-a11y/media-has-caption": {
    description:
      "Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions",
  },
  "jsx-a11y/mouse-events-have-key-events": {
    description:
      "Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users",
  },
  "jsx-a11y/no-access-key": {
    description:
      "Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screenreader",
  },
  "jsx-a11y/no-autofocus": {
    description: "Enforce autoFocus prop is not used",
  },
  "jsx-a11y/no-distracting-elements": {
    description: "Enforce distracting elements are not used",
  },
  "jsx-a11y/no-interactive-element-to-noninteractive-role": {
    description:
      "Enforce that interactive elements should not be assigned non-interactive roles",
  },
  "jsx-a11y/no-noninteractive-element-interactions": {
    description:
      "Enforce that non-interactive elements should not be assigned mouse or keyboard event listeners",
  },
  "jsx-a11y/no-noninteractive-element-to-interactive-role": {
    description:
      "Enforce that non-interactive elements should not be assigned interactive roles",
  },
  "jsx-a11y/no-noninteractive-tabindex": {
    description:
      "Enforce that `tabIndex` should only be declared on interactive elements",
  },
  "jsx-a11y/no-onchange": {
    description:
      "Enforce usage of `onBlur` over `onChange` on select menus for accessibility",
  },
  "jsx-a11y/no-redundant-roles": {
    description:
      "Enforce explicit role property is not the same as implicit/default role property on element",
  },
  "jsx-a11y/no-static-element-interactions": {
    description:
      "Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute",
  },
  "jsx-a11y/role-has-required-aria-props": {
    description:
      "Enforce that elements with ARIA roles must have all required attributes for that role",
  },
  "jsx-a11y/role-supports-aria-props": {
    description:
      "Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`",
  },
  "jsx-a11y/scope": {
    description: "Enforce `scope` prop is only used on `<th>` elements",
  },
  "jsx-a11y/tabindex-no-positive": {
    description: "Enforce `tabIndex` value is not greater than zero",
  },
  "jsx-quotes": {
    description:
      "Enforce the consistent use of either double or single quotes in JSX attributes",
  },
  "key-spacing": {
    description:
      "Enforce consistent spacing between keys and values in object literal properties",
  },
  "keyword-spacing": {
    description: "Enforce consistent spacing before and after keywords",
  },
  "linebreak-style": {
    description: "Enforce consistent linebreak style",
  },
  "lines-around-comment": {
    description: "Require empty lines around comments",
  },
  "lines-around-directive": {
    description: "Require or disallow newlines around directives",
  },
  "lines-between-class-members": {
    description: "Require or disallow an empty line between class members",
  },
  "max-classes-per-file": {
    description: "Enforce a maximum number of classes per file",
  },
  "max-len": {
    description: "Enforce a maximum line length",
  },
  "multiline-ternary": {
    description: "Enforce newlines between operands of ternary expressions",
  },
  "new-cap": {
    description: "Require constructor names to begin with a capital letter",
  },
  "new-parens": {
    description:
      "Enforce or disallow parentheses when invoking a constructor with no arguments",
  },
  "newline-per-chained-call": {
    description: "Require a newline after each call in a method chain",
  },
  "no-alert": {
    description: "Disallow the use of `alert`, `confirm`, and `prompt`",
  },
  "no-array-constructor": {
    description: "Disallow `Array` constructors",
  },
  "no-arrow-condition": {
    description: "Disallows arrow functions where test conditions are expected",
  },
  "no-async-promise-executor": {
    description: "Disallow using an async function as a Promise executor",
  },
  "no-await-in-loop": {
    description: "Disallow `await` inside of loops",
  },
  "no-bitwise": {
    description: "Disallow bitwise operators",
  },
  "no-buffer-constructor": {
    description: "Disallow use of the `Buffer()` constructor",
  },
  "no-caller": {
    description: "Disallow the use of `arguments.caller` or `arguments.callee`",
  },
  "no-case-declarations": {
    description: "Disallow lexical declarations in case clauses",
  },
  "no-class-assign": {
    description: "Disallow reassigning class members",
  },
  "no-comma-dangle": {
    description: "Disallows trailing commas in object and array literals",
  },
  "no-compare-neg-zero": {
    description: "Disallow comparing against -0",
  },
  "no-cond-assign": {
    description: "Disallow assignment operators in conditional expressions",
  },
  "no-confusing-arrow": {
    description:
      "Disallow arrow functions where they could be confused with comparisons",
  },
  "no-console": {
    description: "Disallow the use of `console`",
  },
  "no-const-assign": {
    description: "Disallow reassigning `const` variables",
  },
  "no-constant-condition": {
    description: "Disallow constant expressions in conditions",
  },
  "no-constructor-return": {
    description: "Disallow returning value in constructor",
  },
  "no-continue": {
    description: "Disallow `continue` statements",
  },
  "no-control-regex": {
    description: "Disallow control characters in regular expressions",
  },
  "no-debugger": {
    description: "Disallow the use of `debugger`",
  },
  "no-delete-var": {
    description: "Disallow deleting variables",
  },
  "no-dupe-args": {
    description: "Disallow duplicate arguments in `function` definitions",
  },
  "no-dupe-class-members": {
    description: "Disallow duplicate class members",
  },
  "no-dupe-else-if": {
    description: "Disallow duplicate conditions in `if-else-if` chains",
  },
  "no-dupe-keys": {
    description: "Disallow duplicate keys in object literals",
  },
  "no-duplicate-case": {
    description: "Disallow duplicate case labels",
  },
  "no-else-return": {
    description:
      "Disallow `else` blocks after `return` statements in `if` statements",
  },
  "no-empty": {
    description: "Disallow empty block statements",
  },
  "no-empty-character-class": {
    description: "Disallow empty character classes in regular expressions",
  },
  "no-empty-function": {
    description: "Disallow empty functions",
  },
  "no-empty-pattern": {
    description: "Disallow empty destructuring patterns",
  },
  "no-eval": {
    description: "Disallow the use of `eval()`",
  },
  "no-ex-assign": {
    description: "Disallow reassigning exceptions in `catch` clauses",
  },
  "no-extend-native": {
    description: "Disallow extending native types",
  },
  "no-extra-bind": {
    description: "Disallow unnecessary calls to `.bind()`",
  },
  "no-extra-boolean-cast": {
    description: "Disallow unnecessary boolean casts",
  },
  "no-extra-label": {
    description: "Disallow unnecessary labels",
  },
  "no-extra-parens": {
    description: "Disallow unnecessary parentheses",
  },
  "no-extra-semi": {
    description: "Disallow unnecessary semicolons",
  },
  "no-fallthrough": {
    description: "Disallow fallthrough of `case` statements",
  },
  "no-floating-decimal": {
    description:
      "Disallow leading or trailing decimal points in numeric literals",
  },
  "no-func-assign": {
    description: "Disallow reassigning `function` declarations",
  },
  "no-global-assign": {
    description:
      "Disallow assignments to native objects or read-only global variables",
  },
  "no-implied-eval": {
    description: "Disallow the use of `eval()`-like methods",
  },
  "no-import-assign": {
    description: "Disallow assigning to imported bindings",
  },
  "no-inner-declarations": {
    description:
      "Disallow variable or `function` declarations in nested blocks",
  },
  "no-invalid-regexp": {
    description:
      "Disallow invalid regular expression strings in `RegExp` constructors",
  },
  "no-irregular-whitespace": {
    description: "Disallow irregular whitespace",
  },
  "no-iterator": {
    description: "Disallow the use of the `__iterator__` property",
  },
  "no-label-var": {
    description: "Disallow labels that share a name with a variable",
  },
  "no-labels": {
    description: "Disallow labeled statements",
  },
  "no-lone-blocks": {
    description: "Disallow unnecessary nested blocks",
  },
  "no-lonely-if": {
    description:
      "Disallow `if` statements as the only statement in `else` blocks",
  },
  "no-loop-func": {
    description:
      "Disallow function declarations that contain unsafe references inside loop statements",
  },
  "no-loss-of-precision": {
    description: "Disallow Number Literals That Lose Precision",
  },
  "no-misleading-character-class": {
    description:
      "Disallow characters which are made with multiple code points in character class syntax",
  },
  "no-mixed-operators": {
    description: "Disallow mixed binary operators",
  },
  "no-mixed-spaces-and-tabs": {
    description: "Disallow mixed spaces and tabs for indentation",
  },
  "no-multi-assign": {
    description: "Disallow use of chained assignment expressions",
  },
  "no-multi-spaces": {
    description: "Disallow multiple spaces",
  },
  "no-multi-str": {
    description: "Disallow multiline strings",
  },
  "no-multiple-empty-lines": {
    description: "Disallow multiple empty lines",
  },
  "no-new": {
    description:
      "Disallow `new` operators outside of assignments or comparisons",
  },
  "no-new-func": {
    description: "Disallow `new` operators with the `Function` object",
  },
  "no-new-object": {
    description: "Disallow `Object` constructors",
  },
  "no-new-require": {
    description: "Disallow `new` operators with calls to `require`",
  },
  "no-new-symbol": {
    description: "Disallow `new` operators with the `Symbol` object",
  },
  "no-new-wrappers": {
    description:
      "Disallow `new` operators with the `String`, `Number`, and `Boolean` objects",
  },
  "no-nonoctal-decimal-escape": {
    description: "Disallow `\\8` and `\\9` escape sequences in string literals",
  },
  "no-obj-calls": {
    description: "Disallow calling global object properties as functions",
  },
  "no-octal": {
    description: "Disallow octal literals",
  },
  "no-octal-escape": {
    description: "Disallow octal escape sequences in string literals",
  },
  "no-param-reassign": {
    description: "Disallow reassigning `function` parameters",
  },
  "no-path-concat": {
    description:
      "Disallow string concatenation with `__dirname` and `__filename`",
  },
  "no-plusplus": {
    description: "Disallow the unary operators `++` and `--`",
  },
  "no-promise-executor-return": {
    description: "Disallow returning values from Promise executor functions",
  },
  "no-proto": {
    description: "Disallow the use of the `__proto__` property",
  },
  "no-prototype-builtins": {
    description:
      "Disallow calling some `Object.prototype` methods directly on objects",
  },
  "no-redeclare": {
    description: "Disallow variable redeclaration",
  },
  "no-regex-spaces": {
    description: "Disallow multiple spaces in regular expressions",
  },
  "no-reserved-keys": {
    description:
      "Disallows unquoted reserved words as property names in object literals",
  },
  "no-restricted-exports": {
    description: "Disallow specified names in exports",
  },
  "no-restricted-globals": {
    description: "Disallow specified global variables",
  },
  "no-restricted-properties": {
    description: "Disallow certain properties on certain objects",
  },
  "no-restricted-syntax": {
    description: "Disallow specified syntax",
  },
  "no-return-assign": {
    description: "Disallow assignment operators in `return` statements",
  },
  "no-return-await": {
    description: "Disallow unnecessary `return await`",
  },
  "no-script-url": {
    description: "Disallow `javascript:` urls",
  },
  "no-self-assign": {
    description: "Disallow assignments where both sides are exactly the same",
  },
  "no-self-compare": {
    description: "Disallow comparisons where both sides are exactly the same",
  },
  "no-sequences": {
    description: "Disallow comma operators",
  },
  "no-setter-return": {
    description: "Disallow returning values from setters",
  },
  "no-shadow": {
    description:
      "Disallow variable declarations from shadowing variables declared in the outer scope",
  },
  "no-shadow-restricted-names": {
    description: "Disallow identifiers from shadowing restricted names",
  },
  "no-space-before-semi": {
    description: "Disallows spaces before semicolons",
  },
  "no-spaced-func": {
    description:
      "Disallow spacing between function identifiers and their applications",
  },
  "no-sparse-arrays": {
    description: "Disallow sparse arrays",
  },
  "no-tabs": {
    description: "Disallow all tabs",
  },
  "no-template-curly-in-string": {
    description:
      "Disallow template literal placeholder syntax in regular strings",
  },
  "no-this-before-super": {
    description:
      "Disallow `this`/`super` before calling `super()` in constructors",
  },
  "no-throw-literal": {
    description: "Disallow throwing literals as exceptions",
  },
  "no-trailing-spaces": {
    description: "Disallow trailing whitespace at the end of lines",
  },
  "no-undef": {
    description: "Disallow the use of undeclared variables",
  },
  "no-undef-init": {
    description: "Disallow initializing variables to `undefined`",
  },
  "no-unexpected-multiline": {
    description: "Disallow confusing multiline expressions",
  },
  "no-unneeded-ternary": {
    description: "Disallow ternary operators when simpler alternatives exist",
  },
  "no-unreachable": {
    description:
      "Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements",
  },
  "no-unreachable-loop": {
    description: "Disallow loops with a body that allows only one iteration",
  },
  "no-unsafe-finally": {
    description: "Disallow control flow statements in `finally` blocks",
  },
  "no-unsafe-negation": {
    description: "Disallow negating the left operand of relational operators",
  },
  "no-unsafe-optional-chaining": {
    description:
      "Disallow use of optional chaining in contexts where the `undefined` value is not allowed",
  },
  "no-unused-expressions": {
    description: "Disallow unused expressions",
  },
  "no-unused-labels": {
    description: "Disallow unused labels",
  },
  "no-unused-vars": {
    description: "Disallow unused variables",
  },
  "no-useless-backreference": {
    description: "Disallow useless backreferences in regular expressions",
  },
  "no-useless-catch": {
    description: "Disallow unnecessary `catch` clauses",
  },
  "no-useless-computed-key": {
    description:
      "Disallow unnecessary computed property keys in object literals",
  },
  "no-useless-concat": {
    description:
      "Disallow unnecessary concatenation of literals or template literals",
  },
  "no-useless-constructor": {
    description: "Disallow unnecessary constructors",
  },
  "no-useless-escape": {
    description: "Disallow unnecessary escape characters",
  },
  "no-useless-rename": {
    description:
      "Disallow renaming import, export, and destructured assignments to the same name",
  },
  "no-useless-return": {
    description: "Disallow redundant return statements",
  },
  "no-var": {
    description: "Require `let` or `const` instead of `var`",
  },
  "no-void": {
    description: "Disallow void operators",
  },
  "no-whitespace-before-property": {
    description: "Disallow whitespace before properties",
  },
  "no-with": {
    description: "Disallow `with` statements",
  },
  "no-wrap-func": {
    description:
      "Disallows unnecessary parentheses around function expressions",
  },
  "nonblock-statement-body-position": {
    description: "Enforce the location of single-line statements",
  },
  "object-curly-newline": {
    description:
      "Enforce consistent line breaks after opening and before closing braces",
  },
  "object-curly-spacing": {
    description: "Enforce consistent spacing inside braces",
  },
  "object-property-newline": {
    description: "Enforce placing object properties on separate lines",
  },
  "object-shorthand": {
    description:
      "Require or disallow method and property shorthand syntax for object literals",
  },
  "one-var": {
    description:
      "Enforce variables to be declared either together or separately in functions",
  },
  "one-var-declaration-per-line": {
    description: "Require or disallow newlines around variable declarations",
  },
  "operator-assignment": {
    description:
      "Require or disallow assignment operator shorthand where possible",
  },
  "operator-linebreak": {
    description: "Enforce consistent linebreak style for operators",
  },
  "padded-blocks": {
    description: "Require or disallow padding within blocks",
  },
  "prefer-arrow-callback": {
    description: "Require using arrow functions for callbacks",
  },
  "prefer-const": {
    description:
      "Require `const` declarations for variables that are never reassigned after declared",
  },
  "prefer-destructuring": {
    description: "Require destructuring from arrays and/or objects",
  },
  "prefer-exponentiation-operator": {
    description: "Disallow the use of `Math.pow` in favor of the `**` operator",
  },
  "prefer-numeric-literals": {
    description:
      "Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals",
  },
  "prefer-object-spread": {
    description:
      "Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead",
  },
  "prefer-promise-reject-errors": {
    description: "Require using Error objects as Promise rejection reasons",
  },
  "prefer-regex-literals": {
    description:
      "Disallow use of the `RegExp` constructor in favor of regular expression literals",
  },
  "prefer-rest-params": {
    description: "Require rest parameters instead of `arguments`",
  },
  "prefer-spread": {
    description: "Require spread operators instead of `.apply()`",
  },
  "prefer-template": {
    description: "Require template literals instead of string concatenation",
  },
  "quote-props": {
    description: "Require quotes around object literal property names",
  },
  quotes: {
    description:
      "Enforce the consistent use of either backticks, double, or single quotes",
  },
  radix: {
    description:
      "Enforce the consistent use of the radix argument when using `parseInt()`",
  },
  "react-hooks/exhaustive-deps": {
    description: "Checks effect dependencies",
  },
  "react-hooks/rules-of-hooks": {
    description: "Checks rules of Hooks",
  },
  "react/boolean-prop-naming": {
    description: "Enforces consistent naming for boolean props",
  },
  "react/button-has-type": {
    description: 'Forbid "button" element without an explicit "type" attribute',
  },
  "react/default-props-match-prop-types": {
    description:
      'Enforce all defaultProps are defined and not "required" in propTypes',
  },
  "react/destructuring-assignment": {
    description:
      "Enforce consistent usage of destructuring assignment of props, state, and context",
  },
  "react/display-name": {
    description: "Prevent missing displayName in a React component definition",
  },
  "react/forbid-component-props": {
    description: "Forbid certain props on components",
  },
  "react/forbid-dom-props": {
    description: "Forbid certain props on DOM Nodes",
  },
  "react/forbid-elements": {
    description: "Forbid certain elements",
  },
  "react/forbid-foreign-prop-types": {
    description: "Forbid using another component's propTypes",
  },
  "react/forbid-prop-types": {
    description: "Forbid certain propTypes",
  },
  "react/function-component-definition": {
    description: "Standardize the way function component get defined (fixable)",
  },
  "react/jsx-boolean-value": {
    description: "Enforce boolean attributes notation in JSX",
  },
  "react/jsx-child-element-spacing": {
    description:
      "Enforce or disallow spaces inside of curly braces in JSX attributes and expressions",
  },
  "react/jsx-closing-bracket-location": {
    description: "Enforce closing bracket location in JSX",
  },
  "react/jsx-closing-tag-location": {
    description: "Enforce closing tag location for multiline JSX",
  },
  "react/jsx-curly-brace-presence": {
    description:
      "Disallow unnecessary JSX expressions when literals alone are sufficient or enfore JSX expressions on literals in JSX children or attributes",
  },
  "react/jsx-curly-newline": {
    description:
      "Enforce consistent linebreaks in curly braces in JSX attributes and expressions",
  },
  "react/jsx-curly-spacing": {
    description:
      "Enforce or disallow spaces inside of curly braces in JSX attributes and expressions",
  },
  "react/jsx-equals-spacing": {
    description:
      "Enforce or disallow spaces around equal signs in JSX attributes",
  },
  "react/jsx-filename-extension": {
    description: "Restrict file extensions that may contain JSX",
  },
  "react/jsx-first-prop-new-line": {
    description: "Enforce proper position of the first property in JSX",
  },
  "react/jsx-fragments": {
    description: "Enforce shorthand or standard form for React fragments",
  },
  "react/jsx-handler-names": {
    description: "Enforce event handler naming conventions in JSX",
  },
  "react/jsx-indent": {
    description: "Enforce JSX indentation",
  },
  "react/jsx-indent-props": {
    description: "Enforce props indentation in JSX",
  },
  "react/jsx-key": {
    description: "Report missing `key` props in iterators/collection literals",
  },
  "react/jsx-max-depth": {
    description: "Validate JSX maximum depth",
  },
  "react/jsx-max-props-per-line": {
    description: "Enforce maximum of props on a single line in JSX",
  },
  "react/jsx-newline": {
    description:
      "Require or prevent a new line after jsx elements and expressions",
  },
  "react/jsx-no-bind": {
    description:
      "Prevents usage of Function.prototype.bind and arrow functions in React component props",
  },
  "react/jsx-no-comment-textnodes": {
    description:
      "Comments inside children section of tag should be placed inside braces",
  },
  "react/jsx-no-constructed-context-values": {
    description: "Prevent react contexts from taking non-stable values",
  },
  "react/jsx-no-duplicate-props": {
    description: "Enforce no duplicate props",
  },
  "react/jsx-no-literals": {
    description: "Prevent using string literals in React component definition",
  },
  "react/jsx-no-script-url": {
    description: "Forbid `javascript:` URLs",
  },
  "react/jsx-no-target-blank": {
    description:
      'Forbid target="_blank" attribute without rel="noopener noreferrer"',
  },
  "react/jsx-no-undef": {
    description: "Disallow undeclared variables in JSX",
  },
  "react/jsx-no-useless-fragment": {
    description: "Disallow unnecessary fragments",
  },
  "react/jsx-one-expression-per-line": {
    description: "Require one JSX element per line",
  },
  "react/jsx-pascal-case": {
    description: "Enforce PascalCase for user-defined JSX components",
  },
  "react/jsx-props-no-multi-spaces": {
    description: "Disallow multiple spaces between inline JSX props",
  },
  "react/jsx-sort-default-props": {
    description: "Enforce defaultProps declarations alphabetical sorting",
  },
  "react/jsx-sort-prop-types": {
    description: "Enforce propTypes declarations alphabetical sorting",
  },
  "react/jsx-sort-props": {
    description: "Enforce props alphabetical sorting",
  },
  "react/jsx-space-before-closing": {
    description: "Enforce spacing before closing bracket in JSX",
  },
  "react/jsx-tag-spacing": {
    description:
      "Enforce whitespace in and around the JSX opening and closing brackets",
  },
  "react/jsx-uses-react": {
    description: "Prevent React to be marked as unused",
  },
  "react/jsx-uses-vars": {
    description: "Prevent variables used in JSX to be marked as unused",
  },
  "react/jsx-wrap-multilines": {
    description: "Disallow missing parentheses around multiline JSX",
  },
  "react/no-access-state-in-setstate": {
    description: "Reports when this.state is accessed within setState",
  },
  "react/no-adjacent-inline-elements": {
    description: "Prevent adjacent inline elements not separated by whitespace",
  },
  "react/no-array-index-key": {
    description: "Prevent usage of Array index in keys",
  },
  "react/no-arrow-function-lifecycle": {
    description:
      "Lifecycle methods should be methods on the prototype, not class fields",
  },
  "react/no-children-prop": {
    description: "Prevent passing of children as props",
  },
  "react/no-danger": {
    description: "Prevent usage of dangerous JSX props",
  },
  "react/no-danger-with-children": {
    description:
      "Report when a DOM element is using both children and dangerouslySetInnerHTML",
  },
  "react/no-deprecated": {
    description: "Prevent usage of deprecated methods",
  },
  "react/no-did-mount-set-state": {
    description: "Prevent usage of setState in componentDidMount",
  },
  "react/no-did-update-set-state": {
    description: "Prevent usage of setState in componentDidUpdate",
  },
  "react/no-direct-mutation-state": {
    description: "Prevent direct mutation of this.state",
  },
  "react/no-find-dom-node": {
    description: "Prevent usage of findDOMNode",
  },
  "react/no-invalid-html-attribute": {
    description: "Prevent usage of invalid attributes",
  },
  "react/no-is-mounted": {
    description: "Prevent usage of isMounted",
  },
  "react/no-multi-comp": {
    description: "Prevent multiple component definition per file",
  },
  "react/no-namespace": {
    description: "Enforce that namespaces are not used in React elements",
  },
  "react/no-redundant-should-component-update": {
    description: "Flag shouldComponentUpdate when extending PureComponent",
  },
  "react/no-render-return-value": {
    description: "Prevent usage of the return value of React.render",
  },
  "react/no-set-state": {
    description: "Prevent usage of setState",
  },
  "react/no-string-refs": {
    description:
      "Prevent string definitions for references and prevent referencing `this.refs`",
  },
  "react/no-this-in-sfc": {
    description: "Report `this` being used in stateless components",
  },
  "react/no-typos": {
    description: "Prevent common typos",
  },
  "react/no-unescaped-entities": {
    description:
      "Detect unescaped HTML entities, which might represent malformed tags",
  },
  "react/no-unknown-property": {
    description: "Prevent usage of unknown DOM property",
  },
  "react/no-unsafe": {
    description: "Prevent usage of unsafe lifecycle methods",
  },
  "react/no-unstable-nested-components": {
    description: "Prevent creating unstable components inside components",
  },
  "react/no-unused-class-component-methods": {
    description: "Prevent declaring unused methods of component class",
  },
  "react/no-unused-prop-types": {
    description: "Prevent definitions of unused prop types",
  },
  "react/no-unused-state": {
    description: "Prevent definition of unused state fields",
  },
  "react/no-will-update-set-state": {
    description: "Prevent usage of setState in componentWillUpdate",
  },
  "react/prefer-es6-class": {
    description: "Enforce ES5 or ES6 class for React Components",
  },
  "react/prefer-exact-props": {
    description: "Prefer exact proptype definitions",
  },
  "react/prefer-read-only-props": {
    description: "Require read-only props",
  },
  "react/prefer-stateless-function": {
    description:
      "Enforce stateless components to be written as a pure function",
  },
  "react/prop-types": {
    description:
      "Prevent missing props validation in a React component definition",
  },
  "react/react-in-jsx-scope": {
    description: "Prevent missing React when using JSX",
  },
  "react/require-optimization": {
    description:
      "Enforce React components to have a shouldComponentUpdate method",
  },
  "react/require-render-return": {
    description:
      "Enforce ES5 or ES6 class for returning value in render function",
  },
  "react/self-closing-comp": {
    description: "Prevent extra closing tags for components without children",
  },
  "react/sort-comp": {
    description: "Enforce component methods order",
  },
  "react/sort-prop-types": {
    description: "Enforce propTypes declarations alphabetical sorting",
  },
  "react/state-in-constructor": {
    description:
      "State initialization in an ES6 class component should be in a constructor",
  },
  "react/static-property-placement": {
    description:
      "Defines where React component static properties should be positioned",
  },
  "react/style-prop-object": {
    description: "Enforce style prop value is an object",
  },
  "react/void-dom-elements-no-children": {
    description:
      "Prevent passing of children to void DOM elements (e.g. `<br />`)",
  },
  "require-yield": {
    description: "Require generator functions to contain `yield`",
  },
  "rest-spread-spacing": {
    description:
      "Enforce spacing between rest and spread operators and their expressions",
  },
  semi: {
    description: "Require or disallow semicolons instead of ASI",
  },
  "semi-spacing": {
    description: "Enforce consistent spacing before and after semicolons",
  },
  "semi-style": {
    description: "Enforce location of semicolons",
  },
  "simple-import-sort/exports": {
    description: "Enforce sorting of the exports",
  },
  "simple-import-sort/imports": {
    description: "Enforce sorting of the imports",
  },
  "space-after-function-name": {
    description:
      "Enforces consistent spacing after name in function definitions",
  },
  "space-after-keywords": {
    description: "Enforces consistent spacing after keywords",
  },
  "space-before-blocks": {
    description: "Enforce consistent spacing before blocks",
  },
  "space-before-function-paren": {
    description:
      "Enforce consistent spacing before `function` definition opening parenthesis",
  },
  "space-before-function-parentheses": {
    description:
      "Enforces consistent spacing before opening parenthesis in function definitions",
  },
  "space-before-keywords": {
    description: "Enforces consistent spacing before keywords",
  },
  "space-in-brackets": {
    description:
      "Enforces consistent spacing inside braces of object literals and brackets of array literals",
  },
  "space-in-parens": {
    description: "Enforce consistent spacing inside parentheses",
  },
  "space-infix-ops": {
    description: "Require spacing around infix operators",
  },
  "space-return-throw-case": {
    description: "Requires spaces after `return`, `throw`, and `case` keywords",
  },
  "space-unary-ops": {
    description: "Enforce consistent spacing before or after unary operators",
  },
  "space-unary-word-ops": {
    description: "Requires spaces after unary word operators",
  },
  "spaced-comment": {
    description:
      "Enforce consistent spacing after the `//` or `/*` in a comment",
  },
  "standard/array-bracket-even-spacing": {
    description: "Enforce consistent spacing inside array brackets",
  },
  "standard/computed-property-even-spacing": {
    description: "Enforce consistent spacing inside computed property brackets",
  },
  "standard/object-curly-even-spacing": {
    description: "Enforce consistent spacing inside braces",
  },
  strict: {
    description: "Require or disallow strict mode directives",
  },
  "switch-colon-spacing": {
    description: "Enforce spacing around colons of switch statements",
  },
  "symbol-description": {
    description: "Require symbol descriptions",
  },
  "tailwindcss/classnames-order": {
    description:
      "Enforces a consistent order of the Tailwind CSS classnames and its variants",
  },
  "tailwindcss/enforces-negative-arbitrary-values": {
    description: "Warns about `-` prefixed classnames using arbitrary values",
  },
  "tailwindcss/enforces-shorthand": {
    description: "Replaces multiple Tailwind CSS classnames by their shorthand",
  },
  "tailwindcss/migration-from-tailwind-2": {
    description: "Detect obsolete classnames when upgrading to Tailwind CSS v3",
  },
  "tailwindcss/no-arbitrary-value": {
    description: "Forbid using arbitrary values in classnames",
  },
  "tailwindcss/no-contradicting-classname": {
    description: 'Avoid contradicting Tailwind CSS classnames (`"w-3 w-5"`)',
  },
  "tailwindcss/no-custom-classname": {
    description: "Detect classnames which do not belong to Tailwind CSS",
  },
  "template-curly-spacing": {
    description:
      "Require or disallow spacing around embedded expressions of template strings",
  },
  "template-tag-spacing": {
    description:
      "Require or disallow spacing between template tags and their literals",
  },
  "unicode-bom": {
    description: "Require or disallow Unicode byte order mark (BOM)",
  },
  "unicorn/empty-brace-spaces": {
    description: "Enforce no spaces between braces",
  },
  "unicorn/no-nested-ternary": {
    description: "Disallow nested ternary expressions",
  },
  "unicorn/number-literal-case": {
    description: "Enforce proper case for numeric literals",
  },
  "use-isnan": {
    description: "Require calls to `isNaN()` when checking for `NaN`",
  },
  "valid-typeof": {
    description: "Enforce comparing `typeof` expressions against valid strings",
  },
  "vars-on-top": {
    description:
      "Require `var` declarations be placed at the top of their containing scope",
  },
  "vue/array-bracket-newline": {
    description:
      "Enforce linebreaks after opening and before closing array brackets in `<template>`",
  },
  "vue/array-bracket-spacing": {
    description:
      "Enforce consistent spacing inside array brackets in `<template>`",
  },
  "vue/array-element-newline": {
    description: "Enforce line breaks after each array element in `<template>`",
  },
  "vue/arrow-spacing": {
    description:
      "Enforce consistent spacing before and after the arrow in arrow functions in `<template>`",
  },
  "vue/block-spacing": {
    description:
      "Disallow or enforce spaces inside of blocks after opening block and before closing block in `<template>`",
  },
  "vue/block-tag-newline": {
    description:
      "Enforce line breaks after opening and before closing block-level tags",
  },
  "vue/brace-style": {
    description: "Enforce consistent brace style for blocks in `<template>`",
  },
  "vue/comma-dangle": {
    description: "Require or disallow trailing commas in `<template>`",
  },
  "vue/comma-spacing": {
    description:
      "Enforce consistent spacing before and after commas in `<template>`",
  },
  "vue/comma-style": {
    description: "Enforce consistent comma style in `<template>`",
  },
  "vue/dot-location": {
    description:
      "Enforce consistent newlines before and after dots in `<template>`",
  },
  "vue/func-call-spacing": {
    description:
      "Require or disallow spacing between function identifiers and their invocations in `<template>`",
  },
  "vue/html-closing-bracket-newline": {
    description:
      "Require or disallow a line break before tag's closing brackets",
  },
  "vue/html-closing-bracket-spacing": {
    description: "Require or disallow a space before tag's closing brackets",
  },
  "vue/html-end-tags": {
    description: "Enforce end tag style",
  },
  "vue/html-indent": {
    description: "Enforce consistent indentation in `<template>`",
  },
  "vue/html-quotes": {
    description: "Enforce quotes style of HTML attributes",
  },
  "vue/html-self-closing": {
    description: "Enforce self-closing style",
  },
  "vue/key-spacing": {
    description:
      "Enforce consistent spacing between keys and values in object literal properties in `<template>`",
  },
  "vue/keyword-spacing": {
    description:
      "Enforce consistent spacing before and after keywords in `<template>`",
  },
  "vue/max-attributes-per-line": {
    description: "Enforce the maximum number of attributes per line",
  },
  "vue/max-len": {
    description: "Enforce a maximum line length in `.vue` files",
  },
  "vue/multiline-html-element-content-newline": {
    description:
      "Require a line break before and after the contents of a multiline element",
  },
  "vue/multiline-ternary": {
    description:
      "Enforce newlines between operands of ternary expressions in `<template>`",
  },
  "vue/mustache-interpolation-spacing": {
    description: "Enforce unified spacing in mustache interpolations",
  },
  "vue/no-extra-parens": {
    description: "Disallow unnecessary parentheses in `<template>`",
  },
  "vue/no-multi-spaces": {
    description: "Disallow multiple spaces",
  },
  "vue/no-spaces-around-equal-signs-in-attribute": {
    description: "Disallow spaces around equal signs in attribute",
  },
  "vue/object-curly-newline": {
    description:
      "Enforce consistent line breaks after opening and before closing braces in `<template>`",
  },
  "vue/object-curly-spacing": {
    description: "Enforce consistent spacing inside braces in `<template>`",
  },
  "vue/object-property-newline": {
    description:
      "Enforce placing object properties on separate lines in `<template>`",
  },
  "vue/operator-linebreak": {
    description:
      "Enforce consistent linebreak style for operators in `<template>`",
  },
  "vue/quote-props": {
    description:
      "Require quotes around object literal property names in `<template>`",
  },
  "vue/script-indent": {
    description: "Enforce consistent indentation in `<script>`",
  },
  "vue/singleline-html-element-content-newline": {
    description:
      "Require a line break before and after the contents of a singleline element",
  },
  "vue/space-in-parens": {
    description:
      "Enforce consistent spacing inside parentheses in `<template>`",
  },
  "vue/space-infix-ops": {
    description: "Require spacing around infix operators in `<template>`",
  },
  "vue/space-unary-ops": {
    description:
      "Enforce consistent spacing before or after unary operators in `<template>`",
  },
  "vue/template-curly-spacing": {
    description:
      "Require or disallow spacing around embedded expressions of template strings in `<template>`",
  },
  "wrap-iife": {
    description: "Require parentheses around immediate `function` invocations",
  },
  "wrap-regex": {
    description: "Require parenthesis around regex literals",
  },
  "yield-star-spacing": {
    description:
      "Require or disallow spacing around the `*` in `yield*` expressions",
  },
  yoda: {
    description: 'Require or disallow "Yoda" conditions',
  },
};
