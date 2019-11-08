import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import CustomerListItem from './CustomerListItem';

const CustomerList = ({ customers, urlPath }) => {
  return (
    <div>
      <div className="customer-list">
        {
          customers.map(c =>
            <CustomerListItem
              key={c.dni}
              dni={c.dni}
              name={c.name}
              editAction={'Editar'}
              delAction={'Eliminar'}
              urlPath={urlPath}
            />
          )
        }
      </div>
    </div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default withRouter(CustomerList);