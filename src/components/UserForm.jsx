import React from 'react';

class UserForm extends React.Component {
  inputRef = React.createRef();

  submitHandler = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    this.props.addUser(name);
    event.currentTarget.reset();
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <React.Fragment>
        {/* UserForm */}
        <form onSubmit={this.submitHandler}>
          <div className='columns'>
            <div className='column is-8 is-offset-2 has-text-centered'>
              <div className='field has-addons is-expanded'>
                <div className='control is-expanded'>
                  <input
                    ref={this.inputRef}
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
  }
}

export default UserForm;
