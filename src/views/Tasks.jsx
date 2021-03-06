import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import API from '../Api';
import { INPUT_MAX_LENGTH, cleanInput } from '../Helpers';

const Tasks = (props) => {
  const [user, setUser] = useState('');
  const [tasks, setTasks] = useState({});

  //TODO: it's not being used, and needs to be used
  // Research the use of history prop and how to retrive history
  // goBack = () => {
  //   props.history.goBack();
  // };

  const goHome = () => {
    props.history.replace('/');
  };

  const loadTasks = async (id) => {
    API.get(`/task/user/${id}`)
      .then((response) => {
        const _user = { ...response.data.user };
        _user.id = id;
        const _tasks = response.data.tasks.reduce((_tasks, _task) => {
          _tasks[`${_task.id}`] = _task;
          return _tasks;
        }, {});
        setUser(_user);
        setTasks(_tasks);
      })
      .catch((error) => {
        console.log(error.config);
        goHome();
      });
  };

  const addTask = (_user, _description) => {
    _description = cleanInput(_description, INPUT_MAX_LENGTH);
    const newTask = { user: _user, description: _description };
    API.post(`/task`, newTask)
      .then((response) => {
        const _task = response.data;
        const _tasks = { ...tasks };
        _tasks[`${_task.id}`] = _task;
        setTasks(_tasks);
      })
      .catch((error) => {
        console.log(error.config);
      });
  };

  const deleteTask = (id) => {
    API.delete(`/task/${id}`)
      .then((response) => {
        const _task = response.data;
        const _tasks = { ...tasks };
        delete _tasks[`${_task.id}`];
        setTasks(_tasks);
      })
      .catch((error) => {
        console.log(error.config);
      });
  };

  const updateTask = (updatedTask) => {
    updatedTask.description = cleanInput(
      updatedTask.description,
      INPUT_MAX_LENGTH
    );
    API.patch(`/task/${updatedTask.id}`, updatedTask)
      .then((response) => {
        const _task = response.data;
        const _tasks = { ...tasks };
        _tasks[`${_task.id}`] = _task;
        setTasks(_tasks);
      })
      .catch((error) => {
        console.log(error.config);
      });
  };

  useEffect(() => {
    const id = props.match.params.id;
    if (id === undefined || id === '') {
      goHome();
    }

    loadTasks(id);
  }, []);

  return (
    <React.Fragment>
      <div className='container'>
        <Header />

        {/* Panel tasks */}
        <div className='columns'>
          <nav className='panel column is-8 is-offset-2'>
            <p className='panel-heading'>
              {user.name}'s Task List
              <button
                onClick={goHome}
                type='button'
                className='button is-small has-icons is-link is-pulled-right'
              >
                <span className='icon'>
                  <i className='fas fa-angle-left'></i>
                </span>
                <span>back</span>
              </button>
            </p>

            {Object.keys(tasks).map((key) => (
              <TaskItem
                key={key}
                task={tasks[key]}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))}

            <TaskForm user={user} addTask={addTask} />
          </nav>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Tasks;
