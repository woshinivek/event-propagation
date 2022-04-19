if ("loading" in HTMLImageElement.prototype) {
  addSrcAttribute();
} else {
  addLazySizesScript();
}

const images = document.querySelectorAll("img[data-src]");

images.forEach((img) =>
  img.addEventListener("load", onImageLoaded, { once: true })
);

function onImageLoaded(evt) {
  evt.target.classList.add("appear");
}

function addSrcAttribute() {
  const images = document.querySelectorAll('img[loading="lazy"]');

  images.forEach((img) => {
    img.src = img.dataset.src;
  });
}

function addLazySizesScript() {
  const script = document.createElement("script");

  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";

  //   script.setAttribute(
  //     "integrity",
  //     "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
  //   );
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";

  //   script.setAttribute("crossorigin", "anonymous");
  script.crossOrigin = "anonymous";

  //   script.setAttribute("referrerpolicy", "no-referrer");
  script.referrerPolicy = "no-referrer";

  document.body.appendChild(script);
}
