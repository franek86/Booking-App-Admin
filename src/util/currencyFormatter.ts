export function formatCurrency(amount: number, currency: string, locale: string = "de-DE") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
}
