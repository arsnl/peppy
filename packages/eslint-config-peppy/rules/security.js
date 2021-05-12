module.exports = {
  plugins: ["security"],
  rules: {
    "security/detect-buffer-noassert": "error",
    // TODO: Reactivate when the false positive will be fixed. Currently spawn return false positive
    "security/detect-child-process": "off",
    "security/detect-disable-mustache-escape": "error",
    "security/detect-eval-with-expression": "error",
    "security/detect-new-buffer": "error",
    "security/detect-no-csrf-before-method-override": "error",
    "security/detect-non-literal-regexp": "error",
    "security/detect-non-literal-require": "error",
    "security/detect-possible-timing-attacks": "error",
    "security/detect-pseudoRandomBytes": "error",
    "security/detect-unsafe-regex": "error",
  },
};
