import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class NavItem extends Component {
  render () {
    const { active = false, to, children} = this.props;

    return (
      <li className={classNames('nav-item', { active })}>
        <Link className="nav-link" to={to}>{children}</Link>
      </li>
    );
  }
}

export default NavItem;
