/* eslint-disable */
export default {
  displayName: 'quiz-app',
  preset: './jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  setupFiles: ['jest-canvas-mock'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  // collectCoverage: true,
  // coverageThreshold: {
  //   global: {
  //     lines: 100,
  //     statements: 100,
  //     functions: 100,
  //     branches: 100,
  //   },
  // },
  coverageReporters: ['text-summary'],
  coverageDirectory: './coverage/quiz-app',
  coveragePathIgnorePatterns: [
    'node_modules',
    'environments',
    '.module.ts',
    '.mock.ts',
    '.token.ts',
    'test-global-mocks.ts',
    '<rootDir>/src/main.ts',
    'testing',
  ],
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$|rxjs|jsonpath-plus)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  moduleNameMapper: {},
};
