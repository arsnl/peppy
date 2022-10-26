const { rules: reactRules } = require("./react");

module.exports = {
  plugins: ["@next/next"],
  extends: ["plugin:@next/next/core-web-vitals"],
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
      reactRules["jsx-a11y/alt-text"][0],
      {
        ...reactRules["jsx-a11y/alt-text"][1],
        img: [...reactRules["jsx-a11y/alt-text"][1].img, "Image"],
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
