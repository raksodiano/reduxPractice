import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomerAction from '../components/CustomerAction';
import { fetchCustomers } from './../actions/fetchCustomers';
import { getCustomers } from './../selectors/customers';

class CustomerContainer extends Component {

  componentDidMount() {
    console.log("componentDidMount", this.props);
    
    this.props.fetchCustomers();
  }

  handleAddNew = () => {
    this.props.history.push('/customers/new');
  }

  renderBody = customers => {
    return (
      <div>
        <CustomerList
          customers={customers}
          urlPath={'customers/'}
        />
        <CustomerAction>
          <button onClick={this.handleAddNew}>Nuevo Cliente</button>
        </CustomerAction>
      </div>
    )
  };

  render() {
    return (
      <div>
        <AppFrame
          header={'Listado de Clientes'}
          body={this.renderBody(this.props.customers)}
        />
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
};

CustomerContainer.defaultProps = {
  customers: []
};

const mapStateToProps = state => ({
  customers: getCustomers(state)
});
const mapDispatchToProps = { fetchCustomers };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerContainer));