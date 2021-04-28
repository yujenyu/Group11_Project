const mongoose = require('mongoose');

const ArtDetectiveSchema = new mongoose.Schema({
    name: String,
    url: String
});

module.exports = mongoose.model('ArtDetectiveModel', ArtDetectiveSchema);