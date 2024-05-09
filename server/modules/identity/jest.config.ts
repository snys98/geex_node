
import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  coverageDirectory: "./test/coverage",
  collectCoverageFrom: [
    "**/*.input.(t|j)s",
    "**/*.model.(t|j)s",
    "**/*.service.(t|j)s",
    "**/*.resolver.(t|j)s",
    "**/*.controller.(t|j)s",
    "!**/app.module.(t|j)s" // Exclude app.module.ts
  ],
  // todo: fix open handles
  openHandlesTimeout: 10000,
  forceExit: true,
  verbose: true,
  projects: [{
    displayName: "unit",
    rootDir: "src",
    moduleFileExtensions: [
      "js",
      "json",
      "ts"
    ],
    testRegex: ".*\\.spec\\.ts$",
    transform: {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    testEnvironment: "node",
  }, {
    displayName: "integration",
    rootDir: "test",
    moduleFileExtensions: [
      "js",
      "json",
      "ts"
    ],
    testRegex: ".*\\.integration\\.spec\\.ts$",
    transform: {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    testEnvironment: "node",
    runner: "jest-serial-runner",
  }],
};

export default jestConfig;
