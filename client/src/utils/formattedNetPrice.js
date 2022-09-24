import { formatCurrencyString } from "use-shopping-cart";

export default function formattedNetPrice(product) {
    return formatCurrencyString({
        value: product.price,
        currency: product.currency,
        language: navigator.language,
    });

}
