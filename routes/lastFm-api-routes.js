const axios = require("axios");
const querystring = require("querystring");

// The lastFM API requires a parameter in snake case rather than camel case so
// add a c-style comment ESLint will check; yes a c-style comment is required.
// Do not comment this line out with a nested c-style comment!
//
/* eslint-disable camelcase */

module.exports = function(app, apiKey) {
  //search() methods require only one field and return array
  //
  //Test QueryURL: {{{
  //https://ws.audioscrobbler.com/2.0/?method=album.search&api_key=0f24baaf97d9f361f1298f967467d650&album=Believe&format=json
  //______________ }}}
  app.get("/api/lastfm/search/album/:album", (req, res) => {
    const baseUrl = "https://ws.audioscrobbler.com/2.0/?";
    const queryObj = {
      method: "album.search",
      api_key: apiKey,
      album: "",
      format: "json"
    };
    queryObj.album = req.params.album;
    const queryURL = baseUrl + querystring.stringify(queryObj);
    console.log("Last.fm queryURL=\n" + queryURL);
    axios
      .get(queryURL)
      .then(response => {
        // Data is already returned in JSON format so just use .send()
        // and only return the data property from the complete response
        res.send(response.data);
      })
      .catch(error => {
        console.log(error);
        res.send(error);
      });
  });
  //Test QueryURL: {{{
  //https://ws.audioscrobbler.com/2.0/?method=artist.search&api_key=0f24baaf97d9f361f1298f967467d650&artist=Cher&format=json
  //______________ }}}
  //
  app.get("/api/lastfm/search/artist/:artist", (req, res) => {
    const baseUrl = "https://ws.audioscrobbler.com/2.0/?";
    const queryObj = {
      method: "artist.search",
      api_key: apiKey,
      artist: "",
      format: "json"
    };
    queryObj.artist = req.params.artist;
    const queryURL = baseUrl + querystring.stringify(queryObj);
    console.log("Last.fm queryURL=\n" + queryURL);
    axios
      .get(queryURL)
      .then(response => {
        // Data is already returned in JSON format so just use .send()
        // and only return the data property from the complete response
        res.send(response.data);
      })
      .catch(error => {
        console.log(error);
        res.send(error);
      });
  });
  //Test QueryURL: {{{
  //https://ws.audioscrobbler.com/2.0/?method=track.search&api_key=0f24baaf97d9f361f1298f967467d650&track=believe&format=json
  //______________ }}}
  app.get("/api/lastfm/search/song/:song", (req, res) => {
    const baseUrl = "https://ws.audioscrobbler.com/2.0/?";
    const queryObj = {
      method: "track.search",
      api_key: apiKey,
      track: "",
      format: "json"
    };
    queryObj.track = req.params.song;
    const queryURL = baseUrl + querystring.stringify(queryObj);
    console.log("Last.fm queryURL=\n" + queryURL);
    axios
      .get(queryURL)
      .then(response => {
        // Data is already returned in JSON format so just use .send()
        // and only return the data property from the complete response
        res.send(response.data);
      })
      .catch(error => {
        console.log(error);
        res.send(error);
      });
  });
  //getInfo() methods require only one field and return array
  //
  //Test QueryURL: {{{
  //https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=0f24baaf97d9f361f1298f967467d650&artist=Cher&album=Believe&format=json
  //______________ }}}
  app.get("/api/lastfm/getinfo/album/:album/:artist", (req, res) => {
    const baseUrl = "https://ws.audioscrobbler.com/2.0/?";
    const queryObj = {
      method: "album.getinfo",
      api_key: apiKey,
      artist: "",
      album: "",
      format: "json"
    };
    queryObj.artist = req.params.artist;
    queryObj.album = req.params.album;
    const queryURL = baseUrl + querystring.stringify(queryObj);
    console.log("Last.fm queryURL=\n" + queryURL);
    axios
      .get(queryURL)
      .then(response => {
        // Data is already returned in JSON format so just use .send()
        // and only return the data property from the complete response
        res.send(response.data);
      })
      .catch(error => {
        console.log(error);
        res.send(error);
      });
  });
  //Test QueryURL: {{{
  //https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=0f24baaf97d9f361f1298f967467d650&artist=Cher&format=json
  //______________ }}}
  //
  app.get("/api/lastfm/getinfo/artist/:artist", (req, res) => {
    const baseUrl = "https://ws.audioscrobbler.com/2.0/?";
    const queryObj = {
      method: "artist.getinfo",
      api_key: apiKey,
      artist: "",
      format: "json"
    };
    queryObj.artist = req.params.artist;
    const queryURL = baseUrl + querystring.stringify(queryObj);
    console.log("Last.fm queryURL=\n" + queryURL);
    axios
      .get(queryURL)
      .then(response => {
        // Data is already returned in JSON format so just use .send()
        // and only return the data property from the complete response
        res.send(response.data);
      })
      .catch(error => {
        console.log(error);
        res.send(error);
      });
  });
  //Test QueryURL: {{{
  //https://ws.audioscrobbler.com/2.0/?method=track.getinfo&api_key=0f24baaf97d9f361f1298f967467d650&artist=Cher&track=believe&format=json
  //______________ }}}
  app.get("/api/lastfm/getinfo/song/:song/:artist", (req, res) => {
    const baseUrl = "https://ws.audioscrobbler.com/2.0/?";
    const queryObj = {
      method: "track.getinfo",
      api_key: apiKey,
      artist: "",
      track: "",
      format: "json"
    };
    queryObj.artist = req.params.artist;
    queryObj.track = req.params.song;
    const queryURL = baseUrl + querystring.stringify(queryObj);
    console.log("Last.fm queryURL=\n" + queryURL);
    axios
      .get(queryURL)
      .then(response => {
        // Data is already returned in JSON format so just use .send()
        // and only return the data property from the complete response
        res.send(response.data);
      })
      .catch(error => {
        console.log(error);
        res.send(error);
      });
  });
  //Test QueryURL: {{{
  //https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&api_key=0f24baaf97d9f361f1298f967467d650&artist=Cher&format=json
  //______________ }}}
  //getSimilar() methods
  //
  app.get("/api/lastfm/getsimilar/artist/:artist", (req, res) => {
    const baseUrl = "https://ws.audioscrobbler.com/2.0/?";
    const queryObj = {
      method: "artist.getsimilar",
      api_key: apiKey,
      artist: "",
      format: "json"
    };
    queryObj.artist = req.params.artist;
    const queryURL = baseUrl + querystring.stringify(queryObj);
    console.log("Last.fm queryURL=\n" + queryURL);
    axios
      .get(queryURL)
      .then(response => {
        // Data is already returned in JSON format so just use .send()
        // and only return the data property from the complete response
        res.send(response.data);
      })
      .catch(error => {
        console.log(error);
        res.send(error);
      });
  });
  //Test QueryURL: {{{
  //https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&api_key=0f24baaf97d9f361f1298f967467d650&artist=Cher&track=believe&format=json
  //______________ }}}
  app.get("/api/lastfm/getsimilar/song/:song/:artist", (req, res) => {
    const baseUrl = "https://ws.audioscrobbler.com/2.0/?";
    const queryObj = {
      method: "track.getsimilar",
      api_key: apiKey,
      artist: "",
      track: "",
      format: "json"
    };
    queryObj.artist = req.params.artist;
    queryObj.track = req.params.song;
    const queryURL = baseUrl + querystring.stringify(queryObj);
    console.log("Last.fm queryURL=\n" + queryURL);
    axios
      .get(queryURL)
      .then(response => {
        // Data is already returned in JSON format so just use .send()
        // and only return the data property from the complete response
        res.send(response.data);
      })
      .catch(error => {
        console.log(error);
        res.send(error);
      });
  });
  //Test QueryURL: {{{
  //https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&api_key=0f24baaf97d9f361f1298f967467d650&artist=Cher&format=json
  //______________ }}}
  //gettopalbums() method
  //
  app.get("/api/lastfm/gettopalbums/artist/:artist", (req, res) => {
    const baseUrl = "https://ws.audioscrobbler.com/2.0/?";
    const queryObj = {
      method: "artist.gettopalbums",
      api_key: apiKey,
      artist: "",
      format: "json"
    };
    queryObj.artist = req.params.artist;
    const queryURL = baseUrl + querystring.stringify(queryObj);
    console.log("Last.fm queryURL=\n" + queryURL);
    axios
      .get(queryURL)
      .then(response => {
        // Data is already returned in JSON format so just use .send()
        // and only return the data property from the complete response
        res.send(response.data);
      })
      .catch(error => {
        console.log(error);
        res.send(error);
      });
  });
  //Test QueryURL: {{{
  //https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&api_key=0f24baaf97d9f361f1298f967467d650&artist=Cher&format=json
  //______________ }}}
  //gettoptracks() method
  //
  app.get("/api/lastfm/gettoptracks/artist/:artist", (req, res) => {
    const baseUrl = "https://ws.audioscrobbler.com/2.0/?";
    const queryObj = {
      method: "artist.gettoptracks",
      api_key: apiKey,
      artist: "",
      format: "json"
    };
    queryObj.artist = req.params.artist;
    const queryURL = baseUrl + querystring.stringify(queryObj);
    console.log("Last.fm queryURL=\n" + queryURL);
    axios
      .get(queryURL)
      .then(response => {
        // Data is already returned in JSON format so just use .send()
        // and only return the data property from the complete response
        res.send(response.data);
      })
      .catch(error => {
        console.log(error);
        res.send(error);
      });
  });
};
