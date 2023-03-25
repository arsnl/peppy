const reactConfig = require("./react");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["@next/next"],
  extends: ["plugin:@next/next/recommended"],
  rules: {
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/alt-text": [
      reactConfig.rules["jsx-a11y/alt-text"][0],
      {
        ...reactConfig.rules["jsx-a11y/alt-text"][1],
        img: [...reactConfig.rules["jsx-a11y/alt-text"][1].img, "Image"],
      },
    ],
    "react/no-unknown-property": [
      "error",
      {
        ignore: [
          ...reactConfig.rules["react/no-unknown-property"][1].ignore,
          "jsx",
          "global",
        ],
      },
    ],
    "react/react-in-jsx-scope": ["off"],
  },
};
