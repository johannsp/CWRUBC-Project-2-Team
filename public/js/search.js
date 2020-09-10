const lastFmApiKey = "a9934be7d65f534ea8c336db02853748";
const lastFmQueryURL = "https://ws.audioscrobbler.com/2.0/";
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

  if (songTitle != "") {
    searchCard();
    searchTrack(songTitle);
    return $("#songTitle").val("");
  } else if (artist != "") {
    searchCard();
    searchArtist(artist);
    return $("#artist").val("");
  } else if (album != "") {
    searchCard();
    searchAlbum(album);
    return $("#album").val("");
  }
});

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
function searchTrack(songTitle){
    var searchTrackQueryURL = `${lastFmQueryURL}?method=track.search&track=${songTitle}&api_key=${lastFmApiKey}&format=json`;

    $.ajax({
        url: searchTrackQueryURL,
        method: "GET",
        dataType: "jsonp"
    }).then(function(response){
        console.log(response);
        var listSearchTrack = `<div class="card flex-fill m-5 cbod lettering">
            <h5 class="card-header text-center fontWhite">Possible songs titled: "${songTitle}"</h5>
            <div class="card-body">
            <div class="card-columns" id="searchTrack"></div>
        </div>
    </div>`;

    $("#resultsArea").html(listSearchTrack);

    for(i = 0; i < 9; i++){
        var eachTrackSearchCard = `<div class="col-sm">
            <div class="card m-3">
                <h5 class="card-header text-center">${i + 1}</h5>
                <div class="card-body">
                    <h5 class="card-title text-center">Title: "${response.results.trackmatches.track[i].name}"</h5>
                    <p class="card-text text-center">Artist: "${response.results.trackmatches.track[i].artist}"</p>
                    <a href="${response.results.trackmatches.track[i].url}">Learn more</a>
                </div>
            </div>
        </div>`;

        $("#searchTrack").append(eachTrackSearchCard);

//Function to search by album
function searchAlbum(album){
    var searchAlbumQueryURL = `${lastFmQueryURL}?method=album.search&album=${album}&api_key=${lastFmApiKey}&format=json`;

    $.ajax({
        url: searchAlbumQueryURL,
        method: "GET",
        dataType: "jsonp"
    }).then(function(response){
        console.log(response);
        console.log(response.results["@attr"]);
        var listSearchAlbums = `<div class="card flex-fill m-5 cbod lettering">
            <h5 class="card-header text-center fontWhite">Possible albums with title: "${response.results["@attr"].for}"</h5>
            <div class="card-body">
            <div class="card-columns" id="searchAlbums"></div>
        </div>
    </div>`;

    $("#displayArea").html(listSearchAlbums);

    for(i = 0; i < 9; i++){
        var eachAlbumSearchCard = `<div class="col-sm">
            <div class="card m-3">
                <h5 class="card-header text-center">${i + 1}</h5>
                <div class="card-body">
                    <h5 class="card-title text-center">Album Title: "${response.results.albummatches.album[i].name}"</h5>
                    <p class="card-text text-center">Artist: "${response.results.albummatches.album[i].artist}"</p>
                    <a href="${response.results.albummatches.album[i].url}">Learn more</a>
                </div>
            </div>
        </div>`;

        $("#searchAlbums").append(eachAlbumSearchCard);
        
        };
    });
};

//Function to search by artist
function searchArtist(artist){
    var searchArtistQueryURL = `${lastFmQueryURL}?method=artist.search&artist=${artist}&api_key=${lastFmApiKey}&format=json`;

    $.ajax({
        url: searchArtistQueryURL,
        method: "GET",
        dataType: "jsonp"
    }).then(function(response){
        console.log(response);
        var listSearchArtist = `<div class="card flex-fill m-5 cbod lettering">
            <h5 class="card-header text-center fontWhite">Possible artists named: "${response.results["@attr"].for}"</h5>
            <div class="card-body">
            <div class="card-columns" id="searchArtist"></div>
        </div>
    </div>`;

    $("#displayArea").html(listSearchArtist);

    for(i = 0; i < 9; i++){
        var eachArtistSearchCard = `<div class="col-sm">
            <div class="card m-3">
                <h5 class="card-header text-center">${i + 1}</h5>
                <div class="card-body">
                    <h5 class="card-title text-center">Artist: "${response.results.artistmatches.artist[i].name}"</h5>
                    <a href="${response.results.artistmatches.artist[i].url}">Learn more</a>
                </div>
            </div>
        </div>`;

        $("#searchArtist").append(eachArtistSearchCard);
        
        };
    });
};