const fs = require("fs");
const path = require("path");

module.exports = function (app) {

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });


  app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
  });

  app.get("/view", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

};
