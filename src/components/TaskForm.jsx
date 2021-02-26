import React from 'react';

class TaskForm extends React.Component {
  state = {
    isCreate: false,
  };

  renderNormal = () => {
    return (
      <React.Fragment>
        {/* TaskForm state button */}
        <div className='panel-block'>
          <div className='column'>
            <button
              className='button is-primary is-light has-icons'
              type='button'
            >
              <span className='icon is-small'>
                <i className='fas fa-plus'></i>
              </span>
              <span>Add task</span>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  };

  renderCreate = () => {
    return (
      <React.Fragment>
        {/* TaskForm state input */}
        <div className='panel-block'>
          <div className='column'>
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
                  <button className='button is-success has-icons' type='submit'>
                    <i className='fas fa-check'></i>
                  </button>
                </div>
                <div className='control'>
                  <button className='button is-lighthas-icons' type='reset'>
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
    if (this.state.isCreate) {
      return this.renderCreate();
    }
    return this.renderNormal();
  }
}

export default TaskForm;
