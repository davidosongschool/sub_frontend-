import React from 'react';
import Dashboard from '../dashboard/Dashboard'
import ContactUs from '../../pages/ContactUs'
import CreateProduct from '../dashboard/inventory/add product/createProduct'
import Inventory from '../dashboard/inventory/inventory';
import LoginPage from '../auth/login'
import Loading from '../../components/loading/loading'
import Storefront from '../storefront/storefront';
import SingleProduct from '../storefront/singleproduct';
import TestPayment from '../../components/testPayment'
import Signup from '../auth/signup/signup'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from '../routes/PrivateRoute'

const RouteWrapper = (props) => {

  const auth = props.auth
  return (
    <div>
      {props.loading ?
        <Loading />
        :
        <Router>
          <Switch>
            <React.Fragment>
              <Route exact path='/payment'>
                <TestPayment />
              </Route>
              <Route exact path='/signup'>
                {auth ? <Redirect to="" /> : <Signup />}
              </Route>
              <Route exact path='/login'>
                {auth ? <Redirect to="" /> : <LoginPage />}
              </Route>
              <PrivateRoute exact path='/inventory' component={Inventory} />
              <PrivateRoute exact path='/inventory/add' component={CreateProduct} />
              <PrivateRoute exact path='/' component={Dashboard} />
              <Route exact path='/storefront/:id'>
                <Storefront />
              </Route>
              <Route exact path='/storefront/:id/:product_id'>
                <SingleProduct />
              </Route>

            </React.Fragment>
          </Switch>
        </Router>
      }
    </div>
  )
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated,
  loading: state.loading.loading
});

export default connect(mapStateToProps)(RouteWrapper);

