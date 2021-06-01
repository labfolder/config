module.exports = {
  extends: '@labforward/eslint-config-base',
  parser: '',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
  },
  env: {
    node: true,
    es2017: true,
  },
  rules: {
    // Changed from error to warn since most drivers had too many errors.
    camelcase: 'warn',
    'class-methods-use-this': 'warn',
    'no-console': 'warn',
    'no-underscore-dangle': 'warn',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },
    {
      files: ['spec/**/*.js'],
      plugins: ['jasmine'],
      extends: ['plugin:jasmine/recommended'],
      env: {
        jasmine: true,
      },
      rules: {
        'max-statements': 'off',
        'max-nested-callbacks': 'off',
      },
    },
    {
      files: ['spec/**/*.ts', 'packages/*/spec/**/*.ts'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      env: {
        'jest/globals': true,
      },
      rules: {
        'max-statements': 'off',
        'max-nested-callbacks': 'off',
      },
    },
  ],
  // These paths are relative to the .eslintrc file that extends this config.
  ignorePatterns: [
    'dist/**',
    'coverage/**',
    'release/**',
    'node_modules/**',
    'package.json',
  ],
};
