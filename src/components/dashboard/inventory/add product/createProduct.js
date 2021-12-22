import axios from "axios";
import { useState } from "react";
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import Sidebar from '../../sidebar/sidebar';
import styled from 'styled-components';
import ImageUploader from 'react-images-upload';

const CreateProduct = (props) => {

const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");
const [creatingProduct, setCreatingProduct] = useState(false);
const [newProductCreated, setNewProductCreated] = useState(false);
let product_id;

const [pictures, setPictures] = useState(null);

const create = (event) => {
    setCreatingProduct(true);
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
        description: description,
        user_id: props.user.user.pk,
        token: token
    }


    // Create product
    axios.post('http://127.0.0.1:8000/inventory/create_product/', 
    body, config)
    .then(res => {
       console.log(res.data);
       product_id = res.data;
        const body2 = {
        price: price,
        id: product_id,
        token: token
        }


        console.log(price)

        // Create product and create price associated with the product id
        axios.post('http://127.0.0.1:8000/inventory/set_price/', 
        body2, config)
        .then(res => {
        console.log(res.data);
        setCreatingProduct(false);
        setNewProductCreated("Your new product has been added! View Inventory Button")
        setName("");
        setDescription("");
        setPrice("");
        })
        .catch(e => {
        console.log(e);
        setCreatingProduct(false);
        setCreatingProduct(false);
        setName("");
        setDescription("");
        setPrice("");

        }); 

        })
    .catch(e => {
        console.log(e);
        setCreatingProduct(false);
        setCreatingProduct(false);
        setName("");
        setDescription("");
        setPrice("");

    });   


}   


const onDrop = (picture) => {
    setPictures({
    pictures: picture,
});
}

return (
    <ContainAddProduct>
    <Sidebar />
    {newProductCreated?
    <Alert variant="success" className="text-center">{newProductCreated}</Alert>
    :
    null
    }
    {creatingProduct? 
    <p>One Momment Please.. We're creating your product</p>
    :
    <div>
    <h2>Create a Subscription Product Here</h2>
    <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={onDrop}
                imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview="True"
            />
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
     }
    </ContainAddProduct>

)
}



// This allows us to pass state values in as props to the component 
const mapStateToProps = state => ({
    user: state.auth,

});


// Connects the component to the redux store - Pass register action 
export default connect(mapStateToProps,)(CreateProduct);

const ContainAddProduct = styled.div`
margin-left: 255px; 
`;