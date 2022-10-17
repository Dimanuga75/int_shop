let blogMenuList = document.querySelector(".blog-page__list");
blogMenuList.addEventListener("click", function (e) {
  if (e.target.classList.contains("blog-page__input")) {
    e.target.parentElement.classList.toggle("active");
  }
});
let blogMenuOpen = document.querySelector(".blog-page__open-filter");
let blogMenu = document.querySelector(".blog-page__menu");
let blogMenuClose = document.querySelector(".blog-page__close-filter");

blogMenuOpen.onclick = function () {
  blogMenu.classList.add("active");
};
blogMenuClose.onclick = function () {
  blogMenu.classList.remove("active");
};
