// Requiring our models as we've configured it
const db = require("../models");


module.exports = function(app) {
  // Find all notations and return them to the user with res.json
  app.get("/api/notations", function(req, res) {
      ///include: [db.Post] if doing a left join
    db.Notation.findAll({}).then(function(dbNotation){
      res.json(dbNotation);
    });
  });

  app.get("/api/notations/:id", function(req, res) {
    // Find one notation with the id in req.params.id and return them to the user with res.json
    db.Notation.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbNotation) {
      res.json(dbNotation);
    });
  });


  app.post("/api/notations", function(req, res) {
  //Create a notation with the data available to us in req.body
    console.log(req.body);
    db.Notation.create(req.body).then(function(dbNotation) {
      res.json(dbNotation);
    });
  });

  
  app.delete("/api/notations/:id", function(req, res) {
    // Delete the notation with the id available to us in req.params.id
    db.Notation.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbNotation) {
      res.json(dbNotation);
    });
  });

};