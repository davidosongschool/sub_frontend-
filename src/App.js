import React, { useEffect } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {loadUser} from './actions/authActions'
import RouteWrapper from './components/routes/Routes';


function App() {
 
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <div className="App">
      <RouteWrapper />
      </div>
    </Provider>
  );
}

export default App;
