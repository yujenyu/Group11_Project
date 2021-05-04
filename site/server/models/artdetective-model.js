const mongoose = require('mongoose');

const ArtDetectiveSchema = new mongoose.Schema({
    paintingNumber: {type: Number, required: true, unique: true},
    nameOfPainting: {type: String, required: true},
    imageUrl: {type: String, required: true},
    discription: {type: String, required: true},
    numberOfDiff: {type: Number, required: true},
    difference: [
        { 
            coordinateX: {type: Number, required: true},
            coordinateY: {type: Number, required: true},
            radius: {type: Number, required: true},
            diffDiscription: {type: String, required: true}
        },
        { 
            coordinateX: {type: Number},
            coordinateY: {type: Number},
            radius: {type: Number},
            diffDiscription: {tyep: String}
        },
        { 
            coordinateX: {type: Number},
            coordinateY: {type: Number},
            radius: {type: Number},
            diffDiscription: {type: String}
        }
     ]
});

module.exports = mongoose.model('ArtDetectiveModel', ArtDetectiveSchema);