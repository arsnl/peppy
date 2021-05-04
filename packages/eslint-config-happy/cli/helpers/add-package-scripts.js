import { sync as readPackageSync } from "read-pkg";
import { sync as writePackageSync } from "write-pkg";

export const addPackageScripts = (dir = process.cwd()) => {
  const pkg = readPackageSync({ cwd: dir, normalize: false });

  pkg.scripts = pkg.scripts || {};
  pkg.scripts.lint = "eslint .";
  pkg.scripts.format = "prettier --write --loglevel warn .";
  pkg.scripts.fix = "npm run lint -- --fix && npm run format";

  writePackageSync(dir, pkg, { normalize: false });
};
