import React from 'react';

class UserForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* UserForm */}
        <div className='columns'>
          <div className='column is-8 is-offset-2 has-text-centered'>
            <div className='field has-addons is-expanded'>
              <div className='control is-expanded'>
                <input
                  className='input'
                  type='text'
                  placeholder='Add new user here'
                />
              </div>
              <div className='control'>
                <button className='button is-primary has-icons' type='submit'>
                  <i className='fas fa-plus'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserForm;
