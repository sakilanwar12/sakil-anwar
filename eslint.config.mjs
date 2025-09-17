import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import reactPlugin from "eslint-plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    plugins: {
      react: reactPlugin,
    },
    rules: {
      "react/function-component-definition": [
        "warn",
        {
          namedComponents: "function-declaration",
          unnamedComponents: "function-expression",
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

export default eslintConfig;

// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";
// import reactPlugin from "eslint-plugin-react";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
//   {
//     plugins: {
//       react: reactPlugin,
//     },
//     rules: {
//       "react/function-component-definition": [
//         "error",
//         {
//           namedComponents: "function-declaration",   // require: function MyComp() {}
//           unnamedComponents: "function-expression",  // allow only function() {}
//         },
//       ],
//       "react/jsx-uses-react": "error",
//       "react/jsx-uses-vars": "error",
//       "react/react-in-jsx-scope": "off",
//     },
//     settings: {
//       react: {
//         version: "detect",
//       },
//     },
//   },
// ];

// export default eslintConfig;
