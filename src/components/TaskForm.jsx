import React from 'react';

class TaskForm extends React.Component {
  state = {
    isCreate: false,
  };
  descriptionRef = React.createRef();

  toggle = () => {
    this.setState((prevState) => ({ isCreate: !prevState.isCreate }));
  };

  submitHandler = (event) => {
    event.preventDefault();
    const description = this.descriptionRef.current.value;
    this.props.addTask(this.props.user.id, description);
    event.currentTarget.reset();
    this.toggle();
  };

  buttonCreateHandler = (event) => {
    this.toggle();
  };

  buttonCancelHandler = (event) => {
    this.toggle();
  };

  renderNormal = () => {
    return (
      <React.Fragment>
        {/* TaskForm state button */}
        <div className='panel-block'>
          <div className='column'>
            <button
              onClick={this.buttonCreateHandler}
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

  componentDidUpdate() {
    if (this.state.isCreate) {
      this.descriptionRef.current.focus();
    }
  }

  renderCreate = () => {
    return (
      <React.Fragment>
        {/* TaskForm state input */}
        <div className='panel-block'>
          <div className='column'>
            <form onSubmit={this.submitHandler}>
              <div className='field has-addons is-expanded'>
                <div className='control is-expanded'>
                  <input
                    ref={this.descriptionRef}
                    className='input'
                    type='text'
                    placeholder='Add new task here...'
                  />
                </div>
                <div className='control'>
                  <button className='button is-success has-icons' type='submit'>
                    <i className='fas fa-check'></i>
                  </button>
                </div>
                <div className='control'>
                  <button
                    onClick={this.buttonCancelHandler}
                    className='button is-lighthas-icons'
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
    if (this.state.isCreate) {
      return this.renderCreate();
    }
    return this.renderNormal();
  }
}

export default TaskForm;
