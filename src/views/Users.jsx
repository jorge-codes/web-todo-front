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

  loadUsers = async () => {
    API.get('/user')
      .then((response) => {
        const users = response.data.reduce((users, user) => {
          users[`${user.id}`] = user;
          return users;
        }, {});
        this.setState({ users });
      })
      .catch((error) => {
        console.log(error.config);
      });
  };

  addUser = async (name) => {
    name = cleanInput(name, INPUT_MAX_LENGTH);
    const newUser = { name };
    API.post('/user', newUser)
      .then((response) => {
        const user = response.data;
        const users = { ...this.state.users };
        users[`${user.id}`] = user;
        this.setState({ users });
      })
      .catch((error) => {
        console.log(error.config);
      });
  };

  deleteUser = async (id) => {
    API.delete(`/user/${id}`)
      .then((response) => {
        const user = response.data;
        const users = { ...this.state.users };
        delete users[`${user.id}`];
        this.setState({ users });
      })
      .catch((error) => {
        console.log(error.config);
      });
  };

  updateUser = async (updatedUser) => {
    const id = updatedUser.id;
    updatedUser.name = cleanInput(updatedUser.name, INPUT_MAX_LENGTH);
    API.patch(`/user/${id}`, updatedUser)
      .then((response) => {
        const user = response.data;
        const users = { ...this.state.users };
        users[`${user.id}`] = user;
        this.setState({ users });
      })
      .catch((error) => {
        console.log(error.config);
      });
  };

  componentDidMount() {
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
