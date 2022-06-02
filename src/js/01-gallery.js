import SimpleLightbox from "simplelightbox";
import { galleryItems } from "./gallery-items.js";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const newGallery = gallery(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", newGallery);
galleryEl.addEventListener("click", onClickEvent);

function gallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"  />
</a>`;
    })
    .join("");
}
function onClickEvent(elm) {
  elm.preventDefault();
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  overlay: true,
});
