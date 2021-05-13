const mongoose = require('mongoose');
const TimelineDBM = require('./dbm/timeline-dbm');
const FunFactsDBM = require('./dbm/funfacts-dbm');
const ArtDetectiveDBM = require('./dbm/artdetective-dbm');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, options).then(function () {
  console.log('MongoDB is connected');
}).then(
  () => {
    const timelineDBM = new TimelineDBM(); timelineDBM.initDB();
    const funfactsDBM = new FunFactsDBM(); funfactsDBM.initDB();
    const artdetectiveDBM = new ArtDetectiveDBM(); artdetectiveDBM.initDB();
  })
  .catch(function (err) {
    console.log(err);
  });