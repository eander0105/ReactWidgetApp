var db = require('mysql')

// Connects to sql server
const connection = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});
connection.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MYSQL connected');
});

// Create database if not already extit
sql = 'CREATE DATABASE IF NOT EXISTS ReactWidgetApp';
connection.query(sql, (err, results) => {
    if(err){
        throw err;
    }
    console.log('DB created');
});

// Selects database
connection.query('USE ReactWidgetApp')

// Creats tables if it does not already exist
sql = 'CREATE TABLE IF NOT EXISTS users(id int AUTO_INCREMENT, firstname VARCHAR(255), lastname VARCHAR(255), username VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';
connection.query(sql, (err, results) => {
    if(err) throw err;
    console.log('Table Created');
});


module.exports = connection;