import React from 'react';
import PropTypes from 'prop-types';

const CustomerAction = ({ children }) => {
  return (
    <div>
      <div className="customer-actions">
        <div>{children}</div>
      </div>
    </div>
  );
};

CustomerAction.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default CustomerAction;