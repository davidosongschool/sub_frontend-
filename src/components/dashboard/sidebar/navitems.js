import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope, faWarehouse, faUserFriends } from '@fortawesome/free-solid-svg-icons'


const NavItems = () => {
    return (
    
   <ContainNavItems>
       <ul>
           <Link to="/" className="menu-item"><FontAwesomeIcon icon={faGlobeEurope} className="menu-icon"/>Overview</Link>
           <Link to="/inventory" className="menu-item"><FontAwesomeIcon icon={faWarehouse} className="menu-icon"/>Inventory</Link>
           <Link to="#" className="menu-item"><FontAwesomeIcon icon={faUserFriends} className="menu-icon"/>Customers</Link>
       </ul>
   </ContainNavItems>
    
    )};

export default NavItems;

const ContainNavItems = styled.div`
margin-top: 50px;
ul {
    list-style: none;
    margin: 0;
    padding: 30px;
    padding-top: 0px;
}

.menu-item{
    border-bottom: 2px solid #fff;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    display: block;
    color: #1A1F35;
    text-decoration: none;
}

.menu-icon {
margin-right: 10px;
}

`;