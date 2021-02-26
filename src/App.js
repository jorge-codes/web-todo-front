import './App.css';
import Users from './views/Users';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Header />

      {/* Here starts the app */}
      <Users />

      <Footer />
    </div>
  );
}

export default App;
