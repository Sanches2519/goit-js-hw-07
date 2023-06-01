import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onClick);
const imagesEl = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}">
      </a>
    </li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", imagesEl);
function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.closest(".gallery__image")) {
    return;
  }
  }

// console.log(galleryItems);
