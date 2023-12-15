import './App.css';
import NavBar from './components/NavBar/Navbar';
import MainView from './components/MainView/MainView';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainView className='mainView'/>
    </div>
  );
}

export default App;
