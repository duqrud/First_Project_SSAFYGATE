const mysql = require("mysql");
const connection = mysql.createPool({
  host: "192.168.30.198",
  port: 3306,
  user: "b308",
  password: "b308",
  database: "ssafygate",
});

module.exports = connection;
