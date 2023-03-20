/*
 * @Author: HxB
 * @Date: 2022-08-15 14:29:54
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-03-20 14:14:53
 * @Description: eslint 配置文件
 * @FilePath: \react_micro_web\.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint', 'spellcheck', 'import', 'zob'],
  rules: {
    'zob/comment': 'error', // 中英文空格间距 找英文符号正则 ([\u4e00-\u9fa5]\s*[!@#$%^&*_+=;:'"{\[\]},.\/\\`\(\)])
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-useless-escape': 'warn',
    'prettier/prettier': [
      'error',
      {
        // trailingComma: 'all',
        // arrowParens: 'always',
        // htmlWhitespaceSensitivity: 'ignore',
      },
      { usePrettierrc: true },
    ],
    'no-undef': ['error'],
    'spaced-comment': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 5 }],
    'no-mixed-spaces-and-tabs': ['error', false],
    'comma-dangle': ['error', 'only-multiline'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/no-explicit-any': ['off'],
    'no-irregular-whitespace': [
      'error',
      { skipStrings: true, skipComments: true, skipRegExps: true, skipTemplates: true },
    ],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-trailing-spaces': ['error', { skipBlankLines: false }],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'max-lines': ['error', 800],
    'max-statements': ['error', 100],
    'spellcheck/spell-checker': [
      'warn',
      {
        comments: false,
        strings: true,
        identifiers: true,
        lang: 'en_US',
        skipWords: [
          'javascript',
          'debounce',
          'pathname',
          'minify',
          'charset',
          'resize',
          'linux',
          'darwin',
          'resizable',
          'redux',
          'consts',
          'unmount',
          'renderer',
          'unordered',
          'appstore',
        ],
        skipIfMatch: [
          // http url
          'http://[^s]*',
          // Auxiliary werbs
          // see: https://github.com/aotaduy/eslint-plugin-spellcheck/issues/7
          "(\\s|^)\\w+'t(\\s|$)",
          // ordinals
          // https://github.com/aotaduy/eslint-plugin-spellcheck/issues/8
          '(\\s|^|\\w+)\\d+(st|nd|rd|th)(\\s|[A-Z][a-zA-Z]+|$)',
          // pre/post prefixes both in kebab case and camel case
          '(\\s|^)(pre|post)([-\\w]|[A-Z])[a-zA-Z]+(\\s|$)',
          // xml tags
          '<(?:/)?[\\w-]+>',
          // cryptographic octal hashes
          '^[0-9a-f]{5,999}$',
          // hex colors
          '^#[0-9a-f]{3,6}$',
          // For MIME Types
          '^[-\\w]+/[-\\w\\.]+$',
        ],
        skipWordIfMatch: [
          '^foobar.*$', // words that begin with foobar will not be checked
        ],
        minLength: 5,
      },
    ],
    'import/first': ['error'],
    'import/exports-last': ['error'],
    'import/newline-after-import': ['error'],
    'import/no-duplicates': ['error'],
    'import/order': ['error', { 'newlines-between': 'never' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
