const coordsOutputRef = document.querySelector(".js-coords");
let mouseMoveCallBackCounter = 0;

const throttledMouseMove = _.throttle(onMouseMove, 500);

window.addEventListener("mousemove", throttledMouseMove);

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
