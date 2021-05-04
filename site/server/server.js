// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const db = require('./db');
const TimelineRoutes = require('./routes/timeline-routes');
const FunFactsRoutes = require('./routes/funfacts-routes');
const ArtDetectiveRoutes = require('./routes/artdetective-routes');

// // Get our API routes
// const api = require('./api');

const app = express();

// // Parsers for POST data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// Point static path to dist (folder where build files are located)
app.use(express.static(path.join(__dirname, '../dist/demo')));

// Set our api routes
app.use('/timeline', TimelineRoutes);
app.use('/funfacts', FunFactsRoutes);
app.use('/artdetective', ArtDetectiveRoutes);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));