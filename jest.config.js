/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Configuration pour RTL
  moduleNameMapper: {
    // Support pour les imports de styles
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy',
    // Support pour les alias définis dans `tsconfig.json` ou `jsconfig.json`
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

module.exports = createJestConfig(customJestConfig);