/* eslint-disable no-empty */
import execa from "execa";

export const isInGitRepository = async ({ cwd = process.cwd() }) => {
  try {
    await execa("git", ["rev-parse", "--is-inside-work-tree"], {
      cwd,
      stdio: "ignore",
    });
    return true;
  } catch (_) {}

  return false;
};

export const isInMercurialRepository = async ({ cwd = process.cwd() }) => {
  try {
    await execa("hg", ["--cwd", ".", "root"], {
      cwd,
      stdio: "ignore",
    });
    return true;
  } catch (_) {}

  return false;
};

export const hasGitChanges = async ({ cwd = process.cwd() }) => {
  try {
    if (await isInGitRepository({ cwd })) {
      const { stdout } = await execa("git", ["status", "--porcelain"], { cwd });
      return !!stdout;
    }
  } catch (_) {}

  return false;
};

export const hasMercurialChanges = async ({ cwd = process.cwd() }) => {
  try {
    if (await isInMercurialRepository({ cwd })) {
      const { stdout } = await execa("hg", ["status"], { cwd });
      return !!stdout;
    }
  } catch (_) {}

  return false;
};
