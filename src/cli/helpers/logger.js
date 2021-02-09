import chalk from "chalk";
import toString from "ramda/es/toString";

const createLogFunc = (loggerName, color) => {
  const prefix = color ? `[${chalk[color](loggerName)}] ` : "";

  return (message = "", opts = {}) => {
    const options = { newline: true, ...opts };
    const stream = process[loggerName === "log" ? "stdout" : "stderr"];
    const msg = typeof message === "string" ? message : toString(message);

    stream.write(msg.replace(/^/gm, prefix) + (options.newline ? "\n" : ""));
  };
};

export const logger = {
  warn: createLogFunc("warn", "yellow"),
  error: createLogFunc("error", "red"),
  debug: createLogFunc("debug", "blue"),
  log: createLogFunc("log"),
};
