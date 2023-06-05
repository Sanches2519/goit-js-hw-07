import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
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
new SimpleLightbox('.gallery a', { 
  captionSelector: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom'
 });

// console.log(galleryItems);
