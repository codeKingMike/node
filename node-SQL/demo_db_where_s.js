var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect((err) => {
  if (err) throw err;
  /*Select all customers where the address starts with an "S":*/
  con.query("SELECT * FROM customers WHERE address LIKE 'S%'",  (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
