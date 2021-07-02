import axios from 'axios'
import CheckoutForm from './checkoutForm';
import { connect } from 'react-redux';
// Stripe
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js/pure";
const stripePromise = loadStripe('pk_test_51HvQxQDCotthheC02rdpJmnTpjXXAKsH5eXhcHnXqQ3vIguEzhHWT6bg6BkRgmyWoDuOKA9FzI0E4ORhBwd156uV00woEeSYWR');


const TestPayment = () => {
   return (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
   )
};



// This allows us to pass state values in as props to the component 
const mapStateToProps = state => ({
    user: state.auth,

});


// Connects the component to the redux store - Pass register action 
export default connect(mapStateToProps,)(TestPayment);
