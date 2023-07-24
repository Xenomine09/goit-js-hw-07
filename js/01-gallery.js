import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (element) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=${element.original}>
        <img
          class="gallery__image"
          src=${element.preview}
          data-source=${element.original}
          alt=${element.description}
        />
      </a>
    </li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);


gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName != "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    
    <img src="${event.target.dataset.source}" width="800", height ="600">
  `);

  instance.show();

  gallery.addEventListener("keydown", (event) => {

    if (event.code == "Escape") {
      instance.close();
    }
    
  });
});