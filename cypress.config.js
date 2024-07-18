// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'wp6y1z',
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://swag.live',
    supportFile: 'cypress/1-support/e2e.js',
  },
})
