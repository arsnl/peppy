module.exports = {
  extends: [
    "./configs/react.js",
    "./configs/next.js",
    "./configs/prettier.js",
  ].map(require.resolve),
};
