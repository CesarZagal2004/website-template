/** @type {HTMLDivElement} */
let searchAlert = document.getElementById("alert-search-warn");
/** @type {HTMLInputElement} */
let searchInput = document.getElementById("nav-search");
/** @type {HTMLUListElement} */
let fruitList = document.getElementById("ul-fav-fruits");

// Hide the search results alert warning.
searchAlert.style.display = "none";
// Focus the search bar so users can start typing to search immediately.
searchInput.focus();

// Check for results after each keystroke on the search bar.
searchInput.addEventListener("keyup", function () {
  let matchesFound = 0;
  const query = this.value.toLowerCase().trim();

  for (const child of fruitList.children) {
    const fruitName = child.innerText;
    const matchFound = fruitName.toLowerCase().includes(query);

    // Display or hide the item, if the query matches the fruit name.
    if (matchFound) {
      child.style.display = "list-item";
      matchesFound += 1;
    } else {
      child.style.display = "none";
    }
  }

  // Show or hide the alert, if no results were found.
  if (query !== "" && matchesFound === 0) {
    searchAlert.innerText = `No results found for '${query}'.`;
    searchAlert.style.display = "block";
  } else {
    searchAlert.style.display = "none";
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
