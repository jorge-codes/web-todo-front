import React from 'react';

class UserItem extends React.Component {
  state = {
    isModify: false,
  };

  renderNormal = () => {
    return (
      <React.Fragment>
        {/* UserItem normal state */}
        <div className='panel-block'>
          <div className='column'>
            <p>Jessy Rocket</p>
          </div>
          <div className='column is-3'>
            <div className='buttons are-small'>
              <button className='button is-light has-icons' type='button'>
                <i className='fas fa-edit'></i>
              </button>
              <button className='button is-info has-icons' type='button'>
                <i className='fas fa-list'></i>
              </button>
            </div>
          </div>
          <div className='column is-1'>
            <button
              className='button is-small is-danger has-icons'
              type='submit'
            >
              <i className='fas fa-trash'></i>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  };

  renderModify = () => {
    return (
      <React.Fragment>
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
                    <i className='fas fa-check'></i>
                  </button>
                </div>
                <div className='control'>
                  <button
                    className='button is-light is-small has-icons'
                    type='reset'
                  >
                    <i className='fas fa-times'></i>
                  </button>
                </div>
              </div>
            </form>
          </view>
        </view>
      </React.Fragment>
    );
  };

  render() {
    if (this.state.isModify) {
      return this.renderModify();
    }
    return this.renderNormal();
  }
}

export default UserItem;
