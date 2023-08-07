// config.js
const redisConfig = {
  host: "localhost", // Update with your Redis host
  port: 6379, // Update with your Redis port
  retryStrategy: (times) => Math.min(times * 50, 2000),
};

module.exports = { redisConfig };
