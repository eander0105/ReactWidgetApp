const { urlencoded } = require('express');
var express = require('express');
var app = express();
var login = require('./login');

const port = 5000;

app.use(express.json());
app.use(urlencoded({extended: false}));

app.post('/login_user', (req, res) =>{
        res.send()
    })

app.listen(port, () => console.log(`Server running on port: ${port}`));