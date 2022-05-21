import colors from "./colors-practice.js";

// const el6Ref = document.getElementById("el6");

// const options = {
//   //   rootMargin: "-30px -30px",
//   rootMargin: "0px",
//   threshold: 0.5,
// };

// const onEntry = function (entries, observer) {
//   console.log("entries: ", entries);
//   // console.log("observer: ", observer);

//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("checked");
//       entry.target.style.backgroundColor = "red";

//       observer.unobserve(entry.target);
//     }
//   });
// };

// // const testy = function (entries, observer) {
// //   console.log("Threshold reached!");
// //   el6Ref.style.backgroundColor = "red";
// //   //debugger;
// // };
// // const observer = new IntersectionObserver(_.debounce(onEntry, 1000), options);
// const observer = new IntersectionObserver(onEntry, options);
// // const observer = new IntersectionObserver(_.debounce(testy, 500), options);

// // window.addEventListener('load', (event) => {
// observer.observe(el6Ref);
// // });

// console.log(observer);
// ---------------------------------------------------------------
// ---------------------------------------------------------------

// const targetElems = document.querySelectorAll(".addScroll");

// const options = {
//   // rootMargin: "20px",
//   threshold: [0.2, 0.4, 0.6, 0.8, 1],
//   // threshold: 0.5,
// };

// const onEntry = (entries, observer) =>
//   entries.forEach((entry) => {
//     // let count = 0;
//     if (entry.isIntersecting) {
//       // entry.target.classList.add("checked");
//       console.log(entry.intersectionRatio);
//       entry.target.style.backgroundColor = "red";
//       entry.target.style.opacity = entry.intersectionRatio;

//       // observer.unobserve(entry.target);
//       // count++;
//     }
//   });
// const observer = new IntersectionObserver(onEntry, options);

// targetElems.forEach((elem) => {
//   observer.observe(elem);
// });

// ---------------------------------------------------------------
// ---------------------------------------------------------------

// const el6Ref = document.getElementById("el6");
// const elements = document.querySelectorAll(".addScroll");

// const options = {
//   threshold: [0.2, 0.4, 0.6, 0.8, 1],
// };

// function onEntry(entries, observer) {
//   console.log(observer);
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log(entry.intersectionRatio);
//       entry.target.style.backgroundColor = "red";
//       entry.target.style.opacity = entry.intersectionRatio;
//     }
//   });
// }

// const observer = new IntersectionObserver(onEntry, options);
// elements.forEach((element) => {
//   observer.observe(element);
// });

// ---------------------------------------------------------------
// ---------------------------------------------------------------
