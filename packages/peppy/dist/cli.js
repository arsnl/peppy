#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/cli.ts
var import_commander2 = require("commander");
var import_kleur5 = require("kleur");
var import_update_check = __toESM(require("update-check"));

// package.json
var package_default = {
  name: "peppy",
  version: "3.1.0",
  description: "Peppy CLI - Brilliant ESLint configurations for happier developers",
  keywords: [
    "peppy",
    "cli",
    "eslint",
    "config",
    "prettier"
  ],
  homepage: "https://github.com/arsnl/peppy",
  bugs: {
    url: "https://github.com/arsnl/peppy/issues"
  },
  repository: {
    type: "git",
    url: "https://github.com/arsnl/peppy",
    directory: "packages/peppy"
  },
  author: {
    name: "Mark Arseneault",
    email: "mark@arsnl.dev",
    url: "https://arsnl.dev"
  },
  license: "MIT",
  bin: {
    peppy: "./dist/cli.js"
  },
  scripts: {
    dev: "tsup --watch",
    build: "tsup",
    format: "prettier --check .",
    lint: "eslint .",
    type: "tsc --noEmit",
    fix: "prettier --write --log-level warn . && npm run lint -- --fix",
    clean: "rimraf dist .turbo node_modules"
  },
  dependencies: {
    commander: "10.0.0",
    "comment-json": "4.2.3",
    execa: "5.1.1",
    "gradient-string": "2.0.2",
    kleur: "4.1.5",
    ora: "5.4.1",
    prompts: "2.4.2",
    rimraf: "4.4.1",
    semver: "7.3.8",
    "update-check": "1.5.4"
  },
  devDependencies: {
    "@types/gradient-string": "^1.1.2",
    "@types/prompts": "^2.4.4",
    "@types/semver": "^7.5.0",
    typescript: "5.1.6"
  },
  engines: {
    node: ">=14.0.0",
    npm: ">=5.2.0"
  }
};

// src/commands/install.ts
var import_commander = require("commander");
var import_kleur4 = require("kleur");
var import_prompts2 = __toESM(require("prompts"));

// src/utils/helpers.ts
var import_comment_json = __toESM(require("comment-json"));
var import_execa = __toESM(require("execa"));
var import_fs = __toESM(require("fs"));
var import_gradient_string = __toESM(require("gradient-string"));
var import_kleur2 = require("kleur");
var import_ora = __toESM(require("ora"));
var import_path = __toESM(require("path"));
var import_rimraf = require("rimraf");
var import_semver = require("semver");

// src/utils/logger.ts
var import_kleur = require("kleur");
var createLogFunc = ({ level, color }) => {
  const prefix = color ? `[${color(level)}] ` : "";
  const spaces = color ? level.split("").map(() => " ").join("").concat("   ") : "";
  return (...logs) => {
    const stream = process[level === "log" ? "stdout" : "stderr"];
    const message = logs.map((log) => typeof log === "string" ? log : JSON.stringify(log)).join(`
${spaces}`);
    stream.write(`${prefix}${message}
`);
  };
};
var logger = {
  warn: createLogFunc({ level: "warn", color: import_kleur.yellow }),
  error: createLogFunc({ level: "error", color: import_kleur.red }),
  debug: createLogFunc({ level: "debug", color: import_kleur.cyan }),
  log: createLogFunc({ level: "log" })
};

