import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const InventoryMenu = () => {
    return (
       <ContainMenu>
           <Row>
       
           <Col xs="12" sm="3" className="inventory-btn">
           <Link to="/inventory/add">
            <div className="inside-btn">
            <FontAwesomeIcon icon={faPlusCircle} className="icon"/>
            <p>New Product</p>
            </div>
            </Link>
           </Col>
     
           </Row>
       </ContainMenu>
    )
}

export default InventoryMenu

const ContainMenu = styled.div`

.inventory-btn {
height: 150px;
width: 200px !important;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 10px;
position: relative;
}

p {
color: #1A1F34;
}

.inside-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

}

.icon {
    margin-top: 10px;
    margin-bottom: 10px;
    color: #5203fc;
    font-size: 3rem;

}

`

