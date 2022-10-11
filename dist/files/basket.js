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

const sumOrder = function () {
  let priceItemBasket = document.querySelectorAll(".product__price-basket");
  let priceOldItemBasket = document.querySelectorAll(
    ".product__price-basket-old"
  );
  let valueItemBasket = document.querySelectorAll("input.count__item");
  let priceItemBasketArr = new Array();
  let valueItemBasketArr = new Array();
  let priceOldItemBasketArr = new Array();

  for (let i = 0; i < priceItemBasket.length; i++) {
    priceItemBasketArr.push(Number(priceItemBasket[i].textContent));
  }

  for (let i = 0; i < valueItemBasket.length; i++) {
    valueItemBasketArr.push(Number(valueItemBasket[i].value));
  }
  for (let i = 0; i < priceOldItemBasket.length; i++) {
    if (
      Number(priceItemBasket[i].textContent) -
        (Number(priceItemBasket[i].textContent) -
          Number(priceOldItemBasket[i].textContent)) !==
      0
    ) {
      priceOldItemBasketArr.push(Number(priceOldItemBasket[i].textContent));
    } else {
      priceOldItemBasketArr.push(Number(priceItemBasket[i].textContent));
    }
  }
  let sumBasket = 0;
  let sumDiscount = 0;
  for (let i = 0; i < priceItemBasket.length; i++) {
    sumBasket = sumBasket + priceItemBasketArr[i] * valueItemBasketArr[i];
    sumDiscount =
      sumDiscount +
      (priceOldItemBasketArr[i] - priceItemBasketArr[i]) *
        valueItemBasketArr[i];
  }
  let sumWithDiscount = sumBasket - sumDiscount;
  let sumBasketField = document.querySelector(
    ".slider-product__price.user-basket"
  );
  let sumWithDiscountField = document.querySelector(
    ".slider-product__price.user-basket__promo"
  );
  sumBasketField.innerText = `${sumBasket}`;
  sumWithDiscountField.innerText = `${sumWithDiscount}`;
};
sumOrder();

let userListBasket = document.querySelector(".poduct__assortment-basket");

userListBasket.addEventListener("click", function (e) {
  if (e.target.classList.contains("count__btn")) {
    const direction = e.target.dataset.set;
    const inp = e.target.parentElement.querySelector("input.count__item");
    const cuurentValue = +inp.value;
    if (direction == "plus") {
      newValue = cuurentValue + 1;
    } else {
      newValue = cuurentValue - 1 > 0 ? cuurentValue - 1 : 0;
    }
    inp.value = newValue;
  }
  sumOrder();
});
