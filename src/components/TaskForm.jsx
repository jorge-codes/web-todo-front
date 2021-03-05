import React, { useState, useRef, useEffect } from 'react';

const TaskForm = (props) => {
  const [isEdit, setEdit] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (isEdit) {
      descriptionRef.current.focus();
    }
  });

  const toggle = () => {
    setEdit(!isEdit);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const description = descriptionRef.current.value;
    props.addTask(props.user.id, description);
    event.currentTarget.reset();
    toggle();
  };

  const buttonCreateHandler = (event) => {
    toggle();
  };

  const buttonCancelHandler = (event) => {
    toggle();
  };

  const renderNormal = () => {
    return (
      <React.Fragment>
        {/* TaskForm state button */}
        <div className='panel-block'>
          <div className='column'>
            <button
              onClick={buttonCreateHandler}
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

  // componentDidUpdate() {
  //   if (state.isCreate) {
  //     descriptionRef.current.focus();
  //   }
  // }

  const renderEdit = () => {
    return (
      <React.Fragment>
        {/* TaskForm state input */}
        <div className='panel-block'>
          <div className='column'>
            <form onSubmit={submitHandler}>
              <div className='field has-addons is-expanded'>
                <div className='control is-expanded'>
                  <input
                    ref={descriptionRef}
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
                    onClick={buttonCancelHandler}
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

  if (isEdit) {
    return renderEdit();
  }
  return renderNormal();
};

export default TaskForm;
