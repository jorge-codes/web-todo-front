import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';
import UserForm from './../components/UserForm';
import UserItem from './../components/UserItem';
import API from './../Api';
import { INPUT_MAX_LENGTH, cleanInput } from '../Helpers';

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
    name = cleanInput(name, INPUT_MAX_LENGTH);
    const newUser = { name };
    const res = await API.post('/user', newUser);
    //FIXME: use promises
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
    updatedUser.name = cleanInput(updatedUser.name, INPUT_MAX_LENGTH);
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
      <div className='container'>
        <Header />

        <UserForm addUser={this.addUser} />
        {/* Panel */}
        <div className='columns'>
          <nav className='panel column is-8 is-offset-2'>
            <p className='panel-heading'>Users List</p>
            {Object.keys(this.state.users).map((key) => (
              <UserItem
                key={key}
                id={key}
                history={this.props.history}
                user={this.state.users[key]}
                deleteUser={this.deleteUser}
                updateUser={this.updateUser}
              />
            ))}
          </nav>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Users;
