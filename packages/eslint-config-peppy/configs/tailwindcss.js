/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["tailwindcss"],
  extends: ["plugin:tailwindcss/recommended"],
  settings: {
    tailwindcss: {
      callees: [
        "classnames",
        "clsx",
        "ctl",
        "cn", // popular name alternative for classnames and clsx
        "classes", // popular object name to regroup reusable css classes
      ],
      whitelist: [
        "custom\\-.*", // custom classes must start with custom-
        "lead", // lead class from @tailwindcss/typography
      ],
    },
  },
};
