import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {} from '../reducers/user';

class UserList extends Component {
  render () {
    const { users } = this.props;

    return (
      <div/>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string,
  }))
};

export default connect(state => (
  { users: }
))(UserList);
