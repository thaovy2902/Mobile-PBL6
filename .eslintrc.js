module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2017,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-console": 0,
    "no-empty": 0,
    "no-irregular-whitespace": 0,
  },
  "eslint.validate": [{ language: "javascript", autoFix: true }],

}
