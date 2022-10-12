function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
  });
}

isWebp();
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
const body = document.getElementById("body");
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
  body.classList.add("t_body");
});
closeHeaderCatalog.addEventListener("click", function (e) {
  e.preventDefault();
  wrapperHeaderCatalog.style.visibility = "hidden";
  headerCatalog.style.transform = "translateX(-150%)";
  headerCatalog.style.visibility = "hidden";
  body.classList.remove("t_body");
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

//footer///
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
let personalAccountBtn = document.querySelector(".user-list__item.personal");

personalAccountBtn.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.add("t_body");
  let personalAccountWrapper = document.querySelector(
    ".wrapper__personal-account"
  );
  let personalAccountExitPhone = document.querySelector(
    ".personal-account__exit.phone-exit"
  );
  let returnSiteBtnPhone = document.querySelector(".return__site-phone");
  let personalAccountExitMail = document.querySelector(
    ".personal-account__exit.mail-exit"
  );
  let personalAccountReg = document.querySelector(
    ".personal-account__exit.reg-box"
  );
  //  let returnSiteBtnReg = document.querySelector(".return__site-reg");
  personalAccountWrapper.style.visibility = "visible";
  personalAccountExitPhone.style.transform = "scale(1)";
  personalAccountExitMail.style.display = "none";
  personalAccountReg.style.display = "none";
  returnSiteBtnPhone.onclick = function () {
    personalAccountWrapper.style.visibility = "hidden";
    personalAccountExitPhone.style.transform = "scale(0)";
    body.classList.remove("t_body");
  };
  personalAccountWrapper.addEventListener("click", function (e) {
    if (e.target.classList.contains("mail__exit")) {
      e.preventDefault();
      personalAccountExitPhone.style.display = "none";
      personalAccountExitMail.style.display = "block";
      personalAccountExitMail.style.transform = "scale(1)";
    }
    if (e.target.classList.contains("phone__exit")) {
      e.preventDefault();
      personalAccountExitPhone.style.display = "block";
      personalAccountExitMail.style.display = "none";
    }
    if (e.target.classList.contains("return__site-mail")) {
      e.preventDefault();
      personalAccountWrapper.style.visibility = "hidden";
      personalAccountExitPhone.style.transform = "scale(0)";
      personalAccountExitPhone.style.display = "block";
      personalAccountExitMail.style.transform = "scale(0)";
      body.classList.remove("t_body");
    }
    if (e.target.classList.contains("reg-btn__exit")) {
      e.preventDefault();
      personalAccountExitPhone.style.display = "none";
      personalAccountExitMail.style.display = "none";
      personalAccountExitMail.style.transform = "scale(0)";
      personalAccountReg.style.display = "block";
      personalAccountReg.style.transform = "scale(1)";
    }
    if (e.target.classList.contains("exit-btn__exit")) {
      e.preventDefault();
      personalAccountReg.style.display = "none";
      personalAccountExitPhone.style.display = "block";
      personalAccountExitMail.style.display = "none";
    }
    if (e.target.classList.contains("return__site-reg")) {
      e.preventDefault();
      personalAccountWrapper.style.visibility = "hidden";
      personalAccountExitPhone.style.transform = "scale(0)";
      personalAccountExitPhone.style.display = "block";
      personalAccountExitMail.style.transform = "scale(0)";
      personalAccountReg.style.transform = "scale(0)";
      body.classList.remove("t_body");
    }
  });
});
let inputAlert = document.querySelectorAll(".alert__item");
function formValidate(forma) {
  let error = 0;
  const formReq = document.querySelectorAll(".req");
  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    if (input.getAttribute("type") == "checkbox" && input.checked == false) {
      //formaddError(input);
      document.querySelector(".alert__item.checked").style.transform =
        "scale(1)";
      error++;
    }
  }
  return error;
}
//function formaddError() {
//  formaError.style.visibility = "visible";
//}
function formremoveError() {
  //formaError.style.visibility = "hidden";
  inputAlert.forEach((item) => (item.style.transform = "scale(0)"));
}
const forma = document.getElementById("forma");
forma.addEventListener("submit", formSend);
function formSend(e) {
  let error = formValidate(forma);

  if (error === 0) {
    body.classList.remove("t_body");
  } else {
    e.preventDefault();
    setTimeout(formremoveError, 7000);
  }
}
document.querySelector(".alert__btn").onclick = function (e) {
  e.preventDefault();
  formremoveError();
};
