const { defineConfig } = require('eslint-define-config');

// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = defineConfig({
  root: true,
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'unicorn',
    'sonarjs'
  ],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true
  },
  globals: {
    NodeJS: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      globalReturn: false,
      impliedStrict: false,
      jsx: true
    }
  },
  rules: {
    'for-direction': 'error',
    'getter-return': ['error', { allowImplicit: true }],
    'no-async-promise-executor': 'off',
    'no-await-in-loop': 'off',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-console': 'off',
    'no-constant-condition': ['error', { checkLoops: true }],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': ['error', { allowEmptyCatch: false }],
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': ['error', 'both'],
    'no-invalid-regexp': ['error', { allowConstructorFlags: ['u', 'y']}],
    'no-irregular-whitespace': ['error', {
      skipComments: false,
      skipRegExps: false,
      skipStrings: false,
      skipTemplates: false
    }],
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'off',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': ['error', { ignore: ['ForInStatement', 'ForOfStatement']}],
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'off',
    'use-isnan': ['error', { enforceForSwitchCase: true }],
    'valid-typeof': ['error', { requireStringLiterals: true }],

    // Best practices
    'accessor-pairs': ['error', {
      getWithoutSet: false,
      setWithoutGet: true,
      enforceForClassMembers: true
    }],
    'array-callback-return': ['error', { allowImplicit: true }],
    'block-scoped-var': 'error',
    'class-methods-use-this': ['error', { exceptMethods: []}],
    'complexity': 'off',
    'consistent-return': 'off',
    'curly': ['error', 'all'],
    'default-case': 'error',
    'default-case-last': 'error',
    'dot-location': ['error', 'object'],
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'off',
    'max-classes-per-file': 'off',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': ['error', { allowIndirect: false }],
    'no-extend-native': ['error', { exceptions: []}],
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': ['error', { exceptions: []}],
    'no-implicit-coercion': 'off',
    'no-implicit-globals': ['error', { lexicalBindings: false }],
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
      exceptions: {
        BinaryExpression: false,
        ImportDeclaration: false,
        Property: false,
        VariableDeclarator: false
      }
    }],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', {
      props: false
    }],
    'no-proto': 'error',
    'no-redeclare': ['error', { builtinGlobals: true }],

    // We disabled this rule since it doesn't make sense to say that we disallow
    // some properties, but then not provide any disallowed properties. But we
    // wanted to keep this line to show that we thought about this rule.
    // 'no-restricted-properties': [ 'error', {}],

    'no-return-assign': ['error', 'always'],
    'no-return-await': 'off',
    'no-script-url': 'error',
    'no-self-assign': ['error', { props: true }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false
    }],
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'prefer-named-capture-group': 'off',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: false }],
    'prefer-regex-literals': 'error',
    'radix': ['error', 'always'],
    'require-unicode-regexp': 'off',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],
    'yoda': ['error', 'never', { exceptRange: true, onlyEquality: false }],

    // Strict mode
    'strict': ['error', 'never'],

    // Variables
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': ['error', { typeof: true }],
    'no-undef-init': 'error',
    'no-undefined': 'error',

    // Node.js and CommonJS
    'callback-return': ['error', ['callback', 'next']],
    'global-require': 'error',
    'handle-callback-err': ['error', 'err'],
    'no-buffer-constructor': 'error',
    'no-mixed-requires': ['error', { grouping: true, allowCall: false }],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',

    // The no-process-exit rule is superseded by the unicorn/no-process-exit rule.
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': ['error', { allowAtRootLevel: false }],

    // Stylistic issues
    'array-bracket-newline': 'off',
    'array-bracket-spacing': ['error', 'never', {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false
    }],
    'array-element-newline': 'off',
    'block-spacing': ['error', 'always'],
    'capitalized-comments': ['error', 'always', {
      ignoreInlineComments: false,
      ignoreConsecutiveComments: true
    }],
    'comma-dangle': ['error', 'never'],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
    'consistent-this': ['error', 'that'],
    'eol-last': ['error', 'always'],
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': ['error', 'expression'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    'line-comment-position': ['error', { position: 'above' }],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['error', {
      beforeBlockComment: false,
      afterBlockComment: false,
      beforeLineComment: true,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: true,
      allowObjectStart: true,
      allowObjectEnd: true,
      allowArrayStart: true,
      allowArrayEnd: true,
      allowClassStart: true,
      allowClassEnd: true,
      applyDefaultIgnorePatterns: true
    }],
    'max-depth': 'off',
    'max-len': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': ['error', { max: 1 }],
    'multiline-comment-style': ['error', 'separate-lines'],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: true,
      newIsCapExceptions: [],
      capIsNewExceptions: [],
      properties: true
    }],
    'new-parens': ['error', 'always'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
    'no-bitwise': ['error', { allow: [], int32Hint: false }],
    'no-continue': 'off',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'no-negated-condition': 'off',

    // The no-nested-ternary rule is superseded by the unicorn/no-nested-ternary
    // rule.
    'no-nested-ternary': 'off',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-tabs': ['error', { allowIndentationTabs: false }],
    'no-ternary': 'off',
    'no-trailing-spaces': ['error', {
      ignoreComments: false,
      skipBlankLines: false
    }],
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'below'],
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true },
      ImportDeclaration: { consistent: true },
      ExportDeclaration: { consistent: true }
    }],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'one-var': 'off',
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never', { allowSingleLineBlocks: true }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' }
    ],
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'off',
    'quote-props': ['error', 'consistent-as-needed', {
      keywords: false,
      unnecessary: true,
      numbers: false
    }],
    'quotes': ['error', 'single', { avoidEscape: false, allowTemplateLiterals: true }],
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'sort-keys': 'off',
    'sort-vars': ['error', { ignoreCase: true }],
    'space-before-blocks': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'spaced-comment': ['error', 'always', { exceptions: [], markers: []}],
    'switch-colon-spacing': ['error', { after: true, before: false }],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'off',

    // EcmaScript 6
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'always', {
      requireForBlockBody: false
    }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', { before: true, after: true }],
    'no-class-assign': 'error',
    'no-confusing-arrow': 'off',
    'no-const-assign': 'error',
    'no-new-symbol': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false
    }],
    'no-var': 'error',
    'object-shorthand': ['error', 'always', {
      avoidQuotes: false,
      ignoreConstructors: false,
      avoidExplicitReturnArrows: true
    }],
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true
    }],
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true
    }],

    // Arrays are disabled here because of the unicorn/no-unreadable-array-destructuring
    // rule.
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'off',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'single', 'multiple', 'all']
    }],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', { before: true, after: true }],

    'unicorn/better-regex': ['error', { sortCharacterClasses: true }],
    'unicorn/catch-error-name': ['error', { name: 'ex', ignore: ['^ex([A-Z0-9].*)?$']}],
    'unicorn/consistent-destructuring': 'off',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition': 'off',
    'unicorn/empty-brace-spaces': 'off',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/explicit-length-check': ['error', { 'non-zero': 'greater-than' }],
    'unicorn/filename-case': 'off',
    'unicorn/import-index': 'off',
    'unicorn/import-style': 'off',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-push-push': 'off',
    'unicorn/no-array-reduce': 'error',
    'unicorn/no-console-spaces': 'off',
    'unicorn/no-document-cookie': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/no-new-array': 'error',

    // The unicorn/no-new-buffer rule does the same thing as ESLint's built-in
    // no-buffer-constructor rule.
    'unicorn/no-new-buffer': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/no-unused-properties': 'off',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-add-event-listener': 'off',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-at': 'off',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-dom-node-append': 'off',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'off',
    'unicorn/prefer-dom-node-text-content': 'off',
    'unicorn/prefer-object-has-own': 'off',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'off',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-set-has': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',

    // This rule is turned off since it not only applies to assignments, but to
    // expressions using await/throw/yield as well. We have opened an issue to try
    // to remedy this: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1079
    'unicorn/prefer-ternary': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prefer-type-error': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/require-array-join-separator': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
    'unicorn/require-post-message-target-origin': 'error',
    'unicorn/string-content': 'off',
    'unicorn/throw-new-error': 'error',

    'react/boolean-prop-naming': 'off',
    'react/button-has-type': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': ['error', 'always'],
    'react/display-name': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-prop-types': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/jsx-curly-newline': ['error', {
      multiline: 'consistent',
      singleline: 'consistent'
    }],
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'off',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'off',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': ['error', { noTemplateLiterals: true }],
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'off',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-read-only-props': 'off',
    'react/prefer-stateless-function': ['error', {
      ignorePureComponents: false
    }],
    'react/prop-types': 'off',

    // Disabled due to auto-import support
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',

    'react/require-default-props': 'off',
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': ['error', {
      component: true,
      html: true
    }],
    'react/sort-comp': 'error',
    'react/sort-prop-types': ['error', {
      callbacksLast: true,
      ignoreCase: true,
      requiredFirst: true,
      sortShapeProp: true,
      noSortAlphabetically: false
    }],
    'react/state-in-constructor': ['error', 'always'],
    'react/static-property-placement': 'off',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',

    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': ['error', {
      when: 'never',
      objectLiterals: 'never',
      allowMultiline: false
    }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx', '.tsx']
    }],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-handler-names': ['error', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
      checkLocalVariables: true
    }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', { indentMode: 2, ignoreTernaryOperator: false }],
    'react/jsx-key': ['error', {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true
    }],
    'react/jsx-max-depth': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-no-bind': ['error', {
      ignoreRefs: false,
      ignoreDOMComponents: false,
      allowArrowFunctions: true,
      allowBind: false,
      allowFunctions: false
    }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': ['error', {
      allowReferrer: false,
      enforceDynamicLinks: 'always',
      warnOnSpreadAttributes: true
    }],
    'react/jsx-no-undef': ['error', { allowGlobals: false }],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-pascal-case': ['error', { allowAllCaps: false, ignore: []}],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    }],
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',

    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-ignore': false,
      'ts-nocheck': true,
      'ts-check': true
    }],
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          object: false
        }
      }
    ],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: false }],
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'error',
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-assertions': ['error', {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow'
    }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': ['error', {
      prefer: 'type-imports',
      disallowTypeAnnotations: true
    }],
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error', {
      allowKeywords: true,
      allowPrivateClassPropertyAccess: false
    }],
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error', { includeExports: true }],

    // This rule is turned off since it not only applies to ts, but
    // also to js and can break valid code
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error', {
      accessibility: 'explicit'
    }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: { var: 2, let: 2, const: 3 },
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },

      // @ts-expect-error wrong type
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: [],
      ignoreComments: false
    }],
    '@typescript-eslint/init-declarations': ['off'],
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: false,
      exceptAfterOverload: false
    }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: { delimiter: 'semi', requireLast: true },
      singleline: { delimiter: 'semi', requireLast: false }
    }],
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    'camelcase': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': ['error', {
      allowSingleExtends: false
    }],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error', 'all', {
      conditionalAssign: false,
      enforceForArrowConditionals: false,
      ignoreJSX: 'all',
      nestedBinaryExpressions: false,
      returnAssign: false
    }],
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-extraneous-class': ['error', {
      allowConstructorOnly: false,
      allowEmpty: false,
      allowStaticOnly: false
    }],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implicit-any-catch': ['error', {
      allowExplicitAny: false
    }],
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-inferrable-types': ['error', {
      ignoreParameters: false,
      ignoreProperties: false
    }],
    '@typescript-eslint/no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': ['error', {
      checksConditionals: true,
      checksVoidReturn: false
    }],
    '@typescript-eslint/no-namespace': ['error', {
      allowDeclarations: false,
      allowDefinitionFiles: true
    }],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', { builtinGlobals: false, hoist: 'functions', allow: []}],
    '@typescript-eslint/no-this-alias': ['error', {
      allowDestructuring: false,
      allowedNames: []
    }],
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    // This is syntactic but not semantic and breaks valid code
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': ['error', {
      typesToIgnore: []
    }],
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all' }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', {
      functions: true,
      classes: true,
      enums: true,
      variables: true,
      typedefs: true
    }],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always', {
      objectsInObjects: false,
      arraysInObjects: false
    }],
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-readonly': ['error', { onlyInlineLambdas: false }],
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/promise-function-async': ['error', {
      allowAny: true,
      allowedPromiseNames: [],
      checkArrowFunctions: true,
      checkFunctionDeclarations: true,
      checkFunctionExpressions: true,
      checkMethodDeclarations: true
    }],
    '@typescript-eslint/require-array-sort-compare': 'error',
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always', { omitLastInOneLineBlock: false }],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': ['error', {
      before: false,
      after: true,
      overrides: { arrow: { before: true, after: true }}
    }],
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/unified-signatures': 'error',

    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/elseif-without-else': 'error',
    'sonarjs/max-switch-cases': 'off',
    'sonarjs/no-all-duplicated-branches': 'error',
    'sonarjs/no-collapsible-if': 'error',
    'sonarjs/no-collection-size-mischeck': 'error',
    'sonarjs/no-duplicate-string': 'error',
    'sonarjs/no-duplicated-branches': 'error',
    'sonarjs/no-element-overwrite': 'error',
    'sonarjs/no-empty-collection': 'error',
    'sonarjs/no-extra-arguments': 'error',
    'sonarjs/no-gratuitous-expressions': 'error',
    'sonarjs/no-identical-conditions': 'error',
    'sonarjs/no-identical-expressions': 'off',
    'sonarjs/no-identical-functions': 'off',
    'sonarjs/no-ignored-return': 'off',
    'sonarjs/no-inverted-boolean-check': 'error',
    'sonarjs/no-nested-switch': 'error',
    'sonarjs/no-nested-template-literals': 'error',
    'sonarjs/no-one-iteration-loop': 'off',
    'sonarjs/no-redundant-boolean': 'error',
    'sonarjs/no-redundant-jump': 'error',
    'sonarjs/no-same-line-conditional': 'error',
    'sonarjs/no-small-switch': 'off',
    'sonarjs/no-unused-collection': 'error',
    'sonarjs/no-use-of-empty-return-value': 'error',
    'sonarjs/no-useless-catch': 'error',
    'sonarjs/non-existent-operator': 'error',
    'sonarjs/prefer-immediate-return': 'error',
    'sonarjs/prefer-object-literal': 'error',
    'sonarjs/prefer-single-boolean-return': 'error',
    'sonarjs/prefer-while': 'off'
  },
  settings: {
    react: {
      version: '17'
    }
  }
});
