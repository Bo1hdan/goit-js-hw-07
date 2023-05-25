import { galleryItems } from "./gallery-items.js";
// Change code below this line

let gallery = document.querySelector(".gallery");

function createGalleryItem() {
  const galleryItem = galleryItems.map((item) => {
    let galleryListEl = document.createElement("li");
    galleryListEl.classList.add("gallery__item");

    let galleryElLink = document.createElement("a");
    galleryElLink.classList.add("gallery__link");
    galleryElLink.setAttribute("href", item.original);

    let img = document.createElement("img");
    img.src = item.preview;
    img.classList.add("gallery__image");
    img.setAttribute("alt", item.description);

    galleryListEl.append(galleryElLink);
    galleryElLink.append(img);

    return galleryListEl;
  });

  gallery.append(...galleryItem);
}
createGalleryItem();

function clickedElement() {
  gallery.addEventListener("click", function (e) {
    e.preventDefault();

    let clickedItemEl = e.target.closest(".gallery__item");

    if (!clickedItemEl) {
      return;
    }
  });
}
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

clickedElement();
console.log(galleryItems);
