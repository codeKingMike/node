var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

conn.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    var sql = "ALTER TABLE userInfo ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    conn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Table altered");
    });
});
