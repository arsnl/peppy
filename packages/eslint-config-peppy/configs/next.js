const reactConfig = require("./react");

module.exports = {
  plugins: ["@next/next"],
  rules: {
    "@next/next/no-html-link-for-pages": ["error"],
    "@next/next/no-sync-scripts": ["error"],
    "@next/next/google-font-display": ["warn"],
    "@next/next/google-font-preconnect": ["warn"],
    "@next/next/next-script-for-ga": ["warn"],
    "@next/next/no-before-interactive-script-outside-document": ["warn"],
    "@next/next/no-css-tags": ["warn"],
    "@next/next/no-head-element": ["warn"],
    "@next/next/no-img-element": ["warn"],
    "@next/next/no-page-custom-font": ["warn"],
    "@next/next/no-styled-jsx-in-document": ["warn"],
    "@next/next/no-title-in-document-head": ["warn"],
    "@next/next/no-typos": ["warn"],
    "@next/next/no-unwanted-polyfillio": ["warn"],
    "@next/next/inline-script-id": ["error"],
    "@next/next/no-assign-module-variable": ["error"],
    "@next/next/no-document-import-in-page": ["error"],
    "@next/next/no-duplicate-head": ["error"],
    "@next/next/no-head-import-in-document": ["error"],
    "@next/next/no-script-component-in-head": ["error"],
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
