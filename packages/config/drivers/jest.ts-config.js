module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,js}'],
  verbose: true,
  clearMocks: true,
  restoreMocks: true,
};
