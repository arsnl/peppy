const fs = require("fs");
const path = require("path");

const writeLicenseFiles = async (filePaths) => {
  const license = fs
    .readFileSync(path.join(__dirname, "templates/LICENSE"), {
      encoding: "utf8",
    })
    .replace(/%YEAR%/g, new Date().getFullYear());

  await Promise.all(
    filePaths.map((filePath) =>
      fs.writeFileSync(path.join(__dirname, "../", filePath), license, {
        encoding: "utf8",
      }),
    ),
  );
};

(async () => {
  await writeLicenseFiles([
    "LICENSE",
    "packages/eslint-config-peppy/LICENSE",
    "packages/peppy/LICENSE",
  ]);
})();
