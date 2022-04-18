import techs from "./tech.js";

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};

refs.input.addEventListener("input", onFilterChange);

const techsMarkup = createElementsMarkup(techs);
refs.list.innerHTML = techsMarkup;

function onFilterChange(evt) {
  const filter = evt.target.value.toLowerCase();

  const filteredItems = techs.filter((tech) =>
    tech.label.toLowerCase().includes(filter)
  );
}

function createElementsMarkup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join("");
}
