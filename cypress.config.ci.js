const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
    video: true,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2,
      openMode: 0
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true
  },
})
