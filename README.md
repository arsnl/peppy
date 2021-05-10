<div align="center"><img src="media/readme-banner.png" width="600" role="presentation" /></div>

<h3 align="center">Brilliant ESLint configurations<br/> for happier developers</h3>

<p align="center">
<a href="https://lerna.js.org/"><img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="lerna" /></a>
    <a href="https://prettier.io/"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="code style: prettier" /></a>
    <a href="https://github.com/arsnl/peppy"><img src="https://img.shields.io/badge/config-peppy-B0FF31.svg?logo=eslint" alt="eslint config: peppy" /></a>
    <a href="https://github.com/arsnl/peppy/actions?query=workflow%3Atest+branch%main"><img src="https://github.com/arsnl/peppy/workflows/test/badge.svg?branch=main" alt="npm test workflow status" /></a>
</p>

A brilliant collection of shareable opinionated ESLint configurations that enforces strict, functional, readable and modern code with developers happiness in mind.

## How is this project structured?

The Peppy project is structured as a [monorepo](https://en.wikipedia.org/wiki/Monorepo) that is composed of many [npm packages](#peppy-packages) and maintained with [Lerna](https://lerna.js.org/).

All the packages are under the folder `packages`. For example, if you are looking for the `eslint-config-peppy` package, check in the `packages/eslint-config-peppy` folder.

## Peppy Packages

The following packages are part of Peppy:

- [`peppy`](https://www.npmjs.com/package/peppy) – Peppy CLI
- [`eslint-config-peppy`](https://www.npmjs.com/package/eslint-config-peppy) – ESLint configuration that follow the Peppy code style.
- [`eslint-config-peppy-ava`](https://www.npmjs.com/package/eslint-config-peppy-ava) – ESLint configuration for projects that use [AVA](https://ava.li/).
- [`eslint-config-peppy-cypress`](https://www.npmjs.com/package/eslint-config-peppy-cypress) – ESLint configuration for projects that use [Cypress](https://cypress.io/).
- [`eslint-config-peppy-jest`](https://www.npmjs.com/package/eslint-config-peppy-jest) – ESLint configuration for projects that use [Jest](https://jestjs.io/).
- [`eslint-config-peppy-lodash`](https://www.npmjs.com/package/eslint-config-peppy-lodash) – ESLint configuration for projects that use [Lodash](https://lodash.com/).
- [`eslint-config-peppy-ramda`](https://www.npmjs.com/package/eslint-config-peppy-ramda) – ESLint configuration for projects that use [Ramda](https://ramdajs.com/).
- [`eslint-config-peppy-mocha`](https://www.npmjs.com/package/eslint-config-peppy-mocha) – ESLint configuration for projects that use [Mocha](https://mochajs.org/).
- [`eslint-config-peppy-node`](https://www.npmjs.com/package/eslint-config-peppy-node) – ESLint configuration for projects that use [Node](https://nodejs.org/).
- [`eslint-config-peppy-react`](https://www.npmjs.com/package/eslint-config-peppy-react) – ESLint configuration for projects that use [React](https://reactjs.org/).
- [`eslint-config-peppy-typescript`](https://www.npmjs.com/package/eslint-config-peppy-typescript) – ESLint configuration for projects that use [TypeScript](http://typescriptlang.org/).

## Versioning Policy

This project apply the [Semantic Versioning](https://semver.org/) convention. All breaking changes will bump the major version. Every new rule addition will be recognized as a breaking changes. Therefore, every new rule addition will increase the major version.

Also, all packages use the same version. That mean, if one package change, all the packages version will be changed for the new one. By doing that we make sure there's no cross version issues.

## Contributing

Please read our [contribution guide](/CONTRIBUTING.md) for details on our [code of conduct](/CODE_OF_CONDUCT.md), and the process for submitting pull requests to us.

## License

Distributed under the MIT License. See the [license](/LICENSE) for more information.
