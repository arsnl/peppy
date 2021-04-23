module.exports = {
  plugins: ["lodash"],
  rules: {
    "lodash/callback-binding": "warn",
    "lodash/chain-style": ["warn", "explicit"],
    "lodash/chaining": ["warn", "always"],
    "lodash/collection-method-value": "warn",
    "lodash/collection-ordering": "error",
    "lodash/collection-return": "warn",
    "lodash/consistent-compose": ["warn", "flow"],
    "lodash/identity-shorthand": ["warn", "always"],
    "lodash/matches-prop-shorthand": "warn",
    "lodash/matches-shorthand": ["warn", "always", 3],
    "lodash/no-commit": "warn",
    "lodash/no-double-unwrap": "warn",
    "lodash/no-extra-args": "warn",
    "lodash/prefer-compact": "warn",
    "lodash/prefer-filter": ["warn", 3],
    "lodash/prefer-find": "error",
    "lodash/prefer-get": ["warn", 3],
    "lodash/prefer-immutable-method": "error",
    "lodash/prefer-includes": "warn",
    "lodash/prefer-is-nil": "warn",
    "lodash/prefer-lodash-chain": "warn",
    "lodash/prefer-lodash-typecheck": "warn",
    "lodash/prefer-map": "warn",
    "lodash/prefer-matches": "warn",
    "lodash/prefer-over-quantifier": "warn",
    "lodash/prefer-reject": ["warn", 3],
    "lodash/prefer-thru": "warn",
    "lodash/prefer-times": "warn",
    "lodash/prefer-wrapper-method": "warn",
    "lodash/preferred-alias": "warn",
    "lodash/prop-shorthand": "warn",
    "lodash/unwrap": "warn",
  },
};