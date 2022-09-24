import { formatCurrencyString } from "use-shopping-cart";

export default function formattedNetPrice(totalPrice) {
  return formatCurrencyString({
    value: totalPrice,
    currency: "USD",
    language: navigator.language,
  });
}
