import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import API from '../Api';

class Tasks extends React.Component {
  state = {
    user: '',
    tasks: {},
  };

  goBack = () => {
    this.props.history.goBack();
  };

  goHome = () => {
    this.props.history.replace('/');
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id === undefined || id === '') {
      this.goHome();
    }
    this.loadTasks(id);
  }

  loadTasks = async (id) => {
    try {
      const res = await API.get(`/task/user/${id}`);
      const user = res.data.user;
      const tasks = res.data.tasks.reduce((tasks, task) => {
        tasks[`${task.id}`] = task;
        return tasks;
      }, {});
      this.setState({ user, tasks });
    } catch (error) {
      this.goHome();
    }
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
                {this.state.user.name}'s Task List
                <button
                  onClick={this.goHome}
                  type='button'
                  className='button is-small has-icons is-link is-pulled-right'
                >
                  <span className='icon'>
                    <i className='fas fa-angle-left'></i>
                  </span>
                  <span>back</span>
                </button>
              </p>

              {Object.keys(this.state.tasks).map((key) => (
                <TaskItem key={key} task={this.state.tasks[key]} />
              ))}

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
