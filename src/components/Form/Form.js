import React, { Component } from 'react';

class Form extends Component {
  render () {
    const { ...props }  = this.props;
    return (
      <form {...props} />
    );
  }
}

export default Form;
