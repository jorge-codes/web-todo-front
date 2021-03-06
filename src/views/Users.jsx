import React, { useState, useEffect } from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';
import UserForm from './../components/UserForm';
import UserItem from './../components/UserItem';
import API from './../Api';
import { INPUT_MAX_LENGTH, cleanInput } from '../Helpers';

const Users = (props) => {
  const [users, setUsers] = useState({});

  const loadUsers = async () => {
    API.get('/user')
      .then((response) => {
        const _users = response.data.reduce((_users, _user) => {
          _users[`${_user.id}`] = _user;
          return _users;
        }, {});
        setUsers(_users);
      })
      .catch((error) => {
        console.log(error.config);
      });
  };

  const addUser = async (name) => {
    name = cleanInput(name, INPUT_MAX_LENGTH);
    const newUser = { name };
    API.post('/user', newUser)
      .then((response) => {
        const _user = response.data;
        const _users = { ...users };
        _users[`${_user.id}`] = _user;
        setUsers(_users);
      })
      .catch((error) => {
        console.log(error.config);
      });
  };

  const deleteUser = async (id) => {
    API.delete(`/user/${id}`)
      .then((response) => {
        const _user = response.data;
        const _users = { ...users };
        delete _users[`${_user.id}`];
        setUsers(_users);
      })
      .catch((error) => {
        console.log(error.config);
      });
  };

  const updateUser = async (updatedUser) => {
    const id = updatedUser.id;
    updatedUser.name = cleanInput(updatedUser.name, INPUT_MAX_LENGTH);
    API.patch(`/user/${id}`, updatedUser)
      .then((response) => {
        const _user = response.data;
        const _users = { ...users };
        _users[`${_user.id}`] = _user;
        setUsers(_users);
      })
      .catch((error) => {
        console.log(error.config);
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className='container'>
      <Header />

      <UserForm addUser={addUser} />
      {/* Panel */}
      <div className='columns'>
        <nav className='panel column is-8 is-offset-2'>
          <p className='panel-heading'>Users List</p>
          {Object.keys(users).map((key) => (
            <UserItem
              key={key}
              id={key}
              history={props.history}
              user={users[key]}
              deleteUser={deleteUser}
              updateUser={updateUser}
            />
          ))}
        </nav>
      </div>

      <Footer />
    </div>
  );
};

export default Users;
