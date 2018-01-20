import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import NavItem from './NavItem';

class NavBar extends Component {
  render () {
    const { className, children, ...props } = this.props;
    const navBarClassName = classNames('navbar fixed-top navbar-expand-sm navbar-light bg-light', className);

    return (
      <nav className={navBarClassName} {...props}>
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {...children}
          </ul>
        </div>        
      </nav>
    );
  }
}

export default NavBar;
