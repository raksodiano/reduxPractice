import React from 'react';
import PropTypes from 'prop-types';
import CustomerAction from './CustomerAction';

const CustomerData = ({ name, dni, age, onBack }) => {
  return (
    <div>
      <div className="customer-data">
        <h2>Datos del Cliente</h2>
        <div><strong>Nombre</strong><i>{name}</i></div>
        <div><strong>DNI</strong><i>{dni}</i></div>
        <div><strong>Edad</strong><i>{age}</i></div>
      </div>
        <CustomerAction>
          <button onClick={onBack}>Volver</button>
        </CustomerAction>
    </div>
  );
};

CustomerData.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired,
};

export default CustomerData;