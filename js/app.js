baguetteBox.run('.gallery');

const searchInput = document.querySelector("#search"); // get the search input
const galleryImages = document.querySelectorAll(".img-link"); // get all the gallery image containers ('a' elements), results in node list

// *** Custom search utility *** //
// ***************************** //
const showHideImage = function () {
  for (let image of galleryImages) { // loop over galleryImages node list
    let caption = image.dataset.caption.toLowerCase(); // ensure caption is converted toLowerCase
    if (caption.includes(searchInput.value.toLowerCase())) { // match caption content to searchInput.toLowerCase
      image.style.display = ""; // maintain display if it's a match
    } else { 
      image.style.display = "none"; // remove if it's not a match
    }
  }
}

searchInput.addEventListener("keyup", () => {
  galleryImages.forEach(() => { // forEach available for node list
    showHideImage();
  })
});
