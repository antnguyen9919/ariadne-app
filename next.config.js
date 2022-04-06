const withPWA = require("next-pwa");
// const withCSS = require('@zeit/next-css')

module.exports = withPWA(
  {
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development",
    },
  }
)
;