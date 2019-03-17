function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

export function gigasecond(date) {
  let bDate = new Date(date);

  bDate = bDate.getTime() / 1000 + Math.pow(10, 9);
  bDate = new Date(bDate * 1000);
  bDate = bDate.toISOString();

  return parseISOString(bDate);
}
