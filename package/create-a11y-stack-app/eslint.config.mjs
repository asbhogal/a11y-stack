import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  {
    ignores: [
      '**/ui',
      '**/.storybook',
      '**/tailwind.config.ts',
      '**/bin',
      '**/.d.ts',
    ],
  },
  ...compat.extends(
    '@innovixx/eslint-config/configs/base',
    '@innovixx/eslint-config/configs/react',
    '@innovixx/eslint-config/configs/typescript',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ),
  {
    languageOptions: {
      ecmaVersion: 2020,
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },

      sourceType: 'module',
    },

    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
      react,
      reactHooks,
      'sort-keys-fix': sortKeysFix,
    },

    rules: {
      '@next/next/no-img-element': 'off',
      'sort-keys-fix/sort-keys-fix': 'warn',
    },

    settings: {
      'jsx-a11y/strict': true,
    },
  },
];
