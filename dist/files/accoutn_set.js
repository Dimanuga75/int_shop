let formaUserWrapper = document.querySelector(".form-data__wrapper");
let userDataBox = document.querySelector(".user-account__data");
let userFormData = document.querySelectorAll(".form-data");

function disactiveForm() {
  formaUserWrapper.classList.remove("form-data__wrapper--active");
  for (const item of userFormData) {
    item.classList.remove("form-data--active");
  }
}

userDataBox.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("user-account__change-mobile")) {
    let index = e.target.dataset.set;
    formaUserWrapper.classList.add("form-data__wrapper--active");
    userFormData[index].classList.add("form-data--active");
  }
  if (e.target.classList.contains("user-account__change-btn")) {
    let index = e.target.dataset.set;
    formaUserWrapper.classList.add("form-data__wrapper--active");
    userFormData[index].classList.add("form-data--active");
    userFormData[3].classList.remove("form-data--active");
  }
  formaUserWrapper.addEventListener("click", function (t) {
    if (t.target.classList.contains("form-data__return")) {
      t.preventDefault();
      disactiveForm();
    }
    if (t.target.classList.contains("submit-phone")) {
      t.preventDefault();
      disactiveForm();
      let formUserPhone = document.querySelector(".form-data__input.phone");
      let userAccPhone = document.querySelector(".user-account__phone");
      userAccPhone.textContent = formUserPhone.value;
    }
    if (t.target.classList.contains("submit-mail")) {
      t.preventDefault();
      disactiveForm();
      let formUserMail = document.querySelector(".form-data__input.mail");
      let userAccMail = document.querySelector(".user-account__phone.mail");
      console.log(formUserMail.value);
      userAccMail.textContent = formUserMail.value;
    }
    if (t.target.classList.contains("submit-name")) {
      t.preventDefault();
      disactiveForm();
      let formUserName = document.querySelector(".form-data__input.name");
      let formUserFamily = document.querySelector(".form-data__input.family");
      let userAccName = document.querySelector(".user-account__name");
      userAccName.textContent = formUserFamily.value + " " + formUserName.value;
    }
  });
});
let userInfo = document.querySelector(".user-account__info");
let userMenu = document.querySelector(".user-account__menu");
if (mQuery991.matches) {
  userInfo.after(userMenu);
}
