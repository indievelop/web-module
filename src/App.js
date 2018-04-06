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
    const navDatas = [ { to: '/', key: 'home' }, { to: '/signin', key: 'signin' }, { to: '/signup', key: 'signup' } ];
    const NavItems = navDatas.map((nav) => <NavItem to={nav.to} key={nav.key}></NavItem> );

    return (
      <Provider store={store}>
        <Router history={history} routes={Routes}>
          <div className="App container-fluid">
            <NavBar>
              {NavItems}
            </NavBar>
            { process.env.NODE_ENV !== 'production' && <DevTools /> }
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
