import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './constants';

class Routes extends Component {
  render() {
    return (
      <Router>
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
      </Router>
    );
  }
}

export default Routes;
