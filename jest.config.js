module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  modulePaths: ['<rootDir>/src/'],
  setupFiles: ['raf/polyfill', '<rootDir>/enzyme-setup.ts', 'jest-useragent-mock'],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks/fileMock.js',
    '\\.(css|less)$': '<rootDir>/mocks/fileMock.js',
  },
  moduleNameMapper: {
    '^Components/(.*)$': '<rootDir>/src/components/$1',
    '^Styles/(.*)$': '<rootDir>/src/styles/$1',
    '^Utils/(.*)$': '<rootDir>/src/utils/$1',
    '^Images/(.*)$': '<rootDir>/src/images/$1',
    '^Containers/(.*)$': '<rootDir>/src/containers/$1',
    '^Constants/(.*)$': '<rootDir>/src/constants/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/themes/**',
    '!src/**.d.ts',
    '!src/index.tsx',
    '!src/images/*.tsx',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
