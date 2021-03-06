// const tagsContainerRef = document.querySelector(".js-tags");
// let selectedTag = null;

// tagsContainerRef.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const currentActiveBtn = document.querySelector(".tags__btn-active");
//   console.log(currentActiveBtn);

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove("tags__btn-active");
//   }

//   const nextActiveBtn = e.target;
//   nextActiveBtn.classList.add("tags__btn-active");
//   selectedTag = nextActiveBtn.dataset.value;

//   if (currentActiveBtn === nextActiveBtn) {
//     currentActiveBtn.classList.remove("tags__btn-active");
//   }

//   // console.dir(currentActiveBtn?.nodeName);
// }

//--------------------------------------------------------------------
//--------------------------------------------------------------------

// const tagsContainerRef = document.querySelector(".js-tags");
// let selectedTag = null;

// tagsContainerRef.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const currentActiveBtn = document.querySelector(".tags__btn-active");

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove("tags__btn-active");
//   }

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add("tags__btn-active");
//   selectedTag = nextActiveBtn.dataset.value;

//   console.log(selectedTag);
// }

//--------------------------------------------------------------------
//--------------------------------------------------------------------

// const obj = {
//   local: "tupang",
//   country: {
//     place: "snzn",
//     city: "dameisha",
//   },
// };

// console.log(obj?.country?.place);

//--------------------------------------------------------------------
//--------------------------------------------------------------------

// console.log(selected);

// const Fn = function (amount) {
//   this.amount = amount;
// };

// Fn.prototype.makeTotal = function (innerAmount) {
//   let total = (this.amount += innerAmount);

//   return total;
// };

// const mango = new Fn(89);

// console.log(mango.makeTotal(90));

//--------------------------------------------------------------------
//--------------------------------------------------------------------

// class Fn {
//   constructor({ amount, totalAmount } = {}) {
//     this.amount = amount;
//     this.totalAmount = totalAmount;
//   }

//   makeTotal(additionalAmount) {
//     this.totalAmount += this.amount + additionalAmount;
//   }
// }

// const mango = new Fn({ amount: 1000, totalAmount: 0 });
// mango.makeTotal(780);

// console.log(mango);
// console.dir(mango);

//--------------------------------------------------------------------
//--------------------------------------------------------------------

// const arr = [1, 2, 3, 4, 3, 2, 4, 3, 2, 45, 6, 7, 5, 44, 54, 45];

// const clearArr = new Set(arr);
// const clearArr = [...new Set(arr)];

// console.log(arr);
// console.log(arr.length);

// console.log(clearArr[4]);
// console.log(clearArr.size);

// console.dir(clearArr);

//--------------------------------------------------------------------
//--------------------------------------------------------------------

// const tagsContainerRef = document.querySelector(".js-tags");
// // let selectedTags = [];
// let selectedTags = new Set();

// tagsContainerRef.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const btn = evt.target;
//   const tag = btn.dataset.value;
//   const isBtnActive = btn.classList.contains("tags__btn-active");

//   if (isBtnActive) {
//     selectedTags.delete(tag);
//   } else {
//     selectedTags.add(tag);
//   }

//   btn.classList.toggle("tags__btn-active");

//   // selectedTags.push(evt.target.dataset.value);

//   console.log(selectedTags);
// }

//--------------------------------------------------------------------
//--------------------------------------------------------------------

// const tagsContainer = document.querySelector(".js-tags");
// let selectedTags = new Set();

// tagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const btn = evt.target;
//   const tag = btn.dataset.value;
//   const activeBtn = btn.classList.contains("tags__btn-active");

//   if (activeBtn) {
//     selectedTags.delete(tag);
//   } else {
//     selectedTags.add(tag);
//   }

//   btn.classList.toggle("tags__btn-active");

//   console.log(selectedTags);
// }

//--------------------------------------------------------------------
//--------------------------------------------------------------------

// const tagsContainerRef = document.querySelector(".js-tags");
// let selectedTags = new Set();

// tagsContainerRef.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const btn = evt.target;
//   const tag = btn.dataset.value;

//   const activeBtn = btn.classList.contains("tags__btn-active");

//   if (activeBtn) {
//     selectedTags.delete(tag);
//   } else {
//     selectedTags.add(tag);
//   }

//   btn.classList.toggle("tags__btn-active");

//   console.log(selectedTags);
// }

//--------------------------------------------------------------------
//--------------------------------------------------------------------

const tagsContainerRef = document.querySelector(".js-tags");
let selectedTags = new Set();

tagsContainerRef.addEventListener("click", onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  const btn = evt.target;
  const tag = btn.dataset.value;

  const isBtnActive = btn.classList.contains("tags__btn-active");

  if (isBtnActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  btn.classList.toggle("tags__btn-active");

  console.log(selectedTags);
}

//--------------------------------------------------------------------
//--------------------------------------------------------------------

window.addEventListener("keypress", onKey);

function onKey(evt) {
  console.dir(evt);

  console.log("keypress: ", evt.keyCode);
}
