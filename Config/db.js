const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "app_user",
  password: "SecurePassword123",
  database: "auth",
});

try {
  db.connect();
  console.log("Database is connected!");
} catch (error) {
  console.log(error);
}

module.exports = db;
