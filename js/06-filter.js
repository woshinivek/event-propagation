import techs from "./tech.js";

// ----------------------------------------------------------------
// ----------------------------------------------------------------

const refs = {
  input: document.querySelector("#filter"),
  list: document.querySelector(".js-list"),
};

const listMarkup = createTechsMarkup(techs);

function createTechsMarkup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join("");
}

populateList(listMarkup);

refs.input.addEventListener("input", onFilterChange);

function onFilterChange(evt) {
  const filter = evt.target.value.toLowerCase();

  const filteredItems = techs.filter((tech) =>
    tech.label.toLowerCase().includes(filter)
  );

  const listMarkup = createTechsMarkup(filteredItems);

  populateList(listMarkup);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}
