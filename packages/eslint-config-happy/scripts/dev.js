const cp = require("child_process");
const chokidar = require("chokidar");

chokidar.watch("cli/**/*").on("change", () => {
  cp.spawn("node", ["scripts/build"], { stdio: "inherit" });
});
