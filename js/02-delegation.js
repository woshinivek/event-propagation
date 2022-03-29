const containerRef = document.querySelector(".js-btns-collection");

containerRef.addEventListener("click", onBtnClick);

// function onBtnClick(evt) {
//   console.dir(evt.target);
//   console.log(evt.target.nodeName);
// }

function onBtnClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    console.log("NOT IN BUTTON");
    return;
  }

  console.log(`Click in the "${evt.target.textContent}"`);
}
