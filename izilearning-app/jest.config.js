const path = require("path");

module.exports = {
  setupFiles: [],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest", // Tell Jest to use babel-jest for transforming JS/JSX files
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": path.resolve(
      __dirname,
      "__mocks__/styleMock.js"
    ),
  },
  transformIgnorePatterns: [
    "/node_modules/(?!cheerio|react-router-dom)/", // Make sure cheerio and react-router-dom are transformed by Babel
  ],
  moduleFileExtensions: ["js", "jsx"],
};
