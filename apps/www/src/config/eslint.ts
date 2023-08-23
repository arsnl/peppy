import { type ESLintConfigName, type ESLintPluginConfig } from "@/types/eslint";

export const eslintConfigNamesConfig = [
  "base",
  "jest",
  "next",
  "prettier",
  "react",
  "tailwindcss",
] satisfies ESLintConfigName[];

export const eslintPluginsConfig: Record<string, ESLintPluginConfig> = {
  eslint: {
    docsUrlTemplate: "https://eslint.org/docs/rules/{noPrefixRuleName}",
    pluginName: null,
    pluginUrl: null,
  },
  fp: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-fp",
    pluginUrl: "https://github.com/jfmengels/eslint-plugin-fp",
  },
  ava: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-ava",
    pluginUrl: "https://github.com/avajs/eslint-plugin-ava",
  },
  canonical: {
    docsUrlTemplate:
      "{pluginUrl}#eslint-plugin-canonical-rules-{noPrefixRuleName}",
    pluginName: "eslint-plugin-canonical",
    pluginUrl: "https://github.com/gajus/eslint-plugin-canonical",
  },
  "eslint-comments": {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-eslint-comments",
    pluginUrl: "https://github.com/mysticatea/eslint-plugin-eslint-comments",
  },
  unicorn: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-unicorn",
    pluginUrl: "https://github.com/sindresorhus/eslint-plugin-unicorn",
  },
  flowtype: {
    docsUrlTemplate:
      "{pluginUrl}/#eslint-plugin-flowtype-rules-{noPrefixRuleName}",
    pluginName: "eslint-plugin-flowtype",
    pluginUrl: "https://github.com/gajus/eslint-plugin-flowtype",
  },
  jsdoc: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-jsdoc",
    pluginUrl: "https://github.com/gajus/eslint-plugin-jsdoc",
  },
  import: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-import",
    pluginUrl: "https://github.com/import-js/eslint-plugin-import",
  },
  react: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-react",
    pluginUrl: "https://github.com/jsx-eslint/eslint-plugin-react",
  },
  promise: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-promise",
    pluginUrl: "https://github.com/eslint-community/eslint-plugin-promise",
  },
  lodash: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-lodash",
    pluginUrl: "https://github.com/wix-incubator/eslint-plugin-lodash",
  },
  mocha: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-mocha",
    pluginUrl: "https://github.com/lo1tuma/eslint-plugin-mocha",
  },
  node: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-node",
    pluginUrl: "https://github.com/mysticatea/eslint-plugin-node",
  },
  "jsx-a11y": {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-jsx-a11y",
    pluginUrl: "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y",
  },
  jest: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-jest",
    pluginUrl: "https://github.com/jest-community/eslint-plugin-jest",
  },
  jsonc: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-jsonc",
    pluginUrl: "https://github.com/ota-meshi/eslint-plugin-jsonc",
  },
  "@typescript-eslint": {
    docsUrlTemplate: "{pluginUrl}/docs/rules/{noPrefixRuleName}.md",
    pluginName: "@typescript-eslint/eslint-plugin",
    pluginUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin",
  },
  yml: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-yml",
    pluginUrl: "https://github.com/ota-meshi/eslint-plugin-yml",
  },
  "simple-import-sort": {
    docsUrlTemplate: "{pluginUrl}",
    pluginName: "eslint-plugin-simple-import-sort",
    pluginUrl: "https://github.com/lydell/eslint-plugin-simple-import-sort",
  },
  "@next/next": {
    docsUrlTemplate: "https://nextjs.org/docs/messages/{noPrefixRuleName}",
    pluginName: "@next/eslint-plugin-next",
    pluginUrl:
      "https://nextjs.org/docs/app/building-your-application/configuring/eslint",
  },
  babel: {
    docsUrlTemplate: "{pluginUrl}",
    pluginName: "eslint-plugin-babel",
    pluginUrl: "https://github.com/babel/eslint-plugin-babel",
  },
  "@babel": {
    docsUrlTemplate: "{pluginUrl}",
    pluginName: "@babel/eslint-plugin",
    pluginUrl:
      "https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin",
  },
  vue: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-vue",
    pluginUrl: "https://github.com/vuejs/eslint-plugin-vue",
  },
  standard: {
    docsUrlTemplate: "{pluginUrl}",
    pluginName: "eslint-plugin-standard",
    pluginUrl: "https://github.com/standard/eslint-plugin-standard",
  },
  "react-hooks": {
    docsUrlTemplate: "{pluginUrl}",
    pluginName: "eslint-plugin-react-hooks",
    pluginUrl:
      "https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks",
  },
  tailwindcss: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-tailwindcss",
    pluginUrl: "https://github.com/francoismassart/eslint-plugin-tailwindcss",
  },
};

/**
 * Rule descriptions used to describe every rules used by Peppy
 *
 * The descriptions are taken from their respective plugins documentations and adapted to follow the same format
 * - The first letter must be UPPERCASE
 * - The description must not end with a dot
 * - The description must be only one sentence
 * - The description must be written in the present tense
 */
