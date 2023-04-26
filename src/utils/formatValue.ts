export const formatPrice = (price: number) => {
  return Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(price);
};

export function vId() {
  return Math.floor(Math.random() * 999999999999).toString();
}
