const { execSync } = require("node:child_process");
const path = require("path");
const fs = require("fs");
const glob = require("glob");
const prettier = require("prettier");

const TESTS_FOLDER_PATH = path.join(__dirname, "../tests");

// Build eslint-config-peppy pack
execSync(`npm pack --pack-destination ${TESTS_FOLDER_PATH}`, {
  cwd: path.join(__dirname, "../packages/eslint-config-peppy"),
  stdio: "ignore",
});

// Build peppy pack
execSync(`npm pack --pack-destination ${TESTS_FOLDER_PATH}`, {
  cwd: path.join(__dirname, "../packages/peppy"),
  stdio: "ignore",
});

// Get the pack file names
const packs = glob.sync("*.tgz", {
  cwd: TESTS_FOLDER_PATH,
});

// Extract the eslint-config-peppy pack file name
const eslintConfigPeppyPackname = packs.filter((packName) =>
  packName.startsWith("eslint-config-peppy-")
)[0];

// Extract the peppy pack file name
const peppyPackname = packs.filter((packName) =>
  packName.startsWith("peppy-")
)[0];

// Get the list of all package.json files in the test directory
const packageJsonFiles = glob.sync("*/package.json", {
  cwd: TESTS_FOLDER_PATH,
});

// Update the packages link in the package.json files to point to the pack files
packageJsonFiles.forEach((packageFile) => {
  const fileContent = JSON.parse(
    fs.readFileSync(path.join(TESTS_FOLDER_PATH, packageFile), {
      encoding: "utf8",
    })
  );

  if (
    fileContent.dependencies &&
    fileContent.dependencies["eslint-config-peppy"]
  ) {
    fileContent.dependencies = {
      ...fileContent.dependencies,
      ...{ "eslint-config-peppy": `file:../${eslintConfigPeppyPackname}` },
    };
  }
  if (
    fileContent.devDependencies &&
    fileContent.devDependencies["eslint-config-peppy"]
  ) {
    fileContent.devDependencies = {
      ...fileContent.devDependencies,
      ...{ "eslint-config-peppy": `file:../${eslintConfigPeppyPackname}` },
    };
  }
  if (fileContent.dependencies && fileContent.dependencies.peppy) {
    fileContent.dependencies = {
      ...fileContent.dependencies,
      ...{ peppy: `file:${peppyPackname}` },
    };
  }
  if (fileContent.devDependencies && fileContent.devDependencies.peppy) {
    fileContent.devDependencies = {
      ...fileContent.devDependencies,
      ...{ peppy: `file:${peppyPackname}` },
    };
  }

  fs.writeFileSync(
    path.join(TESTS_FOLDER_PATH, packageFile),
    prettier.format(JSON.stringify(fileContent), { parser: "json" }),
    { encoding: "utf8" }
  );
});
