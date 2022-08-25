function setWeekDay(e) {
  if (e.value != "null") {
    localStorage.setItem("weekDay", e.value);

    window.location.replace("./weekday.html");
  } else {
    return;
  }
}
