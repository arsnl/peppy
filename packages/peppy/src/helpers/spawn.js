import crossSpawn from "cross-spawn";

/**
 * Spawn a child process
 * @param {Object} options - options
 * @param {string} options.command - the command to execute
 * @param {Array<string>} options.args - a list of arguments to the commands
 * @param {Object} options.options - the options to pass to the node spawn (see: https://www.npmjs.com/package/cross-spawn)
 * @returns {Promise<Void|string>} - a Promise which resolves to a nothing or a string containing the output if the capturing flag is true
 */
export const spawn = ({ command, args = [], options = {} }) =>
  new Promise((resolve, reject) => {
    const child = crossSpawn(command, args, {
      env: { ...process.env, ADBLOCK: "1", DISABLE_OPENCOLLECTIVE: "1" },
      ...options,
    });
    let stdout = "";
    let stderr = "";

    if (child.stdout) {
      child.stdout.on("data", (chunk) => {
        stdout += chunk;
      });
    }

    if (child.stderr) {
      child.stderr.on("data", (chunk) => {
        stderr += chunk;
      });
    }

    child.on("error", reject);

    child.on("exit", (code) => {
      if (code === 0) {
        resolve(stdout);
      } else {
        reject(stderr);
      }
    });
  });
