//

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
