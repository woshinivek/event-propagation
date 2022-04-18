import techs from "./tech.js";

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};

const techsMarkup = createElementsMarkup(techs);
populateList(techsMarkup);

refs.input.addEventListener("input", _.debounce(onFilterChange, 500));

function createElementsMarkup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join("");
}

function onFilterChange(evt) {
  const filter = evt.target.value.toLowerCase();

  const filteredItems = techs.filter((tech) =>
    tech.label.toLowerCase().includes(filter)
  );

  const listFilteredItemsMarkup = createElementsMarkup(filteredItems);
  populateList(listFilteredItemsMarkup);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}
