import { call, put, takeLatest } from 'redux-saga/effects';
import { ECOMMERCE_SKULIST_REQUEST, ECOMMERCE_CHECKOUT_REQUEST } from './ecommerceActionTypes';
import { ecommerceSKUsAPI, ecommerceCheckoutAPI } from './ecommerce.api';
import {
  createEcommerceRequestSuccess,
  createEcommerceRequestFailed,
  checkoutRequestSuccess,
  checkoutRequestFailed,
} from './ecommerce.actions';

export function* watchEcommerceSKUListActions() {
  yield takeLatest(ECOMMERCE_SKULIST_REQUEST, ecommerceSKUListRequest);
  yield takeLatest(ECOMMERCE_CHECKOUT_REQUEST, ecommerceCheckoutRequest);
}

export function* ecommerceSKUListRequest() {
  try {
    console.log('calling ecommerceSKUListRequest');
    const response = yield call(ecommerceSKUsAPI);
    console.log('response ', response);
    yield put(createEcommerceRequestSuccess(response));
  } catch (error) {
    console.log('ERROR    ', error);
    yield put(createEcommerceRequestFailed(error));
  }
}

export function* ecommerceCheckoutRequest(listOfProducts) {
  try {
    console.log('calling ecommerceCheckoutRequest');
    const response = yield call(ecommerceCheckoutAPI, listOfProducts);
    console.log('response ', response);
    yield put(checkoutRequestSuccess(response));
  } catch (error) {
    console.log('ERROR    ', error);
    yield put(checkoutRequestFailed(error));
  }
}
