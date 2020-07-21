import {
  ECOMMERCE_SKULIST_REQUEST,
  ECOMMERCE_SKULIST_REQUEST_SUCCESS,
  ECOMMERCE_SKULIST_REQUEST_FAILED,
  ECOMMERCE_CHECKOUT_REQUEST,
  ECOMMERCE_CHECKOUT_REQUEST_SUCCESS,
  ECOMMERCE_CHECKOUT_REQUEST_FAILED,
} from './ecommerceActionTypes';

export const createEcommerceRequest = () => ({
  type: ECOMMERCE_SKULIST_REQUEST,
});

export const createEcommerceRequestSuccess = (payload: any) => {
  return {
    type: ECOMMERCE_SKULIST_REQUEST_SUCCESS,
    payload,
  };
};

export const createEcommerceRequestFailed = (payload: any) => {
  return {
    type: ECOMMERCE_SKULIST_REQUEST_FAILED,
    payload,
  };
};

export const checkoutRequest = (payload: any) => ({
  type: ECOMMERCE_CHECKOUT_REQUEST,
  payload,
});

export const checkoutRequestSuccess = (payload: any) => {
  return {
    type: ECOMMERCE_CHECKOUT_REQUEST_SUCCESS,
    payload,
  };
};

export const checkoutRequestFailed = (payload: any) => {
  return {
    type: ECOMMERCE_CHECKOUT_REQUEST_FAILED,
    payload,
  };
};
