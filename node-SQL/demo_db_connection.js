// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'portfolio',
//     password: ''
// });

// connection.connect(function(err) {
//     if (err) {
//         console.log('Error connecting: ' + err.stack);
//         return;
//     }

//     console.log('Connected as id: ' + connection.threadId);
// });

// connection.query('SELECT * FROM userInfo', function (error, results, fields) {
//     if (error) throw error;

//     results.forEach(result => {
//         console.log(result);
//     });
// });

// connection.end();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'portfolio',
    password: ''
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id: ' + connection.threadId);
});

connection.query('SELECT * FROM userInfo', (error, results, fields) => {
    if (error) throw error;

    results.forEach(result => {
        console.log(result);
    });
});

connection.end();