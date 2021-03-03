import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import API from '../Api';
import { INPUT_MAX_LENGTH, cleanInput } from '../Helpers';

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
      user.id = id;
      const tasks = res.data.tasks.reduce((tasks, task) => {
        tasks[`${task.id}`] = task;
        return tasks;
      }, {});
      this.setState({ user, tasks });
    } catch (error) {
      this.goHome();
    }
  };

  addTask = (user, description) => {
    description = cleanInput(description, INPUT_MAX_LENGTH);
    const newTask = { user, description };
    API.post(`/task`, newTask)
      .then((response) => {
        // Success!
        const task = response.data;
        const tasks = { ...this.state.tasks };
        tasks[`${task.id}`] = task;
        this.setState({ tasks });
      })
      .catch((error) => {
        console.log(error.config);
      });
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

              <TaskForm user={this.state.user} addTask={this.addTask} />
            </nav>
          </div>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Tasks;
