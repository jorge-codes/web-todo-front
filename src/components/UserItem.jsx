import React, { useState, useRef, useEffect } from 'react';

const UserItem = (props) => {
  const nameRef = useRef(null);

  const [isEdit, setIsEdit] = useState(false);
  // const [name, setName] = useState('');

  useEffect(() => {
    console.log('component updated');
    if (isEdit) {
      nameRef.current.focus();
    }
  });

  const toggle = () => {
    setIsEdit(!isEdit);
  };

  const buttonTaskHandler = (event) => {
    const user = props.user;
    props.history.push(`/user/${user.id}`);
  };

  const buttonDeleteHandler = (event) => {
    props.deleteUser(props.user.id);
  };

  const buttonEditHandler = (event) => {
    toggle();
  };

  const buttonResetHandler = (event) => {
    toggle();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const user = { ...props.user };
    user.name = name;
    props.updateUser(user);
    toggle();
  };

  const renderNormal = (user) => {
    return (
      <React.Fragment>
        {/* UserItem normal state */}
        <div className='panel-block'>
          <div className='column'>
            <p>{user.name}</p>
          </div>
          <div className='column is-3'>
            <div className='buttons are-small'>
              <button
                onClick={buttonEditHandler}
                className='button is-light has-icons'
                type='button'
              >
                <i className='fas fa-edit'></i>
              </button>
              <button
                onClick={buttonTaskHandler}
                className='button is-info has-icons'
                type='button'
              >
                <i className='fas fa-list'></i>
              </button>
            </div>
          </div>
          <div className='column is-1'>
            <button
              onClick={buttonDeleteHandler}
              className='button is-small is-danger has-icons'
              type='button'
            >
              <i className='fas fa-trash'></i>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const renderEdit = (user) => {
    return (
      <React.Fragment>
        {/* UserItem modify state */}
        <div className='panel-block'>
          <div className='column'>
            <form onSubmit={submitHandler}>
              <div className='field has-addons is-expanded'>
                <div className='control is-expanded'>
                  <input
                    ref={nameRef}
                    defaultValue={user.name}
                    className='input is-small'
                    type='text'
                    placeholder={user.name}
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
                    onClick={buttonResetHandler}
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
    return renderEdit(props.user);
  }
  return renderNormal(props.user);
};

export default UserItem;
