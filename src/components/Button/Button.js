import React, { Component } from 'react';
import classNames from 'classnames';

class Button extends Component {
  render () {
    const { className = '', children, type = 'button', ...props } = this.props;
    const butotnClassName = classNames('btn', className);
    const buttonType = type ? type : button;

    return (
      <button type={buttonType} className={butotnClassName} {...props}>{children}</button>
    );
  }
}

export default Button;
