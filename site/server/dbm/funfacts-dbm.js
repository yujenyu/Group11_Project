const FunFactsModel = require('../models/funfacts-model');
const funfactsData = require('../data/funfacts-data');

class FunFactsDBM {

    constructor() { 
        this.dataset = funfactsData;
    }

    async initDB() {
        await this.cleanDB();
        this.pushDataToDB();
    }
 
    async cleanDB() {
        await FunFactsModel.deleteMany();
    }

    pushDataToDB() {
        this.dataset.forEach((data) => {
            const dataToSave = new FunFactsModel(data);
            dataToSave.save((err) => {
                if (err) return handleError(err);
            });
        })
    }
}
module.exports = FunFactsDBM;