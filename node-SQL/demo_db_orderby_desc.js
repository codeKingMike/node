var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

con.connect((err) => {
    if (err) throw err;
    con.query("SELECT * FROM customers ORDER BY name DESC", (err, result) => {
        if (err) throw err;
        console.log(result);
        con.end();
    });
});