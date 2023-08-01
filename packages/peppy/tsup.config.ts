/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/cli.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
});
