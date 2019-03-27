export function gigasecond(date) {
  return new Date(new Date(date).getTime() + Math.pow(10, 12));
}
