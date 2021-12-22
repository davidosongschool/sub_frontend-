import axios from 'axios';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react'

const Customers = () => {    
// Get Customer list from Stripe and output into table 
const token = props.user.key
const user_id = props.user.user.pk
const [customerList, setCustomerList] = useState(null);

useEffect(() => {


const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization":  `Token ${token}`
        }
    }

const body = {
        token: token
        }    

    axios.post('http://127.0.0.1:8000/customers/', body, config)
    .then(res => {
        // Store array of products  
        setCustomerList(res.data['data']); 
        console.log(res.data)
    })
    .catch(e => {
        console.log(e);
    });


    }, []);
    
    return(
        <h2>Customers</h2>
    )
}



const mapStateToProps = state => ({
    user: state.auth,

});


export default connect(mapStateToProps,)(Customers);
