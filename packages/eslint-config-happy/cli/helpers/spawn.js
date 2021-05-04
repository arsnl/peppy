import crossSpawn from "cross-spawn";

export const spawn = (command, args = [], options = {}) =>
  new Promise((resolve, reject) => {
    const child = crossSpawn(command, args, {
      stdio: "inherit",
      env: { ...process.env, ADBLOCK: "1", DISABLE_OPENCOLLECTIVE: "1" },
      ...options,
    });

    child.on("close", (code) => {
      if (code !== 0) {
        reject();
      } else {
        resolve();
      }
    });
  });
