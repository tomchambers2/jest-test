module.exports = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.js'],
  collectCoverage: true,
  testPathIgnorePatterns: ['/dist/', '/node_modules/(?!@times-tooling)'],
  moduleNameMapper: {
    '\\.(scss|css)$': 'identity-obj-proxy',
  },
  setupFiles: ['../../__test__/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  resolver: 'jest-workspace-resolver',
};
