let btnCatalogMenu = document.querySelector(".catalog-mobile__box");
let headerCatalog = document.querySelector(".header-catalog__menu");
let wrapperHeaderCatalog = document.querySelector(".wrapper__headder-catalog");
let closeHeaderCatalog = document.querySelector(".header-catalog__close");
const mQuery767 = window.matchMedia("(max-width: 767.98px)");
const mQuery1200 = window.matchMedia("(max-width: 1199.98px)");
const mQuery991 = window.matchMedia("(max-width: 991.98px)");
const mQuery479 = window.matchMedia("(max-width: 479.98px)");

btnCatalogMenu.addEventListener("click", function (e) {
  e.preventDefault();
  wrapperHeaderCatalog.style.visibility = "visible";
  headerCatalog.style.transform = "translateX(0%)";
});
closeHeaderCatalog.addEventListener("click", function (e) {
  e.preventDefault();
  wrapperHeaderCatalog.style.visibility = "hidden";
  headerCatalog.style.transform = "translateX(180%)";
});

let categoryItems = document.querySelector(".header-catalog__box-category");
let categoryItem = document.querySelectorAll(".header-category__item");
let categoryBraket = document.querySelectorAll(".header-category__bracket");
let categoryPoint = document.querySelectorAll(".header-catalog__box-item");
let categoryBox = document.querySelector(".header-catalog__box-items");

if (mQuery767.matches) {
  for (const item of categoryItem) {
    item.classList.remove("active");
  }
  for (const item of categoryBraket) {
    item.classList.remove("active");
  }
  for (const item of categoryPoint) {
    item.classList.remove("active");
    item.insertAdjacentHTML(
      "beforeend",
      " <button  class='return__menu-mobile'> &#10229; &nbsp; Вернуться в меню</button>"
    );
  }
  categoryItems.insertAdjacentHTML(
    "beforeend",
    "<div class='header__menu-add'> <a href='#''>Мероприятия</a><a href='#''>Блог</a><a href='#''>О центре</a> <a href='#''>Контакты</a> </div>"
  );
  categoryBox.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("return__menu-mobile")) {
      for (const item of categoryPoint) {
        item.classList.remove("active");
      }
    }
  });

  //  categoryBox.style.transform = "translateX(100%)";
}
const headerCatalogVisible = function (e) {
  if (e.target.classList.contains("click")) {
    e.preventDefault();
    for (const item of categoryItem) {
      item.classList.remove("active");
    }
    e.target.classList.add("active");
    e.target.parentElement.classList.add("active");
    const index = e.target.dataset.category;

    for (const item of categoryBraket) {
      item.classList.remove("active");
    }
    categoryBraket[index].classList.add("active");

    for (const item of categoryPoint) {
      item.classList.remove("active");
    }
    categoryPoint[index].classList.add("active");
  }
};
//const  headerCatalogVisibleMobile
categoryItems.addEventListener("click", headerCatalogVisible);

//-------------------------------------------------

window.onload = function () {
  rangeOne();
  rangeTwo();
  //  playerOne();
  //  playerTwo();
};

let categoryMain = document.querySelector(".catalog-main__aside");
let categoryAll = document.querySelector(".category__inner");
let categoryItemFirst = document.querySelector(".catalog-main__item-title");

let categoryAllExpand = document.querySelector(".catalog-main__all-category");
//let categoryItemMain = document.querySelector(".catalog-main__category-item");