export const eslintRulesDescriptionConfig: Record<string, string> = {
  "@babel/object-curly-spacing": "Enforce consistent spacing inside braces",
  "@babel/semi": "Require or disallow semicolons instead of ASI",
  "@next/next/google-font-display":
    "Enforce font-display behavior with Google Fonts",
  "@next/next/google-font-preconnect":
    "Ensure `preconnect` is used with Google Fonts",
  "@next/next/inline-script-id":
    "Enforce `id` attribute on `next/script` components with inline content",
  "@next/next/next-script-for-ga":
    "Prefer `next/script` component when using the inline script for Google Analytics",
  "@next/next/no-assign-module-variable":
    "Prevent assignment to the `module` variable",
  "@next/next/no-async-client-component":
    "Client components cannot be async functions",
  "@next/next/no-before-interactive-script-outside-document":
    "Prevent usage of `next/script`'s `beforeInteractive` strategy outside of `pages/_document.js`",
  "@next/next/no-css-tags": "Prevent manual stylesheet tags",
  "@next/next/no-document-import-in-page":
    "Prevent importing `next/document` outside of `pages/_document.js`",
  "@next/next/no-duplicate-head":
    "Prevent duplicate usage of `<Head>` in `pages/_document.js`",
  "@next/next/no-head-element": "Prevent usage of `<head>` element",
  "@next/next/no-head-import-in-document":
    "Prevent usage of `next/head` in `pages/_document.js`",
  "@next/next/no-html-link-for-pages":
    "Prevent usage of `<a>` elements to navigate to internal Next.js pages",
  "@next/next/no-img-element":
    "Prevent usage of `<img>` element due to slower LCP and higher bandwidth",
  "@next/next/no-page-custom-font": "Prevent page-only custom fonts",
  "@next/next/no-script-component-in-head":
    "Prevent usage of `next/script` in `next/head` component",
  "@next/next/no-styled-jsx-in-document":
    "Prevent usage of `styled-jsx` in `pages/_document.js`",
  "@next/next/no-sync-scripts": "Prevent synchronous scripts",
  "@next/next/no-title-in-document-head":
    "Prevent usage of `<title>` with `Head` component from `next/document`",
  "@next/next/no-typos":
    "Prevent common typos in Next.js's data fetching functions",
  "@next/next/no-unwanted-polyfillio":
    "Prevent duplicate polyfills from Polyfill.io",
  "@typescript-eslint/block-spacing":
    "Disallow or enforce spaces inside of blocks after opening block and before closing block",
  "@typescript-eslint/brace-style": "Enforce consistent brace style for blocks",
  "@typescript-eslint/comma-dangle": "Require or disallow trailing commas",
  "@typescript-eslint/comma-spacing":
    "Enforce consistent spacing before and after commas",
  "@typescript-eslint/consistent-type-exports":
    "Enforces consistent usage of type exports",
  "@typescript-eslint/consistent-type-imports":
    "Enforces consistent usage of type imports",
  "@typescript-eslint/default-param-last":
    "Enforce default parameters to be last",
  "@typescript-eslint/dot-notation": "Enforce dot notation whenever possible",
  "@typescript-eslint/func-call-spacing":
    "Require or disallow spacing between function identifiers and their invocations",
  "@typescript-eslint/indent": "Enforce consistent indentation",
  "@typescript-eslint/key-spacing":
    "Enforce consistent spacing between property names and type annotations in types and interfaces",
  "@typescript-eslint/keyword-spacing":
    "Enforce consistent spacing before and after keywords",
  "@typescript-eslint/lines-around-comment":
    "Require empty lines around comments",
  "@typescript-eslint/lines-between-class-members":
    "Require or disallow an empty line between class members",
  "@typescript-eslint/member-delimiter-style":
    "Require a specific member delimiter style for interfaces and type literals",
  "@typescript-eslint/naming-convention":
    "Enforces naming conventions for everything across a codebase",
  "@typescript-eslint/no-array-constructor": "Disallow `Array` constructors",
  "@typescript-eslint/no-dupe-class-members":
    "Disallow duplicate class members",
  "@typescript-eslint/no-empty-function": "Disallow empty functions",
  "@typescript-eslint/no-extra-parens": "Disallow unnecessary parentheses",
  "@typescript-eslint/no-extra-semi": "Disallow unnecessary semicolons",
  "@typescript-eslint/no-implied-eval": "Disallow the use of `eval()`",
  "@typescript-eslint/no-loop-func":
    "Disallow function declarations that contain unsafe references inside loop statements",
  "@typescript-eslint/no-loss-of-precision":
    "Disallow Number Literals That Lose Precision",
  "@typescript-eslint/no-redeclare": "Disallow variable redeclaration",
  "@typescript-eslint/no-shadow":
    "Disallow variable declarations from shadowing variables declared in the outer scope",
  "@typescript-eslint/no-throw-literal":
    "Disallow throwing literals as exceptions",
  "@typescript-eslint/no-unused-expressions": "Disallow unused expressions",
  "@typescript-eslint/no-unused-vars": "Disallow unused variables",
  "@typescript-eslint/no-useless-constructor":
    "Disallow unnecessary constructors",
  "@typescript-eslint/object-curly-spacing":
    "Enforce consistent spacing inside braces",
  "@typescript-eslint/quotes":
    "Enforce the consistent use of either backticks, double, or single quotes",
  "@typescript-eslint/return-await": "Disallow unnecessary `return await`",
  "@typescript-eslint/semi": "Require or disallow semicolons instead of ASI",
  "@typescript-eslint/space-before-blocks":
    "Enforce consistent spacing before blocks",
  "@typescript-eslint/space-before-function-paren":
    "Enforce consistent spacing before function parenthesis",
  "@typescript-eslint/space-infix-ops":
    "Require spacing around infix operators",
  "@typescript-eslint/type-annotation-spacing":
    "Require consistent spacing around type annotations",
  "array-bracket-newline":
    "Enforce linebreaks after opening and before closing array brackets",
  "array-bracket-spacing": "Enforce consistent spacing inside array brackets",
  "array-callback-return":
    "Enforce `return` statements in callbacks of array methods",
  "array-element-newline": "Enforce line breaks after each array element",
  "arrow-body-style": "Require braces in arrow function body",
  "arrow-parens": "Require parentheses around arrow function arguments",
  "arrow-spacing":
    "Enforce consistent spacing before and after the arrow in arrow functions",
  "babel/object-curly-spacing": "Enforce consistent spacing inside braces",
  "babel/quotes":
    "Enforce the consistent use of either backticks, double, or single quotes",
  "babel/semi": "Require or disallow semicolons instead of ASI",
  "block-scoped-var":
    "Enforce the use of variables within the scope they are defined",
  "block-spacing":
    "Disallow or enforce spaces inside of blocks after opening block and before closing block",
  "brace-style": "Enforce consistent brace style for blocks",
  camelcase: "Enforce camelCase naming convention",
  "class-methods-use-this": "Enforce that class methods utilize `this`",
  "comma-dangle": "Require or disallow trailing commas",
  "comma-spacing": "Enforce consistent spacing before and after commas",
  "comma-style": "Enforce consistent comma style",
  "computed-property-spacing":
    "Enforce consistent spacing inside computed property brackets",
  "consistent-return":
    "Require `return` statements to either always or never specify values",
  "constructor-super": "Require `super()` calls in constructors",
  curly: "Enforce consistent brace style for all control statements",
  "default-case": "Require `default` cases in `switch` statements",
  "default-case-last": "Enforce default parameters to be last",
  "default-param-last": "Enforce default parameters to be last",
  "dot-location": "Enforce consistent newlines before and after dots",
  "dot-notation": "Enforce dot notation whenever possible",
  "eol-last": "Require or disallow newline at the end of files",
  eqeqeq: "Require the use of `===` and `!==`",
  "flowtype/boolean-style":
    "Enforces a particular style for boolean type annotations",
  "flowtype/delimiter-dangle":
    "Enforces consistent use of trailing commas in Object and Tuple annotations",
  "flowtype/generic-spacing":
    "Enforces consistent spacing within generic type annotation parameters",
  "flowtype/object-type-curly-spacing":
    "Enforces consistent spacing inside braces of object types",
  "flowtype/object-type-delimiter":
    "Enforces consistent separators between properties in Flow object types",
  "flowtype/quotes":
    "Enforces single quotes or double quotes around string literals",
  "flowtype/semi": "Enforces consistent use of semicolons after type aliases",
  "flowtype/space-after-type-colon":
    "Enforces consistent spacing after the type annotation colon",
  "flowtype/space-before-generic-bracket":
    "Enforces consistent spacing before the opening `<` of generic type annotation parameters",
  "flowtype/space-before-type-colon":
    "Enforces consistent spacing before the type annotation colon",
  "flowtype/union-intersection-spacing":
    "Enforces consistent spacing around union and intersection type separators (`|` and `&`)",
  "for-direction":
    'Enforce "for" loop update clause moving the counter in the right direction',
  "func-call-spacing":
    "Require or disallow spacing between function identifiers and their invocations",
  "func-names": "Require or disallow named `function` expressions",
  "function-call-argument-newline":
    "Enforce line breaks between arguments of a function call",
  "function-paren-newline":
    "Enforce consistent line breaks inside function parentheses",
  "generator-star":
    "Enforces consistent spacing around the asterisk in generator functions",
  "generator-star-spacing":
    "Enforce consistent spacing around `*` operators in generator functions",
  "getter-return": "Enforce `return` statements in getters",
  "global-require":
    "Require `require()` calls to be placed at top-level module scope",
  "grouped-accessor-pairs":
    "Require grouped accessor pairs in object literals and classes",
  "guard-for-in": "Require `for-in` loops to include an `if` statement",
  "implicit-arrow-linebreak": "Enforce the location of arrow function bodies",
  "import/export":
    "Forbid any invalid exports, i.e. re-export of the same name",
  "import/extensions":
    "Ensure consistent use of file extension within the import path",
  "import/first": "Ensure all imports appear before other statements",
  "import/named":
    "	Ensure named imports correspond to a named export in the remote file",
  "import/newline-after-import": "Enforce a newline after import statements",
  "import/no-absolute-path": "Forbid import of modules using absolute paths",
  "import/no-amd": "Forbid AMD `require` and `define` calls",
  "import/no-cycle":
    "Forbid a module from importing a module with a dependency path back to itself",
  "import/no-duplicates":
    "Forbid repeated import of the same module in multiple places",
  "import/no-dynamic-require": "Forbid `require()` calls with expressions",
  "import/no-extraneous-dependencies": "Forbid the use of extraneous packages",
  "import/no-import-module-exports":
    "Forbid import statements with CommonJS module.exports",
  "import/no-mutable-exports":
    "Forbid the use of mutable exports with `var` or `let`",
  "import/no-named-as-default":
    "Forbid use of exported name as identifier of default export",
  "import/no-named-as-default-member":
    "Forbid use of exported name as property of default export",
  "import/no-named-default": "Forbid named default exports",
  "import/no-relative-packages":
    "Forbid importing packages through relative paths",
  "import/no-self-import": "Forbid a module from importing itself",
  "import/no-unresolved":
    "Ensure imports point to a file/module that can be resolved",
  "import/no-useless-path-segments":
    "Forbid unnecessary path segments in import and require statements",
  "import/no-webpack-loader-syntax": "Forbid webpack loader syntax in imports",
  indent: "Enforce consistent indentation",
  "indent-legacy": "Enforce consistent indentation",
  "jest/expect-expect": "Enforce assertion to be made in a test body",
  "jest/no-alias-methods": "Disallow alias methods",
  "jest/no-commented-out-tests": "Disallow commented out tests",
  "jest/no-conditional-expect": "Disallow calling `expect` conditionally",
  "jest/no-deprecated-functions": "Disallow use of deprecated functions",
  "jest/no-disabled-tests": "Disallow disabled tests",
  "jest/no-done-callback":
    "Disallow using a callback in asynchronous tests and hooks",
  "jest/no-export": "Disallow using `exports` in files containing tests",
  "jest/no-focused-tests": "Disallow focused tests",
  "jest/no-identical-title": "Disallow identical titles",
  "jest/no-interpolation-in-snapshots":
    "Disallow string interpolation inside snapshots",
  "jest/no-jasmine-globals": "Disallow Jasmine globals",
  "jest/no-mocks-import": "Disallow manually importing from `__mocks__`",
  "jest/no-standalone-expect":
    "Disallow using `expect` outside of `it` or `test` blocks",
  "jest/no-test-prefixes": "Require using `.only` and `.skip` over `f` and `x`",
  "jest/valid-describe-callback": "Enforce valid `describe()` callback",
  "jest/valid-expect": "Enforce valid `expect()` usage",
  "jest/valid-expect-in-promise":
    "Require promises that have expectations in their chain to be valid",
  "jest/valid-title": "Enforce valid titles",
  "jsx-a11y/accessible-emoji":
    "Enforce emojis are wrapped in `<span>` and provide screenreader access",
  "jsx-a11y/alt-text":
    "Enforce all elements that require alternative text have meaningful information to relay back to end user",
  "jsx-a11y/anchor-has-content":
    "Enforce all anchors to contain accessible content",
  "jsx-a11y/anchor-is-valid":
    "Enforce all anchors are valid, navigable elements",
  "jsx-a11y/aria-activedescendant-has-tabindex":
    "Enforce elements with aria-activedescendant are tabbable",
  "jsx-a11y/aria-props": "Enforce all `aria-*` props are valid",
  "jsx-a11y/aria-proptypes": "Enforce ARIA state and property values are valid",
  "jsx-a11y/aria-role":
    "Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role",
  "jsx-a11y/aria-unsupported-elements":
    "Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes",
  "jsx-a11y/autocomplete-valid":
    "Enforce that autocomplete attributes are used correctly",
  "jsx-a11y/click-events-have-key-events":
    "Enforce a clickable non-interactive element has at least one keyboard event listener",
  "jsx-a11y/control-has-associated-label":
    "Enforce that a control (an interactive element) has a text label",
  "jsx-a11y/heading-has-content":
    "Enforce heading (`h1`, `h2`, etc) elements contain accessible content",
  "jsx-a11y/html-has-lang": "Enforce `<html>` element has `lang` prop",
  "jsx-a11y/iframe-has-title": "Enforce iframe elements have a title attribute",
  "jsx-a11y/img-redundant-alt":
    'Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo"',
  "jsx-a11y/interactive-supports-focus":
    "Enforce that elements with interactive handlers like `onClick` must be focusable",
  "jsx-a11y/label-has-associated-control":
    "Enforce that a `label` tag has a text label and an associated control",
  "jsx-a11y/label-has-for":
    "Enforce that `<label>` elements have the `htmlFor` prop",
  "jsx-a11y/lang": "Enforce lang attribute has a valid value",
  "jsx-a11y/media-has-caption":
    "Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions",
  "jsx-a11y/mouse-events-have-key-events":
    "Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users",
  "jsx-a11y/no-access-key":
    "Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screenreader",
  "jsx-a11y/no-autofocus": "Enforce autoFocus prop is not used",
  "jsx-a11y/no-distracting-elements":
    "Enforce distracting elements are not used",
  "jsx-a11y/no-interactive-element-to-noninteractive-role":
    "Enforce that interactive elements should not be assigned non-interactive roles",
  "jsx-a11y/no-noninteractive-element-interactions":
    "Enforce that non-interactive elements should not be assigned mouse or keyboard event listeners",
  "jsx-a11y/no-noninteractive-element-to-interactive-role":
    "Enforce that non-interactive elements should not be assigned interactive roles",
  "jsx-a11y/no-noninteractive-tabindex":
    "Enforce that `tabIndex` should only be declared on interactive elements",
  "jsx-a11y/no-onchange":
    "Enforce usage of `onBlur` over `onChange` on select menus for accessibility",
  "jsx-a11y/no-redundant-roles":
    "Enforce explicit role property is not the same as implicit/default role property on element",
  "jsx-a11y/no-static-element-interactions":
    "Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute",
  "jsx-a11y/role-has-required-aria-props":
    "Enforce that elements with ARIA roles must have all required attributes for that role",
  "jsx-a11y/role-supports-aria-props":
    "Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`",
  "jsx-a11y/scope": "Enforce `scope` prop is only used on `<th>` elements",
  "jsx-a11y/tabindex-no-positive":
    "Enforce `tabIndex` value is not greater than zero",
  "jsx-quotes":
    "Enforce the consistent use of either double or single quotes in JSX attributes",
  "key-spacing":
    "Enforce consistent spacing between keys and values in object literal properties",
  "keyword-spacing": "Enforce consistent spacing before and after keywords",
  "linebreak-style": "Enforce consistent linebreak style",
  "lines-around-comment": "Require empty lines around comments",
  "lines-around-directive": "Require or disallow newlines around directives",
  "lines-between-class-members":
    "Require or disallow an empty line between class members",
  "max-classes-per-file": "Enforce a maximum number of classes per file",
  "max-len": "Enforce a maximum line length",
  "multiline-ternary":
    "Enforce newlines between operands of ternary expressions",
  "new-cap": "Require constructor names to begin with a capital letter",
  "new-parens":
    "Enforce or disallow parentheses when invoking a constructor with no arguments",
  "newline-per-chained-call":
    "Require a newline after each call in a method chain",
  "no-alert": "Disallow the use of `alert`, `confirm`, and `prompt`",
  "no-array-constructor": "Disallow `Array` constructors",
  "no-arrow-condition":
    "Disallows arrow functions where test conditions are expected",
  "no-async-promise-executor":
    "Disallow using an async function as a Promise executor",
  "no-await-in-loop": "Disallow `await` inside of loops",
  "no-bitwise": "Disallow bitwise operators",
  "no-buffer-constructor": "Disallow use of the `Buffer()` constructor",
  "no-caller": "Disallow the use of `arguments.caller` or `arguments.callee`",
  "no-case-declarations": "Disallow lexical declarations in case clauses",
  "no-class-assign": "Disallow reassigning class members",
  "no-comma-dangle": "Disallows trailing commas in object and array literals",
  "no-compare-neg-zero": "Disallow comparing against -0",
  "no-cond-assign": "Disallow assignment operators in conditional expressions",
  "no-confusing-arrow":
    "Disallow arrow functions where they could be confused with comparisons",
  "no-console": "Disallow the use of `console`",
  "no-const-assign": "Disallow reassigning `const` variables",
  "no-constant-condition": "Disallow constant expressions in conditions",
  "no-constructor-return": "Disallow returning value in constructor",
  "no-continue": "Disallow `continue` statements",
  "no-control-regex": "Disallow control characters in regular expressions",
  "no-debugger": "Disallow the use of `debugger`",
  "no-delete-var": "Disallow deleting variables",
  "no-dupe-args": "Disallow duplicate arguments in `function` definitions",
  "no-dupe-class-members": "Disallow duplicate class members",
  "no-dupe-else-if": "Disallow duplicate conditions in `if-else-if` chains",
  "no-dupe-keys": "Disallow duplicate keys in object literals",
  "no-duplicate-case": "Disallow duplicate case labels",
  "no-else-return":
    "Disallow `else` blocks after `return` statements in `if` statements",
  "no-empty": "Disallow empty block statements",
  "no-empty-character-class":
    "Disallow empty character classes in regular expressions",
  "no-empty-function": "Disallow empty functions",
  "no-empty-pattern": "Disallow empty destructuring patterns",
  "no-eval": "Disallow the use of `eval()`",
  "no-ex-assign": "Disallow reassigning exceptions in `catch` clauses",
  "no-extend-native": "Disallow extending native types",
  "no-extra-bind": "Disallow unnecessary calls to `.bind()`",
  "no-extra-boolean-cast": "Disallow unnecessary boolean casts",
  "no-extra-label": "Disallow unnecessary labels",
  "no-extra-parens": "Disallow unnecessary parentheses",
  "no-extra-semi": "Disallow unnecessary semicolons",
  "no-fallthrough": "Disallow fallthrough of `case` statements",
  "no-floating-decimal":
    "Disallow leading or trailing decimal points in numeric literals",
  "no-func-assign": "Disallow reassigning `function` declarations",
  "no-global-assign":
    "Disallow assignments to native objects or read-only global variables",
  "no-implied-eval": "Disallow the use of `eval()`-like methods",
  "no-import-assign": "Disallow assigning to imported bindings",
  "no-inner-declarations":
    "Disallow variable or `function` declarations in nested blocks",
  "no-invalid-regexp":
    "Disallow invalid regular expression strings in `RegExp` constructors",
  "no-irregular-whitespace": "Disallow irregular whitespace",
  "no-iterator": "Disallow the use of the `__iterator__` property",
  "no-label-var": "Disallow labels that share a name with a variable",
  "no-labels": "Disallow labeled statements",
  "no-lone-blocks": "Disallow unnecessary nested blocks",
  "no-lonely-if":
    "Disallow `if` statements as the only statement in `else` blocks",
  "no-loop-func":
    "Disallow function declarations that contain unsafe references inside loop statements",
  "no-loss-of-precision": "Disallow Number Literals That Lose Precision",
  "no-misleading-character-class":
    "Disallow characters which are made with multiple code points in character class syntax",
  "no-mixed-operators": "Disallow mixed binary operators",
  "no-mixed-spaces-and-tabs": "Disallow mixed spaces and tabs for indentation",
  "no-multi-assign": "Disallow use of chained assignment expressions",
  "no-multi-spaces": "Disallow multiple spaces",
  "no-multi-str": "Disallow multiline strings",
  "no-multiple-empty-lines": "Disallow multiple empty lines",
  "no-new": "Disallow `new` operators outside of assignments or comparisons",
  "no-new-func": "Disallow `new` operators with the `Function` object",
  "no-new-object": "Disallow `Object` constructors",
  "no-new-require": "Disallow `new` operators with calls to `require`",
  "no-new-symbol": "Disallow `new` operators with the `Symbol` object",
  "no-new-wrappers":
    "Disallow `new` operators with the `String`, `Number`, and `Boolean` objects",
  "no-nonoctal-decimal-escape":
    "Disallow `\\8` and `\\9` escape sequences in string literals",
  "no-obj-calls": "Disallow calling global object properties as functions",
  "no-octal": "Disallow octal literals",
  "no-octal-escape": "Disallow octal escape sequences in string literals",
  "no-param-reassign": "Disallow reassigning `function` parameters",
  "no-path-concat":
    "Disallow string concatenation with `__dirname` and `__filename`",
  "no-plusplus": "Disallow the unary operators `++` and `--`",
  "no-promise-executor-return":
    "Disallow returning values from Promise executor functions",
  "no-proto": "Disallow the use of the `__proto__` property",
  "no-prototype-builtins":
    "Disallow calling some `Object.prototype` methods directly on objects",
  "no-redeclare": "Disallow variable redeclaration",
  "no-regex-spaces": "Disallow multiple spaces in regular expressions",
  "no-reserved-keys":
    "Disallows unquoted reserved words as property names in object literals",
  "no-restricted-exports": "Disallow specified names in exports",
  "no-restricted-globals": "Disallow specified global variables",
  "no-restricted-properties": "Disallow certain properties on certain objects",
  "no-restricted-syntax": "Disallow specified syntax",
  "no-return-assign": "Disallow assignment operators in `return` statements",
  "no-return-await": "Disallow unnecessary `return await`",
  "no-script-url": "Disallow `javascript:` urls",
  "no-self-assign":
    "Disallow assignments where both sides are exactly the same",
  "no-self-compare":
    "Disallow comparisons where both sides are exactly the same",
  "no-sequences": "Disallow comma operators",
  "no-setter-return": "Disallow returning values from setters",
  "no-shadow":
    "Disallow variable declarations from shadowing variables declared in the outer scope",
  "no-shadow-restricted-names":
    "Disallow identifiers from shadowing restricted names",
  "no-space-before-semi": "Disallows spaces before semicolons",
  "no-spaced-func":
    "Disallow spacing between function identifiers and their applications",
  "no-sparse-arrays": "Disallow sparse arrays",
  "no-tabs": "Disallow all tabs",
  "no-template-curly-in-string":
    "Disallow template literal placeholder syntax in regular strings",
  "no-this-before-super":
    "Disallow `this`/`super` before calling `super()` in constructors",
  "no-throw-literal": "Disallow throwing literals as exceptions",
  "no-trailing-spaces": "Disallow trailing whitespace at the end of lines",
  "no-undef": "Disallow the use of undeclared variables",
  "no-undef-init": "Disallow initializing variables to `undefined`",
  "no-unexpected-multiline": "Disallow confusing multiline expressions",
  "no-unneeded-ternary":
    "Disallow ternary operators when simpler alternatives exist",
  "no-unreachable":
    "Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements",
  "no-unreachable-loop":
    "Disallow loops with a body that allows only one iteration",
  "no-unsafe-finally": "Disallow control flow statements in `finally` blocks",
  "no-unsafe-negation":
    "Disallow negating the left operand of relational operators",
  "no-unsafe-optional-chaining":
    "Disallow use of optional chaining in contexts where the `undefined` value is not allowed",
  "no-unused-expressions": "Disallow unused expressions",
  "no-unused-labels": "Disallow unused labels",
  "no-unused-vars": "Disallow unused variables",
  "no-useless-backreference":
    "Disallow useless backreferences in regular expressions",
  "no-useless-catch": "Disallow unnecessary `catch` clauses",
  "no-useless-computed-key":
    "Disallow unnecessary computed property keys in object literals",
  "no-useless-concat":
    "Disallow unnecessary concatenation of literals or template literals",
  "no-useless-constructor": "Disallow unnecessary constructors",
  "no-useless-escape": "Disallow unnecessary escape characters",
  "no-useless-rename":
    "Disallow renaming import, export, and destructured assignments to the same name",
  "no-useless-return": "Disallow redundant return statements",
  "no-var": "Require `let` or `const` instead of `var`",
  "no-whitespace-before-property": "Disallow whitespace before properties",
  "no-with": "Disallow `with` statements",
  "no-wrap-func":
    "Disallows unnecessary parentheses around function expressions",
  "nonblock-statement-body-position":
    "Enforce the location of single-line statements",
  "object-curly-newline":
    "Enforce consistent line breaks after opening and before closing braces",
  "object-curly-spacing": "Enforce consistent spacing inside braces",
  "object-property-newline":
    "Enforce placing object properties on separate lines",
  "object-shorthand":
    "Require or disallow method and property shorthand syntax for object literals",
  "one-var":
    "Enforce variables to be declared either together or separately in functions",
  "one-var-declaration-per-line":
    "Require or disallow newlines around variable declarations",
  "operator-assignment":
    "Require or disallow assignment operator shorthand where possible",
  "operator-linebreak": "Enforce consistent linebreak style for operators",
  "padded-blocks": "Require or disallow padding within blocks",
  "prefer-arrow-callback": "Require using arrow functions for callbacks",
  "prefer-const":
    "Require `const` declarations for variables that are never reassigned after declared",
  "prefer-destructuring": "Require destructuring from arrays and/or objects",
  "prefer-exponentiation-operator":
    "Disallow the use of `Math.pow` in favor of the `**` operator",
  "prefer-numeric-literals":
    "Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals",
  "prefer-object-spread":
    "Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead",
  "prefer-promise-reject-errors":
    "Require using Error objects as Promise rejection reasons",
  "prefer-regex-literals":
    "Disallow use of the `RegExp` constructor in favor of regular expression literals",
  "prefer-rest-params": "Require rest parameters instead of `arguments`",
  "prefer-spread": "Require spread operators instead of `.apply()`",
  "prefer-template":
    "Require template literals instead of string concatenation",
  "quote-props": "Require quotes around object literal property names",
  quotes:
    "Enforce the consistent use of either backticks, double, or single quotes",
  radix:
    "Enforce the consistent use of the radix argument when using `parseInt()`",
  "react-hooks/exhaustive-deps": "Checks effect dependencies",
  "react-hooks/rules-of-hooks": "Checks rules of Hooks",
  "react/boolean-prop-naming": "Enforces consistent naming for boolean props",
  "react/button-has-type":
    'Forbid "button" element without an explicit "type" attribute',
  "react/default-props-match-prop-types":
    'Enforce all defaultProps are defined and not "required" in propTypes',
  "react/destructuring-assignment":
    "Enforce consistent usage of destructuring assignment of props, state, and context",
  "react/display-name":
    "Prevent missing displayName in a React component definition",
  "react/forbid-component-props": "Forbid certain props on components",
  "react/forbid-dom-props": "Forbid certain props on DOM Nodes",
  "react/forbid-elements": "Forbid certain elements",
  "react/forbid-foreign-prop-types":
    "Forbid using another component's propTypes",
  "react/forbid-prop-types": "Forbid certain propTypes",
  "react/function-component-definition":
    "Standardize the way function component get defined (fixable)",
  "react/jsx-boolean-value": "Enforce boolean attributes notation in JSX",
  "react/jsx-child-element-spacing":
    "Enforce or disallow spaces inside of curly braces in JSX attributes and expressions",
  "react/jsx-closing-bracket-location":
    "Enforce closing bracket location in JSX",
  "react/jsx-closing-tag-location":
    "Enforce closing tag location for multiline JSX",
  "react/jsx-curly-brace-presence":
    "Disallow unnecessary JSX expressions when literals alone are sufficient or enfore JSX expressions on literals in JSX children or attributes",
  "react/jsx-curly-newline":
    "Enforce consistent linebreaks in curly braces in JSX attributes and expressions",
  "react/jsx-curly-spacing":
    "Enforce or disallow spaces inside of curly braces in JSX attributes and expressions",
  "react/jsx-equals-spacing":
    "Enforce or disallow spaces around equal signs in JSX attributes",
  "react/jsx-filename-extension":
    "Restrict file extensions that may contain JSX",
  "react/jsx-first-prop-new-line":
    "Enforce proper position of the first property in JSX",
  "react/jsx-fragments":
    "Enforce shorthand or standard form for React fragments",
  "react/jsx-handler-names": "Enforce event handler naming conventions in JSX",
  "react/jsx-indent": "Enforce JSX indentation",
  "react/jsx-indent-props": "Enforce props indentation in JSX",
  "react/jsx-key":
    "Report missing `key` props in iterators/collection literals",
  "react/jsx-max-depth": "Validate JSX maximum depth",
  "react/jsx-max-props-per-line":
    "Enforce maximum of props on a single line in JSX",
  "react/jsx-newline":
    "Require or prevent a new line after jsx elements and expressions",
  "react/jsx-no-bind":
    "Prevents usage of Function.prototype.bind and arrow functions in React component props",
  "react/jsx-no-comment-textnodes":
    "Comments inside children section of tag should be placed inside braces",
  "react/jsx-no-constructed-context-values":
    "Prevent react contexts from taking non-stable values",
  "react/jsx-no-duplicate-props": "Enforce no duplicate props",
  "react/jsx-no-literals":
    "Prevent using string literals in React component definition",
  "react/jsx-no-script-url": "Forbid `javascript:` URLs",
  "react/jsx-no-target-blank":
    'Forbid target="_blank" attribute without rel="noopener noreferrer"',
  "react/jsx-no-undef": "Disallow undeclared variables in JSX",
  "react/jsx-no-useless-fragment": "Disallow unnecessary fragments",
  "react/jsx-one-expression-per-line": "Require one JSX element per line",
  "react/jsx-pascal-case": "Enforce PascalCase for user-defined JSX components",
  "react/jsx-props-no-multi-spaces":
    "Disallow multiple spaces between inline JSX props",
  "react/jsx-sort-default-props":
    "Enforce defaultProps declarations alphabetical sorting",
  "react/jsx-sort-prop-types":
    "Enforce propTypes declarations alphabetical sorting",
  "react/jsx-sort-props": "Enforce props alphabetical sorting",
  "react/jsx-space-before-closing":
    "Enforce spacing before closing bracket in JSX",
  "react/jsx-tag-spacing":
    "Enforce whitespace in and around the JSX opening and closing brackets",
  "react/jsx-uses-react": "Prevent React to be marked as unused",
  "react/jsx-uses-vars": "Prevent variables used in JSX to be marked as unused",
  "react/jsx-wrap-multilines":
    "Disallow missing parentheses around multiline JSX",
  "react/no-access-state-in-setstate":
    "Reports when this.state is accessed within setState",
  "react/no-adjacent-inline-elements":
    "Prevent adjacent inline elements not separated by whitespace",
  "react/no-array-index-key": "Prevent usage of Array index in keys",
  "react/no-arrow-function-lifecycle":
    "Lifecycle methods should be methods on the prototype, not class fields",
  "react/no-children-prop": "Prevent passing of children as props",
  "react/no-danger": "Prevent usage of dangerous JSX props",
  "react/no-danger-with-children":
    "Report when a DOM element is using both children and dangerouslySetInnerHTML",
  "react/no-deprecated": "Prevent usage of deprecated methods",
  "react/no-did-mount-set-state":
    "Prevent usage of setState in componentDidMount",
  "react/no-did-update-set-state":
    "Prevent usage of setState in componentDidUpdate",
  "react/no-direct-mutation-state": "Prevent direct mutation of this.state",
  "react/no-find-dom-node": "Prevent usage of findDOMNode",
  "react/no-invalid-html-attribute": "Prevent usage of invalid attributes",
  "react/no-is-mounted": "Prevent usage of isMounted",
  "react/no-multi-comp": "Prevent multiple component definition per file",
  "react/no-namespace":
    "Enforce that namespaces are not used in React elements",
  "react/no-redundant-should-component-update":
    "Flag shouldComponentUpdate when extending PureComponent",
  "react/no-render-return-value":
    "Prevent usage of the return value of React.render",
  "react/no-set-state": "Prevent usage of setState",
  "react/no-string-refs":
    "Prevent string definitions for references and prevent referencing this.refs",
  "react/no-this-in-sfc": 'Report "this" being used in stateless components',
  "react/no-typos": "Prevent common typos",
  "react/no-unescaped-entities":
    "Detect unescaped HTML entities, which might represent malformed tags",
  "react/no-unknown-property": "Prevent usage of unknown DOM property",
  "react/no-unsafe": "Prevent usage of unsafe lifecycle methods",
  "react/no-unstable-nested-components":
    "Prevent creating unstable components inside components",
  "react/no-unused-class-component-methods":
    "Prevent declaring unused methods of component class",
  "react/no-unused-prop-types": "Prevent definitions of unused prop types",
  "react/no-unused-state": "Prevent definition of unused state fields",
  "react/no-will-update-set-state":
    "Prevent usage of setState in componentWillUpdate",
  "react/prefer-es6-class": "Enforce ES5 or ES6 class for React Components",
  "react/prefer-exact-props": "Prefer exact proptype definitions",
  "react/prefer-read-only-props": "Require read-only props",
  "react/prefer-stateless-function":
    "Enforce stateless components to be written as a pure function",
  "react/prop-types":
    "Prevent missing props validation in a React component definition",
  "react/react-in-jsx-scope": "Prevent missing React when using JSX",
  "react/require-optimization":
    "Enforce React components to have a shouldComponentUpdate method",
  "react/require-render-return":
    "Enforce ES5 or ES6 class for returning value in render function",
  "react/self-closing-comp":
    "Prevent extra closing tags for components without children",
  "react/sort-comp": "Enforce component methods order",
  "react/sort-prop-types":
    "Enforce propTypes declarations alphabetical sorting",
  "react/state-in-constructor":
    "State initialization in an ES6 class component should be in a constructor",
  "react/static-property-placement":
    "Defines where React component static properties should be positioned",
  "react/style-prop-object": "Enforce style prop value is an object",
  "react/void-dom-elements-no-children":
    "Prevent passing of children to void DOM elements (e.g. <br />)",
  "require-yield": "Require generator functions to contain `yield`",
  "rest-spread-spacing":
    "Enforce spacing between rest and spread operators and their expressions",
  semi: "Require or disallow semicolons instead of ASI",
  "semi-spacing": "Enforce consistent spacing before and after semicolons",
  "semi-style": "Enforce location of semicolons",
  "simple-import-sort/exports": "Enforce sorting of the exports",
  "simple-import-sort/imports": "Enforce sorting of the imports",
  "space-after-function-name":
    "Enforces consistent spacing after name in function definitions",
  "space-after-keywords": "Enforces consistent spacing after keywords",
  "space-before-blocks": "Enforce consistent spacing before blocks",
  "space-before-function-paren":
    "Enforce consistent spacing before `function` definition opening parenthesis",
  "space-before-function-parentheses":
    "Enforces consistent spacing before opening parenthesis in function definitions",
  "space-before-keywords": "Enforces consistent spacing before keywords",
  "space-in-brackets":
    "Enforces consistent spacing inside braces of object literals and brackets of array literals",
  "space-in-parens": "Enforce consistent spacing inside parentheses",
  "space-infix-ops": "Require spacing around infix operators",
  "space-return-throw-case":
    "Requires spaces after `return`, `throw`, and `case` keywords",
  "space-unary-ops":
    "Enforce consistent spacing before or after unary operators",
  "space-unary-word-ops": "Requires spaces after unary word operators",
  "spaced-comment":
    "Enforce consistent spacing after the `//` or `/*` in a comment",
  "standard/array-bracket-even-spacing":
    "Enforce consistent spacing inside array brackets",
  "standard/computed-property-even-spacing":
    "Enforce consistent spacing inside computed property brackets",
  "standard/object-curly-even-spacing":
    "Enforce consistent spacing inside braces",
  strict: "Require or disallow strict mode directives",
  "switch-colon-spacing": "Enforce spacing around colons of switch statements",
  "symbol-description": "Require symbol descriptions",
  "tailwindcss/classnames-order":
    "Enforces a consistent order of the Tailwind CSS classnames and its variants",
  "tailwindcss/enforces-negative-arbitrary-values":
    "Warns about `-` prefixed classnames using arbitrary values",
  "tailwindcss/enforces-shorthand":
    "Replaces multiple Tailwind CSS classnames by their shorthand",
  "tailwindcss/migration-from-tailwind-2":
    "Detect obsolete classnames when upgrading to Tailwind CSS v3",
  "tailwindcss/no-arbitrary-value":
    "Forbid using arbitrary values in classnames",
  "tailwindcss/no-contradicting-classname":
    'Avoid contradicting Tailwind CSS classnames (`"w-3 w-5"`)',
  "tailwindcss/no-custom-classname":
    "Detect classnames which do not belong to Tailwind CSS",
  "template-curly-spacing":
    "Require or disallow spacing around embedded expressions of template strings",
  "template-tag-spacing":
    "Require or disallow spacing between template tags and their literals",
  "unicode-bom": "Require or disallow Unicode byte order mark (BOM)",
  "unicorn/empty-brace-spaces": "Enforce no spaces between braces",
  "unicorn/no-nested-ternary": "Disallow nested ternary expressions",
  "unicorn/number-literal-case": "Enforce proper case for numeric literals",
  "use-isnan": "Require calls to `isNaN()` when checking for `NaN`",
  "valid-typeof":
    "Enforce comparing `typeof` expressions against valid strings",
  "vars-on-top":
    "Require `var` declarations be placed at the top of their containing scope",
  "vue/array-bracket-newline":
    "Enforce linebreaks after opening and before closing array brackets in `<template>`",
  "vue/array-bracket-spacing":
    "Enforce consistent spacing inside array brackets in `<template>`",
  "vue/array-element-newline":
    "Enforce line breaks after each array element in `<template>`",
  "vue/arrow-spacing":
    "Enforce consistent spacing before and after the arrow in arrow functions in `<template>`",
  "vue/block-spacing":
    "Disallow or enforce spaces inside of blocks after opening block and before closing block in `<template>`",
  "vue/block-tag-newline":
    "Enforce line breaks after opening and before closing block-level tags",
  "vue/brace-style":
    "Enforce consistent brace style for blocks in `<template>`",
  "vue/comma-dangle": "Require or disallow trailing commas in `<template>`",
  "vue/comma-spacing":
    "Enforce consistent spacing before and after commas in `<template>`",
  "vue/comma-style": "Enforce consistent comma style in `<template>`",
  "vue/dot-location":
    "Enforce consistent newlines before and after dots in `<template>`",
  "vue/func-call-spacing":
    "Require or disallow spacing between function identifiers and their invocations in `<template>`",
  "vue/html-closing-bracket-newline":
    "Require or disallow a line break before tag's closing brackets",
  "vue/html-closing-bracket-spacing":
    "Require or disallow a space before tag's closing brackets",
  "vue/html-end-tags": "Enforce end tag style",
  "vue/html-indent": "Enforce consistent indentation in `<template>`",
  "vue/html-quotes": "Enforce quotes style of HTML attributes",
  "vue/html-self-closing": "Enforce self-closing style",
  "vue/key-spacing":
    "Enforce consistent spacing between keys and values in object literal properties in `<template>`",
  "vue/keyword-spacing":
    "Enforce consistent spacing before and after keywords in `<template>`",
  "vue/max-attributes-per-line":
    "Enforce the maximum number of attributes per line",
  "vue/max-len": "Enforce a maximum line length in `.vue` files",
  "vue/multiline-html-element-content-newline":
    "Require a line break before and after the contents of a multiline element",
  "vue/multiline-ternary":
    "Enforce newlines between operands of ternary expressions in `<template>`",
  "vue/mustache-interpolation-spacing":
    "Enforce unified spacing in mustache interpolations",
  "vue/no-extra-parens": "Disallow unnecessary parentheses in `<template>`",
  "vue/no-multi-spaces": "Disallow multiple spaces",
  "vue/no-spaces-around-equal-signs-in-attribute":
    "Disallow spaces around equal signs in attribute",
  "vue/object-curly-newline":
    "Enforce consistent line breaks after opening and before closing braces in `<template>`",
  "vue/object-curly-spacing":
    "Enforce consistent spacing inside braces in `<template>`",
  "vue/object-property-newline":
    "Enforce placing object properties on separate lines in `<template>`",
  "vue/operator-linebreak":
    "Enforce consistent linebreak style for operators in `<template>`",
  "vue/quote-props":
    "Require quotes around object literal property names in `<template>`",
  "vue/script-indent": "Enforce consistent indentation in `<script>`",
  "vue/singleline-html-element-content-newline":
    "Require a line break before and after the contents of a singleline element",
  "vue/space-in-parens":
    "Enforce consistent spacing inside parentheses in `<template>`",
  "vue/space-infix-ops":
    "Require spacing around infix operators in `<template>`",
  "vue/space-unary-ops":
    "Enforce consistent spacing before or after unary operators in `<template>`",
  "vue/template-curly-spacing":
    "Require or disallow spacing around embedded expressions of template strings in `<template>`",
  "wrap-iife": "Require parentheses around immediate `function` invocations",
  "wrap-regex": "Require parenthesis around regex literals",
  "yield-star-spacing":
    "Require or disallow spacing around the `*` in `yield*` expressions",
  yoda: 'Require or disallow "Yoda" conditions',
};
