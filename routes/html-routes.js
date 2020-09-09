// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
 
// album route loads album.html
app.get("/album", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/album.html"));
});

 // artist route loads album.html
 app.get("/artist", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/artist.html"));
});

 // album route loads album.html
 app.get("/notation", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/notation.html"));
});

 // album route loads album.html
 app.get("/song", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/song.html"));
});

 // album route loads album.html
 app.get("/collection", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/collection.html"));
});

};
