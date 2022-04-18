import techs from "./tech.js";

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};

const techsMarkup = createElementsMarkup(techs);
refs.list.innerHTML = techsMarkup;

function createElementsMarkup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join("");
}
