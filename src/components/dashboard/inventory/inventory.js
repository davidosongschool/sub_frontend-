import styled from 'styled-components';
import InventoryList from './inventoryList';
import InventoryMenu from './inventoryMenu';
import Sidebar from '../sidebar/sidebar';
import Nav from '../../nav';


const Inventory = () => {

return (
<div>
<Nav />
<ContainInventory>
<Sidebar />
<InventoryMenu />
<InventoryList />
</ContainInventory>
</div>    
    
    )};

export default Inventory;

const ContainInventory = styled.div`
margin-left: 310px;
`;