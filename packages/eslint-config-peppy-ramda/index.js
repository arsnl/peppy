module.exports = {
  extends: ["./rules/ramda", "eslint-config-prettier"].map(require.resolve),
};
