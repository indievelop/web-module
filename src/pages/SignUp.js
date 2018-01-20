import React, { Component } from 'react';
import { SignUpForm } from '../components/ReduxForm';

// const showResults = values =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
//       resolve();
//     }, 500);
//   });

class SignUp extends Component {
  render () {
    return (
      <SignUpForm />
    );
  }
}

export default SignUp;
