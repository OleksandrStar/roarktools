import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe  = () => {
    if (!stripePromise) {
        stripePromise = loadStripe('pk_test_51OhZDqDOhTUEo9uOgpbP4YLDmGsMqdigG6KF7T5LWoOfXylSoODyhCQMnSDwYTBCGgv5QVVGW1wuchbZ9pqi1Mfe00xVStFNXU' || '');
    }
    console.log(stripePromise)
    return stripePromise;
};

export default getStripe ;
