const { defineConfig } = require('cypress')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const { createBundler } = require('@badeball/cypress-cucumber-preprocessor/webpack')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config)
      on('file:preprocessor', createBundler(config))
      return config
    },
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000
  },
})
