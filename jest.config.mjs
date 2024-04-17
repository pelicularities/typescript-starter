/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/"
  ]
};

export default config;
