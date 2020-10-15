// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);
// Routes
// ===========================================================





 
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
