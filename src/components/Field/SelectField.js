import React, { Component } from 'react';
import classNames from 'classnames';

class SelectField extends Component {
  render () {
    const { className, input, ...props } = this.props;
    const selectClassName = classNames('form-control', className);
    return (
      <select {...input} {...props} />
    );
  }
}

export default SelectField;
