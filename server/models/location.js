const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    city: String,
    lat: String,
    lng: String,
    country: String,
    iso2: String,
    admin_name: String,
    capital: String,
    population: String,
    population_proper: String
});

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;