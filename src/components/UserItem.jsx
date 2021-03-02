import React from 'react';

class UserItem extends React.Component {
  nameRef = React.createRef();

  state = {
    isModify: false,
  };

  toggle = () => {
    this.setState((prevState) => ({ isModify: !prevState.isModify }));
  };

  buttonTaskHandler = (event) => {
    const user = this.props.user;
    this.props.history.push(`/user/${user.id}`);
  };

  buttonDeleteHandler = (event) => {
    this.props.deleteUser(this.props.user.id);
  };

  buttonEditHandler = (event) => {
    this.toggle();
  };

  buttonResetHandler = (event) => {
    this.toggle();
  };

  inputChangeHandler = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    const name = this.nameRef.current.value;
    const user = { ...this.props.user };
    user.name = name;
    this.props.updateUser(user);
    this.toggle();
  };

  renderNormal = (user) => {
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
                onClick={this.buttonEditHandler}
                className='button is-light has-icons'
                type='button'
              >
                <i className='fas fa-edit'></i>
              </button>
              <button
                onClick={this.buttonTaskHandler}
                className='button is-info has-icons'
                type='button'
              >
                <i className='fas fa-list'></i>
              </button>
            </div>
          </div>
          <div className='column is-1'>
            <button
              onClick={this.buttonDeleteHandler}
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

  renderModify = (user) => {
    return (
      <React.Fragment>
        {/* UserItem modify state */}
        <div className='panel-block'>
          <div className='column'>
            <form onSubmit={this.submitHandler}>
              <div className='field has-addons is-expanded'>
                <div className='control is-expanded'>
                  <input
                    ref={this.nameRef}
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
                    onClick={this.buttonResetHandler}
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
      this.nameRef.current.focus();
    }
  }

  render() {
    const user = this.props.user;
    if (this.state.isModify) {
      return this.renderModify(user);
    }
    return this.renderNormal(user);
  }
}

export default UserItem;
