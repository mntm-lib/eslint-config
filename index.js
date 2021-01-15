module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "plugins": [
    "@typescript-eslint",
    "react",
    "react-hooks"
  ],
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
    "es2017": true,
    "es2020": true,
    "es2021": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    }
  },
  "rules": {
    "semi": "off",
    "@typescript-eslint/semi": "error",
    "comma-dangle": [
      "error",
      "never"
    ],
    "quotes": "off",
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "indent": "off",
    "indent-legacy": "off",
    "@typescript-eslint/indent": [
      2,
      2,
      {
        "outerIIFEBody": 1,
        "VariableDeclarator": "first",
        "FunctionDeclaration": {
          "parameters": "first"
        },
        "CallExpression": {
          "arguments": "first"
        },
        "ArrayExpression": 1,
        "ObjectExpression": 1,
        "SwitchCase": 1,
        "ImportDeclaration": 1,
        "flatTernaryExpressions": true,
        "offsetTernaryExpressions": true
      }
    ],
    "array-bracket-spacing": [
      2,
      "never",
      {
        "singleValue": true
      }
    ],
    "object-curly-spacing": [
      2,
      "always",
      {
        "objectsInObjects": false,
        "arraysInObjects": false
      }
    ],
    "computed-property-spacing": [
      2,
      "never"
    ],
    "space-in-parens": [
      2,
      "never"
    ],
    "comma-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "@typescript-eslint/no-duplicate-imports": "error",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/no-misused-new": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "array-simple"
      }
    ],
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/promise-function-async": "error",
    "react-hooks/exhaustive-deps": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  "settings": {
    "react": {
      "version": "17"
    },
  }
};
