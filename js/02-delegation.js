const addBtnRef = document.querySelector(".add-btn");
const containerRef = document.querySelector(".js-btns-collection");
const btnsCollection = containerRef.querySelectorAll("button");

containerRef.addEventListener("click", onBtnClick);

function onBtnClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    console.log("NOT IN BUTTON");
    return;
  }

  console.log(evt.target);
  console.log(`Click in the "${evt.target.textContent}"`);
}

let labelCounter = btnsCollection.length;
addBtnRef.addEventListener("click", onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement("button");
  btn.textContent = `Button ${(labelCounter += 1)}`;
  btn.type = "button";

  containerRef.appendChild(btn);
}

// console.log(Number(containerRef.classList.contains("btns-Collection")));

// console.log(addBtnRef);
