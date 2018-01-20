import React, { Component } from 'react';
import classNames from 'classnames';

class Field extends Component {
  render () {
    const { className = '', input, ...props } = this.props;
    const inputClassName = classNames('form-control', className);

    return (
      <input className={inputClassName} {...input} {...props} />
    );
  }
}

export default Field;
