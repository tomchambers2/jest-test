module.exports = {
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.js"],
  collectCoverage: true,
  testPathIgnorePatterns: ["/dist/", "/node_modules/(?!@times-tooling)"],
  moduleNameMapper: {
    "\\.(scss|css)$": "identity-obj-proxy"
  }
};
