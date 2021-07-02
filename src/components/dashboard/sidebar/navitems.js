import styled from 'styled-components';


const NavItems = () => {
    return (
    
   <ContainNavItems>
       <ul>
           <li>Overview</li>
           <li>My Subscriptions</li>
           <li>My Customers</li>
       </ul>
   </ContainNavItems>
    
    )};

export default NavItems;

const ContainNavItems = styled.div`
margin-top: 50px;
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

li {
    border-bottom: 2px solid gray;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
}

`;