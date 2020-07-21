// tslint:disable: prettier
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { rootReducer } from 'Containers/appShell/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import startRootSaga from './sagas';

export const history = createBrowserHistory();
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

declare var module: { hot: any };

export function configureStore(preloadedState: any) {
  const devTools =
    process.env.NODE_ENV === 'development'
      ? composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
      : compose(applyMiddleware(routerMiddleware(history), sagaMiddleware));
  const store = createStore(rootReducer(history), preloadedState, devTools);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  // run the saga
  sagaMiddleware.run(startRootSaga);

  return store;
}
