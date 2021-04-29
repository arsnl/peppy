import fs from "fs";

export const isWriteable = async (dir = process.cwd()) => {
  try {
    await fs.promises.access(dir, (fs.constants || fs).W_OK);
    return true;
  } catch {
    return false;
  }
};
