export function selectRange(start: number, end: number) {
  const range = [];

  for (let year = start; year >= end; year--) {
    range.push(year);
  }

  return range;
}
