import React from 'react';
import Dashboard from '../../pages/Dashboard'
import ContactUs from '../../pages/ContactUs'
import LoginPage from '../auth/login'
import TestPayment from '../../components/testPayment'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Nav from '../../components/nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  PrivateRoute  from '../routes/PrivateRoute'

const RouteWrapper = (props) => {

const apiCall = props.apiCall;
const auth = props.auth
return (
        <Router>
        <Nav />
        <Switch>
        <React.Fragment>
        <Route exact path='/contact'>
        <ContactUs /> 
        </Route>
        <Route exact path='/payment'>
        <TestPayment /> 
        </Route>
        <Route exact path='/login'>
        {auth ? <Redirect to="" /> :  <LoginPage />}
        </Route>
        {apiCall
        ?<PrivateRoute exact path='/' component={Dashboard}/>
        : <h1>Wait...</h1> }
        </React.Fragment>
        </Switch>
        </Router>
)};

const mapStateToProps = state => ({
    apiCall: state.auth.apiCall,
    auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(RouteWrapper);

