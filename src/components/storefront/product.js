import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Product = (props) => {
    return (
        <Link to={`${props.store_name}/${props.stripe_id}`}>
        <ProductDiv>
        <h4>{props.name}</h4>
        </ProductDiv>
        </Link>
        
    )
}

export default Product;

const ProductDiv = styled.div `

text-align: center;
width: 95%;
margin: 0 auto;
height: 300px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

`;