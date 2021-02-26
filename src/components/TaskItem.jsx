import React from 'react';

class TaskItem extends React.Component {
  state = {
    isDone: false,
    isModify: false,
  };

  renderNormal = () => {
    return (
      <React.Fragment>
        {/* TaskItem normal state */}
        <div className='panel-block'>
          <div className='column'>
            <form>
              <div className='field has-addons is-expanded'>
                <div className='control'>
                  <input type='checkbox' defaultChecked={this.state.isDone} />
                </div>
                <div className='control is-expanded'>
                  {this.state.isDone ? (
                    <span className='has-text-grey has-line-through'>
                      Task #1
                    </span>
                  ) : (
                    <span>Task #1</span>
                  )}
                </div>
                <div className='control'>
                  <button
                    className='button is-light is-small has-icons'
                    type='button'
                  >
                    <i className='fas fa-times'></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  };

  renderModify = () => {
    return (
      <React.Fragment>
        {/* TaskItem modify state */}
        <div className='panel-block'>
          <div className='column'>
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
          </div>
        </div>
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

export default TaskItem;
