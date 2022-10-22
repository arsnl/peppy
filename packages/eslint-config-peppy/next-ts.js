module.exports = {
  extends: [
    "./rules/base.js",
    "./rules/base-ts.js",
    "./rules/react.js",
    "./rules/react-ts.js",
    "./rules/next.js",
    "./rules/prettier.js",
  ].map(require.resolve),
};
