module.exports = {
  extends: '@labfolder/eslint-config-node',
  parserOptions: {
    requireConfigFile: false,
  },
  root: true,
  rules: {
    // Allow importing devDependencies.
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
