export function formatPrice(price) {
  if (price >= 10000) {
    return price.toLocaleString();
  }
  return price.toString();
}
