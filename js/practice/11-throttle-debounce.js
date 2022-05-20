// window.addEventListener("scroll", _.throttle(onWindowScroll, 400));
// window.addEventListener("input", _.throttle(onInputChange, 400));
window.addEventListener("input", _.debounce(onInputChange, 400));

const statContainerRef = document.getElementById("statContainer");
const outputRef = document.getElementById("output");

let counter = 0;

// function onWindowScroll(evt) {
//   statContainerRef.innerHTML = counter += 1;
// }

function onInputChange(e) {
  statContainerRef.innerHTML = counter += 1;
  outputRef.textContent = `Output: ${e.target.value}`;

  console.log(e.target.value);
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------
