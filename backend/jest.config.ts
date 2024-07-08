import { resolve } from "path";

module.exports = {
  testTimeout: 120000,
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
