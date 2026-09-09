import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tailwindcss from "eslint-plugin-tailwindcss";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      tailwindcss,
    },
    settings: {
      tailwindcss: {
        cssConfigPath: "./src/app/globals.css",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "tailwindcss/classnames-order": "error",
      "tailwindcss/no-custom-classname": [
        "error",
        { whitelist: ["\\.typography$", "\\.loader$", "\\.bottom-0$", "inputs"] },
      ],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "src/types/**",
  ]),
]);

export default eslintConfig;