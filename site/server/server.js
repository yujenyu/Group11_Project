// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const db = require('./db');
const TimelineRoutes = require('./routes/timeline-routes');
const FunFactsRoutes = require('./routes/funfacts-routes');
const ArtDetectiveRoutes = require('./routes/artdetective-routes');

const app = express();

app.use(express.static(path.join(__dirname, '../dist/demo')));

app.use('/timeline', TimelineRoutes);
app.use('/funfacts', FunFactsRoutes);
app.use('/artdetective', ArtDetectiveRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));