import axios from "axios";
import { useState } from "react";
import { connect } from 'react-redux';

const CreateProduct = (props) => {

const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");
let product_id;

const create = (event) => {
    event.preventDefault();
    const token = props.user.key

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization":  `Token ${token}`
        }
    }
    const body = {
        name: name,
        description, description,
    }


    // Create product and price 
    axios.post('http://127.0.0.1:8000/inventory/create_product/', 
    body, config)
    .then(res => {
       console.log(res.data.id);
       product_id = res.data.id;

       const body2 = {
        price: price,
        id: product_id
        }

    // Create product and create price associated with the product id
    axios.post('http://127.0.0.1:8000/inventory/set_price/', 
    body2, config)
    .then(res => {
       console.log(res.data);

    })
    .catch(e => {
        console.log(e);
    }); 

    })
    .catch(e => {
        console.log(e);
    });   


}    

return (
    <div>
    <h2>Create a Subscription Product Here</h2>
    <form onSubmit={create}>
        <div className="form-row">
        <label htmlFor="name">Product Name</label>
        <input className="form-input" id="name" name="name" type="text" required 
        value={name} onChange={(event) => { setName(event.target.value)}} />
        </div>
        <div className="form-row">
        <label htmlFor="description">Product Description</label>
        <input className="form-input" id="description" name="description" type="text" required 
        value={description} onChange={(event) => { setDescription(event.target.value)}} />
        </div>
        <div className="form-row">
        <label htmlFor="description">Price</label>
        <input className="form-input" id="price" name="price" type="text" required 
        value={price} onChange={(event) => { setPrice(event.target.value)}} />
        </div>
        <button type="submit">
        Create Product
        </button>
    </form>
    </div>

)
}



// This allows us to pass state values in as props to the component 
const mapStateToProps = state => ({
    user: state.auth,

});


// Connects the component to the redux store - Pass register action 
export default connect(mapStateToProps,)(CreateProduct);