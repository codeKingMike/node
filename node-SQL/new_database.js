var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected...");
    var sql = "CREATE DATABASE mydemodb";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Database created");

    var table = "CREATE TABLE userInfo (name VARCHAR(255), address VARCHAR(255), city VARCHAR(255), state VARCHAR(255), zip INT(40))";
    con.query(table, (err, result) => {
        if (err) throw err;
        console.log("New table created");
    });

    // INPUT DATA
    var inputVal = "INSERT INTO userInfo (name, address, city, state, zip) VALUES ('Michael', '310 Harbor', 'Gardena', 'CA', '90247')";
    con.query(inputVal, (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");
    });
        con.end();
    });
});
