import React from 'react';

import UserForm from './../components/UserForm';
import UserItem from './../components/UserItem';
import API from './../Api';

class Users extends React.Component {
  state = {
    users: {},
  };

  testEndopint = async () => {
    const res = await API.get('/');
    console.info(res.data.message);
  };

  loadUsers = async () => {
    const res = await API.get('/user');
    const users = res.data.reduce((users, user) => {
      users[`${user.id}`] = user;
      return users;
    }, {});
    this.setState({ users });
  };

  componentDidMount() {
    this.testEndopint();
    this.loadUsers();
  }

  render() {
    return (
      <React.Fragment>
        <UserForm />
        {/* Panel */}
        <div className='columns'>
          <nav className='panel column is-8 is-offset-2'>
            <p className='panel-heading'>Users List</p>
            {Object.keys(this.state.users).map((key) => (
              <UserItem key={key} user={this.state.users[key]} />
            ))}
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Users;
