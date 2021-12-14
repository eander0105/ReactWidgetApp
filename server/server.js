const { urlencoded } = require('express');
var express = require('express');
var app = express();
var login = require('./login');
var connection = require('./db')

const port = 5000;

app.use(express.json());
app.use(urlencoded({extended: false}));


// Login
app.post('/login_user', (req, res) =>{
        sql = 'SELECT * FROM users WHERE username = ?';
        connection.query(sql, req.body.username, (err, results) => {
            if (err) throw err;
            if (results.length > 0){
                if (req.body.password == results[0].password){
                    res.send('Valid login')
                }
                else{
                    res.send('Invalid password')
                }
            }
            else{
                res.send('User not found')
            }
        });
    });


app.listen(port, () => console.log(`Server running on port: ${port}`));