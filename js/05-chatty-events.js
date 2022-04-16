const coordsOutputRef = document.querySelector(".js-coords");
let mouseMoveCallBackCounter = 0;

const throttledMouseMove = _.throttle(onMouseMove, 500);

// window.addEventListener("mousemove", throttledMouseMove);

function onMouseMove(evt) {
  mouseMoveCallBackCounter += 1;

  coordsOutputRef.textContent = `
  amounth of Callback counter "onMouseMove": ${mouseMoveCallBackCounter}
  X: ${evt.clientX};
  Y: ${evt.clientY}
  `;

  console.log("count: ", mouseMoveCallBackCounter);
}

// --------------------------------------------------------------
// --------------------------------------------------------------

const inputRef = document.querySelector(".js-input");
const outputRef = document.querySelector(".js-output");
let inputCallbackCounter = 0;

const debouncedInputChange = _.debounce(onInputChange, 900);

inputRef.addEventListener("input", debouncedInputChange);

function onInputChange(evt) {
  inputCallbackCounter += 1;

  outputRef.textContent = `
  amounth of Callback counter "onInputChange": ${inputCallbackCounter},
  value: ${evt.target.value} 
`;
}

// --------------------------------------------------------------
// --------------------------------------------------------------
