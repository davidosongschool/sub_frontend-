import React from 'react';
//Page components 
import Sidebar from '../components/dashboard/sidebar/sidebar'
import Inventory from '../components/dashboard/inventory/inventory'

const Dashboard = () => {

    return (
    <div>
    <Sidebar />
    <Inventory />
    </div>
    )
};

export default Dashboard;