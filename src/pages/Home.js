import React, { Component } from 'react';
import logo from '../logo.svg';

class Home extends Component {
  render () {
    return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Web</h1>
      </header>
      <p className="App-intro">Web</p>
    </div>
    );
  }
}

export default Home;
