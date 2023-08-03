import { type Color, cyan, red, yellow } from "kleur";

type CreateLogFuncOptions = { level: string; color?: Color };

/**
 * Create a logger function
 */
const createLogFunc = ({ level, color }: CreateLogFuncOptions) => {
  const prefix = color ? `[${color(level)}] ` : "";
  // Add spaces calculated on the label char length on the second lines so the text have the same indentation
  const spaces = color
    ? level
        .split("")
        .map(() => " ")
        .join("")
        .concat("   ")
    : "";

  return (...logs: any[]) => {
    const stream = process[level === "log" ? "stdout" : "stderr"];
    const message = logs
      .map((log) => (typeof log === "string" ? log : JSON.stringify(log)))
      .join(`\n${spaces}`);

    stream.write(`${prefix}${message}\n`);
  };
};

export const logger = {
  warn: createLogFunc({ level: "warn", color: yellow }),
  error: createLogFunc({ level: "error", color: red }),
  debug: createLogFunc({ level: "debug", color: cyan }),
  log: createLogFunc({ level: "log" }),
};
