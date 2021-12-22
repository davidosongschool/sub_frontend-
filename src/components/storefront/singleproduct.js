import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios  from 'axios'
import Header from './nav/header';

const SingleProduct = () => {
   
    const { id, product_id } = useParams() // Store Params 
    const [product_data, setProductData] = useState(null);

    useEffect(() => {

  
    // When the component loads, search for the product using the product_id associated with the store 
    // id -> Stores the store name and can be used to look up product 
    // product_id -> Stores product id to be used to look up product associated with storefront 

    const body = {
            store_name: id,
            product_id: product_id
        }
    
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        axios.post('http://127.0.0.1:8000/inventory/storefront_single_product/', body, config)
        .then(res => {
            setProductData(res.data);
        })
        .catch(e => {
            console.log(e);
        });
    },[]);




    return (
        <div>
        <Header />
        {product_data?
        <h1>{product_data.product_name}</h1>
        :
        null
        }
        </div>
        )
}

export default SingleProduct;