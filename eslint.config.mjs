import globals from "globals";
import pluginReact from "eslint-plugin-react";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      parser: tsParser, // Use o parser do TypeScript
      globals: {
        ...globals.browser, // Inclui variáveis globais do navegador
        React: "readonly",
        process: "readonly",
        module: "writable",
        require: "readonly",
      },
    },
    plugins: {
      react: pluginReact,
      "@typescript-eslint": tsPlugin,
    },
    settings: {
      react: {
        version: "detect", // Detecta a versão do React instalada
      },
    },
    rules: {
      // Adicione regras conforme necessário
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
      "@typescript-eslint/no-require-imports": "warn",
    },
  },
];
