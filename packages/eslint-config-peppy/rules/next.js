const { rules: reactRules } = require("./react");

module.exports = {
  rules: {
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "react/no-unknown-property": [
      "error",
      {
        ignore: [
          ...reactRules["react/no-unknown-property"][1].ignore,
          "jsx",
          "global",
        ],
      },
    ],
  },
};
