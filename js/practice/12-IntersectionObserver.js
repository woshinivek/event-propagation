const el6Ref = document.getElementById("el6");

const options = {
  //   rootMargin: "-30px -30px",
  rootMargin: "0px",
  threshold: 1,
};

// const onEntry = function (entries, observer) {
//   console.log("entries: ", entries);
//   console.log("observer: ", observer);

//   el6Ref.style.backgroundColor = "red";
// };

const testy = function (entries, observer) {
  console.log("Threshold reached!");
  el6Ref.style.backgroundColor = "red";
  //debugger;
};
//const observer = new IntersectionObserver(_.debounce(onEntry, 1000), options);
const observer = new IntersectionObserver(_.debounce(testy, 500), options);

// window.addEventListener('load', (event) => {
//   observer.observe(el6Ref);
// });

console.log(observer);
// ---------------------------------------------------------------
// ---------------------------------------------------------------
