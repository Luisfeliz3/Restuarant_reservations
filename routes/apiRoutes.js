const currentTable = require('../data/currentTable');
const waitingTable = require('../data/waitingTable');

module.exports = function(app){

    app.get("/api", function(req, res) {
        res.json({key: "val"});
      });
}