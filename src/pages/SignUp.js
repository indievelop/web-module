import React, { Component } from 'react';

class SignUp extends Component {
  render () {
    return (
    <form>
      <input type='text' name='username'/>
      <input type='password' name='password'/>
      <button>SiginUp</button>
    </form>
    );
  }
}

export default SignUp;
