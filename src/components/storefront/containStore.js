import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Productlist from './productList';

const ContainStore = (props) => {

const [products, setProducts] = useState([])

// Get product list using store name
useEffect(() => {

    const body = {
            store_name: props.store_name
        }

    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    axios.post('http://127.0.0.1:8000/inventory/storefront_product_list/', body, config)
    .then(res => {
        console.log(res.data['data']);
        setProducts(res.data['data']);
    })
    .catch(e => {
        console.log(e);
    });
},[]);


return (
<StoreWrapper>
<Productlist store_name={props.store_name} productList={products}/>
</StoreWrapper>

)
}

export default ContainStore;


const StoreWrapper = styled.div`

h1 {
    text-align: center;
}

`;
