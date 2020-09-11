// Requiring our models as we've configured it
const db = require("../models");


module.exports = function(app) {
  // Find all songs and return them to the user with res.json
  app.get("/api/songs", function(req, res) {
      ///include: [db.Post] if doing a left join
    db.Song.findAll({}).then(function(dbSong){
      res.json(dbSong);
    });
  });

  app.get("/api/songs/:id", function(req, res) {
    // Find one song with the id in req.params.id and return them to the user with res.json
    db.Song.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbSong) {
      res.json(dbSong);
    });
  });


  app.post("/api/songs", function(req, res) {
  //Create a notation with the data available to us in req.body
    console.log(req.body);
    db.Song.create(req.body).then(function(dbSong) {
      res.json(dbSong);
    });
  });

  
  app.delete("/api/songs/:id", function(req, res) {
    // Delete the notation with the id available to us in req.params.id
    db.Song.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSong) {
      res.json(dbSong);
    });
  });

};