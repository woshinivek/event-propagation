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

// refs.input.addEventListener("input", _.throttle(onFilterChange, 600));
refs.input.addEventListener("input", _.debounce(onFilterChange, 300));

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

// console.log(fuse.prototype);

const fuse = new Fuse(techs);

console.log(fuse);
