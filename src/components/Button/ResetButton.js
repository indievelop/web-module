import React, { Component } from 'react';
import ButtonPrimary from './ButtonSecondary';

class ResetButton extends Component {
  render () {
    const { ...props } = this.props;

    return (
      <ButtonPrimary {...props} />
    );
  }
}

export default ResetButton;
