<div align="center"><br/><br/><img src="apps/www/public/assets/logos/logotype.svg" width="300" role="presentation" /></div>
<h3 align="center">Brilliant ESLint configurations<br/> for happier developers</h3>

# Contribution Guidelines

When contributing to `peppy`, whether on GitHub or in other community spaces:

- Be respectful, civil, and open-minded. Follow our [code of conduct](CODE_OF_CONDUCT.md).
- Before opening a new pull request, try searching through the [issue tracker](https://github.com/arsnl/peppy/issues) for known issues or fixes.
- If you want to make code changes based on your personal opinion(s), make sure you open an issue first describing the changes you want to make, and open a pull request only when your suggestions get approved by maintainers.

## How to Contribute

### Prerequisites

In order to not waste your time implementing a change that has already been declined, or is generally not needed, start by [opening an issue](https://github.com/arsnl/peppy/issues/new/choose) describing the problem you would like to solve.

### Setup your environment locally

_Some commands will assume you have the Github CLI installed, if you haven't, consider [installing it](https://github.com/cli/cli#installation), but you can always use the Web UI if you prefer that instead._

In order to contribute to this project, you will need to fork the repository:

```bash
gh repo fork arsnl/peppy
```

then, clone it to your local machine:

```bash
gh repo clone <your-github-name>/peppy
```

This project uses [pnpm](https://pnpm.io) as its package manager. Install it if you haven't already:

```bash
npm install -g pnpm
```

Then, install the project's dependencies:

```bash
pnpm install
```

### Implement your changes

This project is a [Turborepo](https://turborepo.org/) monorepo.

- The code for the CLI is in the `packages/peppy` directory
- The code for the ESLint configurations is in the `packages/eslint-config-peppy` directory
- The code for the documentation is in the `apps/www` directory.

Now you're all setup and can start implementing your changes.

Here are some useful scripts for when you are developing:

| Command             | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `pnpm dev:cli`      | Builds and starts the CLI in watch-mode                   |
| `pnpm dev:eslint`   | Builds and starts the ESLint configurations in watch-mode |
| `pnpm dev:www`      | Starts the documentations website in development mode     |
| `pnpm build:cli`    | Builds the CLI                                            |
| `pnpm build:eslint` | Builds the ESLint configurations                          |
| `pnpm build:www`    | Builds the documentations website                         |
| `pnpm build`        | Builds CLI, ESLint configurations and documentations      |
| `pnpm format`       | Checks your code for formatting errors                    |
| `pnpm lint`         | Checks your code for linting errors                       |
| `pnpm type`         | Checks your code for type errors                          |
| `pnpm check`        | Checks your code for formatting, linting and type errors  |
| `pnpm fix`          | Fixes any formatting and linting errors                   |
| `pnpm clean`        | Remove build artifacts and node_modules                   |
| `pnpm changeset`    | Generate your changeset                                   |
| `pnpm release`      | Publish the packages to npm (CI only)                     |
| `pnpm cli`          | Execute the local Peppy CLI                               |

When making commits, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines, i.e. prepending the message with `feat:`, `fix:`, `chore:`, `docs:`, etc. You can use `git status` to double check which files have not yet been staged for commit:

```bash
git add <file> && git commit -m "feat/fix/chore/docs: commit message"
```

### When you're done

Check that your code follows the project's style guidelines by running:

```bash
pnpm check
```

Please also make a manual, functional test of your changes.

If your change should appear in the changelog, i.e. it changes some behavior of either the CLI or the outputted application, it must be captured by `changeset` which is done by running

```bash
pnpm changeset
```

and filling out the form with the appropriate information. Then, add the generated changeset to git:

```bash
git add .changeset/*.md && git commit -m "chore: add changeset"
```

When all that's done, it's time to file a pull request to upstream:

**NOTE**: All pull requests should target the `main` branch.

```bash
gh pr create --web
```

and fill out the title and body appropriately. Again, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines for your title.

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
