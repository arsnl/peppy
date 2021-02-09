import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import path from "path";
import shebang from "rollup-plugin-add-shebang";
import { terser } from "rollup-plugin-terser";
import package_ from "./package.json";

export default async () => [
  {
    input: "src/cli/cli.js",
    output: [
      {
        file: path.join(package_.bin["eslint-config-happy"]),
        format: "cjs",
      },
    ],
    external: ["prettier"],
    plugins: [
      resolve(),
      commonjs(),
      json(),
      terser(),
      shebang({ include: [package_.bin["eslint-config-happy"]] }),
    ],
  },
];
