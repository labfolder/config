const fs = require('fs');
const path = require('path');

const { chain } = require('lodash');

// Some of the driver dependencies in GitHub are ES Modules that do not need transpilation.
// This function finds all of these dependencies.
const findEsModules = (packageJsonFile) => {
  const { dependencies } = JSON.parse(
    fs.readFileSync(packageJsonFile, 'utf-8')
  );

  return chain(dependencies)
    .toPairs()
    .reduce(
      (arr, [name, version]) =>
        version.includes('github.com/labforward')
          ? arr.concat([
              name,
              // Find more dependencies recursively.
              ...findEsModules(require.resolve(`${name}/package.json`)),
            ])
          : arr,
      []
    )
    .flattenDeep() // Every nested dependency is an extra dimension. Flatten it completely.
    .uniq() // No duplicate dependencies in the list.
    .value();
};

const packageJsonFile = path.join(process.cwd(), 'package.json');
const esModules = findEsModules(packageJsonFile).join('|');

module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.(js|ts)'],
  coveragePathIgnorePatterns: ['<rootDir>/src/lib/Simulator.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  transform: {
    '\\.(js|ts)$': 'babel-jest',
  },
  transformIgnorePatterns: [`node_modules/(?!${esModules})`],
};
