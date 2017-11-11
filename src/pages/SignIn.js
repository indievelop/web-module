import React, { Component } from 'react';

class SignIn extends Component {
  render () {
    return (
    <div>
      <input type='text' name='username'/>
      <input type='password' name='password'/>
      <button>SiginIn</button>
    </div>
    );
  }
}

export default SignIn;
