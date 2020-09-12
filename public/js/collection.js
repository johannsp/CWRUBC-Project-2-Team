//ESLint seems to hate this page and we don't know why
//On page load, run myCollection
$(document).ready(() => {
  myCollection();

  //Function to display music collection as cards
  function myCollection() {
    //This for loop is a placeholder. It may need to be a for each?
    for (let i = 0; i < 9999; i++) {
      const collectionCards = `<div class="card text-center m-5" style="width: 14rem;">
  <p class="card-header text-center">${ALBUM} by ${ARTIST}</p>
  <div class="card-body">
    <div class="justify-content-center"">
      <img src="${ARTWORKLINK}"> 
    </div>
  </div>
</div>`;
      $("#collectionDisplay").append(collectionCards);
    }
  }
});
