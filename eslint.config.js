import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
const babelParser = require('@babel/eslint-parser');
const prettierConfig = require('eslint-config-prettier');

export default [
  {
    files: ['**/*.js'],
  },
  {
    languageOptions: {
      globals: globals.browser,
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
    },
  },
  {
    rules: {
      'prettier/prettier': 'error',
      'no-unused-expressions': 'error',
      'no-unused-vars': 'error',
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig,
];
