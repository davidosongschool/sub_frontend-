import Product from "./product";
import { Container, Row, Col } from "react-bootstrap";

const Productlist = (props) => {
    return (
        <div>
        <Container className="mt-3">
        <h1>{props.store_name}</h1>

        <Row>
        {props.productList.map(item => (
            <Col xs={6} md={4}>
            <Product store_name={props.store_name} key={item.id} stripe_id={item.id} name={item.name} desc={item.description}/>
            </Col> 
         ))}  
          </Row>
          </Container>
         </div>
    )
}

export default Productlist;