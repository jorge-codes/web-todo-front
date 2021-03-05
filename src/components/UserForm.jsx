import React, { useState, useRef, useEffect } from 'react';

const UserForm = (props) => {
  const [inputText, setInputText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputHandler = (event) => {
    setInputText(event.currentTarget.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const name = inputText;
    props.addUser(name);
    event.currentTarget.reset();
  };

  return (
    <React.Fragment>
      {/* UserForm */}
      <form onSubmit={submitHandler}>
        <div className='columns'>
          <div className='column is-8 is-offset-2 has-text-centered'>
            <div className='field has-addons is-expanded'>
              <div className='control is-expanded'>
                <input
                  ref={inputRef}
                  onChange={inputHandler}
                  className='input'
                  type='text'
                  placeholder='Add new user here'
                />
              </div>
              <div className='control'>
                <button className='button is-primary has-icons' type='submit'>
                  <i className='fas fa-plus'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default UserForm;
