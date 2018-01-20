import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import { NavBar, NavItem } from './components/Nav';
import { store } from './stores';
import { history } from './services';
import { DevTools } from './pages';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} routes={Routes}>
          <div className="App container-fluid">
            <NavBar>
              <NavItem to='/'>Home</NavItem>
              <NavItem to='/signin'>SignIn</NavItem>
              <NavItem to='/signup'>SignUp</NavItem>
            </NavBar>
          </div>
        </Router>
        { process.env.NODE_ENV !== 'production' && <DevTools /> }
      </Provider>
    );
  }
}

export default App;
