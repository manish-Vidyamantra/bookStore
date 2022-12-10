const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: "book_store"
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(" config connected");
    }
});

module.exports = connection;