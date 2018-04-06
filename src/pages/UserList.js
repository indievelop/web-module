import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UserList extends Component {
  render () {
    const { users } = this.props;

    return (
      <div/>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: [PropTypes.number, null],
      username: PropTypes.string.isRequired,
      password: PropTypes.string,
  }))
};

export default connect(state => (
  { users: state.users }
))(UserList);
