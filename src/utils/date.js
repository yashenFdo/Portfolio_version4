const MONTHS = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

export function parseMonthYear(str) {
  const match = /([A-Za-z]+)\.?\s+(\d{4})/.exec(str || '');
  if (!match) return new Date(0);
  const month = MONTHS[match[1].slice(0, 3).toLowerCase()] ?? 0;
  return new Date(Number(match[2]), month, 1);
}

export function sortByNewest(items, dateKey = 'date') {
  return [...items].sort((a, b) => parseMonthYear(b[dateKey]) - parseMonthYear(a[dateKey]));
}
