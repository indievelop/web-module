import React, { Component } from 'react';
import FieldWrapper from './FieldWrapper';

class PasswordField extends Component {
  render () {
    return (
      <FieldWrapper type="password" {...this.props} />
    );
  }
}

export default PasswordField;
