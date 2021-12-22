import React from 'react';
//Page components 
import Sidebar from './sidebar/sidebar'
import Overview from './overview/overview';
import { connect } from 'react-redux';
import { recheckEmail, loadUser } from '../../actions/authActions';
import Nav from '../../components/nav';



const Dashboard = (props) => {

    return ( 
    <div>  
    <Nav />
    {!props.isVerified ? 
    <div>
        <h3>Need to check email</h3>
    </div> :
    <div>
    <Sidebar/>
    <Overview />
    </div>
    }
    </div>
    )
};



// This allows us to pass state values in as props to the component 
// <VerifyEmail recheckEmail={props.recheckEmail} email={props.email.user.email}/> 

const mapStateToProps = state => ({
    isVerified: state.auth.verifyEmail,
    user: state.auth.user,
    email: state.auth,
    loading: state.loading.loading
});



// Connects the component to the redux store - Pass register action 
export default connect(mapStateToProps,{recheckEmail, loadUser})(Dashboard);


