const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: 'User already exists'
        
    },
    firstname: {
        type: String
        
    },
    lastname: {
        type: String
        
    },
    password: {
        type: String
        
    },
    location: { 
        city: {type: String},   
        lat: {type: String},
        lng: {type: String}
    },
    widgets: [{
        widgetCode: String,
        posX: Number,
        posY: Number
    }]
    
});

const User = mongoose.model('User', userSchema);
module.exports = User;