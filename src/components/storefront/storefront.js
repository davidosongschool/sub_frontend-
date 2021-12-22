import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ContainStore from './containStore'
import ContainHeader from './nav/header'

const Storefront = () => {
const { id } = useParams() // Store Name from URL 
const [storeExists, setstoreExists] = useState(null);

// Check that the store exists 
// Output the store containter if the store exists, show store does not exist if not 
useEffect(() => {

        const body = {
                store: id
            }

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        axios.post('http://127.0.0.1:8000/inventory/store_front/', body, config)
        .then(res => {
           if(res.data) {
               setstoreExists(true);
           }
           else {
            setstoreExists(false);
           }
        })
        .catch(e => {
            console.log(e);
        });
},[id, storeExists]);

return(
    <div>
    <ContainHeader/>
    {storeExists 
    ? <ContainStore store_name={id} />
    :storeExists == false ?
    <h2>Sorry this store does not exist!</h2>
    :
    null
    }
   </div>
)

}

export default Storefront