module.exports = {
  extends: ["./rules/jest.js", "./rules/prettier.js"].map(require.resolve),
};
