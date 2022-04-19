const images = document.querySelectorAll('img[loading="lazy"]');

images.forEach((img) =>
  img.addEventListener("load", onImageLoaded, { once: true })
);

function onImageLoaded(evt) {
  evt.target.classList.add("appear");
}
