/*
 * @Author: HxB
 * @Date: 2022-04-15 14:29:54
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-16 15:09:38
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
  plugins: ['react', '@typescript-eslint', 'spellcheck', 'import', 'zob'],
  rules: {
    'no-undef': ['error'],
    'spaced-comment': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 5 }],
    'no-mixed-spaces-and-tabs': ['error', false],
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/no-explicit-any': ['off'],
    'no-irregular-whitespace': ['error', { skipStrings: true }],
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
        ],
        skipIfMatch: [
          'http://[^s]*',
          '^[-\\w]+/[-\\w\\.]+$', // For MIME Types
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
    'zob/comment': 'error', // 中英文空格间距 找英文符号正则 ([\u4e00-\u9fa5]\s*[!@#$%^&*_+=;:'"{\[\]},.\/\\`\(\)])
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
