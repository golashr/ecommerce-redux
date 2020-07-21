import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { ecommerceSKUs } from 'Components/ecommerce/ecommerce.reducer';

export const rootReducer = (history: any) => {
  return combineReducers({
    router: connectRouter(history),
    ecommerceSKUs,
  });
};
