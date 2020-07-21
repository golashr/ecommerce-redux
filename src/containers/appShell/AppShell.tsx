/**
 *
 * This component has all routers defined for an application.
 *
 */
// tslint:disable: prettier
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Ecommerce from 'Components/ecommerce/SKUList';
import PageNotFound from 'Components/pageNotFound';

class AppShell extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" component={Ecommerce} />
          <Route component={PageNotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default AppShell;
