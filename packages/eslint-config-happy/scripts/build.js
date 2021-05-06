const cp = require("child_process");
const fs = require("fs");
const path = require("path");

cp.spawnSync(
  "ncc",
  [
    "build",
    path.join(__dirname, "../cli/cli.js"),
    "-o",
    path.join(__dirname, "../bin/cliTemp"),
    "-e",
    "prettier",
    "-m",
  ],
  { stdio: "inherit" }
);

fs.copyFileSync(
  path.join(__dirname, "../bin/cliTemp/index.js"),
  path.join(__dirname, "../bin/cli.js")
);

fs.rmSync(path.join(__dirname, "../bin/cliTemp"), {
  force: true,
  recursive: true,
});
