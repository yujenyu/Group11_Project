const mongoose = require('mongoose');

const FunFactsSchema = new mongoose.Schema({
    name: String,
    url: String
});

module.exports = mongoose.model('FunFactsModel', FunFactsSchema);