<div align="center"><img src="media/readme-banner.png" width="600" role="presentation" /></div>
<h3 align="center">Brilliant ESLint configurations<br/> for happier developers</h3>

# Contributing

When contributing to this project, please first discuss the change you wish to make via [GitHub Issues](https://github.com/arsnl/peppy/issues) and make sure the issue you're about to open don't already exist. If it exist, you can join the existing conversation about it.

Please note we have a [code of conduct](CODE_OF_CONDUCT.md). Please follow it in all your interactions within the project.

## Install and Run

To install and work on this project locally, all you have to do is to install the dependencies by running:

```bash
npm install
```

During the development, you don't have anything to run since this project is not transpiled before being send to NPM.

## Pull Requests

Pull requests are the best way to propose changes to the codebase.

We use [Github Flow](https://guides.github.com/introduction/flow/index.html).

1. Fork the repo and create your branch from the `main` branch.
2. If you've added code that should be tested, add tests.
3. If you've added/changed code that change the documentation, update the documentation.
4. Ensure the test suite passes by running `npm test` and `npm run fix` to fix the fixable issues.
5. Issue that pull request! 🚀

## Versioning Policy

This project apply the [Semantic Versioning](https://semver.org/) convention. All breaking changes will bump the major version. Every new rule addition will be recognized as a breaking changes. Therefore, every new rule addition will increase the major version.

Also, all packages use the same version. That mean, if one package change, all the packages version will be changed for the new one. By doing that we make sure there's no cross version issues.

## Conventional Commits

All pull requests SHOULD adhere to the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/).

Therefore, to respect the [versioning policy](#versioning-policy), every new rule addition MUST be marked as a breaking change.

## Bug Reports

We use GitHub issues to track bugs. Report a bug by [opening a new issue](https://github.com/arsnl/peppy/issues).

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](/LICENSE).
