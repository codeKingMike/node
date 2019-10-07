var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});


    // INPUT DATA
    var inputVal = "INSERT INTO userInfo (name, address, city, state, zip) VALUES ('Michael', '310 Harbor', 'Gardena', 'CA', '90247')";
    con.query(inputVal, (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");
    });

