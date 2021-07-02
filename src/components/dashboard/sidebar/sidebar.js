import styled from 'styled-components';
import NavItems from './navitems';

const Sidebar = () => {

    return (
   // Desktop Sidebar 
   <ContainSideBar className="d-none d-lg-block">
   <NavItems />
   </ContainSideBar>
    
    )};

export default Sidebar;

const ContainSideBar = styled.div`
width: 300px;
background-color: #1B72E8;
color: #ffffff;
min-height: 100vh;
position: absolute;
left: 0;
top: 0;
`;

