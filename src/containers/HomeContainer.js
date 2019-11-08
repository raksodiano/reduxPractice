import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import CustomerAction from '../components/CustomerAction';

class HomeContainer extends Component {

  handleOnClick = () => {
    this.props.history.push('/customers');
  }

  render() {
    return (
      <div>
        <AppFrame 
          header="Home"
          body={
            <div>
              Esta es la pantalla de inicio
              <CustomerAction>
                <button onClick={this.handleOnClick}>Listado de Clientes</button>
              </CustomerAction>
            </div>
          }
        />
      </div>
    );
  }
}

export default HomeContainer;