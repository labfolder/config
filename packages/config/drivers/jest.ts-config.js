module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,js}'],

  clearMocks: true,
  restoreMocks: true,

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  verbose: true,
};
