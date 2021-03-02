import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';

class Tasks extends React.Component {
  goBack = () => {
    console.log(this.props);
    this.props.history.goBack();
  };

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <Header />

          {/* Panel tasks */}
          <div className='columns'>
            <nav className='panel column is-8 is-offset-2'>
              <p className='panel-heading'>
                <button
                  onClick={this.goBack}
                  type='button'
                  className='button is-small has-icons is-link is-pulled-right'
                >
                  <span className='icon'>
                    <i className='fas fa-angle-left'></i>
                  </span>
                  <span>back</span>
                </button>
                Task list
              </p>

              <TaskItem />

              <TaskForm />
            </nav>
          </div>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Tasks;
