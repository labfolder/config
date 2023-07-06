const fs = require('fs');
const path = require('path');

const esModules = new Set();

// Some of the driver dependencies in GitHub are ES Modules that do not need transpilation.
// This function finds all of these dependencies.
const findEsModules = (packageJsonFile) => {
  const { dependencies } = JSON.parse(
    fs.readFileSync(packageJsonFile, 'utf-8'),
  );

  Object.entries(dependencies)
    .filter(([_, version]) => version.includes('github.com/labforward'))
    .forEach(([name]) => {
      // Dependency has been filtered to be an internal one.
      esModules.add(name);

      findEsModules(require.resolve(path.join(name, 'package.json')));
    });
};

findEsModules(path.join(process.cwd(), 'package.json'));

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

  clearMocks: true,
  restoreMocks: true,

  transform: {
    '\\.(js|ts)$': 'babel-jest',
  },
  transformIgnorePatterns: [`node_modules/(?!${[...esModules].join('|')})`],

  verbose: true,
};
