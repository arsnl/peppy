import { cyan } from "kleur";
import ora from "ora";
import prompts from "prompts";
import { readPackageJSON, writePackageJSON } from "../helpers/pkg";
import { handleUserPromptAbort } from "./handle-user-prompt-abort";

export const RECOMMENDED_SCRIPTS = {
  lint: "eslint .",
  format: "prettier --check .",
  fix: "npm run lint -- --fix && prettier --write --loglevel warn .",
};

/**
 * It checks if the recommended scripts are already in the package.json file, and if not, it asks the
 * user if they want to add them
 * @param {Object} [options={}] - An object with the following properties:
 * @param {string} [options.cwd=process.cwd()] - The current working directory.
 */
export const promptCheckRecommendedScripts = async ({
  cwd = process.cwd(),
} = {}) => {
  const packageJson = await readPackageJSON({ cwd });
  const currentScripts = packageJson.scripts || {};
  const scriptsToAdd = [];

  ["lint", "format", "fix"].forEach((script) => {
    if (currentScripts[script] !== RECOMMENDED_SCRIPTS[script]) {
      scriptsToAdd.push(script);
    }
  });

  const messageStart =
    scriptsToAdd.length > 1
      ? "The following scripts are recommended in your package.json:"
      : "The following scripts are recommended in your package.json:";

  const messageEnd =
    scriptsToAdd.length > 1
      ? "Do you want to add those scripts to your package.json?"
      : "Do you want to add this script to your package.json?";

  const { addRecommendedScripts } = await prompts({
    type: "confirm",
    name: "addRecommendedScripts",
    message: `${messageStart}\n${scriptsToAdd.reduce(
      (acc, script) =>
        `${acc}     -  ${cyan(
          `"${script}": "${RECOMMENDED_SCRIPTS[script]}"`
        )}\n`,
      ""
    )}  ${messageEnd}`,
    initial: true,
  });

  handleUserPromptAbort(addRecommendedScripts);

  if (addRecommendedScripts) {
    const addRecommendedScriptsSpinner = ora(
      `Adding the recommended script${
        scriptsToAdd.length > 1 ? "s" : ""
      } to your package.json`
    ).start();
    await writePackageJSON({
      data: {
        ...packageJson,
        scripts: { ...currentScripts, ...RECOMMENDED_SCRIPTS },
      },
      cwd,
    });
    addRecommendedScriptsSpinner.succeed(
      `The recommended script${
        scriptsToAdd.length > 1 ? "s" : ""
      } were added to your package.json`
    );
  }
};
