import fs from "fs";
import path from "path";

export const isWriteable = async (dir = process.cwd()) => {
  try {
    await fs.promises.access(dir, (fs.constants || fs).W_OK);
    return true;
  } catch {
    return false;
  }
};

export const fileExist = (file, dir = process.cwd) =>
  fs.existsSync(path.join(dir, file));
