import useCart from "./useCart";
import {loadStripe} from '@stripe/stripe-js';
import {
 
  Elements
  
} from '@stripe/react-stripe-js';
import Checkoutform from "./Checkoutform";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Paymnet = () => {
    const [mobile] = useCart()
    return (
        <div>
            <h2 className="text-3xl text-center">{mobile.length}</h2>
            <Elements stripe={stripePromise}>
                <Checkoutform></Checkoutform>
             </Elements>
        </div>
    );
};

export default Paymnet;