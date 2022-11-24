<div align="center"><img src="./media/readme-banner.png" width="600" role="presentation" /></div>
<h3 align="center">Brilliant ESLint configurations<br/> for happier developers</h3>

<p align="center">
    <a href="https://www.npmjs.org/package/eslint-config-peppy"><img src="https://img.shields.io/npm/v/eslint-config-peppy.svg" alt="npm version" /></a>
    <a href="https://github.com/arsnl/peppy/actions?query=workflow%3Atest+branch%main"><img src="https://github.com/arsnl/peppy/workflows/test/badge.svg?branch=main" alt="npm test workflow status" /></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" /></a>
</p>

A brilliant collection of ESLint configurations that enforces strict, readable, and modern code with developers happiness in mind.

## Highlights

- Play well with [Prettier](#prettier-support) and [TypeScript](#typescript-support).
- [Batteries included configuration](#batteries-included-configuration) with a very small footprint.
- Saves you time, energy and make you happier!

## Quick Start

The easiest way to install Peppy is with the interactive install.

```
npx peppy install
```

## Manual Installation

If you want to install Peppy manually, follow these steps.

#### 1. Install dependencies

```
npm install --save-dev eslint-config-peppy prettier eslint
```

#### 2. Setup ESLint

If you don't already have one, create an ESLint configuration file (eg: `.eslintrc.js`) in the root of your project.

Then, add configurations to the "extends" array in your ESLint configuration file.

```js
module.exports = {
  extends: ["peppy"],
};
```

> Depending of your project, you can add more [configurations](#peppy-eslint-configurations) to the "extends" array.

#### 3. Add scripts

Add those scripts to your package.json to lint, format and fix your project.

```json
"scripts": {
  "lint": "eslint .",
  "format": "prettier --check --loglevel warn .",
  "fix": "prettier --write --loglevel warn . && npm run lint -- --fix"
},
```

Now you can manually lint your code by running `npm run lint`, check the format it with `npm run format` and fix all auto-fixable issues with `npm run fix`. You probably want your editor to do this though.

#### 4. Set VS Code

- Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) VS Code extensions.

- At the root of your project, create a folder named `.vscode` and put a `settings.json` file inside of it then put the settings below inside of this file.

<!-- START snippet-vscode-settings -->

```jsonc
{
  // Format a file on save.
  "editor.formatOnSave": true,
  // Defines a default formatter which takes precedence over all other formatter settings.
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // Code action kinds to be run on save.
  "editor.codeActionsOnSave": {
    // Controls whether auto fix action should be run on file save.
    "source.fixAll": true
  },
  // Controls auto save of editors that have unsaved changes.
  //  - onFocusChange: An editor with changes is automatically saved when the editor loses focus.
  "files.autoSave": "onFocusChange",
  // Always show the ESlint status bar item.
  "eslint.alwaysShowStatus": true
}
```

<!-- END snippet-vscode-settings -->

- To help other developers working on your project to install the correct VS Code extensions, you can also add an `extensions.json` file inside of the `.vscode` folder and put the settings below inside of this file.

<!-- START snippet-vscode-extensions -->

```jsonc
{
  // List of extensions which should be recommended for users of this workspace.
  "recommendations": [
    // VS Code ESLint extension
    "dbaeumer.vscode-eslint",
    // Prettier Formatter for Visual Studio Code
    "esbenp.prettier-vscode"
  ]
}
```

<!-- END snippet-vscode-extensions -->

## Peppy ESLint configurations

The following ESLint configurations are part of Peppy.

| Configuration  | Description                                                                                                                                                                                                                                                                               | Extends rule sets                                                             |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| peppy          | <p>The Peppy code style.</p><p>Must always be put at first.</p></p>                                                                                                                                                                                                                       | [base][base-rule-set], [prettier][prettier-rule-set]                          |
| peppy/react    | <p>Additional configuration for projects that use [React](https://reactjs.org/).</p>                                                                                                                                                                                                      | [react][react-rule-set], [prettier][prettier-rule-set]                        |
| peppy/next     | <p>Additional configuration for projects that use [NextJS](https://nextjs.org/).</p><p>No need to add the peppy/react configuration since this configuration already extend the react rules set.</p>                                                                                      | [react][react-rule-set], [next][next-rule-set], [prettier][prettier-rule-set] |
| peppy/jest     | <p>Additional configuration for projects that use [Jest](https://jestjs.io/).</p>                                                                                                                                                                                                         | [jest][jest-rule-set], [prettier][prettier-rule-set]                          |
| peppy/prettier | <p>Turns off all rules that might conflict with [Prettier](https://prettier.io/).</p><p>To add at the end of your ESLint extends if you add another ESLint configuration not provided by Peppy and want to make sure you don't introduce rules conflicting with Prettier by doing so.</p> | [prettier][prettier-rule-set]                                                 |

## Batteries included configuration

Unlike other ESLint configurations, you do not have to install and maintain peerDependencies with Peppy.

Here is an example of Peppy vs Airbnb package.json footprint.

```jsonc
// Peppy
"devDependencies": {
  "eslint": "latest",
  "eslint-config-peppy": "latest",
}

// Airbnb
"devDependencies": {
  "eslint": "latest",
  "eslint-config-airbnb": "latest",
  "eslint-plugin-import": "latest",
  "eslint-plugin-jsx-a11y": "latest",
  "eslint-plugin-react": "latest",
  "eslint-plugin-react-hooks": "latest"
}
```

Under the hood, Peppy uses the [@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch) library which allows it to install and access its dependencies without you having to install and maintaining them.

Thus, although the use of Prettier is highly recommended, the only dependency required to use Peppy is ESLint.

## Prettier support

Prettier is very efficient for formatting a lot of different files formats while ESLint is efficient to validate the code-quality and catching bugs on JavaScript and TypeScript files only.

It's a good practice to let Prettier handle formatting and ESLint handle the code style.

Peppy apply this practice.

Contrary to other ESLint configuration, Peppy do not contain any rule that overwrite the Prettier rules and don't do any formatting that is already supported by Prettier.

That mean that you can run Prettier with IDE extensions, on your terminal, on CI runners, on pre-commit hook, anywhere, without having to worry about possible conflict with ESLint. Like it's supposed to be.

However, the tradeoff of this approach is that you have to run Prettier and ESLint to get your JavaScript and TypeScript files fully formatted and linted. But, that's not a big tradeoff since you still have to run Prettier to format all the other files supported by it.

## TypeScript support

Peppy support TypeScript out of the box without having to install any other ESLint plugin, configuration nor selecting special TypeScript configuration in the extends property.

However, to help typescript-eslint to find your project TypeScript configuration, you may have to specify your `project` and `tsconfigRootDir` in the `parserOptions` property of your ESLint project configuration file.

```js
module.exports = {
  extends: ["peppy"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
};
```

## Versioning policy

This project apply the [Semantic Versioning](https://semver.org/) convention. All breaking changes will bump the major version. Every new rule addition will be recognized as a breaking changes. Therefore, every new rule addition will increase the major version.

Also, all packages use the same version. That mean, if one package change, all the packages version will be changed for the new one. By doing that we make sure there's no cross version issues.

## Contributing

Please read our [contribution guide](/CONTRIBUTING.md) for details on our [code of conduct](/CODE_OF_CONDUCT.md), and the process for submitting pull requests to us.

## License

Distributed under the MIT License. See the [license](/LICENSE) for more information.

[base-rule-set]: /docs/base-rule-set.md
[jest-rule-set]: /docs/jest-rule-set.md
[next-rule-set]: /docs/next-rule-set.md
[prettier-rule-set]: /docs/prettier-rule-set.md
[react-rule-set]: /docs/react-rule-set.md
