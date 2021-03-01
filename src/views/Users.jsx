import React from 'react';

import UserForm from './../components/UserForm';
import UserItem from './../components/UserItem';
import API from './../Api';

class Users extends React.Component {
  state = {
    users: {},
  };

  cleanInput = (input) => {
    const MAX_LENGTH = 79;
    let clean = input.trim().substring(0, MAX_LENGTH);
    return clean;
  };

  testEndopint = async () => {
    const res = await API.get('/');
    console.info(res.data.message);
  };

  loadUsers = async () => {
    const res = await API.get('/user');
    if (res.status !== 200) {
      console.error(res.data);
      return;
    }
    const users = res.data.reduce((users, user) => {
      users[`${user.id}`] = user;
      return users;
    }, {});
    this.setState({ users });
  };

  addUser = async (name) => {
    name = this.cleanInput(name);
    const newUser = { name };
    const res = await API.post('/user', newUser);
    if (res.status !== 200) {
      console.error(res.data);
      return;
    }
    const user = res.data;
    const users = { ...this.state.users };
    users[`${user.id}`] = user;
    this.setState({ users });
  };

  deleteUser = async (id) => {
    const res = await API.delete(`/user/${id}`);
    if (res.status !== 200) {
      console.error(res.data);
      return;
    }
    const user = res.data;
    const users = { ...this.state.users };
    delete users[`${user.id}`];
    this.setState({ users });
  };

  updateUser = async (updatedUser) => {
    const id = updatedUser.id;
    const res = await API.patch(`/user/${id}`, updatedUser);
    if (res.status !== 200) {
      console.error(res.data);
      return;
    }
    const user = res.data;
    const users = { ...this.state.users };
    users[`${user.id}`] = user;
    this.setState({ users });
  };

  componentDidMount() {
    this.testEndopint();
    this.loadUsers();
  }

  render() {
    return (
      <React.Fragment>
        <UserForm addUser={this.addUser} />
        {/* Panel */}
        <div className='columns'>
          <nav className='panel column is-8 is-offset-2'>
            <p className='panel-heading'>Users List</p>
            {Object.keys(this.state.users).map((key) => (
              <UserItem
                key={key}
                id={key}
                user={this.state.users[key]}
                deleteUser={this.deleteUser}
                updateUser={this.updateUser}
              />
            ))}
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Users;
