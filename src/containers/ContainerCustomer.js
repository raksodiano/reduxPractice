import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { getCustomersByDni } from '../selectors/customers';
import AppFrame from './../components/AppFrame';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';
import { fetchCustomers } from './../actions/fetchCustomers';
import { updateCustomer } from './../actions/updateCustomer';
import { deleteCustomer } from './../actions/deleteCustomer';

class ContainerCustomer extends Component {

  componentDidMount() {
    if (!this.props.customer) {
      this.props.fetchCustomers();
    }
  }

  handleSubmit = values => {
    const { id } = values;
    return this.props.updateCustomer(id, values);
  }

  handleOnBack = () => {
    this.props.history.goBack();
  }

  handleOnSubmitSuccess = () => {
    this.props.history.goBack();
  }

  handleOnDelete = id => {
    this.props.deleteCustomer(id).then(
      v => this.props.history.goBack()
    );
  }

  renderCustomerControl = (isEdit, isDelete) => {
    const CustomerControl = isEdit ? CustomerEdit : CustomerData;
    return <CustomerControl
      {...this.props.customer}
      onSubmit={this.handleSubmit}
      onSubmitSuccess={this.handleOnSubmitSuccess}
      onBack={this.handleOnBack}
      isDeleteAllow={!!isDelete}
      onDelete={this.handleOnDelete}
    />
  }

  renderBody = () => (
    <Route
      path="/customers/:dni/edit"
      children={
        ({ match: isEdit }) => (
          <Route
            path="/customers/:dni/del"
            children={
              ({ match: isDelete }) => (
                this.renderCustomerControl(isEdit, isDelete)
              )
            }
          />
        )
      }
    />
  )

  render() {
    return (
      <div>
        <AppFrame
          header={`Cliente ${this.props.dni}`}
          body={this.renderBody()}
        />
      </div>
    );
  }
}

ContainerCustomer.propTypes = {
  dni: PropTypes.string.isRequired,
  customer: PropTypes.object,
  fetchCustomers: PropTypes.func.isRequired,
  updateCustomer: PropTypes.func.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  customer: getCustomersByDni(state, props)
});

export default withRouter(connect(
  mapStateToProps, 
  { 
    fetchCustomers, 
    updateCustomer,
    deleteCustomer
  })(ContainerCustomer));