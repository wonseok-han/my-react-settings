// https://github.com/jsx-eslint/eslint-plugin-react
// https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin

/**
 * Javascript Eslint
 */

{
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json",
  },
  "plugins": ["react"],
  "rules": {
    "react/react-in-jsx-scope": "off", // Prevent missing React when using JSX
    "react/prop-types": "off", // Prevent missing props validation in a React component definition
    "react/jsx-boolean-value": "warn", // Enforce boolean attributes notation in JSX
    "react/jsx-no-useless-fragment": "error", // Disallow unnecessary fragments
    "react/prefer-stateless-function": "error", // Enforce stateless components to be written as a pure function
    "react/hook-use-state": "error", // Ensure symmetric naming of useState hook value and setter variables
    "react/no-arrow-function-lifecycle": "error", // Lifecycle methods should be methods on the prototype, not class fields
    "react/no-invalid-html-attribute": "error", // Forbid attribute with an invalid values
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true,
      },
    ], // Prevent extra closing tags for components without children
    "react/jsx-curly-newline": "error", // Enforce consistent line breaks inside jsx curly
    "react/jsx-curly-spacing": [
      "error",
      {
        "when": "never",
        "spacing": {
          "objectLiterals": "never",
        },
      },
    ], // Enforce or disallow spaces inside of curly braces in JSX attributes
    "react/jsx-equals-spacing": ["error", "never"], // Disallow or enforce spaces around equal signs in JSX attributes
    "react/jsx-fragments": ["error", "syntax"], // Enforce shorthand or standard form for React fragments
    "react/jsx-handler-names": "error", // Enforce event handler naming conventions in JSX
    "react/jsx-props-no-multi-spaces": "error", // Disallow multiple spaces between inline JSX props
    "react/jsx-pascal-case": ["error"], // Enforce PascalCase for user-defined JSX components
  }
}
