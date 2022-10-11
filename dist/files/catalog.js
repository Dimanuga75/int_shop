const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

let btnCatalogMenu = document.querySelector(".menu-mobile__btn");
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
  headerCatalog.style.visibility = "visible";
});
closeHeaderCatalog.addEventListener("click", function (e) {
  e.preventDefault();
  wrapperHeaderCatalog.style.visibility = "hidden";
  headerCatalog.style.transform = "translateX(-150%)";
  headerCatalog.style.visibility = "hidden";
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
categoryItems.addEventListener("click", headerCatalogVisible);
let mobileBtnMenu = document.querySelector(".catalog-mobile__box");
let headerTop = document.querySelector(".header__content");

if (mQuery767.matches) {
  headerTop.prepend(mobileBtnMenu);
}
let footerAddress = document.querySelector(".footer__address");
let footerRules = document.querySelector(".footer__rules-list");
if (mQuery767.matches) {
  footerRules.insertAdjacentElement("afterend", footerAddress);
}
let politicalCopy = document.querySelector(".political__copy");
let ofertaLink = document.querySelector(".oferta__link");
if (mQuery767.matches) {
  ofertaLink.insertAdjacentElement("afterend", politicalCopy);
}

//-------------------------------------------------

window.onload = function () {
  rangeOne();
  rangeTwo();
  //  playerOne();
  //  playerTwo();
  faqTextMarginTop();
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
  fiilColor1();
}
function fiilColor1() {
  percent1 = (filterPlayerOne.value / playerMaxValue) * 100;
  percent2 = (filterPlayerTwo.value / playerMaxValue) * 100;
  rangePlayerTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%,  #2a2a2a ${percent1}%,  #2a2a2a ${percent2}%, #dadae5 ${percent2}%)`;
}
function faqTextMarginTop() {
  let faqText = document.querySelectorAll(".faq__item-text");
  let faqTextHeigt = new Array();
  for (let i = 0; i < faqText.length; i++) {
    faqTextHeigt.push(
      Number(getComputedStyle(faqText[i]).height.replace(/[a-zа-яё]/gi, ""))
    );
  }
  for (let k = 0; k < faqTextHeigt.length; k++) {
    // console.log(faqTextHeigt[k]);
    faqText[k].style.marginTop = `-${faqTextHeigt[k]}px`;
  }
}
let faqBox = document.querySelector(".faq__box");

faqBox.addEventListener("click", function (e) {
  if (e.target.classList.contains("faq__item-title")) {
    e.preventDefault();
    e.target.classList.toggle("faq__item-title--active");
  }
});
let filterMobileBtn = document.querySelector(".catalog-main__filter-button");
let asideBox = document.querySelector(".catalog-main__aside");
let closeBtnCatalog = document.querySelector(".catalog-main__close-button");
let catalogItemTitle = document.querySelector(".catalog-main__title-items");
let catalogTitleBox = document.querySelector(".catalog-main__title-box");

filterMobileBtn.onclick = function () {
  asideBox.style.transform = "translateX(0)";
  catalogItemTitle.style.display = "none";
  closeBtnCatalog.style.display = "block";
  catalogTitleBox.style.alignItems = "unset";
  filterMobileBtn.classList.add("disable");
};
closeBtnCatalog.onclick = function () {
  asideBox.style.transform = "translateX(-200%)";
  catalogItemTitle.style.display = "block";
  closeBtnCatalog.style.display = "none";
  catalogTitleBox.style.alignItems = "center";
  filterMobileBtn.classList.remove("disable");
};
