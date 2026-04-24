const path = require("path");

module.exports = {
  PORT: process.env.PORT || 3000,
  API_KEY: process.env.API_KEY || "robox-secret-key",
  DATA_FILE:
    process.env.DATA_FILE || path.join(__dirname, "..", "data", "robots.json"),
};
