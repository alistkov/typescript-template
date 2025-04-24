import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: globals.node,
      sourceType: "module",
    },
    plugins: {},
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "warn",
      "semi": ["error", "always"],
      "quotes": ["warn", "single"],
      'lines-between-class-members': 'warn',
    },
  },
  tseslint.configs.recommended,
]);
