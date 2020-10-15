// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Reservations Home Page");
});


app.get("/reserve", function(req, res) {
    res.send("Reserved Tables");
  });


  app.get("/table", function(req, res) {
    res.send("See all Tables");
  });
// app.get("/:character", function(req, res) {
//   var chosen = req.params.character;

//   // What does this log?
//   console.log(chosen);

//   res.end();
// });


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
