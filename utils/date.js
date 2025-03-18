export function getFormattedDate(date) {
  return date.toISOString().slice(0, 10);
}

export function getToLocaleDateString(date, locale = 'en-US') {
  return date.toLocaleDateString(locale);
}
