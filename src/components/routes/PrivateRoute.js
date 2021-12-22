import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, auth, ...rest}) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to login page
        <Route {...rest} render={props => {
            // If still loading user - Display loading 
            if(auth.isLoading) {
              return <h2>Loading User...</h2>;
            } else if (auth.isAuthenticated) {
                return <Component {...props} />
            }
            else if (auth.isAuthenticated == false){
                return <Redirect to="/login"/>                
            } 
           
        }}
            />
    );
 
}
const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps)(PrivateRoute);