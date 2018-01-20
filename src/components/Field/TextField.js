import React, { Component } from 'react';
import FieldWrapper from './FieldWrapper';

class TextField extends Component {
  render () {
    return (
      <FieldWrapper type="text" {...this.props} />
    );
  }
}

export default TextField;
