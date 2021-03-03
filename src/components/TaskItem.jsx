import React from 'react';

class TaskItem extends React.Component {
  checkDoneRef = React.createRef();
  descriptionRef = React.createRef();

  state = {
    isModify: false,
  };

  toggle = () => {
    this.setState((prevState) => ({ isModify: !prevState.isModify }));
  };

  buttonDeleteHandler = (event) => {
    const id = this.props.task.id;
    this.props.deleteTask(id);
  };

  checkDoneHandler = (event) => {
    const task = { ...this.props.task };
    task.state = event.currentTarget.checked;
    this.props.updateTask(task);
  };

  clickHandler = (event) => {
    this.toggle();
  };

  buttonCancelHandler = (event) => {
    this.toggle();
  };

  submitHandler = (event) => {
    event.preventDefault();
    const task = { ...this.props.task };
    task.description = this.descriptionRef.current.value;
    this.props.updateTask(task);
    event.currentTarget.reset();
    this.toggle();
  };

  renderNormal = (task) => {
    return (
      <React.Fragment>
        {/* TaskItem normal state */}
        <div className='panel-block'>
          <div className='column'>
            <form>
              <div className='field has-addons is-expanded'>
                <div className='control'>
                  <input
                    ref={this.checkDoneRef}
                    onChange={this.checkDoneHandler}
                    type='checkbox'
                    defaultChecked={task.state}
                  />
                </div>
                <div
                  onClick={this.clickHandler}
                  className='control is-expanded'
                >
                  {task.state ? (
                    <span className='has-text-grey-light has-line-through'>
                      {task.description}
                    </span>
                  ) : (
                    <span>{task.description}</span>
                  )}
                </div>
                <div className='control'>
                  <button
                    onClick={this.buttonDeleteHandler}
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

  renderModify = (task) => {
    return (
      <React.Fragment>
        {/* TaskItem modify state */}

        <div className='panel-block'>
          <div className='column'>
            <form onSubmit={this.submitHandler}>
              <div className='field has-addons is-expanded'>
                <div className='control is-expanded'>
                  <input
                    ref={this.descriptionRef}
                    defaultValue={task.description}
                    className='input is-small'
                    type='text'
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
                    onClick={this.buttonCancelHandler}
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

  componentDidUpdate() {
    if (this.state.isModify) {
      this.descriptionRef.current.focus();
      const description = this.descriptionRef.current.value;
      this.descriptionRef.current.value = '';
      this.descriptionRef.current.value = description;
    }
  }

  render() {
    const task = this.props.task;
    if (this.state.isModify) {
      return this.renderModify(task);
    }
    return this.renderNormal(task);
  }
}

export default TaskItem;
