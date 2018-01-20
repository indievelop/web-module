import React, { Component } from 'react';
import classNames from 'classnames';
import Button from './Button';

class ButtonPrimary extends Component {
  render () {
    const { ...props } = this.props;
    props.className = classNames('btn-primary', props.className);

    return (
      <Button {...props} />
    );
  }
}

export default ButtonPrimary;
