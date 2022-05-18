import colorsForPractice from "./colors-practice.js";

/* 
  2. Используя делегирование событий обработать 
  нажатие любой кнопки внутри #container
  окрасив квадрат #square в соответствующий цвет. 
  Кнопка после нажатия должна стать активной,
  после второго нажатия активный стиль нужно удалить 
  и вернуть квадрат в исходный вид
  см. в index.html
*/

// const btnContainer = document.getElementById("container");
// const squareRef = document.getElementById("square");

// window.onload = () => {
//   btnContainer.addEventListener("click", onBtnClick);
// };

// function onBtnClick(evt) {
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }

//   squareRef.style.backgroundColor = color;

//   const btn = evt.target;

//   if (btn.classList.contains("activeBtn")) {
//     btn.classList.remove("activeBtn");
//   }

//   removeActiveBtn();
//   addActiveBtnClass(btn);
//   setSquareColor(btn.dataset.color);
// }

// function removeActiveBtn() {
//   const activeBtn = document.querySelector(".activeBtn");

//   if (activeBtn) {
//     activeBtn.classList.remove("activeBtn");
//   }
// }

// function addActiveBtnClass(btn) {
//   btn.classList.add("activeBtn");
// }

// function setSquareColor(color) {
//   squareRef.style.backgroundColor = color;
// }

// ----------------------------------------------------------

const btnContainer = document.getElementById("container");
const squareRef = document.getElementById("square");
let prevStyle = null;

window.onload = () => {
  btnContainer.addEventListener("click", setColorSquare);
};

function setColorSquare(evt) {
  const { target } = evt;

  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  squareRef.style.backgroundColor = target.dataset.color;
  setActiveBtn(target);
}

function setActiveBtn(target) {
  const activeBtn = document.querySelector("button.activeBtn");

  if (prevStyle === target.dataset.color) {
    activeBtn.classList.remove("activeBtn");
    squareRef.style.backgroundColor = "";
    prevStyle = null;
  } else {
    prevStyle = target.dataset.color;

    if (activeBtn) {
      activeBtn.classList.remove("activeBtn");
    }
    target.classList.add("activeBtn");
  }
}

// ----------------------------------------------------------
