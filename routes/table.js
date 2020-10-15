module.exports = function(app){

    app.get("/table", function(req, res) {
        res.send("See all Tables");
      });
}