import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerAction from '../components/CustomerAction';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <AppFrame 
          header="Home"
          body={
            <div>
              Esta es la pantalla de inicio
              <CustomerAction>
                <Link to="/customers">Listado de Clientes</Link>
              </CustomerAction>
            </div>
          }
        />
        {/* <h1>Home</h1>  
        <Link to="/customers">Listado de Clientes</Link> */}
      </div>
    );
  }
}

HomeContainer.propTypes = {

};

export default HomeContainer;