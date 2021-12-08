const mysql = require("mysql2");
const config = require("./config");

const database = mysql.createPool({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
});

module.exports = database.promise();
