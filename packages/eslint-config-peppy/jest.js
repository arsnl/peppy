module.exports = {
  extends: ["./configs/jest.js", "./configs/prettier.js"].map(require.resolve),
};
