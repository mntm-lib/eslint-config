# @mntm/eslint-config [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/eolme/eslint-config/blob/master/LICENSE)

ESLint config with TypeScript support.

## Installation

We recommend to use [yarn](https://classic.yarnpkg.com/en/docs/install/) for dependency management:

```shell
yarn add -D typescript eslint @mntm/eslint-config
```

## Setup

### 1) Configure ESLint

Add `"extends": "@mntm"` to your ESLint config file.

An example `.eslintrc`:

```json
{
  "extends": "@mntm"
}
```

### 2) Configure the ESLint TypeScript parser

This config requires knowledge of your TypeScript config.

In your ESLint config, set [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) to the path of your `tsconfig.json`.

For example:

```diff
 {
   "extends": "@mntm"
+  "parserOptions": {
+    "project": "./tsconfig.json",
+    "tsconfigRootDir": "."
+  }
 }
```

## License

@mntm/eslint-config is [MIT licensed](./LICENSE).
