module.exports = {
  plugins: ["promise"],
  rules: {
    "promise/always-return": "error",
    "promise/catch-or-return": "error",
    "promise/no-new-statics": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
  },
};
