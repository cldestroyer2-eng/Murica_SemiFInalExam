export function formatQuantity(quantity) {
  return `${quantity} item${Number(quantity) === 1 ? '' : 's'}`
}
