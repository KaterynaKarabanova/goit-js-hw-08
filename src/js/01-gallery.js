// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const galleryList = document.querySelector(".gallery")
const markup = galleryItems.map(({original, preview, description})=> 
  ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}" 
    />
  </a>
</li>`
)
galleryList.insertAdjacentHTML(`beforeend`, markup.join(``))

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: `alt` ,
    captionPosition: `bottom`,
    captionDelay: 250, 
});
