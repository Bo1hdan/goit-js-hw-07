import { galleryItems } from "./gallery-items.js";
// Change code below this line

let gallery = document.querySelector(".gallery");

function createGalleryItem() {
  const galleryItem = galleryItems.map((item) => {
    let galleryListEl = document.createElement("li");
    galleryListEl.classList.add("gallery__item");

    let galleryElLink = document.createElement("a");
    galleryElLink.classList.add("gallery__link");

    let img = document.createElement("img");
    img.src = item.preview;
    img.classList.add("gallery__image");
    img.setAttribute("data-source", item.original);
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

    let clickedItemEl = e.target.closest(".gallery__image");

    if (!clickedItemEl) {
      return;
    }
    let { source } = clickedItemEl.dataset;

    const instance = basicLightbox.create(`
      <img src="${source}" alt="" />
    `);

    instance.show();
  });
}
clickedElement();
console.log(galleryItems);
