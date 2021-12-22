import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import React, {useState} from "react";
import axios from 'axios'
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap'

const CheckoutForm = (props) => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [errormsg, seterrormsg] = useState(false);
    const [errormsg_content, seterrormsg_content] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    let extra_msg = "";

    // Handle real-time validation errors from the CardElement.
    const handleChange = (event) => {
    if (event.error) {
        setError(event.error.message);
    } else {
        setError(null);
    }
    }
    const handleSubmit = async (event) => {
      
        // Prevent deault form submission behaviour 
        event.preventDefault();
        
        // Create payment Method with Sripe 
        const card = elements.getElement(CardElement);
        const {paymentMethod, error} = await stripe.createPaymentMethod({
        type: 'card',
        card: card
    });
    console.log(paymentMethod);



    // Once they payment method has been created - Create a customer associated with it 

    const token = props.user.key
    console.log(token)

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization":  `Token ${token}`
        }

    }

    const body = {
        "payment_method_id": paymentMethod.id,
        "email" : "test@test.com"
    }

    axios.post('http://127.0.0.1:8000/payments/create_customer', body, config)
    .then(res => {
       console.log(res.data.extra_msg);
       seterrormsg(true);
       seterrormsg_content(res.data.extra_msg);
    })
    .catch(e => {
        console.log(e);
    });

    }

    return (
    <div>
    {errormsg && (
       <Alert variant="danger">
       { errormsg_content }
       </Alert> )
    }
 
    <form onSubmit={handleSubmit} className="stripe-form">
        <div className="form-row">
        <label htmlFor="email">Email Address</label>
        <input className="form-input" id="email" name="name" type="email" placeholder="jenny.rosen@example.com" required 
    value={email} onChange={(event) => { setEmail(event.target.value)}} />
        </div>
        <div className="form-row">
        <label htmlFor="card-element">Credit or debit card</label> 
        <CardElement id="card-element" onChange={handleChange}/>
        <div className="card-errors" role="alert">{error}</div>
        </div>
        <button type="submit" className="submit-btn">
        Submit Payment
        </button>
    </form>
    </div>
    );
};



// This allows us to pass state values in as props to the component 
const mapStateToProps = state => ({
    user: state.auth,

});


// Connects the component to the redux store - Pass register action 
export default connect(mapStateToProps,)(CheckoutForm);

