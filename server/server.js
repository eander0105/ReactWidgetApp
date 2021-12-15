const { urlencoded } = require('express');
var express = require('express');
var app = express();
var connection = require('./db')
const bcrypt = require('bcrypt');

const port = 5000;

const saltRounds = 10;

app.use(express.json());
app.use(urlencoded({extended: false}));


// Login
app.post('/login_user', (req, res) =>{
    sql = 'SELECT * FROM users WHERE username = ?';
    connection.query(sql, req.body.username, async (err, results) => {
        if (err) throw err;
        if (results.length > 0){
            if (await bcrypt.compare(req.body.password, results[0].password)){
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

app.post('/register_user', (req, res) => {
    sql = `INSERT INTO users SET ?`
    var sqlinput = {username: req.body.username, firstname: req.body.firstname, 
        lastname: req.body.lastname, password: req.body.password};

    connection.query('SELECT * FROM users where username = ?', sqlinput.username, async (err, results) => {
        if (err) throw err;
        if (results.length > 0){
            res.send('User already exists')
        }
        else {
            if (sqlinput.password == req.body.repassword){
                const salt = await bcrypt.genSalt(saltRounds)
                sqlinput.password = await bcrypt.hash(sqlinput.password, salt) 
                console.log(sqlinput.password)
                connection.query(sql, sqlinput, (err, results) => {
                    if (err) throw err;
                    console.log('added user')
                })
            }
            else {
                res.send('Password does not match')
            }
        }
    })

    
});


app.listen(port, () => console.log(`Server running on port: ${port}`));