require("dotenv/config");

module.exports = {
  user: process.env.MONGO_USER || "mongoUser",
  password: process.env.MONGO_PASS || "myPassword",
  database: process.env.MONGO_DBNAME || "test",
};