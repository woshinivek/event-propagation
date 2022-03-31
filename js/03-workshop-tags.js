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

  e.target.classList.add("tags__btn-active");
}
