import update from 'immutability-helper';
import {
  ECOMMERCE_SKULIST_REQUEST_SUCCESS,
  ECOMMERCE_SKULIST_REQUEST_FAILED,
  ECOMMERCE_CHECKOUT_REQUEST_SUCCESS,
  ECOMMERCE_CHECKOUT_REQUEST_FAILED,
} from './ecommerceActionTypes';

const initalState = {
  SKUList: [],
  checkoutPrice: '',
  fail: {},
};

export const ecommerceSKUs = (state = initalState, action: any) => {
  switch (action.type) {
    case ECOMMERCE_SKULIST_REQUEST_SUCCESS: {
      return update(state, { SKUList: { $set: action } });
    }
    case ECOMMERCE_SKULIST_REQUEST_FAILED: {
      return update(state, { $set: action });
    }
    case ECOMMERCE_CHECKOUT_REQUEST_SUCCESS: {
      return update(state, { checkoutPrice: { $set: action } });
    }
    case ECOMMERCE_CHECKOUT_REQUEST_FAILED: {
      return update(state, { $set: action });
    }
    default: {
      return state;
    }
  }
};
