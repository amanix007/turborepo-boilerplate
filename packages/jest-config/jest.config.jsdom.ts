import { Config } from 'jest';

export const jestConfigJsdom: Config = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  globals: {
    'ts-jest': {
      tsconfig: '../tsconfig/tsconfig.test.json',
    },
  },
};
