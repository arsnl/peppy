module.exports = {
  plugins: ["cypress"],
  env: {
    "cypress/globals": true,
  },
  rules: {
    "cypress/assertion-before-screenshot": "error",
    "cypress/no-assigning-return-values": "error",
    "cypress/no-async-tests": "error",
    "cypress/no-force": "error",
    "cypress/no-unnecessary-waiting": "error",
  },
};
