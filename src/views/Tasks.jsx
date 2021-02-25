import React from 'react';

class Tasks extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* Panel tasks */}
        <view className='columns'>
          <nav className='panel column is-8 is-offset-2'>
            <p className='panel-heading'>
              <button className='button is-small has-icons is-link is-pulled-right'>
                <span className='icon'>
                  <i class='fas fa-angle-left'></i>
                </span>
                <span>back</span>
              </button>
              Task list
            </p>

            {/* TaskItem normal state */}
            <view className='panel-block'>
              <view className='column'>
                <form>
                  <div className='field has-addons is-expanded'>
                    <div className='control'>
                      <input type='checkbox' />
                    </div>
                    <div className='control is-expanded'>
                      <span>Task #1</span>
                    </div>
                    <div className='control'>
                      <button
                        className='button is-light is-small has-icons'
                        type='button'
                      >
                        <i class='fas fa-times'></i>
                      </button>
                    </div>
                  </div>
                </form>
              </view>
            </view>

            {/* TaskItem done state */}
            <view className='panel-block'>
              <view className='column'>
                <form>
                  <div className='field has-addons is-expanded'>
                    <div className='control'>
                      <input type='checkbox' />
                    </div>
                    <div className='control is-expanded'>
                      <span className='has-text-grey has-line-through'>
                        Task done
                      </span>
                    </div>
                    <div className='control'>
                      <button
                        className='button is-light is-small has-icons'
                        type='button'
                      >
                        <i class='fas fa-times'></i>
                      </button>
                    </div>
                  </div>
                </form>
              </view>
            </view>

            {/* TaskItem modify state */}
            <view className='panel-block'>
              <view className='column'>
                <form>
                  <div className='field has-addons is-expanded'>
                    <div className='control is-expanded'>
                      <input
                        className='input is-small'
                        type='text'
                        placeholder='Task to be modified'
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

            {/* TaskForm state button */}
            <view className='panel-block'>
              <view className='column'>
                <button
                  className='button is-primary is-light has-icons'
                  type='button'
                >
                  <span className='icon is-small'>
                    <i class='fas fa-plus'></i>
                  </span>
                  <span>Add task</span>
                </button>
              </view>
            </view>

            {/* TaskForm state input */}
            <view className='panel-block'>
              <view className='column'>
                <form>
                  <div className='field has-addons is-expanded'>
                    <div className='control is-expanded'>
                      <input
                        className='input'
                        type='text'
                        placeholder='Adding new task'
                      />
                    </div>
                    <div className='control'>
                      <button
                        className='button is-success has-icons'
                        type='submit'
                      >
                        <i class='fas fa-check'></i>
                      </button>
                    </div>
                    <div className='control'>
                      <button className='button is-lighthas-icons' type='reset'>
                        <i class='fas fa-times'></i>
                      </button>
                    </div>
                  </div>
                </form>
              </view>
            </view>
          </nav>
        </view>
      </React.Fragment>
    );
  }
}

export default Tasks;
