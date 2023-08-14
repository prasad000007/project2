const mysql = require("mysql2")

const connection = mysql.createConnection({
  user: "root",
  password: "manager",
  host: "localhost",
  port: 3306,
  database: "grocery_db",
})

connection.connect()

module.exports = connection

  