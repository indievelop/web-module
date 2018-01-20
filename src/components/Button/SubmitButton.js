import React, { Component } from 'react';
import ButtonPrimary from './ButtonPrimary';

class SubmitButton extends Component {
  render () {
    const { ...props } = this.props;

    return (
      <ButtonPrimary type='submit' {...props} />
    );
  }
}

export default SubmitButton;
