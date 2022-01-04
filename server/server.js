const { urlencoded } = require('express');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const recordRoutes = express.Router();
const User = require('./models/user');

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
  const textstuff = 'asd'
  if(req.body.username.length > 0 && req.body.firstname.length > 0 &&
    req.body.lastname.length > 0 && req.body.password.length > 0){
    if(dbinput.password == req.body.repassword){
      const salt = await bcrypt.genSalt(saltRounds)
      dbinput.password = await bcrypt.hash(dbinput.password, salt) 
      const user = new User(dbinput);
      user.save()
        .then((result) => {
          res.send({validated: true});
        })
        .catch((err) => {
          res.send({validated: false, error: 'Username already exist'});
        })
    }
    else{
      res.send({validated: false, error: 'Password does not match'});
    } 
  }
  else{
    res.send({validated: false, error: 'Please fill out all fields'});
  }  
})

//Login user
app.post('/login_user', (req, res) => {
  const userexist = User.find({username: req.body.username})
    .then(async (result) => {
      if(result.length === 1){
        if (await bcrypt.compare(req.body.password, result[0].password)){
          res.send({username: result[0].username,
                    firstname: result[0].firstname,
                    lastname: result[0].lastname,
                    authenticated: true
          });
        }
        //Incorrect password
        else{
          res.send({authenticated: false, error: 'Password or username is incorrect'});
        }
      }
      //User not found
      else{
        res.send({authenticated: false, error: 'Password or username is incorrect'});
      }
    })
    .catch((err) => {
      console.error(err);
      res.send({authenticated: false, error: 'Server error'});
    })  
})

app.listen(port, () => console.log(`Server running on port: ${port}`));