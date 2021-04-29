import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import path from "path";
import shebang from "rollup-plugin-add-shebang";
import executable from "rollup-plugin-executable";
import { terser } from "rollup-plugin-terser";
import _package from "./package.json";

/* eslint-disable import/no-default-export */
export default async () => [
  {
    input: "cli/cli.js",
    output: [
      {
        file: path.join(_package.bin["eslint-config-happy"]),
        format: "cjs",
      },
    ],
    external: ["prettier"],
    plugins: [
      resolve(),
      commonjs(),
      json(),
      terser(),
      shebang({ include: [_package.bin["eslint-config-happy"]] }),
      executable(),
    ],
  },
];
