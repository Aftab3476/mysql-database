const mysql = require('mysql2');
require('dotenv').config()

const db = mysql.createConnection({
    host        : process.env.DB_HOST,
    user        : process.env.DB_USER,
    password    : process.env.DB_PASS,
    database    : process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.log("Error in connecting to DB");
    };
    console.log("Connected to MYSQL db!");
});

module.exports = db