const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // browser-like
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
};

export default config;
