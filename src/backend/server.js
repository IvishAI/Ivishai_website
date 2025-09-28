const awsServerlessExpress = require("aws-serverless-express");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRoutes = require("./api");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use("/api", apiRoutes);

// AWS Lambda Handler
const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
    return awsServerlessExpress.proxy(server, event, context);
};
