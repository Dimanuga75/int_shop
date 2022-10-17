function Calendar(id, year, month) {
  var Dlast = new Date(year, month + 1, 0).getDate(),
    D = new Date(year, month, Dlast),
    DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
    DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
    calendar = "<tr>",
    month = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
  //  console.log(new Date(D.getFullYear(), D.getMonth(), 1).getDay());
  if (DNfirst != 0) {
    for (var i = 1; i < DNfirst; i++) calendar += "<td>";
  } else {
    for (var i = 0; i < 6; i++) calendar += "<td>";
  }
  for (var i = 1; i <= Dlast; i++) {
    if (
      i == new Date().getDate() &&
      D.getFullYear() == new Date().getFullYear() &&
      D.getMonth() == new Date().getMonth()
    ) {
      calendar += '<td class="calendar__day today">' + i;
    } else {
      calendar += '<td class="calendar__day">' + i;
    }
    if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
      calendar += "<tr>";
    }
  }
  for (var i = DNlast; i < 7; i++) calendar += "<td>&nbsp;";
  document.querySelector("#" + id + " tbody").innerHTML = calendar;
  document.querySelector("#" + id + " thead td:nth-child(2)").innerHTML =
    month[D.getMonth()] + " " + D.getFullYear();
  document.querySelector("#" + id + " thead td:nth-child(2)").dataset.month =
    D.getMonth();
  document.querySelector("#" + id + " thead td:nth-child(2)").dataset.year =
    D.getFullYear();
  if (document.querySelectorAll("#" + id + " tbody tr").length < 6) {
    document.querySelector("#" + id + " tbody").innerHTML +=
      "<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;";
  }
}
Calendar("calendar", new Date().getFullYear(), new Date().getMonth());

document.querySelector(
  "#calendar thead tr:nth-child(1) td:nth-child(1)"
).onclick = function () {
  Calendar(
    "calendar",
    document.querySelector("#calendar thead td:nth-child(2)").dataset.year,
    parseFloat(
      document.querySelector("#calendar thead td:nth-child(2)").dataset.month
    ) - 1
  );
};

document.querySelector(
  "#calendar thead tr:nth-child(1) td:nth-child(3)"
).onclick = function () {
  Calendar(
    "calendar",
    document.querySelector("#calendar thead td:nth-child(2)").dataset.year,
    parseFloat(
      document.querySelector("#calendar thead td:nth-child(2)").dataset.month
    ) + 1
  );
};
let bodyCalendar = document.querySelector(".calendar__body");
let chooseMonthCalendar = document.querySelector(".calendar__month");

bodyCalendar.addEventListener("click", function (e) {
  if (e.target.classList.contains("calendar__day")) {
    let alertItem = document.querySelector(".alert__calendar");
    let alertText = document.querySelector(".alert__calendar-text");
    function alertItemRemove() {
      alertItem.style.transform = "scale(0)";
    }
    if (
      chooseMonthCalendar.textContent[
        chooseMonthCalendar.textContent.length - 6
      ] == "ь"
    ) {
      let newMonthCalendar = chooseMonthCalendar.textContent.replace(
        /Ь/gi,
        "я"
      );

      alertText.textContent = `Вы выбрали: ${
        e.target.textContent + " " + newMonthCalendar
      }`;
      alertItem.style.transform = "scale(1)";
    } else if (
      chooseMonthCalendar.textContent[
        chooseMonthCalendar.textContent.length - 6
      ] == "й"
    ) {
      let newMonthCalendar = chooseMonthCalendar.textContent.replace(
        /й/gi,
        "я"
      );
      alertText.textContent = `Вы выбрали: ${
        e.target.textContent + " " + newMonthCalendar
      }`;
      alertItem.style.transform = "scale(1)";
    } else if (
      chooseMonthCalendar.textContent[
        chooseMonthCalendar.textContent.length - 6
      ] == "т"
    ) {
      let newMonthCalendar = chooseMonthCalendar.textContent.replace(
        /т/gi,
        "та"
      );
      alertText.textContent = `Вы выбрали: ${
        e.target.textContent + " " + newMonthCalendar
      }`;
      alertItem.style.transform = "scale(1)";
    }
    document.querySelector(".alert__calendar-btn").onclick = function (e) {
      e.preventDefault();
      alertItemRemove();
    };

    setTimeout(alertItemRemove, 2000);
  }
});
let eventsMenuOpen = document.querySelector(".blog-page__open-filter.events");
let eventsMenu = document.querySelector(".events-page__menu-box");
let eventsMenuClose = document.querySelector(".blog-page__close-filter.events");

eventsMenuOpen.onclick = function () {
  eventsMenu.classList.add("active");
};
eventsMenuClose.onclick = function () {
  eventsMenu.classList.remove("active");
};
