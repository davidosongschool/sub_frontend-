import axios from 'axios';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react'
import InventoryItem from './inventoryItem';


const InventoryList = (props) => {
    // Make a call to the API to get all inventory associated with the logged in user id 
    // Get token and user_key from store
    const token = props.user.key

    const [productList, setproductList] = useState(null);


    useEffect(() => {

    const user_id = props.user.user.pk
    const body = {
            user_id: user_id
        }

    // Configure API headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    axios.post('http://127.0.0.1:8000/inventory/', body, config)
    .then(res => {
        // Store array of products  
        setproductList(res.data['data']); 
        console.log(res.data)
    })
    .catch(e => {
        console.log(e);
    });


    }, []);

    

    return (
    <div className="div">
        {!productList?
        <h4>Loading...</h4>
        :
        productList.map(item => (
            <InventoryItem key={item.id} name={item.name} image={item.images[0]} desc={item.description} />
        ))
        }
     
    </div>
  
    )}


// This allows us to pass state values in as props to the component 
const mapStateToProps = state => ({
    user: state.auth,

});


// Connects the component to the redux store - Pass register action 
export default connect(mapStateToProps,)(InventoryList);
