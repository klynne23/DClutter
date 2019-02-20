const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const centerSchema = new Schema({
    name: {type: String},
    location: {type: String},
    phone: {type: String},
    accepts: {type: Array},
    doesnotaccept: {type: Array},
    email: {type: String},
    website: {type: String},
    details: {type: String},
    info: {type: String},
    pickup: {type: Boolean, default: false}
});

const Center = mongoose.model('Center', centerSchema);

module.exports = Center;
