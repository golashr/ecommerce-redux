/**
 *
 * This is the entry point for the application
 *
 */
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import AppShell from 'Containers/appShell/AppShell';
import { configureStore, history } from 'Containers/appShell/configureStore';

const MOUNT_NODE = document.getElementById('root');
const store = configureStore({});

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <AppShell />
        </div>
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE,
  );
};

declare var module: { hot: any };

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./containers/appShell/AppShell', () => {
    render();
  });
}

render();
