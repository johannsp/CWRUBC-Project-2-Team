// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Change members to home
module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the home page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the home page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/home", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // album route loads album.html
  app.get("/album", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/album.html"));
  });

  // artist route loads album.html
  app.get("/artist", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/artist.html"));
  });

  // album route loads album.html
  app.get("/notation", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notation.html"));
  });

  // album route loads album.html
  app.get("/song", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/song.html"));
  });

  // album route loads album.html
  app.get("/collection", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/collection.html"));
  });
};
