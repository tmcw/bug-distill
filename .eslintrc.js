module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "blitz",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/display-name": 0,
    "jsx-a11y/no-onchange": 0,
    "jsx-a11y/no-autofocus": 0,
    "prefer-const": "warn",
    "require-await": 1,
    "no-duplicate-imports": "error",
    "react/jsx-key": 2,
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0,
    "@next/next/no-img-element": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/ban-types": 1,
    "react/jsx-no-useless-fragment": 2,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-empty-function": 0,
    "react-hooks/rules-of-hooks": "error",
    "@typescript-eslint/no-unused-vars": 0,
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "(useRecoilCallback|useRecoilTransaction_UNSTABLE)",
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension
      parserOptions: {
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
      rules: {
        "@typescript-eslint/no-floating-promises": 1,
      },
    },
    {
      files: ["./*.config.js", ".eslintrc.js"],
      env: {
        commonjs: true,
      },
    },
    {
      files: ["./vendor/*/*"],
      rules: {
        complexity: 0,
      },
    },
  ],
};
