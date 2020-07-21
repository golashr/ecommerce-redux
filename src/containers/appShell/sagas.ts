import { all } from 'redux-saga/effects';
import { watchEcommerceSKUListActions } from 'Components/ecommerce/ecommerce.saga';
export default function* startRootSaga() {
  yield all([watchEcommerceSKUListActions()]);
}
