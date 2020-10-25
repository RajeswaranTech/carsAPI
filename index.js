
const express = require('express'),
  app = express(),
  mysql = require('mysql'), // import mysql module
  cors = require('cors'),
  bodyParser = require('body-parser');

// setup database
db = mysql.createConnection({
  host: 'database-1.cluster-chdahgpxxlki.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'Mobility123',
  database: 'BI_Analytics'
})

// make server object that contain port property and the value for our server.
var server = {
  port: 4050
};

const carsRouter = require('./routes/cars');

// use the modules
app.use(cors())
app.use(bodyParser.json());

// use router
app.use('/cars', carsRouter);

// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));