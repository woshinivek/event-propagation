const refs = {
  parent: document.querySelector("#parent"),
  child: document.querySelector("#child"),
  innerChild: document.querySelector("#inner-child"),
};

refs.parent.addEventListener("click", onParentClick);
refs.child.addEventListener("click", onChildClick);
refs.innerChild.addEventListener("click", onInnerChild);

function onParentClick(evt) {
  console.log("on parent click");
  console.log("on parent click -> evt.target: ", evt.target);
  console.log("on parent click -> evt.currentTarget: ", evt.currentTarget);
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
