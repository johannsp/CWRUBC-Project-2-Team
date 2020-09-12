// Requiring our models as we've configured it
const db = require("../models");

module.exports = function(app) {
  // Find all albums and return them to the user with res.json
  app.get("/api/albums", (req, res) => {
    ///include: [db.Post] if doing a left join
    db.Album.findAll({}).then(dbAlbum => {
      res.json(dbAlbum);
    });
  });

  app.get("/api/albums/:id", (req, res) => {
    // Find one Album with the id in req.params.id and return them to the user with res.json
    db.Album.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbAlbum => {
      res.json(dbAlbum);
    });
  });

  app.post("/api/albums", (req, res) => {
    // Create an Album with the data available to us in req.body
    console.log(`POST: /api/albums req.body=${JSON.stringify(req.body)}`);
    db.Album.create(req.body).then(dbAlbum => {
      res.json(dbAlbum);
    });
  });

  app.delete("/api/albums/:id", (req, res) => {
    // Delete the Album with the id available to us in req.params.id
    db.Album.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbAlbum => {
      res.json(dbAlbum);
    });
  });
};
