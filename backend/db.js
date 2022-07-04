const mongoose = require('mongoose');
const connection = mongoose.connect("mongodb+srv://arpit:arpit123@cluster0.ep9ixn0.mongodb.net/fullstack?retryWrites=true&w=majority");
require('dotenv').config();

module.exports = connection;
