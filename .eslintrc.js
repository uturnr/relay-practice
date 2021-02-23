/* eslint-disable import/unambiguous */
/* eslint-disable filenames/match-regex */
/* eslint-disable import/no-commonjs */

module.exports = {
  extends: [
    'canonical',
    'canonical/jest',
    'canonical/react',
    'canonical/typescript',
    'plugin:relay/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
  },
  plugins: ['relay'],
  rules: {
    'filenames/match-regex': [
      'warn',
      '^[A-Z]?[a-z]+(?:[A-Z][a-z]+)*\\.?[A-Z]?[a-z]*$',
      false,
    ],
    'id-match': [
      'error',
      '(^[A-Za-z]+(?:[A-Z][a-z]*)*\\d*$)|(^[A-Z]+(_[A-Z]+)*(_\\d$)*$)|(^(_|\\$)$)|.*_.*$.*',
    ],
    'import/no-unassigned-import': [
      'error',
      {
        allow: [
          '**/*.css',
          '**/*.scss',
        ],
      },
    ],
    'import/order': [
      'warn',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index', 'object'],
        ],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
