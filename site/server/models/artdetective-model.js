const mongoose = require('mongoose');

// const ArtDetectiveSchema = new mongoose.Schema({
//     paintingNumber: {tyep: Number, required: true, unique: true},
//     nameOfPainting: {tyep: String, required: true},
//     nameOfPainting: {tyep: String, required: true},
//     numberOfDiff: {tyep: Number, required: true},
//     difference: {
//         coordinateX: {tyep: Number, required: true},
//         coordinateY: {tyep: Number, required: true},
//         radius: {tyep: Number, required: true},
//         discription: {tyep: String, required: true}
//     }
// });

const ArtDetectiveSchema = new mongoose.Schema({
    number: Number,
    name: String,
    url: String
});

module.exports = mongoose.model('ArtDetectiveModel', ArtDetectiveSchema);