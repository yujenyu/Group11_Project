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
// const url = `mongodb://test-user:testtest@cluster0-shard-00-00.1pmsc.mongodb.net:27017,cluster0-shard-00-01.1pmsc.mongodb.net:27017,cluster0-shard-00-02.1pmsc.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-113206-shard-0&authSource=admin&retryWrites=true&w=majority`;

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