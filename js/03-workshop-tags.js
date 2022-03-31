const tagsContainerRef = document.querySelector(".js-tags");

tagsContainerRef.addEventListener("click", onTagsContainerClick);

function onTagsContainerClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  const currentActiveBtn = document.querySelector(".tags__btn-active");

  console.log(currentActiveBtn);

  if (currentActiveBtn) {
    currentActiveBtn.classList.remove("tags__btn-active");
  }

  const nextActiveBtn = e.target;
  nextActiveBtn.classList.add("tags__btn-active");
}
