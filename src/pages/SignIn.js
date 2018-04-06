import React, { Component } from 'react';
import { TextField, PasswordField } from '../components/Field';
import { SubmitButton } from '../components/Button';

class SignIn extends Component {
  render () {
    return (
    <div>
      <TextField id="username" name="username" placeholder="username" title="username" labelSize={2}/>
      <PasswordField id="password" name="password" placeholder="password" title="password" labelSize={0}/>
      <SubmitButton>SiginIn</SubmitButton>
    </div>
    );
  }
}

export default SignIn;
