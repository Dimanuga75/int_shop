window.onload = function () {
  faqTextMarginTop();
};

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
let cointProductSliderVertical = 0;
let controlProductSliderVertical = 4;
let productSliderVertical = document.querySelector(
  ".product-item__slider-vertical"
);
//let buyTimeBox = document.querySelector(".buy-time");
let productSliderVerticalBox = document.querySelectorAll(
  ".slider-vertical__box"
);
let stepSliderProductVertical = Number(
  getComputedStyle(productSliderVerticalBox[1]).minHeight.replace(
    /[a-zа-яё]/gi,
    ""
  )
);

productSliderVertical.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("up")) {
    cointProductSliderVertical++;
    controlProductSliderVertical++;
    if (controlProductSliderVertical === productSliderVerticalBox.length) {
      cointProductSliderVertical = 5 - productSliderVerticalBox.length;
      controlProductSliderVertical = 2;
    }
    productSliderVerticalBox.forEach(
      (item) =>
        (item.style.transform = `translateY(${
          -cointProductSliderVertical * (stepSliderProductVertical + 25)
        }px)`)
    );
  }
  if (e.target.classList.contains("down")) {
    cointProductSliderVertical--;
    controlProductSliderVertical--;
    if (controlProductSliderVertical === 1) {
      cointProductSliderVertical = productSliderVerticalBox.length - 5;
      controlProductSliderVertical = 6;
    }
    productSliderVerticalBox.forEach(
      (item) =>
        (item.style.transform = `translateY(${
          -cointProductSliderVertical * (stepSliderProductVertical + 25)
        }px)`)
    );
  }
});
let cointProductSliderGorizont = 0;
//let controlProductSliderVertical = 4;
let productSliderGorizont = document.querySelector(
  ".product-item__slider-gorizont"
);
//let buyTimeBox = document.querySelector(".buy-time");
let productSliderGorizontBox = document.querySelectorAll(
  ".slider-gorizont__box"
);
let stepSliderProductGorizont = Number(
  getComputedStyle(productSliderGorizontBox[1]).minWidth.replace(
    /[a-zа-яё]/gi,
    ""
  )
);

productSliderGorizont.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("22222222");
  if (e.target.classList.contains("left")) {
    cointProductSliderGorizont++;
    // controlProductSliderVertical++;
    if (cointProductSliderGorizont === productSliderGorizontBox.length) {
      cointProductSliderGorizont = 0;
      //controlProductSliderVertical = 2;
    }
    productSliderGorizontBox.forEach(
      (item) =>
        (item.style.transform = `translateX(${
          -cointProductSliderGorizont * stepSliderProductGorizont
        }px)`)
    );
  }
  if (e.target.classList.contains("right")) {
    console.log("1111111");
    cointProductSliderGorizont--;
    // controlProductSliderVertical++;
    if (cointProductSliderGorizont < 0) {
      cointProductSliderGorizont = productSliderGorizontBox.length - 1;
      //controlProductSliderVertical = 2;
    }
    productSliderGorizontBox.forEach(
      (item) =>
        (item.style.transform = `translateX(${
          -cointProductSliderGorizont * stepSliderProductGorizont
        }px)`)
    );
  }
});
//FAQ
function faqTextMarginTop() {
  let faqText = document.querySelectorAll(".faq__item-text");
  let faqTextHeigt = new Array();
  let faqTitle = document.querySelectorAll(".faq__item-title");
  for (let i = 0; i < faqText.length; i++) {
    faqTextHeigt.push(
      Number(getComputedStyle(faqText[i]).height.replace(/[a-zа-яё]/gi, ""))
    );
  }
  for (let k = 0; k < faqTitle.length; k++) {
    // console.log(faqTextHeigt[k]);
    // faqText[k].style.marginTop = `-${faqTextHeigt[k]}px`;
    if (faqTitle[k].classList.contains("faq__item-title--active")) {
      faqText[k].style.marginTop = "0px";
      faqText[k].style.opacity = "1";
    } else {
      faqText[k].style.marginTop = `-${faqTextHeigt[k]}px`;
      faqText[k].style.opacity = "0";
    }
  }
}
let faqBox = document.querySelector(".product-item__aside");
let faqTitle = document.querySelectorAll(".faq__item-title");
let faqText = document.querySelectorAll(".faq__item-text");
let faqTextHeigt1 = new Array();
for (let i = 0; i < faqText.length; i++) {
  faqTextHeigt1.push(
    Number(getComputedStyle(faqText[i]).height.replace(/[a-zа-яё]/gi, ""))
  );
}
faqBox.addEventListener("click", function (e) {
  if (e.target.classList.contains("faq__item-title")) {
    e.preventDefault();
    e.target.classList.toggle("faq__item-title--active");
    for (let k = 0; k < faqTitle.length; k++) {
      if (faqTitle[k].classList.contains("faq__item-title--active")) {
        faqText[k].style.marginTop = "0px";
        faqText[k].style.opacity = "1";
      } else {
        faqText[k].style.marginTop = `-${faqTextHeigt1[k]}px`;
        faqText[k].style.opacity = "0";
      }
    }
  }
});
let faqBoxProduct = document.querySelector(".faq__box");

faqBoxProduct.addEventListener("click", function (e) {
  if (e.target.classList.contains("faq__item-title")) {
    e.preventDefault();
    e.target.classList.toggle("faq__item-title--active");
  }
});
let productItemInfoList = document.querySelector(".product-item__info-list");
let productItemInfo = document.querySelectorAll(".product__item");
//let productItemInfoListActive = document.querySelectorAll(".click");
productItemInfoList.addEventListener("click", function (e) {
  if (e.target.classList.contains("click")) {
    e.preventDefault();
    // e.target.classList.add("active");
    for (const item of productItemInfo) {
      item.classList.remove("active");
    }
    let index = e.target.dataset.productinfo;
    productItemInfo[index].classList.add("active");
  }
});
