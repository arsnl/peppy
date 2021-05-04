import fs from "fs";
import path from "path";

export const copyFiles = async ({
  files = [],
  source = path.join(__dirname, "../../templates"),
  dest = process.cwd(),
}) => {
  await files.reduce(async (acc, file) => {
    await acc; // need the previous result to be resolved before call the new async function

    const destPath = path.join(dest, file);
    const destDirname = path.dirname(destPath);

    if (!fs.existsSync(destDirname)) {
      await fs.promises.mkdir(destDirname, {
        recursive: true,
      });
    }

    if (fs.existsSync(destPath)) {
      fs.rmSync(destPath);
    }

    await fs.promises.copyFile(path.join(source, file), path.join(dest, file));
  }, undefined);
};
