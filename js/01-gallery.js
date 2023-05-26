import { galleryItems } from "./gallery-items.js";
// Change code below this line

// let gallery = document.querySelector(".gallery");

// function createGalleryItem() {
//   const galleryItem = galleryItems.map((item) => {
//     let galleryListEl = document.createElement("li");
//     galleryListEl.classList.add("gallery__item");

//     let galleryElLink = document.createElement("a");
//     galleryElLink.classList.add("gallery__link");

//     let img = document.createElement("img");
//     img.src = item.preview;
//     img.classList.add("gallery__image");
//     img.setAttribute("data-source", item.original);
//     img.setAttribute("alt", item.description);

//     galleryListEl.append(galleryElLink);
//     galleryElLink.append(img);

//     return galleryListEl;
//   });

//   gallery.append(...galleryItem);
// }
// createGalleryItem();

let gallery = document.querySelector(".gallery");

const galleryItem = galleryItems.map((item) => {
  let galleryListEl = `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`;
  return galleryListEl;
});

gallery.insertAdjacentHTML("beforeend", galleryItem.join(""));

function clickedElement() {
  gallery.addEventListener("click", function (e) {
    e.preventDefault();

    let clickedItemEl = e.target.closest("img");

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
