const tagsContainerRef = document.querySelector(".js-tags");

tagsContainerRef.addEventListener("click", onTagsContainerClick);

function onTagsContainerClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  e.target.classList.add("tags__btn-active");
}