// src/utils/helpers.ts
var isPathExists = async ({ path = process.cwd(), cwd = "" } = {}) => {
  try {
    await import_fs.default.promises.access(
      import_path.default.join(cwd, path),
      (import_fs.default.constants || import_fs.default).F_OK
    );
    return true;
  } catch {
    return false;
  }
};
var isPathWriteable = async ({ path = process.cwd() } = {}) => {
  try {
    await import_fs.default.promises.access(path, (import_fs.default.constants || import_fs.default).W_OK);
    return true;
  } catch {
    return false;
  }
};
var getExistingPaths = async ({
  paths = [],
  cwd = process.cwd()
} = {}) => {
  const dirPaths = await import_fs.default.promises.readdir(cwd);
  return dirPaths.filter((currentPath) => paths.includes(currentPath));
};
var readFile = async ({
  file = "",
  json,
  cwd = process.cwd()
} = {}) => {
  const filePath = import_path.default.join(cwd, file);
  const data = await import_fs.default.promises.readFile(filePath, "utf8");
  return json ? JSON.parse(data) : data;
};
var writeFile = async ({
  file = "",
  data = "",
  cwd = process.cwd(),
  format = true
} = {}) => {
  const filePath = import_path.default.join(cwd, file);
  const dirname = import_path.default.dirname(filePath);
  if (!await isPathExists({ path: dirname })) {
    await import_fs.default.promises.mkdir(dirname, {
      recursive: true
    });
  }
  if (await isPathExists({ path: filePath })) {
    await import_fs.default.promises.rm(filePath);
  }
  await import_fs.default.promises.writeFile(filePath, data);
  if (format) {
    await (0, import_execa.default)("npx", ["prettier", "--write", filePath]);
  }
};
var isInGitRepository = async ({ cwd = process.cwd() } = {}) => {
  try {
    await (0, import_execa.default)("git", ["rev-parse", "--is-inside-work-tree"], {
      cwd,
      stdio: "ignore"
    });
    return true;
  } catch (_) {
  }
  return false;
};
var isInMercurialRepository = async ({ cwd = process.cwd() } = {}) => {
  try {
    await (0, import_execa.default)("hg", ["--cwd", ".", "root"], {
      cwd,
      stdio: "ignore"
    });
    return true;
  } catch (_) {
  }
  return false;
};
var hasGitChanges = async ({ cwd = process.cwd() } = {}) => {
  try {
    if (await isInGitRepository({ cwd })) {
      const { stdout } = await (0, import_execa.default)("git", ["status", "--porcelain"], { cwd });
      return !!stdout;
    }
  } catch (_) {
  }
  return false;
};
var hasMercurialChanges = async ({ cwd = process.cwd() } = {}) => {
  try {
    if (await isInMercurialRepository({ cwd })) {
      const { stdout } = await (0, import_execa.default)("hg", ["status"], { cwd });
      return !!stdout;
    }
  } catch (_) {
  }
  return false;
};
var addESLintConfigurationFile = async ({
  cwd = process.cwd()
} = {}) => {
  const spinner = (0, import_ora.default)(`Adding ESLint configuration file`).start();
  const eslintFiles = await getExistingPaths({
    paths: [
      ".eslintrc.js",
      ".eslintrc.cjs",
      ".eslintrc.mjs",
      ".eslintrc.yaml",
      ".eslintrc.yml",
      ".eslintrc.json"
    ],
    cwd
  });
  eslintFiles.forEach((file) => {
    (0, import_rimraf.sync)(import_path.default.join(cwd, file));
  });
  const { eslintConfig, ...pkgRest } = await readPkg({ cwd });
  await writePkg({ data: pkgRest, cwd });
  const isNextInstalled = await isPackageInDependencies({
    packageName: "next",
    cwd
  });
  const isReactInstalled = await isPackageInDependencies({
    packageName: "react",
    cwd
  });
  const isTailwindcssInstalled = await isPackageInDependencies({
    packageName: "tailwindcss",
    cwd
  });
  const isJestInstalled = await isPackageInDependencies({
    packageName: "jest",
    cwd
  });
  const isTypeScriptInstalled = await isPackageInDependencies({
    packageName: "typescript",
    cwd
  });
  const isPkgTypeModule = pkgRest.type && pkgRest.type === "module";
  const configuration = {
    extends: [
      "peppy",
      isNextInstalled && "peppy/next",
      isReactInstalled && !isNextInstalled && "peppy/react",
      isTailwindcssInstalled && "peppy/tailwindcss",
      isJestInstalled && "peppy/jest"
    ].filter((extend) => !!extend),
    ...isTypeScriptInstalled ? {
      parserOptions: {
        tsconfigRootDir: "__dirname",
        project: "./tsconfig.json"
      }
    } : {}
  };
  await writeFile({
    file: isPkgTypeModule ? ".eslintrc.cjs" : ".eslintrc.js",
    cwd,
    data: `/** @type {import("eslint").Linter.Config} */
module.exports = ${JSON.stringify(
      configuration
    )}`.replace('"__dirname"', "__dirname")
  });
  spinner.succeed(`ESLint configuration file added`);
};
var createPkg = async ({
  packageManager = "npm",
  cwd = process.cwd()
} = {}) => {
  const args = ["init"];
  try {
    await (0, import_execa.default)(packageManager, args, { cwd, stdio: "inherit" });
  } catch (error) {
    logger.error(`Cannot execute '${packageManager} ${args.join(" ")}'`);
    throw error;
  }
};
var readPkg = async ({ cwd = process.cwd() } = {}) => readFile({ file: "package.json", cwd, json: true });
var writePkg = async ({ data = {}, cwd = process.cwd() } = {}) => writeFile({ file: "package.json", cwd, data: JSON.stringify(data, null, 2) });
var getNodeVersionInstalled = async ({ cwd = process.cwd() } = {}) => {
  try {
    const { stdout } = await (0, import_execa.default)("node", ["--version"], { cwd });
    return (0, import_semver.clean)(stdout);
  } catch {
    return "";
  }
};
var getNpmVersionInstalled = async ({ cwd = process.cwd() } = {}) => {
  try {
    const { stdout } = await (0, import_execa.default)("npm", ["--version"], { cwd });
    return (0, import_semver.clean)(stdout);
  } catch {
    return null;
  }
};
var isNpmInstalled = async () => {
  try {
    await (0, import_execa.default)("npm", ["--version"], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
};
var isYarnInstalled = async () => {
  try {
    await (0, import_execa.default)("yarn", ["--version"], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
};
var isPnpmInstalled = async () => {
  try {
    await (0, import_execa.default)("pnpm", ["--version"], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
};
var getPackageManagersChoices = async ({
  cwd = process.cwd()
} = {}) => {
  const packageManagers = {
    npm: {
      title: "npm",
      isInstalled: await isNpmInstalled(),
      hasLockfile: await isPathExists({ path: "package-lock.json", cwd })
    },
    pnpm: {
      title: "pnpm",
      isInstalled: await isPnpmInstalled(),
      hasLockfile: await isPathExists({ path: "pnpm-lock.yaml", cwd })
    },
    yarn: {
      title: "yarn",
      isInstalled: await isYarnInstalled(),
      hasLockfile: await isPathExists({ path: "yarn.lock", cwd })
    }
  };
  let recommended = "";
  return Object.keys(packageManagers).reduce((acc, current) => {
    const packageManager = packageManagers[current];
    const choice = packageManager.isInstalled ? {
      title: packageManager.title,
      value: current
    } : false;
    if (!recommended && packageManager.isInstalled && packageManager.hasLockfile) {
      recommended = current;
    }
    return choice && recommended === current ? [
      {
        ...choice,
        title: `${choice.title} (${(0, import_kleur2.green)("recommended")})`
      },
      ...acc
    ] : choice ? [...acc, choice] : acc;
  }, []);
};
var getUserPkgManager = () => {
  const userAgent = process.env.npm_config_user_agent;
  if (userAgent) {
    if (userAgent.startsWith("yarn")) {
      return "yarn";
    }
    if (userAgent.startsWith("pnpm")) {
      return "pnpm";
    }
    return "npm";
  }
  return "npm";
};
var isPackageInDependencies = async ({
  packageName = "",
  cwd = process.cwd()
} = {}) => {
  const { dependencies = {}, devDependencies = {} } = await readPkg({
    cwd
  });
  return !!(dependencies[packageName] || devDependencies[packageName]);
};
var installDependencies = async ({
  packageManager = "npm",
  cwd = process.cwd(),
  prod = false
} = {}) => {
  const spinner = (0, import_ora.default)(`Installing package dependencies`).start();
  const { version } = package_default;
  const dependencies = [
    await isPackageInDependencies({
      packageName: "eslint",
      cwd
    }) ? "" : "eslint",
    await isPackageInDependencies({
      packageName: "prettier",
      cwd
    }) ? "" : "prettier",
    `eslint-config-peppy@^${version}`
  ].filter((dependencie) => !!dependencie);
  const args = ["add", ...dependencies, prod ? "-S" : "-D"];
  try {
    await (0, import_execa.default)(packageManager, args, { cwd });
    spinner.succeed(`Package dependencies installed`);
  } catch (error) {
    spinner.fail(`A problem occurs while installing the package dependencies.`);
    logger.error(`Cannot execute '${packageManager} ${args.join(" ")}'`);
    throw error;
  }
};
var addPkgJsonScripts = async ({ cwd = process.cwd() } = {}) => {
  const spinner = (0, import_ora.default)(`Adding the package.json scripts`).start();
  const packageJson = await readPkg({ cwd });
  const currentScripts = packageJson.scripts || {};
  const isTypeScriptInstalled = await isPackageInDependencies({
    packageName: "typescript",
    cwd
  });
  const RECOMMENDED_SCRIPTS = {
    lint: "eslint .",
    format: "prettier --check .",
    ...isTypeScriptInstalled ? { typecheck: "tsc --noEmit" } : {},
    fix: "prettier --write --log-level warn . && npm run lint -- --fix"
  };
  await writePkg({
    data: {
      ...packageJson,
      scripts: { ...currentScripts, ...RECOMMENDED_SCRIPTS }
    },
    cwd
  });
  spinner.succeed(`Package.json scripts added`);
};
var addVsCodeWorkspaceSettings = async ({
  cwd = process.cwd()
} = {}) => {
  const spinner = (0, import_ora.default)(`Adding VS Code workspace settings`).start();
  const extensionsTemplate = await readFile({
    file: "../templates/.vscode/extensions.json",
    cwd: __dirname
  });
  const parsedExtensionsTemplate = import_comment_json.default.parse(extensionsTemplate);
  const settingsTemplate = await readFile({
    file: "../templates/.vscode/settings.json",
    cwd: __dirname
  });
  const parsedSettingsTemplate = import_comment_json.default.parse(settingsTemplate);
  let settings = {};
  let extensions = {};
  if (await isPathExists({ path: ".vscode/settings.json", cwd })) {
    const data = await readFile({
      file: ".vscode/settings.json",
      cwd
    });
    settings = import_comment_json.default.parse(data) || settings;
  }
  if (await isPathExists({ path: ".vscode/extensions.json", cwd })) {
    const data = await readFile({
      file: ".vscode/extensions.json",
      cwd
    });
    extensions = import_comment_json.default.parse(data) || extensions;
  }
  settings = jsoncDeepAssign(settings, parsedSettingsTemplate);
  extensions = jsoncDeepAssign(extensions, parsedExtensionsTemplate);
  await writeFile({
    file: ".vscode/extensions.json",
    cwd,
    data: import_comment_json.default.stringify(extensions, null, 2)
  });
  await writeFile({
    file: ".vscode/settings.json",
    cwd,
    data: import_comment_json.default.stringify(settings, null, 2)
  });
  spinner.succeed(`VS Code workspace settings added`);
};
var addEditorConfigFile = async ({ cwd = process.cwd() } = {}) => {
  const spinner = (0, import_ora.default)(`Adding the .editorconfig file`).start();
  const fileTemplate = await readFile({
    file: "../templates/.editorconfig",
    json: false,
    cwd: __dirname
  });
  await writeFile({
    file: ".editorconfig",
    cwd,
    data: fileTemplate,
    format: false
    // .editorconfig is not supported by prettier
  });
  spinner.succeed(`.editorconfig file added`);
};
var isObject = (item) => item && typeof item === "object" && !Array.isArray(item);
var isArray = (item) => item && typeof item === "object" && Array.isArray(item);
var jsoncDeepAssign = (target, source) => {
  const _take = (item, KeyToTake) => {
    if (!isObject(item) && !isArray(item)) {
      return item;
    }
    const keys2 = isObject(item) ? Object.keys(item) : item;
    const clone2 = isObject(item) ? import_comment_json.default.assign({}, item) : new import_comment_json.default.CommentArray().concat(item);
    keys2.forEach((key) => {
      if (key !== KeyToTake) {
        delete clone2[key];
      }
    });
    return clone2;
  };
  const _arrayAssign = (aTarget, aSource) => {
    const clone2 = new import_comment_json.default.CommentArray().concat(aTarget);
    aSource.forEach((value) => {
      let i;
      while ((i = clone2.indexOf(value)) !== -1) {
        clone2.splice(i, 1);
      }
    });
    return new import_comment_json.default.CommentArray().concat(clone2).concat(aSource);
  };
  if (!source || !(isArray(source) && isArray(target)) && !(isObject(source) && isObject(target))) {
    return target;
  }
  const keys = isObject(source) ? Object.keys(source) : source;
  let clone = isObject(target) ? import_comment_json.default.assign({}, target) : new import_comment_json.default.CommentArray().concat(target);
  keys.forEach((key) => {
    if (isObject(source[key])) {
      if (!clone[key]) {
        clone = import_comment_json.default.assign(clone, _take(source, key));
      }
      clone[key] = jsoncDeepAssign(clone[key], source[key]);
    } else if (isArray(source[key])) {
      if (!clone[key]) {
        clone = import_comment_json.default.assign(clone, _take(source, key));
      } else {
        clone[key] = _arrayAssign(clone[key], source[key]);
      }
    } else {
      clone = import_comment_json.default.assign(clone, _take(source, key));
    }
  });
  return clone;
};
var logBanner = () => {
  const banner = `
oo.ooooo.   .ooooo.  oo.ooooo.  oo.ooooo.  oooo    ooo 
 888' \`88b d88' \`88b  888' \`88b  888' \`88b  \`88.  .8'  
 888   888 888ooo888  888   888  888   888   \`88..8'   
 888   888 888    .o  888   888  888   888    \`888'    
 888bod8P' \`Y8bod8P'  888bod8P'  888bod8P'     .8'     
 888                  888        888       .o..P'      
o888o                o888o      o888o      \`Y8P'

Brilliant ESLint configurations for happier developers
`;
  const peppyGradient = (0, import_gradient_string.default)(
    { color: "#FF00CC", pos: 0 },
    { color: "#FFFF00", pos: 0.7 },
    { color: "#B0FF31", pos: 1 }
  );
  const pkgManager = getUserPkgManager();
  if (pkgManager === "yarn" || pkgManager === "pnpm") {
    console.log("");
  }
  console.log(peppyGradient.multiline(banner));
};

// src/utils/prompt.ts
var import_kleur3 = require("kleur");
var import_prompts = __toESM(require("prompts"));
var import_semver2 = require("semver");
var handlePromptCancel = () => {
  logger.log("Peppy CLI aborted by the user. \u{1F630}");
  process.exit(0);
};
var promptCheckCWDPermission = async ({
  cwd = process.cwd()
} = {}) => {
  if (!await isPathWriteable({ path: cwd })) {
    logger.error(
      `The folder "${cwd}" is not writable, please check folder permissions and try again.`,
      "It is likely you do not have write permissions for this folder."
    );
    process.exit(0);
  }
};
var promptCheckGitStatus = async ({ cwd = process.cwd() } = {}) => {
  const gitChanges = await hasGitChanges({ cwd });
  const mercurialChanges = await hasMercurialChanges({ cwd });
  if (gitChanges || mercurialChanges) {
    const where = gitChanges && mercurialChanges ? "on Git and Mercurial" : gitChanges ? "on Git" : "on Mercurial";
    const { goFoward } = await (0, import_prompts.default)(
      {
        type: "confirm",
        name: "goFoward",
        message: `The project folder have uncommitted changes ${where}. Are you sure you want to continue?`,
        initial: false
      },
      { onCancel: handlePromptCancel }
    );
    if (goFoward) {
      logger.log(
        (0, import_kleur3.cyan)(
          "Proceeding with this installation may lead to some lost uncommitted changes."
        ),
        (0, import_kleur3.cyan)(`But hey, you only live once, right? Let's do this! \u{1F4A3}`)
      );
    } else {
      logger.log(
        (0, import_kleur3.cyan)(
          `Good idea! \u{1F60C} Just commit the uncommitted changes ${where} then retry later.`
        )
      );
      process.exit(0);
    }
  }
};
var promptCheckNodeVersion = async ({ cwd = process.cwd() } = {}) => {
  const installedVersion = await getNodeVersionInstalled({ cwd }) || "";
  const minimalVersion = package_default.engines && package_default.engines.node || "";
  if (!(0, import_semver2.satisfies)(installedVersion, minimalVersion)) {
    logger.error(
      `The version of Node.js installed on your system (${(0, import_kleur3.red)(
        installedVersion
      )}) does not satisfy the minimal Node.js version (${(0, import_kleur3.green)(
        minimalVersion
      )}) required by ${package_default.name}.`,
      `You must update Node.js on your system in order to use this package.`
    );
    process.exit(0);
  }
};
var promptCheckNPMVersion = async ({ cwd = process.cwd() } = {}) => {
  const installedVersion = await getNpmVersionInstalled({ cwd }) || "";
  const minimalVersion = package_default.engines && package_default.engines.npm || "";
  if (!(0, import_semver2.satisfies)(installedVersion, minimalVersion)) {
    logger.error(
      `The version of npm installed on your system (${(0, import_kleur3.red)(
        installedVersion
      )}) does not satisfy the minimal npm version (${(0, import_kleur3.green)(
        minimalVersion
      )}) required by ${package_default.name}.`,
      `You must update npm on your system in order to use this package.`
    );
    process.exit(0);
  }
};
var promptCheckPackageJSON = async ({
  cwd = process.cwd(),
  packageManager = "npm"
} = {}) => {
  if (!await isPathExists({ path: "package.json", cwd })) {
    const { initPackageJSON } = await (0, import_prompts.default)(
      {
        type: "confirm",
        name: "initPackageJSON",
        message: "Your project don't have a package.json. Do you want to create one?",
        initial: true
      },
      { onCancel: handlePromptCancel }
    );
    if (initPackageJSON) {
      logger.log((0, import_kleur3.cyan)("Great! Let's do this! \u2728"), "");
      await createPkg({ packageManager, cwd });
      logger.log("");
    } else {
      logger.error(
        "The installation cannot continue. The installation must be inside a Node.js project with a package.json."
      );
      process.exit(0);
    }
  }
};
var promptCheckPackageManager = async ({
  cwd = process.cwd(),
  packageManager
} = {}) => {
  if (packageManager) {
    return packageManager;
  }
  const packageManagersChoices = await getPackageManagersChoices({ cwd });
  if (packageManagersChoices.length < 2) {
    return packageManagersChoices?.[0]?.value;
  }
  const { selectedPackageManager } = await (0, import_prompts.default)(
    {
      type: "select",
      name: "selectedPackageManager",
      message: "You have multiple package managers installed on your system. Wich one do you want to use?",
      instructions: false,
      choices: packageManagersChoices
    },
    { onCancel: handlePromptCancel }
  );
  logger.log(
    (0, import_kleur3.cyan)(
      `Okay! I'll use ${(0, import_kleur3.bold)(selectedPackageManager)} as the package manager.`
    )
  );
  return selectedPackageManager;
};

// src/commands/install.ts
var makeInstallCommand = async () => {
  const program = new import_commander.Command("install");
  program.description("Peppy installer").addOption(
    new import_commander.Option("--pm <pm>", "package manager").choices([
      "npm",
      "yarn",
      "pnpm"
    ])
  ).addOption(
    new import_commander.Option("--prod", "install the packages in dependencies").default(
      false
    )
  ).addOption(
    new import_commander.Option("--cwd <cwd>", "working directory to use").default(
      process.cwd()
    )
  ).addOption(new import_commander.Option("-y, --yes", "use default options").default(false)).action(async ({ pm, prod, cwd, yes }) => {
    let packageManager = pm;
    logBanner();
    await promptCheckNodeVersion({ cwd });
    await promptCheckNPMVersion({ cwd });
    await promptCheckCWDPermission({ cwd });
    await promptCheckGitStatus({ cwd });
    packageManager = await promptCheckPackageManager({
      cwd,
      packageManager
    });
    await promptCheckPackageJSON({ cwd, packageManager });
    const isTypeScriptInstalled = await isPackageInDependencies({
      packageName: "typescript",
      cwd
    });
    const { answerAddPkgJsonScripts = void 0 } = !yes ? await (0, import_prompts2.default)(
      {
        type: "confirm",
        name: "answerAddPkgJsonScripts",
        message: "Do you want to add the package.json scripts?",
        initial: true
      },
      { onCancel: handlePromptCancel }
    ) : {};
    if (!yes) {
      answerAddPkgJsonScripts ? logger.log(
        (0, import_kleur4.cyan)(
          `Superb! \u{1F44F} The scripts ${(0, import_kleur4.bold)("lint")}, ${(0, import_kleur4.bold)("format")} ${isTypeScriptInstalled ? `${(0, import_kleur4.bold)("typecheck")} and ${(0, import_kleur4.bold)("fix")}` : `and ${(0, import_kleur4.bold)("fix")}`} gonna be added.`
        )
      ) : logger.log(
        (0, import_kleur4.cyan)("That's too bad! \u{1F641} Those scripts are super useful."),
        (0, import_kleur4.cyan)(
          "You can always run the init command again and select them later if you change your mind."
        )
      );
    }
    const { answerAddESLintConfigurationFile = void 0 } = !yes ? await (0, import_prompts2.default)(
      {
        type: "confirm",
        name: "answerAddESLintConfigurationFile",
        message: "Do you want to add the ESLint configuration file?",
        initial: true
      },
      { onCancel: handlePromptCancel }
    ) : {};
    if (!yes) {
      answerAddESLintConfigurationFile ? logger.log(
        (0, import_kleur4.cyan)(
          `Awesome! \u{1F60D} I'll generate a configuration file based on your project packages.`
        )
      ) : logger.log(
        (0, import_kleur4.cyan)(
          "No worries. \u{1F60C} You can always run the init command again and add them at a later time."
        )
      );
    }
    const { answerAddVsCodeWorkspaceSettings = void 0 } = !yes ? await (0, import_prompts2.default)(
      {
        type: "confirm",
        name: "answerAddVsCodeWorkspaceSettings",
        message: "Do you want to add the VS Code workspace settings?",
        initial: true
      },
      { onCancel: handlePromptCancel }
    ) : {};
    if (!yes) {
      answerAddVsCodeWorkspaceSettings ? logger.log(
        (0, import_kleur4.cyan)(
          `Noted! \u{1F4DD} If you have existing workspace settings, they will be merged together.`
        )
      ) : logger.log(
        (0, import_kleur4.cyan)(
          "Aww, it's a shame. \u{1F615} Don't worry, you can always run the init command again and add them later."
        )
      );
    }
    const { answerAddEditorConfigFile = void 0 } = !yes ? await (0, import_prompts2.default)(
      {
        type: "confirm",
        name: "answerAddEditorConfigFile",
        message: "Do you want to add the .editorconfig file?",
        initial: true
      },
      { onCancel: handlePromptCancel }
    ) : {};
    if (!yes) {
      answerAddVsCodeWorkspaceSettings ? logger.log((0, import_kleur4.cyan)(`You made a smart decision. \u{1F9E0}`)) : logger.log(
        (0, import_kleur4.cyan)(
          "It's a bummer! \u{1F63F} But no need to despair, you can always run the init command again and add it later."
        )
      );
    }
    !yes && logger.log(
      "",
      (0, import_kleur4.cyan)(
        "Alright. I have everything I need. Let's start the installations then! \u{1F483}"
      )
    );
    logger.log("");
    await installDependencies({ packageManager, cwd, prod });
    if (yes || answerAddPkgJsonScripts) {
      await addPkgJsonScripts({ cwd });
    }
    if (yes || answerAddESLintConfigurationFile) {
      await addESLintConfigurationFile({ cwd });
    }
    if (yes || answerAddVsCodeWorkspaceSettings) {
      await addVsCodeWorkspaceSettings({ cwd });
    }
    if (yes || answerAddEditorConfigFile) {
      await addEditorConfigFile({ cwd });
    }
    logger.log(
      "",
      (0, import_kleur4.cyan)("\u{1F389} Hooray! Installation is complete. \u{1F389}"),
      (0, import_kleur4.cyan)(
        "You're now ready to dive into your project with full force and enjoy a seamless development experience."
      )
    );
    logger.log(
      "",
      (0, import_kleur4.cyan)("Next steps:"),
      (0, import_kleur4.cyan)(" - Install the recommended VS Code extensions"),
      (0, import_kleur4.cyan)(` - Run ${(0, import_kleur4.bold)("npm run fix")} to clean your project`),
      (0, import_kleur4.cyan)(" - Add automated validation (e.g. Github actions)")
    );
  });
  return program;
};

// src/cli.ts
var update = (0, import_update_check.default)(package_default).catch(() => null);
var notifyUpdate = async () => {
  try {
    const result = await update;
    if (result && result.latest) {
      logger.log(
        "",
        (0, import_kleur5.yellow)(
          (0, import_kleur5.bold)(`${package_default.name} v${package_default.version} is available!`)
        ),
        `You can update ${package_default.name} by running: ${(0, import_kleur5.cyan)(
          `npm i -g ${package_default.name}`
        )}`,
        ""
      );
    }
    process.exit();
  } catch (error) {
  }
};
var run = async () => {
  const program = new import_commander2.Command().version(package_default.version).addCommand(await makeInstallCommand());
  program.parseAsync(process.argv);
};
run().catch(async (error) => {
  logger.log();
  if (error.command) {
    logger.error(`  ${(0, import_kleur5.cyan)(error.command)} has failed.`);
  } else {
    logger.error((0, import_kleur5.red)("Unexpected error. Please report it as a bug:"), error);
  }
  logger.log();
  await notifyUpdate();
  process.exit(1);
});
//# sourceMappingURL=cli.js.map