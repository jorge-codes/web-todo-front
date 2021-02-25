import './App.css';

import Users from './views/Users';
import Tasks from './views/Tasks';

function App() {
  return (
    <view className='container'>
      <view className='columns'>
        <header className='column is-10 is-offset-1 has-text-centered'>
          <h1 className='title is-1'>TO-DO APP</h1>
        </header>
      </view>

      {/* Here starts the app */}
      <Users />

      <h1>.</h1>
      <h1>.</h1>
      <Tasks />

      {/* Footer */}
      <footer className='footer'>
        <div className='content has-text-centered column is-6 is-offset-3'>
          <p>
            <strong>TO-DO APP</strong> by{' '}
            <a href='https://jorge-codes.com'>Jorge Palacios</a>. The source
            code is licensed{' '}
            <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>.
            The website content is licensed{' '}
            <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </footer>
    </view>
  );
}

export default App;
