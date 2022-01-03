const { urlencoded } = require('express');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const recordRoutes = express.Router();
const User = require('./models/user')

const port = 5000;

const saltRounds = 10;

mongoose.connect("mongodb+srv://admin:admin@widgey-cluster.o4clr.mongodb.net/Widgey-app?retryWrites=true&w=majority").then((result) => {
  console.log('connected to db');
});

app.use(express.json());
app.use(urlencoded({extended: false}));

//Register user
app.post('/register_user', async (req, res) => {
  var dbinput = {
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password
  };
  if(dbinput.password == req.body.repassword){
    const salt = await bcrypt.genSalt(saltRounds)
    dbinput.password = await bcrypt.hash(dbinput.password, salt) 
    const user = new User(dbinput);
    user.save()
      .then((result) => {
        res.send('Valid new user');
      })
      .catch((err) => {
        console.error(err);
      })
  }
  else{
    res.send('Password does not match')
  }
  
})

//Login user
app.post('/login_user', (req, res) => {
  const userexist = User.find({username: req.body.username})
    .then(async (result) => {
      if(result.length === 1){
        if (await bcrypt.compare(req.body.password, result[0].password)){
          res.send(result[0]);
        }
        else{
          res.send('Invalid password')
        }
      }
      else{
        res.send('User not found')
      }
    })
    .catch((err) => {
      console.error(err);
    })  
})

app.listen(port, () => console.log(`Server running on port: ${port}`));