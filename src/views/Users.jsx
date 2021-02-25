import React from 'react';

class Users extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* UserForm */}
        <view className='columns'>
          <view className='column is-8 is-offset-2 has-text-centered'>
            <view className='field has-addons is-expanded'>
              <view className='control is-expanded'>
                <input
                  className='input'
                  type='text'
                  placeholder='Add new user here'
                />
              </view>
              <view className='control'>
                <button className='button is-primary has-icons' type='submit'>
                  <i class='fas fa-plus'></i>
                </button>
              </view>
            </view>
          </view>
        </view>

        {/* Panel */}
        <view className='columns'>
          <nav className='panel column is-8 is-offset-2'>
            <p className='panel-heading'>Users List</p>

            {/* UserItem normal state */}
            <view className='panel-block'>
              <view className='column'>
                <p>Jessy Rocket</p>
              </view>
              <view className='column is-3'>
                <view className='buttons are-small'>
                  <button className='button is-light has-icons' type='button'>
                    <i class='fas fa-edit'></i>
                  </button>
                  <button className='button is-info has-icons' type='button'>
                    <i class='fas fa-list'></i>
                  </button>
                </view>
              </view>
              <view className='column is-1'>
                <button
                  className='button is-small is-danger has-icons'
                  type='submit'
                >
                  <i class='fas fa-trash'></i>
                </button>
              </view>
            </view>

            {/* UserItem modify state */}
            <view className='panel-block'>
              <view className='column'>
                <form>
                  <div className='field has-addons is-expanded'>
                    <div className='control is-expanded'>
                      <input
                        className='input is-small'
                        type='text'
                        placeholder='Jessy Rocket'
                      />
                    </div>
                    <div className='control'>
                      <button
                        className='button is-success is-small has-icons'
                        type='submit'
                      >
                        <i class='fas fa-check'></i>
                      </button>
                    </div>
                    <div className='control'>
                      <button
                        className='button is-light is-small has-icons'
                        type='reset'
                      >
                        <i class='fas fa-times'></i>
                      </button>
                    </div>
                  </div>
                </form>
              </view>
            </view>

            <view className='panel-block'>
              <view className='column'>
                <p>James Rocket</p>
              </view>
              <view className='column is-3'>
                <view className='buttons are-small'>
                  <button className='button is-light has-icons' type='button'>
                    <i class='fas fa-edit'></i>
                  </button>
                  <button className='button is-info has-icons' type='button'>
                    <i class='fas fa-list'></i>
                  </button>
                </view>
              </view>
              <view className='column is-1'>
                <button
                  className='button is-small is-danger has-icons'
                  type='submit'
                >
                  <i class='fas fa-trash'></i>
                </button>
              </view>
            </view>
          </nav>
        </view>
      </React.Fragment>
    );
  }
}

export default Users;
