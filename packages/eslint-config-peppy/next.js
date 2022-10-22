module.exports = {
  extends: [
    "./rules/base.js",
    "./rules/react.js",
    "./rules/next.js",
    "./rules/prettier.js",
  ].map(require.resolve),
};
