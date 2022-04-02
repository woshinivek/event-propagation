import colors from "./colors.js";

const paletteContainer = document.querySelector(".js-palette");
const markup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML("beforeend", markup);

paletteContainer.addEventListener("click", onColorPaletteClick);

function createColorCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
        <div class="color-card">
        <div
        class="color-swatch"
        data-hex="${hex}"
        data-rgb="${rgb}"
        style="background-color: ${hex}"
        ></div>
        <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
        </div>
        </div>
        `;
    })
    .join("");
}

function onColorPaletteClick(evt) {
  if (evt.target.classList.contains("color-swatch")) {
    console.log(evt.target);
  }
}
