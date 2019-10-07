var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

con.connect((err) => {
    if (err) throw err;
    var sql = "DELETE FROM customers WHERE address = 'Mountain 21'"
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        con.end();
    });
});
