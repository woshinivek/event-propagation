import techs from "./tech.js";

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};

const techsMarkup = createElementsMarkup(techs);
refs.list.innerHTML = techsMarkup;

refs.input.addEventListener("input", onFilterChange);

function createElementsMarkup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join("");
}

function onFilterChange(evt) {
  const filter = evt.target.value.toLowerCase();

  const filteredItems = techs.filter((tech) =>
    tech.label.toLowerCase().includes(filter)
  );

  const listFilteredItemsMarkup = createElementsMarkup(filteredItems);
  refs.list.innerHTML = listFilteredItemsMarkup;
}
