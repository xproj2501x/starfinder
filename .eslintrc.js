/**
 * Imperium 4X - Configuration for ESLint
 * ===
 * This file defines linting rules for the ESLint software.
 * Our rules are based off of Google's ESLint configuration.
 * Google's rules are based off of ESLint's recommendedations.
 * Where our rules differ from either third-party ruleset is noted.
 * @see [ESLint](http://eslint.org/)
 * @see [ESLint: Configuring Rules](http://eslint.org/docs/user-guide/configuring#configuring-rules)
 * @see [Google: `	eslint-config-google` (as of 2016-11-27)](https://github.com/google/eslint-config-google/blob/b8f993bf2a4149c436a5c52ff28314948d870cfd/index.js)
 */

/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
  'env': {
    es6: true,
    node: true,
    browser: true
  },
  'extends': ['eslint:recommended', 'google'],
  'parser': 'babel-eslint',
  'parserOptions': {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  'root': true,
  'rules': {
    // The rules below are listed in the order they appear on the eslint
    // rules page. All rules are listed to make it easier to keep in sync
    // as new ESLint rules are added.
    // http://eslint.org/docs/rules/
    // - Rules in the `eslint:recommended` ruleset are followed by a comment `// eslint:recommended`
    // - Rules that are specifically defined in the `google` ruleset are followed by a comment `// google`
    // - Rules that are not specifically mentioned by the Golden Frog styleguide are listed
    //   but commented out (so that they do not override a base ruleset).
    // - Rules that are recommended but contradict the Golden Frog styleguide
    //   are explicitely set to the Golden Frog styleguide value.

    // Possible Errors
    // http://eslint.org/docs/rules/#possible-errors
    // ---------------------------------------------
    'no-compare-neg-zero': 2,
    'no-cond-assign': [2, 'except-parens'],
    'no-console': 1,
    // 'no-constant-condition': 2, // eslint:recommended
    // 'no-control-regex': 2, // eslint:recommended
    // 'no-debugger': 2, // eslint:recommended
    // 'no-dupe-args': 2, // eslint:recommended
    // 'no-dupe-keys': 2, // eslint:recommended
    // 'no-duplicate-case': 2, // eslint:recommended
    // 'no-empty': 2, // eslint:recommended
    // 'no-empty-character-class': 2, // eslint:recommended
    'no-ex-assign': 1,
    // 'no-extra-boolean-cast': 2, // eslint:recommended
    'no-extra-parens': [0, {
      nestedBinaryExpressions: false
    }],
    // 'no-extra-semi': 2, // eslint:recommended
    // 'no-func-assign': 2, // eslint:recommended
    // 'no-inner-declarations': 2, // eslint:recommended
    'no-invalid-regexp': [2, {
      allowConstructorFlags: ['u', 'y']
    }],
    // 'no-irregular-whitespace': 2, // google // eslint:recommended
    'no-obj-calls': 1,
    'no-prototype-builtins': 0,
    'no-regex-spaces': 1,
    // 'no-sparse-arrays': 2, // eslint:recommended
    'no-template-curly-in-string': 1,
    // 'no-unexpected-multiline': 2, // google // eslint:recommended
    // 'no-unreachable': 2, // eslint:recommended
    // 'no-unsafe-finally': 2, // eslint:recommended
    'no-unsafe-negation': 2,
    // 'use-isnan': 2 // eslint:recommended
    'valid-jsdoc': [1, {
      requireParamDescription: true,
      requireReturnDescription: false,
      requireReturn: false,
      prefer: {returns: 'return'},
      preferType: {Boolean: 'boolean', Number: 'number', Object: 'object', String: 'string'},
      matchDescription: '.+'
    }],
    // 'valid-typeof': 2 // eslint:recommended


    // Best Practices
    // http://eslint.org/docs/rules/#best-practices
    // --------------------------------------------

    'accessor-pairs': 1,
    'array-callback-return': 1,
    'block-scoped-var': 2,
    'class-methods-use-this': 1,
    'complexity': [1, 5], // NOTE: This is a warning
    'consistent-return': 2,
    'curly': 2,
    'default-case': 2,
    'dot-location': [1, 'property'],
    'dot-notation': [1, {
      allowPattern: '^[a-z]+(_[a-z]+)+$'
    }],
    'eqeqeq': 2,
    'guard-for-in': 1,
    'no-alert': 1,
    // 'no-caller': 2, // google
    // 'no-case-declarations': 2, // eslint:recommended
    'no-div-regex': 1,
    // 'no-else-return': 0,
    'no-empty-function': 2,
    // 'no-empty-pattern': 2, // eslint:recommended
    'no-eq-null': 2,
    'no-eval': 2,
    // 'no-extend-native': 2, // google
    // 'no-extra-bind': 2, // google
    'no-extra-label': 2,
    // 'no-fallthrough': 2, // eslint:recommended
    'no-floating-decimal': 2,
    'no-global-assign': [2, {
      exceptions: [] // Populate this as necessary
    }],
    'no-implicit-coercion': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    // 'no-invalid-this': 2, // google
    'no-iterator': 2,
    'no-labels': 2,
    // 'no-lone-blocks': 0,
    'no-loop-func': 2,
    'no-magic-numbers': [2, {
      ignore: [1, 0, 100],
      ignoreArrayIndexes: true
    }],
    // 'no-multi-spaces': 2, // google
    // 'no-multi-str': 2, // google
    'no-new': 2,
    'no-new-func': 2,
    // 'no-new-wrappers': 2, // google
    'no-octal-escape': 1,
    // 'no-octal': 2, // eslint:recommended
    // 'no-param-reassign': 0,
    'no-proto': 2,
    // 'no-redeclare': 2, // eslint:recommended
    // 'no-restricted-properties': 0, // This one is really cool
    'no-return-assign': [2, 'always'],
    'no-return-await': 2,
    'no-script-url': 2,
    // 'no-self-assign': 2, // eslint:recommended
    'no-self-compare': 2,
    'no-sequences': 2,
    // 'no-throw-literal': 2, // google // eslint:recommended
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': [2, {
      allowTernary: true
    }],
    // 'no-unused-labels': 2, // eslint:recommended
    'no-useless-call': 2,
    'no-useless-concat': 1,
    'no-useless-escape': 2,
    'no-useless-return': 2,
    'no-void': 2,
    'no-warning-comments': [1, {
      terms: ['todo', 'xxx', '!!!', 'hack'],
      location: 'start'
    }],
    // 'no-with': 2, // google
    'prefer-promise-reject-errors': 2,
    'radix': 2,
    'require-await': 2,
    'vars-on-top': 2,
    'wrap-iife': 2,
    'yoda': 2,

    // Strict Mode
    // http://eslint.org/docs/rules/#strict-mode
    // -----------------------------------------
    // 'script': 0, // All of our scripts are native modules, thus implicitely are "strict mode"

    // Variables
    // http://eslint.org/docs/rules/#variables
    // ---------------------------------------
    // 'init-declarations': 0,
    // 'no-catch-shadow': 0,
    // 'no-delete-var': 2, // eslint:recommended
    'no-label-var': 2,
    // 'no-restricted-globals': 0,
    // 'no-shadow': 0,
    'no-shadow-restricted-names': 2,
    // 'no-undef': 2, // eslint:recommended
    'no-undef-init': 2,
    'no-undefined': 2,
    // 'no-unused-vars': [2, {args: 'none'}], // google // eslint:recommended
    'no-use-before-define': 2,

    // Node.js and CommonJS
    // http://eslint.org/docs/rules/#nodejs-and-commonjs
    // -------------------------------------------------
    // 'callback-return': 0,
    'global-require': 1,
    'handle-callback-err': [2, '^(err|error|.+Error)$'], // NOTE: Prevent side-effects; do not let errors be handled in secret.
    // 'no-mixed-requires': 0,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-env': 1,
    'no-process-exit': 2,
    // 'no-restricted-modules': 0, // RFE: This might be a good idea
    // 'no-sync': 0,

    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------
    'array-bracket-spacing': 0,
    'block-spacing': 1,
    'brace-style': [1, '1tbs', {
      allowSingleLine: true
    }],
    'camelcase': [1, {
      properties: 'always'
    }],
    'capitalized-comments': [1, 'always', {
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true
    }],
    'comma-dangle': 0,
    'comma-spacing': 1,
    'comma-style': 1,
    'computed-property-spacing': 0,
    'consistent-this': [2, '_this'],
    'eol-last': 1,
    'func-call-spacing': 1,
    'func-name-matching': 2,
    'func-names': [1, 'as-needed'], // FAQ: Helps with debugging
    'func-style': [2, 'declaration', {
      allowArrowFunctions: true
    }], // NOTE: Alternate setting will be entertained
    'id-blacklist': [2, 'e', 'cb'],
    'id-length': [1, {
      min: 3,
      max: 50,
      exceptions: [] // Update as exceptions are agreed upon
    }],
    // 'id-match': 0, // The `camelcase` rule is ample
    'indent': [1, 2, {
      // NOTE: Until our options are fine-tuned, use 'warn' (1), not 'error' (2).
      // SEE: http://eslint.org/docs/rules/key-spacing
      SwitchCase: 1,
      VariableDeclarator: { var: 2, let: 2, const: 3 },
      outerIIFEBody: 0,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 'first' },
      FunctionExpression: { parameters: 'first' },
      CallExpression: { arguments: 'first' },
      ArrayExpression: 1,
      ObjectExpression: 1
    }],
    // 'jsx-quotes': 0,
    'key-spacing': [1, {
      mode: 'minimum'
    }],
    'keyword-spacing': 1,
    // 'line-comment-position': 0,
    'linebreak-style': 0, // NOTE: Window complains about "unix", even though the default is "unix"
    // 'lines-around-comment': 0,
    'lines-around-directive': 2,
    'max-depth': [2, 4],
    'max-len': [1, {
      code: 120,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreComments: true,
      ignorePattern: '^(import|require|const)'
    }],
    // 'max-lines': 0,
    'max-nested-callbacks': [1, 4], // SEE: http://eslint.org/docs/rules/max-nested-callbacks#further-reading
    'max-params': [1, 4],
    'max-statements': [1, 20], // FAQ: This can elicit discussion about function complexity
    'max-statements-per-line': [1, {
      max: 2
    }],
    // 'multiline-ternary': 0,
    'new-cap': 1,
    'new-parens': 1,
    'newline-after-var': 1,
    // 'newline-before-return': 0,
    // 'newline-per-chained-call': 0,
    'no-array-constructor': 1,
    'no-bitwise': 1, // NOTE: If we start to use bitwise, revisit this setting
    'no-continue': 1,
    // 'no-inline-comments': 0,
    // 'no-lonely-if': 0,
    'no-mixed-operators': 1,
    'no-mixed-spaces-and-tabs': 1,
    'no-multi-assign': 1,
    'no-multiple-empty-lines': [1, {max: 2}],
    'no-negated-condition': 1,
    'no-nested-ternary': 2,
    'no-new-object': 1,
    // 'no-plusplus': 0,
    // 'no-restricted-syntax': 0, // Wow…
    'no-tabs': 1,
    // 'no-ternary': 0,
    'no-trailing-spaces': 1,
    // 'no-underscore-dangle': 0,
    'no-unneeded-ternary': [1, {
      defaultAssignment: false
    }],
    'no-whitespace-before-property': 1,
    // 'nonblock-statement-body-position': 0,
    // 'object-curly-newline': 0,
    'object-curly-spacing': 0,
    // 'object-property-newline': 0,
    'one-var': [1, {
      var: 'never',
      let: 'never',
      const: 'never'
    }],
    // 'one-var-declaration-per-line': 0,
    'operator-assignment': 1,
    // 'operator-linebreak': 0,
    'padded-blocks': 0,
    'quote-props': [1, 'consistent-as-needed'],
    'quotes': [1, 'single', {
      avoidEscape: false,
      allowTemplateLiterals: true
    }],
    'require-jsdoc': [1, { // NOTE: This would be an error (`2`) if we could ignore constructors
      'require': {
        FunctionDeclaration: false,
        MethodDefinition: true,
        ClassDeclaration: false,
        ArrowFunctionExpression: false
      }
    }],
    'semi': 1,
    'semi-spacing': 1,
    // 'sort-keys': 0,
    // 'sort-vars': 0,
    'space-before-blocks': 1,
    'space-before-function-paren': [1, {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never'
    }],
    'space-in-parens': 0,
    'space-infix-ops': 1,
    'space-unary-ops': [1, {
      words: true,
      nonwords: false
    }],
    'spaced-comment': [1, 'always', {
      'exceptions': ['/']
    }],
    'template-tag-spacing': 1,
    'unicode-bom': 1, // NOTE: We should discuss this for web code
                      // SEE: http://eslint.org/docs/rules/unicode-bom
    // 'wrap-regex': 0,

    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    // ------------------------------------------
    // 'arrow-body-style': 0,
    // 'arrow-parens': [2, 'always'], // google
    'arrow-spacing': 2,
    // 'constructor-super': 2, // google // eslint:recommended
    // 'generator-star-spacing': [2, 'after'], // google
    'no-class-assign': 2,
    'no-confusing-arrow': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 1,
    // 'no-new-symbol': 2, // google // eslint:recommended
    // 'no-restricted-imports': 0, // RFE: This could be useful
    // 'no-this-before-super': 2, // google // eslint:recommended
    'no-useless-computed-key': 1,
    'no-useless-constructor': 1,
    'no-useless-rename': 1,
    // 'no-var': 2, // google
    // 'object-shorthand': 0,
    'prefer-arrow-callback': 1, // NOTE: Maybe this should be an error…
    'prefer-const': 1, // NOTE: Maybe this should be an error…
    // 'prefer-numeric-literals': 0,
    // 'prefer-rest-params': 2, // google
    'prefer-spread': 1,
    // 'prefer-template': 0,
    // 'require-yield': 2, // eslint:recommended
    'rest-spread-spacing': 0,
    // 'sort-imports': 0,
    'symbol-description': 2,
    'template-curly-spacing': 0,
    // 'yield-star-spacing': [2, 'after'] // google
  }
};
