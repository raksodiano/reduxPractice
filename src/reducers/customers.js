import { handleActions } from 'redux-actions';
import {
  FETCH_CUSTOMERS,
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER
} from './../constants';

export const customers = handleActions({
  [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
  [CREATE_CUSTOMER]: (state, action) => [
    ...state,
    action.payload
  ],
  [UPDATE_CUSTOMER]: (state, action) => {
    const { id } = action.payload;
    const initialValue = [];
    const newCustomers = state.reduce(
      (acumulador, customer) => {
        return (customer.id === id) ?
          [
            ...acumulador,
            action.payload
          ] :
          [
            ...acumulador,
            customer
          ];
      },
      initialValue
    );

    return newCustomers;
  }
}, []);