const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "290429",
    database: "manager_Student",
});

module.exports = connection;