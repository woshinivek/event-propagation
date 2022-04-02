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
  const isColorSwatchEl = evt.target.classList.contains("color-swatch");

  if (!isColorSwatchEl) {
    return;
  }

  removeActiveClassFromCard();

  const swatchEl = evt.target;
  const parentColorCard = swatchEl.closest(".color-card");

  addActiveClassToCard(parentColorCard);

  setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveClassFromCard() {
  const currenActiveCard = document.querySelector(".color-card.is-active");

  if (currenActiveCard) {
    currenActiveCard.classList.remove("is-active");
  }
}

function addActiveClassToCard(card) {
  card.classList.add("is-active");
}
