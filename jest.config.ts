import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // transformIgnorePatterns: ['/node_modules/(?!(@govtechsg/sgds-web-component)/)']

  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

async function jestConfig() {
  const nextJestConfig = await createJestConfig(config)()
  // /node_modules/ is the first pattern
  nextJestConfig.transformIgnorePatterns = ['/node_modules/(?!@govtechsg/sgds-web-component)/']
  return nextJestConfig
}

module.exports = jestConfig
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// export default createJestConfig(config)