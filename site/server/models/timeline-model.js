const mongoose = require('mongoose');

const TimelineSchema = new mongoose.Schema({
    movementName: String,
    year: String,
    characteristics: String,
    imageUrl: String,
    description: String,
    artistsAndWorks: {
        artist1: {
            name: String, 
            work1: String, 
            work2: String
        },
        artist2: {
            name: String, 
            work1: String, 
            work2: String
        }
    }
});

module.exports = mongoose.model('TimelineModel', TimelineSchema);