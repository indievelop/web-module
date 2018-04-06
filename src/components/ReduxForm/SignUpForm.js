import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form } from '../Form';
import { TextField, PasswordField } from '../Field';
import { Button, SubmitButton, ResetButton } from '../Button';
import { required, alphaNumeric } from '../../constants/validate';
import submit from '../../reducers/submit';
import { load as loadAccount } from '../../reducers/accounts';

const data ={
  username: 'abcd',
  password: 'efgh'
};

const lower = value => value && value.toLowerCase();
const normalizePhone = value => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 3) {
    return onlyNums
  }
  if (onlyNums.length <= 7) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`
  }
  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(6,10)}`
}

class SignUpForm extends Component {
  render() {
    const {
      handleSubmit, load, pristine, reset, submitting
    } = this.props;
    
    return (
      <Form onSubmit={handleSubmit(submit)}>
        <Button onClick={() => load(data)}>load</Button>
        <Field component={TextField} validate={[required]} id="username" name="username" placeholder="username" label="Username" labelSize={0}/>
        <Field component={PasswordField} validate={[required]} warn={[alphaNumeric]} id="password" name="password" placeholder="password" label="Password" labelSize={0}/>
        <Field component={TextField} validate={[required]} warn={[alphaNumeric]} normalize={lower} id="email" name="email" placeholder="email" label="Email" labelSize={0}/>
        <Field component={TextField} validate={[required]} warn={[alphaNumeric]} normalize={normalizePhone} id="phone" name="phone" placeholder="phone" label="Phone" labelSize={0}/>
        <SubmitButton disabled={submitting}>SignUp</SubmitButton>
        <ResetButton disabled={pristine || submitting} onClick={reset}>Reset</ResetButton>
      </Form>
    );
  }
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (['test', 'paul', 'george', 'ringo'].includes(values.username)) {
      throw { username: 'That username is taken' };
    }
  })
}

let SignUpReduxForm = reduxForm({
  form: 'signUp',
  asyncValidate,
  asyncBlurFields: ['username']
})(SignUpForm);

SignUpReduxForm = connect(
  state => ({
    initialValues: state.account.data
  }),
  { load: loadAccount }
)(SignUpReduxForm);

export default SignUpReduxForm;
