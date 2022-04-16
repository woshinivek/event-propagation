import techs from "./tech.js";

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};

const listItemsMarkup = createListItemsMarkup(techs);
refs.list.innerHTML = listItemsMarkup;

function createListItemsMarkup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join("");
}
