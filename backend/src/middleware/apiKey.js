const { API_KEY } = require("../config");

function apiKeyMiddleware(req, res, next) {
  const incomingKey = req.header("x-api-key");

  if (!incomingKey || incomingKey !== API_KEY) {
    return res.status(401).json({
      error: "Unauthorized",
      message: "Missing or invalid API key",
    });
  }

  return next();
}

module.exports = apiKeyMiddleware;
