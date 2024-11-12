const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: ["cypress/**/*cy.{js,ts}", "cypress/**/*.{feature,features}"],
    baseUrl: "https://conduit-realworld-example-app.fly.dev/",
    viewportWidth: 1366,
    viewportHeight: 768,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  video:true,
  retries:2
  },

   

  

});
