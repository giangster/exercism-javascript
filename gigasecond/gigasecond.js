// function parseISOString(s) {
//   var b = s.split(/\D+/);
//   return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
// }

export function gigasecond(date) {
  return new Date(new Date(date).getTime() + Math.pow(10, 12));
}
