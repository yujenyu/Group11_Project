const ArtDetectiveModel = require('../models/artdetective-model');
const artdetectiveData = require('../data/artdetective-data');

class ArtDetectiveDBM {

    constructor() { 
        this.dataset = artdetectiveData;
    }

    async initDB() {
        await this.cleanDB();
        this.pushDataToDB();
    }
 
    async cleanDB() {
        await ArtDetectiveModel.deleteMany();
    }

    pushDataToDB() {
        this.dataset.forEach((data) => {
            const dataToSave = new ArtDetectiveModel(data);
            dataToSave.save((err) => {
                if (err) return handleError(err);
            });
        })
    }
}
module.exports = ArtDetectiveDBM;