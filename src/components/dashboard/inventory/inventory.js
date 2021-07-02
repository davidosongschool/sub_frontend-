import styled from 'styled-components';
import InventoryList from './inventoryList';
import CreateProduct from '../inventory/createProduct'


const Inventory = () => {

    return (
<ContainInventory>
<CreateProduct />
<InventoryList />
</ContainInventory>
    
    )};

export default Inventory ;

const ContainInventory = styled.div`
margin-left: 310px;
`;