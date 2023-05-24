export function formatPrice(price) {
  if (price >= 10000) {
    return price.toLocaleString();
  }
  return price.toString();
}

// Used because the value from above outputs the gp price as
// a string, and parseInt does not read commas well, and
// I need to compare to values to see if the user got it right
export function parsePrice(price) {
  return parseInt(price.replace(/,/g, ""));
}
