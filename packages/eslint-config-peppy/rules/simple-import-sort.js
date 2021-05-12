module.exports = {
  plugins: ["simple-import-sort"],
  rules: {
    // Enforce exports sorting
    // https://github.com/lydell/eslint-plugin-simple-import-sort/
    "simple-import-sort/exports": "error",

    // Enforce imports sorting
    // https://github.com/lydell/eslint-plugin-simple-import-sort/
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^\\u0000"],
          ["^react", "^@?\\w", "^~", "^", "^\\."],
          ["^.+\\.s?css$"],
        ],
      },
    ],
  },
};
