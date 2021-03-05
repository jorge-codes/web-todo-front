import React, { useEffect, useRef, useState } from 'react';

const TaskItem = (props) => {
  const checkDoneRef = useRef(null);
  const descriptionRef = useRef(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (isEdit) {
      descriptionRef.current.focus();
    }
  });

  const toggle = () => {
    setIsEdit(!isEdit);
  };

  const buttonDeleteHandler = (event) => {
    const id = props.task.id;
    props.deleteTask(id);
  };

  const checkDoneHandler = (event) => {
    const task = { ...props.task };
    task.state = event.currentTarget.checked;
    props.updateTask(task);
  };

  const clickHandler = (event) => {
    toggle();
  };

  const buttonCancelHandler = (event) => {
    toggle();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const task = { ...props.task };
    task.description = descriptionRef.current.value;
    props.updateTask(task);
    event.currentTarget.reset();
    toggle();
  };

  const renderNormal = (task) => {
    return (
      <React.Fragment>
        {/* TaskItem normal state */}
        <div className='panel-block'>
          <div className='column'>
            <form>
              <div className='field has-addons is-expanded'>
                <div className='control'>
                  <input
                    ref={checkDoneRef}
                    onChange={checkDoneHandler}
                    type='checkbox'
                    defaultChecked={task.state}
                  />
                </div>
                <div onClick={clickHandler} className='control is-expanded'>
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
                    onClick={buttonDeleteHandler}
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

  const renderModify = (task) => {
    return (
      <React.Fragment>
        {/* TaskItem modify state */}

        <div className='panel-block'>
          <div className='column'>
            <form onSubmit={submitHandler}>
              <div className='field has-addons is-expanded'>
                <div className='control is-expanded'>
                  <input
                    ref={descriptionRef}
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
                    onClick={buttonCancelHandler}
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

  if (isEdit) {
    return renderModify(props.task);
  }
  return renderNormal(props.task);
};

export default TaskItem;
