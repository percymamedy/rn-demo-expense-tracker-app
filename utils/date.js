export function getFormattedDate(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export function getToLocaleDateString(date, locale = 'en-US') {
  return date.toLocaleDateString(locale);
}
