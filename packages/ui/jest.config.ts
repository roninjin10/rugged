import { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts", "jest-extended/all"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/styles",
    ".+.stories.tsx",
    "/delegateCreator/",
    "reportWebVitals.ts",
    "service-worker.ts",
    "serviceWorkerRegistration.ts",
    "src/stories",
    "generateJson.js",
  ],
  testLocationInResults: true,
};

export default config;
