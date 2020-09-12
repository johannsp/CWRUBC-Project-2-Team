$(document).ready(() => {
  // Replace direct Last.fm API call with call to our server
  // so take dataType: "jsonp" parameter out of .ajax() call
  /* {{{ **
   * const lastFmApiKey = "***";
   * const lastFmQueryURL = "https://ws.audioscrobbler.com/2.0/";
   * }}} */
  const lastFmQueryURL = "/api/lastfm/";
  let songTitle;
  let artist;
  let album;

  //Search button click function
  $(".btn-search").on("click", event => {
    event.preventDefault();
    console.log("click");
    //Variables to store user input values
    songTitle = $("#songTitle")
      .val()
      .trim();
    artist = $("#artist")
      .val()
      .trim();
    album = $("#album")
      .val()
      .trim();

    if (songTitle !== "") {
      searchCard();
      searchTrack(songTitle);
      return $("#songTitle").val("");
    } else if (artist !== "") {
      searchCard();
      searchArtist(artist);
      return $("#artist").val("");
    } else if (album !== "") {
      searchCard();
      searchAlbum(album);
      return $("#album").val("");
    }
  });

  /* {{{ **
   * $(".btn-submit").on("click", event => {
   *   event.preventDefault();
   *   console.log("click");
   *   //variable to store input values
   *   songTitle = $("#songTitle")
   *     .val()
   *     .trim();
   *   artist = $("#artist")
   *     .val()
   *     .trim();
   *   album = $("#album")
   *     .val()
   *     .trim();
   *
   *   if (songTitle !== "" && artist !== "") {
   *     //function to call the track
   *     getTrackInfo(songTitle, artist);
   *
   *     return $("#songTitle,#artist").val("");
   *   } else if (artist !== "" && album !== "") {
   *     //function to pull up album info
   *     //getAlbumInfo(artist, album);
   *
   *     return $("#artist,#album").val("");
   *   } else if (artist !== "") {
   *     //function to generate buttons for artist only input
   *     mainArtistCard();
   *     getArtistInfo(artist);
   *
   *     return $("#artist").val("");
   *   } else if (album !== "") {
   *     albumSearch();
   *     searchAlbum(album);
   *
   *     return $("#album").val("");
   *   }
   * });
   * }}} */

  //Function to create results cards and display them
  function searchCard() {
    const searchCard = `<div class="card text-center m-5 cbod lettering">
          <div class="card-body cbod">
              <div class="justify-content-center cbod" id="displayArea">
              </div>
          </div>    
      </div>`;

    $("#resultsDisplay").html(searchCard);
  }

  //Function to search by song title
  function searchTrack(songTitle) {
    /* {{{ **
     * const searchTrackQueryURL = `${lastFmQueryURL}?method=track.search&track=${songTitle}&api_key=${lastFmApiKey}&format=json`;
     * }}} */
    const searchTrackQueryURL = `${lastFmQueryURL}search/song/${songTitle}`;
    console.log("searchTrackQueryURL=\n" + searchTrackQueryURL);

    /* {{{ **
     * $.ajax({
     *   url: searchTrackQueryURL,
     *   method: "GET",
     *   dataType: "jsonp"
     * }).then()
     * }}} */
    $.ajax({
      url: searchTrackQueryURL,
      method: "GET"
    }).then(response => {
      console.log(response);
      const listSearchTrack = `<div class="card flex-fill m-5 cbod lettering">
    <h5 class="card-header text-center fontWhite">Possible songs titled: "${songTitle}"</h5>
    <div class="card-body">
      <div class="card-columns" id="searchTrack"></div>
    </div>
  </div>`;

      $("#displayArea").html(listSearchTrack);

      for (let i = 0; i < 9; i++) {
        const rowData = response.results.trackmatches.track[i];
        // Select which response data to display and save
        const title = rowData.name;
        const artist = rowData.artist;
        const lastfmURL = rowData.url;
        const imageURL = rowData.image[3]["#text"];
        // prettier-ignore
        const eachTrackSearchCard = `<div class="col-sm">
    <div class="card m-3">
      <h5 class="card-header text-center">${i + 1}</h5>
      <div class="card-body">
        <h5 class="card-title text-center">Title: "${title}"</h5>
        <p class="card-text text-center">Artist: "${artist}"</p>
        <a target="_blank" href="${lastfmURL}">Learn more</a>
        <button class="pick-song"
          data-id="${i}"
          data-title="${title}"
          data-artist="${artist}"
          data-image="${imageURL}"
          >Add it </button>
      </div>
    </div>
  </div>`;
        $("#searchTrack").append(eachTrackSearchCard);
      }
    });
  }

  $(document).on("click", ".pick-song", () => {
    const id = $(this).data("id");
    const title = $(this).data("title");
    const artist = $(this).data("artist");
    const image = $(this).data("image");
    console.log("∞° id=\n" + id);
    console.log("∞° title=\n" + title);
    console.log("∞° artist=\n" + artist);
    console.log("∞° image=\n" + image);

    const bodyObj = {
      title: "",
      artist: "",
      yearReleased: 0,
      artLink: image,
      markedFavorite: false
    };
    bodyObj.title = title;
    bodyObj.artist = artist;
    console.log("∞° bodyObj=\n" + JSON.stringify(bodyObj));

    // Send the UPDATE request.
    $.ajax("/api/songs/", {
      type: "POST",
      body: bodyObj
    }).then(() => {
      console.log(`saving:, id=${id} title=${title} artist=${artist}`);
      // Reload the page to get the updated list
      //location.reload();
    });
  });

  //Function to search by album
  function searchAlbum(album) {
    /* {{{ **
     * const searchAlbumQueryURL = `${lastFmQueryURL}?method=album.search&album=${album}&api_key=${lastFmApiKey}&format=json`;
     * }}} */
    const searchAlbumQueryURL = `${lastFmQueryURL}search/album/${album}`;
    console.log("searchAlbumQueryURL=\n" + searchAlbumQueryURL);

    /* {{{ **
     * $.ajax({
     *   url: searchAlbumQueryURL,
     *   method: "GET",
     *   dataType: "jsonp"
     * }).then()
     * }}} */
    $.ajax({
      url: searchAlbumQueryURL,
      method: "GET"
    }).then(response => {
      console.log(response);
      console.log(response.results["@attr"]);
      const listSearchAlbums = `<div class="card flex-fill m-5 cbod lettering">
    <h5 class="card-header text-center fontWhite">Possible albums with title: "${response.results["@attr"].for}"</h5>
      <div class="card-body">
        <div class="card-columns" id="searchAlbums"></div>
      </div>
  </div>`;

      $("#displayArea").html(listSearchAlbums);

      for (i = 0; i < 9; i++) {
        // prettier-ignore
        const eachAlbumSearchCard = `<div class="col-sm">
    <div class="card m-3">
      <h5 class="card-header text-center">${i + 1}</h5>
      <div class="card-body">
        <h5 class="card-title text-center">Album Title: "${response.results.albummatches.album[i].name}"</h5>
        <p class="card-text text-center">Artist: "${response.results.albummatches.album[i].artist}"</p>
        <a target="_blank" href="${response.results.albummatches.album[i].url}">Learn more</a>
      </div>
    </div>
  </div>`;

        $("#searchAlbums").append(eachAlbumSearchCard);
      }
    });
  }

  //Function to search by artist
  function searchArtist(artist) {
    /* {{{ **
     * const searchArtistQueryURL = `${lastFmQueryURL}?method=artist.search&artist=${artist}&api_key=${lastFmApiKey}&format=json`;
     * }}} */
    const searchArtistQueryURL = `${lastFmQueryURL}search/artist/${artist}`;
    console.log("searchArtistQueryURL=\n" + searchArtistQueryURL);

    /* {{{ **
     * $.ajax({
     *   url: searchArtistQueryURL,
     *   method: "GET",
     *   dataType: "jsonp"
     * }).then()
     * }}} */
    $.ajax({
      url: searchArtistQueryURL,
      method: "GET"
    }).then(response => {
      console.log(response);
      const listSearchArtist = `<div class="card flex-fill m-5 cbod lettering">
    <h5 class="card-header text-center fontWhite">Possible artists named: "${response.results["@attr"].for}"</h5>
    <div class="card-body">
      <div class="card-columns" id="searchArtist"></div>
    </div>
  </div>`;

      $("#displayArea").html(listSearchArtist);

      for (i = 0; i < 9; i++) {
        // prettier-ignore
        const eachArtistSearchCard = `<div class="col-sm">
    <div class="card m-3">
      <h5 class="card-header text-center">${i + 1}</h5>
      <div class="card-body">
        <h5 class="card-title text-center">Artist: "${response.results.artistmatches.artist[i].name}"</h5>
        <a target="_blank" href="${response.results.artistmatches.artist[i].url}">Learn more</a>
      </div>
    </div>
  </div>`;
        $("#searchArtist").append(eachArtistSearchCard);
      }
    });
  }
});
