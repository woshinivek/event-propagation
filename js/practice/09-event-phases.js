const EVENT_PHASES = {
  NONE: 0,
  CAPTURE: 1,
  TARGET: 2,
  BUBBLE: 3,
};

/*
1. Протестировать основные принципы распространения
(event propagation) и всплытия (event bubbling)событий
*/

const itemDivs = document.querySelectorAll(".itemDiv");

window.onload = () => {
  itemDivs.forEach((item) => item.addEventListener("click", onItemClick));
};

function onItemClick(evt) {
  evt.stopPropagation();
  console.log(evt.eventPhase);
  if (evt.eventPhase === EVENT_PHASES.TARGET) {
    clearStyles();
    evt.target.classList.add("selected");
  }
}

function clearStyles() {
  itemDivs.forEach((item) => {
    if (item.classList.contains("selected")) {
      item.classList.remove("selected");
    }
  });
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
