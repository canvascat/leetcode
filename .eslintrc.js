/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  ignorePatterns: [
    'node_modules/**',
    'dist/**'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    "semi": [2, "always"],
    "indent": ['error', 2],
  }
};
