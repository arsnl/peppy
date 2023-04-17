const { execSync } = require("node:child_process");
const path = require("path");
const fs = require("fs");
const glob = require("glob");
const prettier = require("prettier");

const TESTS_FOLDER_PATH = path.join(__dirname, "../tests");
const PACKAGES_FOLDER_PATH = path.join(__dirname, "../packages");

const updatePackageJsonFiles = (packagesValue) => {
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
        ...{ "eslint-config-peppy": packagesValue["eslint-config-peppy"] },
      };
    }
    if (
      fileContent.devDependencies &&
      fileContent.devDependencies["eslint-config-peppy"]
    ) {
      fileContent.devDependencies = {
        ...fileContent.devDependencies,
        ...{ "eslint-config-peppy": packagesValue["eslint-config-peppy"] },
      };
    }
    if (fileContent.dependencies && fileContent.dependencies.peppy) {
      fileContent.dependencies = {
        ...fileContent.dependencies,
        ...{ peppy: packagesValue.peppy },
      };
    }
    if (fileContent.devDependencies && fileContent.devDependencies.peppy) {
      fileContent.devDependencies = {
        ...fileContent.devDependencies,
        ...{ peppy: packagesValue.peppy },
      };
    }

    fs.writeFileSync(
      path.join(TESTS_FOLDER_PATH, packageFile),
      prettier.format(JSON.stringify(fileContent), {
        parser: "json-stringify",
      }),
      { encoding: "utf8" }
    );
  });
};

if (process.argv.includes("--post")) {
  execSync("npx rimraf --glob *.tgz", { cwd: TESTS_FOLDER_PATH });
  execSync("npx rimraf --glob ./**/node_modules", { cwd: TESTS_FOLDER_PATH });
  execSync("npx rimraf --glob ./**/.next", { cwd: TESTS_FOLDER_PATH });
  updatePackageJsonFiles({
    "eslint-config-peppy": "workspace:*",
    peppy: "workspace:*",
  });
} else {
  // Build eslint-config-peppy pack
  execSync(`npm pack --pack-destination ${TESTS_FOLDER_PATH}`, {
    cwd: path.join(PACKAGES_FOLDER_PATH, "/eslint-config-peppy"),
    stdio: "ignore",
  });

  // Build peppy pack
  execSync(`npm pack --pack-destination ${TESTS_FOLDER_PATH}`, {
    cwd: path.join(PACKAGES_FOLDER_PATH, "/peppy"),
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

  updatePackageJsonFiles({
    "eslint-config-peppy": `file:../${eslintConfigPeppyPackname}`,
    peppy: `file:${peppyPackname}`,
  });
}
