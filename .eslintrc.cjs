module.exports = {
  root: true,
  extends: ["eslint:recommended", "prettier"],
  plugins: ["svelte3", "jest"],
  overrides: [
    { files: ["*.svelte"], processor: "svelte3/svelte3" },
    { files: ["*.test.js"], globals: { svelte: "readonly" } },
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2019,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
    "jest/globals": true,
  },
};
