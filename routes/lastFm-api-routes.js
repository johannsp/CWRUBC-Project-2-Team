const querystring = require("querystring");

module.exports = function(app, apiKey) {
  //search() methods require only one field and return array
  //
  //Test QueryURL: {{{
  //https://ws.audioscrobbler.com/2.0/?method=album.search&api_key=0f24baaf97d9f361f1298f967467d650&album=Believe&format=json
  //______________ }}}
  app.get("/api/lastfm/search/album/:album", (req, res) => {
    const queryObj = {
      url: "https://ws.audioscrobbler.com/2.0/?",
      method: "album.search",
      appid: apiKey,
      album: "",
      format: "json"
    };
    queryObj.album = req.param.album;
    const queryURL = querystring.stringify(queryObj);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(response => {
      // Data is already returned in JSON format so just use .send()
      res.send(response);
    });
  });
  //Test QueryURL: {{{
  //https://ws.audioscrobbler.com/2.0/?method=artist.search&api_key=0f24baaf97d9f361f1298f967467d650&artist=Cher&format=json
  //______________ }}}
  //
  app.get("/api/lastfm/search/artist/:artist", (req, res) => {
    const queryObj = {
      url: "https://ws.audioscrobbler.com/2.0/?",
      method: "artist.getinfo",
      appid: apiKey,
      artist: "",
      format: "json"
    };
    queryObj.artist = req.param.artist;
    const queryURL = querystring.stringify(queryObj);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(response => {
      // Data is already returned in JSON format so just use .send()
      res.send(response);
    });
  });
  //Test QueryURL: {{{
  //https://ws.audioscrobbler.com/2.0/?method=track.search&api_key=0f24baaf97d9f361f1298f967467d650&track=believe&format=json
  //______________ }}}
  app.get("/api/lastfm/getinfo/song/:song", (req, res) => {
    const queryObj = {
      url: "https://ws.audioscrobbler.com/2.0/?",
      method: "track.getinfo",
      appid: apiKey,
      track: "",
      format: "json"
    };
    queryObj.track = req.param.song;
    const queryURL = querystring.stringify(queryObj);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(response => {
      // Data is already returned in JSON format so just use .send()
      res.send(response);
    });
  });
  //getInfo() methods require only one field and return array
  //
  //Test QueryURL: {{{
  //https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=0f24baaf97d9f361f1298f967467d650&artist=Cher&album=Believe&format=json
  //______________ }}}
  app.get("/api/lastfm/getinfo/album/:album/:artist", (req, res) => {
    const queryObj = {
      url: "https://ws.audioscrobbler.com/2.0/?",
      method: "album.getinfo",
      appid: apiKey,
      artist: "",
      album: "",
      format: "json"
    };
    queryObj.artist = req.param.artist;
    queryObj.album = req.param.album;
    const queryURL = querystring.stringify(queryObj);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(response => {
      // Data is already returned in JSON format so just use .send()
      res.send(response);
    });
  });
  //Test QueryURL: {{{
  //https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=0f24baaf97d9f361f1298f967467d650&artist=Cher&format=json
  //______________ }}}
  //
  app.get("/api/lastfm/getinfo/artist/:artist", (req, res) => {
    const queryObj = {
      url: "https://ws.audioscrobbler.com/2.0/?",
      method: "artist.getinfo",
      appid: apiKey,
      album: "",
      artist: "",
      format: "json"
    };
    queryObj.artist = req.param.artist;
    const queryURL = querystring.stringify(queryObj);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(response => {
      // Data is already returned in JSON format so just use .send()
      res.send(response);
    });
  });
  //Test QueryURL: {{{
  //https://ws.audioscrobbler.com/2.0/?method=track.getinfo&api_key=0f24baaf97d9f361f1298f967467d650&artist=Cher&track=believe&format=json
  //______________ }}}
  app.get("/api/lastfm/getinfo/song/:song/:artist", (req, res) => {
    const queryObj = {
      url: "https://ws.audioscrobbler.com/2.0/?",
      method: "track.getinfo",
      appid: apiKey,
      artist: "",
      track: "",
      format: "json"
    };
    queryObj.artist = req.param.artist;
    queryObj.track = req.param.song;
    const queryURL = querystring.stringify(queryObj);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(response => {
      // Data is already returned in JSON format so just use .send()
      res.send(response);
    });
  });
};
