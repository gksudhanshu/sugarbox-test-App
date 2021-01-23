/**
 * Main application file
 */

const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const config = require("./config/environment");
const http = require("http");
const routes = require("./api/routes");
const dbConnection = require("./mongoConnection");

const app = express();

dbConnection.then(() => {
  console.log(`Mongo connection is successfull-- ${config.mongo.uri}`);

  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(bodyParser.json());
  app.use("/api", routes);

  const server = http.createServer(app);

  server.listen(config.app.port, () => {
    console.log(`Server has started on port-${config.app.port}`);
  });
});
