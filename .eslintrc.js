/* eslint-disable import/unambiguous */
/* eslint-disable filenames/match-regex */
/* eslint-disable import/no-commonjs */

module.exports = {
  extends: [
    'canonical',
    'canonical/jest',
    'canonical/react',
    'canonical/typescript',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
  },
  rules: {
    'filenames/match-regex': [
      'warn',
      '^[A-Z]?[a-z]+(?:[A-Z][a-z]+)*\\.?[A-Z]?[a-z]*$',
      false,
    ],
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['**/*.css'],
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
