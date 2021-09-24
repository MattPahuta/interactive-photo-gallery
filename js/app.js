console.log("JavaScript is a go!");

baguetteBox.run('.gallery');

// *** Custom search utility *** //
// ***************************** //

const searchInput = document.querySelector("#search"); // get the search input
const galleryImages = document.querySelectorAll(".img-link"); // get all the gallery image containers ('a' elements), results in node list


const showHideImage = function () {
  for (let image of galleryImages) {
    let caption = image.dataset.caption;
    if (caption.includes(searchInput.value)) {
      image.style.display = "";
    } else { 
      image.style.display = "none";
    }
  }
}

searchInput.addEventListener("keyup", () => {
  galleryImages.forEach(() => {
    showHideImage();
  })
});