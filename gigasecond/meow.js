function isLeap(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? true
    : false;
}
function dateFromDay(year, day) {
  var date = new Date(year, 0); // initialize a date in `year-01-01`
  return new Date(date.setDate(day)); // add the number of days
}
function gigasecond(date) {
  bDate = new Date(date);
  console.log(bDate);
  bDate.setSeconds(date.getSeconds() + 40);
  if (bDate.getSeconds() >= 60) {
    bDate.setSeconds(date.getSeconds() - 60);
    bDate.setMinutes(date.getMinutes() + 1);
  }
  console.log(bDate);

  bDate.setMinutes(bDate.getMinutes() + 46);
  if (bDate.getMinutes() >= 60) {
    bDate.setMinutes(date.getMinutes() - 60);
    bDate.setHours(date.getHours() + 1);
  }
  console.log(bDate);

  bDate.setHours(bDate.getHours() + 1);
  if (bDate.getHours() >= 24) {
    bDate.setHours(date.getHours() - 24);
    bDate.setDate(date.getDate() + 1);
  }
  console.log(bDate);

  var year = bDate.getFullYear();
  var count = 0;
  for (var i = 0; i <= 31; i++) {
    if (isLeap(year + i)) {
      count++;
    }
  }

  var years = count + Math.floor((11574 - count * 366) / 365);
  var days = 11574 - count * 366 - (years - count) * 365;
  bDate.setFullYear(bDate.getFullYear() + years);
  console.log(bDate);

  var start = new Date(bDate.getFullYear(), 0, 0);
  console.log(start);
  var diff = bDate - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  console.log("Day of year: " + day);

  day = day + days;
  bDate.setMonth(bDate.getMonth() + Math.floor(day / 28));
  console.log(bDate);

  day >= 31 ? (day = day - 31) : bDate.setDate(day);
  if (isLeap(bDate.getFullYear())) {
    day >= 29 ? (day = day - 29) : bDate.setDate(day);
  } else {
    day >= 28 ? (day = day - 28) : bDate.setDate(day);
  }
  day >= 31 ? (day = day - 31) : bDate.setDate(day);
  day >= 30 ? (day = day - 30) : bDate.setDate(day);
  day >= 31 ? (day = day - 31) : bDate.setDate(day);
  day >= 30 ? (day = day - 30) : bDate.setDate(day);
  day >= 31 ? (day = day - 31) : bDate.setDate(day);
  day >= 31 ? (day = day - 31) : bDate.setDate(day);
  day >= 30 ? (day = day - 30) : bDate.setDate(day);
  day >= 31 ? (day = day - 31) : bDate.setDate(day);
  day >= 30 ? (day = day - 30) : bDate.setDate(day);
  day >= 31 ? (day = day - 31) : bDate.setDate(day);
  console.log(bDate);

  return Date(bDate);
}

gigasecond(new Date(Date.UTC(2015, 8, 14)));
