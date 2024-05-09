const prettierConfig = require('./.prettierrc.js');

module.exports = {
  root: true,
  parserOptions: { ecmaVersion: 2021 },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['tsconfig.json'],
        createDefaultProgram: true
      },
      plugins: ['@typescript-eslint', 'jsdoc', 'import'],
      extends: [
        'plugin:prettier/recommended'
      ],
      rules: {
        'prettier/prettier': ['warn', prettierConfig],
        'jsdoc/newline-after-description': 1,
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array-simple'
          }
        ],
        '@typescript-eslint/ban-types': [
          'off',
          {
            types: {
              String: {
                message: 'Use string instead.'
              },
              Number: {
                message: 'Use number instead.'
              },
              Boolean: {
                message: 'Use boolean instead.'
              },
              Function: {
                message: 'Use specific callable interface instead.'
              }
            }
          }
        ],
        'import/no-duplicates': 'warn',
        'import/no-unused-modules': 'warn',
        'import/no-unassigned-import': 'off',
        'import/order': [
          'warn',
          {
            alphabetize: { order: 'asc', caseInsensitive: false },
            'newlines-between': 'always',
            groups: ['external', 'internal', ['parent', 'sibling', 'index']],
            pathGroups: [],
            pathGroupsExcludedImportTypes: []
          }
        ],
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/member-ordering': 'off',
        'no-irregular-whitespace': 'error',
        'no-multiple-empty-lines': 'error',
        'no-sparse-arrays': 'error',
        'prefer-object-spread': 'error',
        'prefer-template': 'error',
        'prefer-const': 'off',
        'max-len': 'off'
      }
    },
    {
      files: ['*.html'],
      extends: [],
      rules: {}
    },
    {
      files: ['*.html'],
      excludedFiles: ['*inline-template-*.component.html'],
      extends: ['plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': ['warn'],
      }
    }
  ]
};
