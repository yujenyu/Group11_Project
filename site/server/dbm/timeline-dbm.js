const TimelineModel = require('../models/timeline-model');
const timelineData = require('../data/timeline-data');

class TimelineDBM {

    constructor() { 
        this.dataset = timelineData;
    }

    async initDB() {
        await this.cleanDB();
        this.pushDataToDB();
    }
 
    async cleanDB() {
        await TimelineModel.deleteMany();
    }

    pushDataToDB() {
        this.dataset.forEach((data) => {
            const dataToSave = new TimelineModel(data);
            dataToSave.save((err) => {
                if (err) return handleError(err);
            });
        })
    }

}
module.exports = TimelineDBM;