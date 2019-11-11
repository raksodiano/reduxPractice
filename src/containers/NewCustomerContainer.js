import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createCustomer } from '../actions/createCustomer';

class NewCustomerContainer extends Component {

  handleSubmit = values => {
    this.props.createCustomer(values);
  }
  
  handleOnSubmitSuccess = () => {
    this.props.history.goBack();
  } 

  handleOnBack = () => {
    this.props.history.goBack();
  }

  renderBody = () => {
    return (
      <CustomerEdit 
        onSubmit={this.handleSubmit}
        onSubmitSuccess={this.handleOnSubmitSuccess}
        onBack={this.handleOnBack}
      />
    );
  }

  render() {
    return (
      <div>
        <AppFrame 
          header={`Creacion de nuevo cliente`}
          body={this.renderBody()}
        />      
      </div>
    );
  }
}

NewCustomerContainer.propTypes = {
  createCustomer: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { createCustomer })(NewCustomerContainer));