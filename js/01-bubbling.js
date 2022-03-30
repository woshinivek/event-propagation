const refs = {
  parent: document.querySelector("#parent"),
  child: document.querySelector("#child"),
  innerChild: document.querySelector("#inner-child"),
};

refs.parent.addEventListener("click", onParentClick);
refs.child.addEventListener("click", onChildClick);
refs.innerChild.addEventListener("click", onInnerChild);

// window.addEventListener("click", (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

function onParentClick(evt) {
  console.log("on parent click");
  console.log("on parent click -> evt.target: ", evt.target);
  console.log("on parent click -> evt.currentTarget: ", evt.currentTarget);

  //   evt.currentTarget.style.backgroundColor = "red";
}

function onChildClick(evt) {
  console.log("on child click");
  console.log("on child click -> evt.target: ", evt.target);
  console.log("on child click -> evt.currentTarget: ", evt.currentTarget);
}

function onInnerChild(evt) {
  console.log("on inner-child click");
  console.log("on inner-child click -> evt.target: ", evt.target);
  console.log("on inner-child click -> evt.currentTarget: ", evt.currentTarget);
}

// const inputMeyblRef = document.querySelector('input[data-input="meybl"]');
// const buttonGetValueRef = document.querySelector(".getValue");
// const buttonClearRef = document.querySelector(".clear");
// const valueRef = document.querySelector(".value");

// buttonGetValueRef.addEventListener("click", onButtonGetValueRefClick);
// buttonClearRef.addEventListener("click", onButtonClearClick);

// function onButtonGetValueRefClick(evt) {
//   evt.preventDefault();
//   //   console.log(inputMeyblRef.value);
//   //   console.log(inputMeyblRef.value);

//   valueRef.textContent = inputMeyblRef.value;
//   inputMeyblRef.value = "";
// }

// function onButtonClearClick(evt) {
//   valueRef.innerHTML = "";
// }

// console.log(inputMeyblRef);
// console.log(buttonGetValueRef);

// console.log(valueRef);

// const inputTupangRef = document.querySelector('input[data-input="tupang"]');
// console.log(inputTupangRef);
// console.log(inputTupangRef.dataset.input);

// console.log(refs.parent);

// console.log(inputRef.dataset);

// window.addEventListener("click", (e) => console.log(e.target, e.currentTarget));
