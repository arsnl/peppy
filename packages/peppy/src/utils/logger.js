import { cyan, red, yellow } from "kleur";

/**
 * Create a logger function
 * @param {Object} options - options
 * @param {string} options.level - the name of the level
 * @param {Function} options.kleurColor - the color to apply to the label of the level
 * @returns {Function} - a logger function
 */
const createLogFunc = ({ level, kleurColor }) => {
  const prefix = kleurColor ? `[${kleurColor(level)}] ` : "";
  // Add spaces calculated on the label char length on the second lines so the text have the same indentation
  const spaces = kleurColor
    ? level
        .split("")
        .map(() => " ")
        .join("")
        .concat("   ")
    : "";

  return (...logs) => {
    const stream = process[level === "log" ? "stdout" : "stderr"];
    const message = logs
      .map((log) => (typeof log === "string" ? log : JSON.stringify(log)))
      .join(`\n${spaces}`);

    stream.write(`${prefix}${message}\n`);
  };
};

export const logger = {
  warn: createLogFunc({ level: "warn", kleurColor: yellow }),
  error: createLogFunc({ level: "error", kleurColor: red }),
  debug: createLogFunc({ level: "debug", kleurColor: cyan }),
  log: createLogFunc({ level: "log" }),
};
