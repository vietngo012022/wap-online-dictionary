const mysql = require("mysql2");

const connectDB = () => {
  console.log("Connecting to database...");
  const connection = mysql.createConnection({
    host: "localhost",
    //user: process.env.DB_USER,
    //password: process.env.DB_PASSWORD,
    //database: process.env.DB_NAME,
    user: "root",
    password: "12345678",
    database: "entries",
    port: 4400,
    waitForConnections: true,
    connectionLimit: 3, // Adjust according to your needs
    queueLimit: 0,
  });
  return connection;
};

module.exports = connectDB;