categoryMain.addEventListener("click", function (e) {
  if (e.target.classList.contains("catalog-main__all-category")) {
    e.preventDefault();
    categoryAll.classList.toggle("category__inner--active");
    categoryAllExpand.classList.toggle("expand--active");
  }
  let stepTop;
  if (e.target.classList.contains("catalog-main__item-title")) {
    e.preventDefault();
    // let tablePlayWrapper = document.querySelector(".category-item__wrapper");
    categoryItemFirst.classList.toggle("expand--active");
    let categoryTablePlay = document.querySelector(
      ".catalog-main__category-item.table-play"
    );

    let tablePlayTop = Number(
      getComputedStyle(categoryTablePlay).marginTop.replace(/[a-zа-яё]/gi, "")
    );

    let TablePlayheight = Number(
      getComputedStyle(categoryTablePlay).height.replace(/[a-zа-яё]/gi, "")
    );
    stepTop = TablePlayheight + tablePlayTop;

    if (tablePlayTop === 10) {
      //console.log("ttttttttttttt");
      categoryTablePlay.style.marginTop = `-${stepTop}px`;
    } else {
      categoryTablePlay.style.marginTop = "10px";
    }
  }
  let filterPriceBox = document.querySelector(".aside-filter__price-inner");
  let filterPriceTitle = document.querySelector(".aside-filter__title-price");
  if (e.target.classList.contains("aside-filter__title-price")) {
    e.preventDefault();
    filterPriceBox.classList.toggle("aside-filter__price-inner--active");
    filterPriceTitle.classList.toggle("expand--active");
  }
  if (e.target.classList.contains("aside-filter__title-age")) {
    e.preventDefault();
    let filterAgeBox = document.querySelector(".aside-filter__age-inner");
    let filterAgeTitle = document.querySelector(".aside-filter__title-age");
    filterAgeBox.classList.toggle("aside-filter__age-inner--active");
    filterAgeTitle.classList.toggle("expand--active");
  }
  if (e.target.classList.contains("aside-filter__title-available")) {
    e.preventDefault();
    let filterAvailableBox = document.querySelector(
      ".aside-filter__available-inner"
    );
    let filterAvailableTitle = document.querySelector(
      ".aside-filter__title-available"
    );
    filterAvailableBox.classList.toggle(
      "aside-filter__available-inner--active"
    );
    filterAvailableTitle.classList.toggle("expand--active");
  }
  if (e.target.classList.contains("aside-filter__title-player")) {
    e.preventDefault();
    let filterPlayerBox = document.querySelector(".aside-filter__player-inner");
    let filterPlayerTitle = document.querySelector(
      ".aside-filter__title-player"
    );
    filterPlayerBox.classList.toggle("aside-filter__player-inner--active");
    filterPlayerTitle.classList.toggle("expand--active");
  }
});

let filterRangeOne = document.querySelector(".aside-filter__price1");
let filterRangeTwo = document.querySelector(".aside-filter__price2");
let filterRangeDisplayOne = document.getElementById("range1");
let filterRangeDisplayTwo = document.getElementById("range2");
let minGap = 1000;
let rangeTrack = document.querySelector(".aside-filter__price-track");
let rangeMaxValue = document.getElementById("slider-1").max;
//let rangeMinValue = document.getElementById("slider-2").min;

function rangeOne() {
  if (
    parseInt(filterRangeTwo.value) - parseInt(filterRangeOne.value) <=
    minGap
  ) {
    filterRangeOne.value = parseInt(filterRangeTwo.value) - minGap;
  }
  filterRangeDisplayOne.textContent = filterRangeOne.value;
  fiilColor();
}
function rangeTwo() {
  if (
    parseInt(filterRangeTwo.value) - parseInt(filterRangeOne.value) <=
    minGap
  ) {
    filterRangeTwo.value = parseInt(filterRangeOne.value) + minGap;
  }
  filterRangeDisplayTwo.textContent = filterRangeTwo.value;
  fiilColor();
}
function fiilColor() {
  percent1 = (filterRangeOne.value / rangeMaxValue) * 100;
  percent2 = (filterRangeTwo.value / rangeMaxValue) * 100;
  rangeTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%,  #2a2a2a ${percent1}%,  #2a2a2a ${percent2}%, #dadae5 ${percent2}%)`;
}
let filterPlayerOne = document.querySelector(".aside-filter__player1");
let filterPlayerTwo = document.querySelector(".aside-filter__player2");
let minGapPlayer = 0;
let rangePlayerTrack = document.querySelector(".aside-filter__player-track");
let playerMaxValue = document.getElementById("player-1").max;
//let rangeMinValue = document.getElementById("slider-2").min;

function playerOne() {
  if (
    parseInt(filterPlayerTwo.value) - parseInt(filterPlayerOne.value) <=
    minGapPlayer
  ) {
    filterPlayerOne.value = parseInt(filterPlayerTwo.value) - minGapPlayer;
  }
  //  filterRangeDisplayOne.textContent =  filterPlayerOne.value;
  fiilColor1();
}
function playerTwo() {
  if (
    parseInt(filterPlayerTwo.value) - parseInt(filterPlayerOne.value) <=
    minGapPlayer
  ) {
    filterPlayerTwo.value = parseInt(filterPlayerOne.value) + minGapPlayer;
  }
  //  filterRangeDisplayTwo.textContent = filterPlayerTwo.value;
  fiilColor1();
}
function fiilColor1() {
  percent1 = (filterPlayerOne.value / playerMaxValue) * 100;
  percent2 = (filterPlayerTwo.value / playerMaxValue) * 100;
  rangePlayerTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%,  #2a2a2a ${percent1}%,  #2a2a2a ${percent2}%, #dadae5 ${percent2}%)`;
}
