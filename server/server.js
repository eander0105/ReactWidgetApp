const { urlencoded } = require('express');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const recordRoutes = express.Router();
const User = require('./models/user');
const Location = require('./models/location');

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
    password: req.body.password,
    location: {},
    widgets: []
  };

  if(req.body.username.length > 0 && req.body.firstname.length > 0 &&
    req.body.lastname.length > 0 && req.body.password.length > 0){
    if(dbinput.password == req.body.repassword){
      const salt = await bcrypt.genSalt(saltRounds)
      dbinput.password = await bcrypt.hash(dbinput.password, salt) 
      Location.findOne({city: req.body.location}, {"city": 1, "lat": 1, "lng": 1, "_id": 0})
        .then((locationResult) => {
          dbinput.location = locationResult;
          const user = new User(dbinput);

          user.save()
            .then((result) => {
              res.send({validated: true});
            })
            .catch((err) => {
              res.send({validated: false, error: 'Username already exist'});
            })
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
    User.find({username: req.body.username})
    .then(async (result) => {
      if(result.length === 1){
        if (await bcrypt.compare(req.body.password, result[0].password)){
          res.send({username: result[0].username,
                    firstname: result[0].firstname,
                    lastname: result[0].lastname,
                    location: result[0].location,
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

//Fetch all locations
app.get('/location', (req, res) => {
  Location.find({}, {"city": 1})
    .then((result) => {
      res.send(result);
    })
})

app.post('/getWidgets', (req, res) => {
  User.find({username: req.body.username}, {"widgets": 1, "_id": 0})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err))
})

app.post('/updateWidgets', (req, res) => {
  User.findOneAndUpdate({username: req.body.username}, 
    {widgets: req.body.widgets}, {upsert: true}, (err, doc) => {
      if (err) return res.send(500, {error: err});
      return res.send('Succesfully saved.');
    })
})


app.listen(port, () => console.log(`Server running on port: ${port}`));