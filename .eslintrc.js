module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:jest/all",
    "plugin:prettier/recommended",
    "plugin:jsdoc/recommended",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        peerDependencies: true,
      },
    ],
    quotes: ["error", "double"],
    "prefer-inline-snapshots": false,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-console": ["error", { allow: ["log", "error"] }],
    "linebreak-style": ["error", "windows"],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "valid-jsdoc": [
      2,
      {
        requireReturn: false,
      },
    ],
  },
};
