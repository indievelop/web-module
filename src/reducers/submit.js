import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const submit = values => {
  return sleep(1000).then(() => {
    if (!['test'].includes(values.username)) {
      throw new SubmissionError({
        username: 'User does noe exist',
        _error: 'Login failed'
      })
    } else if (values.password !== 'test') {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login faild'
      })
    } else {
      window.alert(`You submitted\n\n${JSON.stringify(values, null, 2)}`);
    }
  });
}

export default submit;
