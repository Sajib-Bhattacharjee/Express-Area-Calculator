const express = require("express");
const app = express();
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/views/circle.html");
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/views/triangle.html");
});

//All Post Requests Here
app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const circleValue = radius * radius;
  res.send(`This Redius of Circle is: ${circleValue}`);
});

app.post("/triangle", (req, res) => {
  const base = req.body.base;
  const height = req.body.height;
  const triangleValue = 0.5 * base * height;
  res.send(`This Area of Triangle is: ${triangleValue}`);
});
module.exports = app;
