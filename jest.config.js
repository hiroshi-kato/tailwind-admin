module.exports = {
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|ts|tsx)$'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
