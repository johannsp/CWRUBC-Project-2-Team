//ESLint seems to hate this page and we don't know why
//On page load, run myCollection
$(document).ready(() => {
  myCollection();

  //Function to display music collection as cards
  function myCollection() {
    $.ajax({
      url: "/api/albums",
      method: "GET"
    }).then(response => {
      response.forEach(item => {
        console.log("∞° item=\n" + JSON.stringify(item));
        const collectionCards = `<div class="card text-center m-5" style="width: 22rem;">
  <p class="card-header text-center">${item.title} by ${item.artist}</p>
  <div class="card-body">
    <div class="justify-content-center"">
      <img src="${item.artLink}"> 
    </div>
  </div>
</div>`;
        $("#collectionDisplay").append(collectionCards);
      });
      $.ajax({
        url: "/api/songs",
        method: "GET"
      }).then(response => {
        response.forEach(item => {
          console.log("∞° item=\n" + JSON.stringify(item));
          const collectionCards = `<div class="card text-center m-5" style="width: 22rem;">
  <p class="card-header text-center">${item.title} by ${item.artist}</p>
  <div class="card-body">
    <div class="justify-content-center"">
      <img src="${item.artLink}"> 
    </div>
  </div>
</div>`;
          $("#collectionDisplay").append(collectionCards);
        });
      });
    });
  }
});
