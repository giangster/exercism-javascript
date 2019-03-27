const gigasecondInMs = Math.pow(10, 12);
export function gigasecond(date) {
  return new Date(date.getTime() + gigasecondInMs);
}
