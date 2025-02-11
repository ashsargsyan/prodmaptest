const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

    },
    env: {
      baseUrl:"https://app.dev.prodmap.ai/login"
    },
    viewportWidth: 1440,
    viewportHeight: 800,
  },
});