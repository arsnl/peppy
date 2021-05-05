import { cyan, red, yellow } from "kleur";
import toString from "ramda/es/toString";

/**
 * Create a logger function
 * @param {Object} options - options
 * @param {string} options.level - the name of the logger
 * @param {Function} options.kleurColor - the path to check
 * @returns {Function} - a logger function
 */
const createLogFunc = ({ level, kleurColor }) => {
  const prefix = kleurColor ? `[${kleurColor(level)}] ` : "";

  return (...logs) => {
    const stream = process[level === "log" ? "stdout" : "stderr"];
    const message = logs
      .map((log) => (typeof log === "string" ? log : toString(log)))
      .join(" ");

    stream.write(`${prefix}${message}\n`);
  };
};

export const logger = {
  warn: createLogFunc({ level: "warn", kleurColor: yellow }),
  error: createLogFunc({ level: "error", kleurColor: red }),
  debug: createLogFunc({ level: "debug", kleurColor: cyan }),
  log: createLogFunc({ level: "log" }),
};
