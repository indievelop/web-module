import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './constants';

class Routes extends Component {
  render() {
    return (
      <Switch>
        { routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
        ))}
      </Switch>
    );
  }
}

export default Routes;
