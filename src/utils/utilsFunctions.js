export function getWeekDay(date) {
  date = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var day = date.getDay();

  return days[day];
}

export function getMonths(date) {
  date = new Date();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var month = date.getMonth();

  return months[month];
}

export function getUTCMinutes(date) {
  date = new Date();
  var minutes = date.getMinutes();
  minutes = minutes > 9 ? minutes : "0" + minutes;

  return minutes;
}
