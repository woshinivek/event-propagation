import colors from "./colors.js";

console.log(createColorCardsMarkup(colors));

function createColorCardsMarkup(colors) {
  const markup = colors
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

  console.log(markup);
}
