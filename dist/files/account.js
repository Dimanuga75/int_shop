let infoBoxText = document.querySelector(".information__text-box");
let userScale = document.querySelector(".user-account__scale-box");
if (mQuery1200.matches) {
  infoBoxText.before(userScale);
}
let userInfo = document.querySelector(".user-account__info");
let userMenu = document.querySelector(".user-account__menu");
if (mQuery991.matches) {
  userInfo.after(userMenu);
}
