import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  renderHome = () => <h1>Home</h1>
  renderCustomerContainer = () => <h1>Customer Container</h1>
  renderCustomerListContainer = () => <h1>List Customer</h1>
  renderCustomerNewContainer = () => <h1>New Customer</h1>
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/customers" component={this.renderCustomerListContainer}/>
          <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewContainer}/>
            <Route path="/customers/:dni" component={this.renderCustomerContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
