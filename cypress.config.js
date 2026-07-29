// const { defineConfig } = require("cypress");

// module.exports = defineConfig({

//   allowCypressEnv: false,

//   reporter: "mochawesome",

//   reporterOptions: {
//     reportDir: "cypress/reports",
//     overwrite: false,
//     html: false,
//     json: true
//   },

//   e2e: {
//     setupNodeEvents(on, config) {
//       return config;
//     },
//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({

  allowCypressEnv: false,

  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
  },

});
