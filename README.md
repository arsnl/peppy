<div align="center"><img src="./media/readme-banner.png" width="600" role="presentation" /></div>
<h3 align="center">Brilliant ESLint configurations<br/> for happier developers</h3>

<p align="center">
    <a href="https://www.npmjs.org/package/eslint-config-peppy"><img src="https://img.shields.io/npm/v/eslint-config-peppy.svg" alt="npm version" /></a>
    <a href="https://github.com/arsnl/peppy/actions/workflows/tests.yml"><img src="https://github.com/arsnl/peppy/actions/workflows/tests.yml/badge.svg" alt="Tests" /></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" /></a>
</p>

Say goodbye to headaches and frustration, and hello to happy development with Peppy! 👋

Peppy is like the cool, modern cousin of the popular Airbnb configuration. 😎

We've taken the best parts of the popular Airbnb setup, given it a modern makeover, added support for TypeScript and Prettier out of the box, waved goodbye to all those pesky peer dependencies an created an auto-installer to made it even more developer-friendly — what more could you ask for?

## Highlights

- Play well with [TypeScript](#typescript-support) and [Prettier](#prettier-support)
- Include [configurations](#configurations) for React, Next, Jest and Tailwindcss
- [Batteries included configuration](#batteries-included-configuration) with a very small footprint
- Come with a hassle-free auto-installer

## Quick Start

Are you ready to get Peppy? The easiest and most hassle-free way to get started is with our installer — it's like a magic wand that makes all your configuration dreams come true.

Give it a go and see for yourself!

```
npx peppy install
```

## Manual Installation

If you're feeling adventurous and want to install Peppy manually, we're not here to stop you — we love a good challenge! Just follow these steps and you'll be one step closer to configuration greatness.

Ready, set, go!

### 1️⃣ Install dependencies

Before we can start this party, we need to get our dependencies in order. Don't worry, it's not as boring as it sounds — just run this command and let the magic happen. You'll be one step closer to configuration heaven!

```
npm install --save-dev eslint-config-peppy prettier eslint
```

### 2️⃣ Setup ESLint

If you haven't already joined the cool kids club with an ESLint configuration file, it's time to get on board. Just create a `.eslintrc.js` file in your project's root directory and you'll be well on your way to code perfection.

Don't forget to add some sweet [Peppy configurations](#configurations) to the `extends` array to get things moving!

```js
module.exports = {
  extends: ["peppy"],
};
```

### 3️⃣ Add scripts

Don't be shy — give your package.json some love by adding these awesome scripts to lint, format, fix and even typecheck your project with ease. Your code will thank you for it!

```json
"scripts": {
  "lint": "eslint .",
  "format": "prettier --check .",
  "typecheck": "tsc --noEmit", // Only if you use TypeScript
  "fix": "prettier --write --log-level warn . && npm run lint -- --fix",
},
```

### 4️⃣ Add .editorconfig file

If you're looking to take your formatting game to the next level, it's time to bring in the big guns — EditorConfig and Prettier. They're like Batman and Robin, but for your code.

Use them together to enforce all the formatting rules, even the files that Prettier can't handle on its own.

We've even included a pre-configured `.editorconfig` file that's just waiting for you to copy and paste it into your project. What are you waiting for? Let's get this formatting party started!

<!-- START snippet-editorconfig -->

```toml
# Configuration to use with Prettier.
# Source: https://prettier.io/docs/en/configuration.html#editorconfig

root = true

[*]
charset = utf-8
insert_final_newline = true
end_of_line = lf
indent_style = space
indent_size = 2
max_line_length = 80

```

<!-- END snippet-editorconfig -->

### 5️⃣ Set VS Code

The final countdown is here — it's time to install those VS Code extensions so your code validation and formatting runs smoother than a buttery croissant. Don't worry, it's just one last step before you can sit back and watch the magic happen. Let's do this!

- Install the following VS Code extensions

  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

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
  "files.autoSave": "onFocusChange"
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
    "esbenp.prettier-vscode",
    // EditorConfig for VS Code
    "editorconfig.editorconfig"
  ]
}
```

<!-- END snippet-vscode-extensions -->

Congratulations, you're officially a configuration wizard! 🧙‍♂️ It's time to sit back, relax, and let your code take center stage. We'll be here in case you need any more magic tricks up your sleeve. Happy coding!

## Configurations

Behold, the shining stars of the Peppy show! These ESLint configurations are like the Avengers of code - each one with their own unique powers to make your code stronger and more efficient. Which one will you choose? The power is in your hands, my friend.

| Configuration       | Description                                                                                                                                 | Rules                               |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `peppy`             | The Beyoncé of code styles. It's mandatory and it always comes first, no matter what. 💃🏽                                                    | [Rules](/docs/peppy.md)             |
| `peppy/react`       | Additional configuration if your project use React.                                                                                         | [Rules](/docs/peppy-react.md)       |
| `peppy/next`        | Additional configuration for NextJS project. If you use it, skip adding `peppy/react` - it extends the React rules already. Easy peasy!     | [Rules](/docs/peppy-next.md)        |
| `peppy/jest`        | Additional configuration if your project use Jest.                                                                                          | [Rules](/docs/peppy-jest.md)        |
| `peppy/tailwindcss` | Additional configuration if your project use Tailwind CSS.                                                                                  | [Rules](/docs/peppy-tailwindcss.md) |
| `peppy/prettier`    | Add it at the end of your ESLint extends only if you use non-Peppy configurations to turns off all rules that might conflict with Prettier. | [Rules](/docs/peppy-prettier.md)    |

## Batteries included configuration

Oh, you betcha! Peppy is not like other ESLint configurations. With Peppy, you don't have to worry about installing and keeping up with peer dependencies.

We know it can be frustrating to manage all those pesky dependencies, so we took care of it for you!

And if you're curious about how Peppy stacks up against the other guys, check out this little example we put together comparing Peppy and Airbnb's footprints.

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

Prettier and ESLint are both efficient tools, but each has its own superpower. Prettier is the champ at formatting many different file formats, while ESLint excels at validating code-quality and catching bugs in JavaScript and TypeScript files.

To follow the best practice, Peppy lets Prettier handle formatting and ESLint handle code style. Peppy doesn't overwrite Prettier rules, nor does it format anything that Prettier already supports.

This means you can run Prettier with IDE extensions, on your terminal, on CI runners, on pre-commit hooks, anywhere, without worrying about possible conflicts with ESLint. No more headaches!

The only tradeoff is that you need to run both Prettier and ESLint to get your JavaScript and TypeScript files fully formatted and linted. But it's not a big deal, as you would have to run Prettier anyway to format all the other files it supports.

## TypeScript support

Peppy has got your back when it comes to TypeScript! You don't need to worry about installing any additional ESLint plugins or configs, nor do you need to fiddle with special TypeScript configs in your "extends" property.

However, just to make sure everything runs smoothly, you might want to specify your `project` and `tsconfigRootDir` in the `parserOptions` property of your ESLint config file. That way, typescript-eslint can easily find your project TypeScript configuration and you can sit back, relax, and let Peppy take care of the rest.

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
