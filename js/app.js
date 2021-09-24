console.log("JavaScript is a go!");

baguetteBox.run('.gallery');

// *** Out-of-the-box search utility *** //
// const search = new Filter('search', 'data-caption');


// *** Custom search utility *** //
// ***************************** //

// *** Search box event variable and event listener
let searchInput = document.querySelector("#search");
// var gallery = document.querySelectorAll(".gallery-item");
let galleryImages = document.querySelectorAll("a"); // get all the gallery images ('a' elements), results in node list
let captionsArray = Array.from(galleryImages); // turn galleryImages nodeList into an array

// captionsArray[i].dataset.caption

searchInput.addEventListener("keyup", function() {
  console.log(searchInput.value)
  if (searchInput.value === 'a') {
    console.log(captionsArray[3].dataset.caption)
  }

  // if current value of of searchInput (searchInput.value) is included in captionsArray
  // captionsArray[i].dataset.caption 
  // if current value is not included in captionsArray
    // captionsArray[i].style.display = 'none';
  // else 
    // captionsArray[i].style.display = '';

  for (let i = 0; i < captionsArray.length; i++) {
    let caption = captionsArray[i].dataset.caption;
    if (caption.includes(searchInput.value)) {
      captionsArray[i].style.display = "";
    } else {
      captionsArray[i].style.display = "none";
    }
  }

});


// *** Example **** //

// var input = document.getElementById("myInput");
// var filter = input.value.toUpperCase(); // searchFilter - get search input value 
// var ul = document.getElementById("myUL");
// var li = ul.getElementsByTagName("li");

// for (var i = 0; i < li.length; i++) {
//     var a = li[i].getElementsByTagName("a")[0];
//     var txtValue = a.textContent || a.innerText; // captionsArray

//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//     } else {
//         li[i].style.display = "none";
//     }

// }