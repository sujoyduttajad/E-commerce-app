import axios from "axios";
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

export default function useCheckout() {
    const { redirectToCheckout, cartDetails } = useShoppingCart();
    
    async function handleCheckout() {
        const session = await axios.post('/api/checkout-sessions', cartDetails)
            .then(res => {
                console.log(res.data)
                return res.data
            })
            .catch(error => {
                toast.error("Checkout Failed!!");
                console.log("Error during Checkout: ", error);
            });

        if(session) {
            redirectToCheckout({ sessionId: session.id });
        }
    }

    return handleCheckout;
}
