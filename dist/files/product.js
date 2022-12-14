window.onload = function () {
  faqTextMarginTop();
};

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
let productSliderGorizont = document.querySelector(
  ".product-item__slider-gorizont"
);
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
  if (e.target.classList.contains("left")) {
    cointProductSliderGorizont++;
    if (cointProductSliderGorizont === productSliderGorizontBox.length) {
      cointProductSliderGorizont = 0;
    }
    productSliderGorizontBox.forEach(
      (item) =>
        (item.style.transform = `translateX(${
          -cointProductSliderGorizont * stepSliderProductGorizont
        }px)`)
    );
  }
  if (e.target.classList.contains("right")) {
    cointProductSliderGorizont--;

    if (cointProductSliderGorizont < 0) {
      cointProductSliderGorizont = productSliderGorizontBox.length - 1;
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
let faqBox = document.querySelector(
  ".slider-product__item.catalog-time__item.product-unit"
);
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
        //  faqText[k].style.visibility = "visible";
      } else {
        faqText[k].style.marginTop = `-${faqTextHeigt1[k]}px`;
        faqText[k].style.opacity = "0";
        //  faqText[k].style.visibility = "hidden";
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
let productItemInfoTitle = document.querySelectorAll(
  ".product-item__info-list button"
);

productItemInfoList.addEventListener("click", function (e) {
  if (e.target.classList.contains("click")) {
    e.preventDefault();
    // e.target.classList.add("active");
    for (const item of productItemInfo) {
      item.classList.remove("active");
    }
    for (const items of productItemInfoTitle) {
      items.classList.remove("active");
    }
    e.target.classList.add("active");
    let index = e.target.dataset.productinfo;
    productItemInfo[index].classList.add("active");
  }
});
const MobileInner = function () {
  let productItemPhoto = document.querySelector(".product-item__photo");
  let productItemInfoMobale = document.querySelector(".product-item__info");
  let stillBuy = document.querySelector(".still__buy");
  productItemInfoMobale.prepend(faqBox);
  productItemInfoMobale.prepend(productItemPhoto);
  productItemInfoMobale.append(stillBuy);
};

if (mQuery767.matches) {
  MobileInner();
}

let cointStillBuy = 0;
let stillBuyBox = document.querySelector(".still__buy");
let productItem = document.querySelectorAll(
  ".slider-product__item.still-buy__item"
);
let productItems = document.querySelector(".still__buy-items");
let stepProductItem = Number(
  getComputedStyle(productItem[0]).minWidth.replace(/[a-zа-яё]/gi, "")
);
let columnGapStillBuy = Number(
  getComputedStyle(productItems).columnGap.replace(/[a-zа-яё]/gi, "")
);
stillBuyBox.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("left")) {
    cointStillBuy++;
    if (cointStillBuy === productItem.length) {
      cointStillBuy = 0;
    }
    productItem.forEach(
      (item) =>
        (item.style.transform = `translateX(${
          -cointStillBuy * (stepProductItem + columnGapStillBuy)
        }px)`)
    );
  }
  if (e.target.classList.contains("right")) {
    cointStillBuy--;
    if (cointStillBuy < 0) {
      cointStillBuy = productItem.length - 1;
    }
    productItem.forEach(
      (item) =>
        (item.style.transform = `translateX(${
          -cointStillBuy * (stepProductItem + columnGapStillBuy)
        }px)`)
    );
  }
});
let cointLook = 0;
let LookBox = document.querySelector(".product-item__look");
let productItemLook = document.querySelectorAll(
  ".slider-product__item.look-time__item"
);
let productItemsLook = document.querySelector(".product-item__look-product");
let stepProductItemLook = Number(
  getComputedStyle(productItemLook[0]).minWidth.replace(/[a-zа-яё]/gi, "")
);
let columnGapLook = Number(
  getComputedStyle(productItemsLook).columnGap.replace(/[a-zа-яё]/gi, "")
);

LookBox.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("left")) {
    cointLook++;
    if (cointLook === productItemLook.length) {
      cointLook = 0;
    }
    productItemLook.forEach(
      (item) =>
        (item.style.transform = `translateX(${
          -cointLook * (stepProductItemLook + columnGapLook)
        }px)`)
    );
  }
  if (e.target.classList.contains("right")) {
    cointLook--;
    if (cointLook < 0) {
      cointLook = productItemLook.length - 1;
    }
    productItemLook.forEach(
      (item) =>
        (item.style.transform = `translateX(${
          -cointLook * (stepProductItemLook + columnGapLook)
        }px)`)
    );
  }
});
let codeProduct = document.querySelector(".product-item__code");
let titleProduct = document.querySelector(".product-item__info");
if (mQuery767.matches) {
  titleProduct.prepend(codeProduct);
}
