// Requiring our models as we've configured it
const db = require("../models");

module.exports = app => {
  // Find all notations and return them to the user with res.json
  app.get("/api/notations", (req, res) => {
    ///include: [db.Post] if doing a left join
    db.Notation.findAll({}).then(dbNotation => {
      res.json(dbNotation);
    });
  });

  app.get("/api/notations/:id", (req, res) => {
    // Find one notation with the id in req.params.id and return them to the user with res.json
    db.Notation.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbNotation => {
      res.json(dbNotation);
    });
  });

  app.post("/api/notations", (req, res) => {
    //Create a notation with the data available to us in req.body
    console.log(req.body);
    db.Notation.create(req.body).then(dbNotation => {
      res.json(dbNotation);
    });
  });

  app.delete("/api/notations/:id", (req, res) => {
    // Delete the notation with the id available to us in req.params.id
    db.Notation.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbNotation => {
      res.json(dbNotation);
    });
  });
};
