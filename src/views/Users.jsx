import React from 'react';
import UserForm from './../components/UserForm';
import UserItem from './../components/UserItem';

class Users extends React.Component {
  render() {
    return (
      <React.Fragment>
        <UserForm />
        {/* Panel */}
        <div className='columns'>
          <nav className='panel column is-8 is-offset-2'>
            <p className='panel-heading'>Users List</p>
            <UserItem />
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Users;
