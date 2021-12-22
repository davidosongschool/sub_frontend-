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
width: 250px;
background-color: #F7FAFC;
color: #1A1F35;
min-height: 100vh;
position: absolute;
left: 0;
top: 0;
`;


