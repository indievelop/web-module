import React, { Component } from 'react';
import classNames from 'classnames';
import Button from './Button';

class ButtonSecondary extends Component {
  render () {
    const { ...props } = this.props;
    props.className = classNames('btn-secondary', props.className);

    return (
      <Button {...props} />
    );
  }
}

export default ButtonSecondary;
