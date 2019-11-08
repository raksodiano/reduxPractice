import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomerContainer from './containers/CustomerContainer';
import ContainerCustomer from './containers/ContainerCustomer';

class App extends Component {
  // renderHome = () => <h1>Home</h1>
  renderCustomerContainer = () => <h1>Customer Container</h1>
  // renderCustomerListContainer = () => <h1>List Customer</h1>
  // renderCustomerNewContainer = () => <h1>New Customer</h1>
  
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/customers" component={CustomerContainer}/>
          <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewContainer}/>
            <Route 
              path="/customers/:dni" 
              render={
                props => <ContainerCustomer 
                  dni={props.match.params.dni}
                />
              }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
