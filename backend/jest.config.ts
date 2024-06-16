// module.exports = {
//   moduleFileExtensions: ["js", "json", "ts"],
//   rootDir: "/Users/tobiasbarthold/WebstormProjects/blutabnahme_swt2/backend",
//   testRegex: ".*\\.e2e-spec\\.ts$|.*\\.spec\\.ts$", // Adjust to match both spec.ts and e2e-spec.ts
//   transform: {
//     "^.+\\.(t|j)s$": "ts-jest",
//   },
//   collectCoverageFrom: ["**/*.(t|j)s"],
//   coverageDirectory: "./coverage",
//   testEnvironment: "node",
//   setupFilesAfterEnv: ["<rootDir>/test/setup.ts"], // Ensure this path is correct
// };
import { resolve } from "path";

module.exports = {
  testTimeout: 120000,
  // globalSetup: resolve(__dirname, "./test/setup.ts"),
  // globalTeardown: resolve(__dirname, "./jest-teardown.js"),
  setupFilesAfterEnv: [resolve(__dirname, "./test/setup.ts")],
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: ".",
  testEnvironment: "node",
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  testRegex: ".spec.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
