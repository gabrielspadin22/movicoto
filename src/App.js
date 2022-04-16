import './App.css';
import './components/NavBar/NavBar.css';
import './components/Control/Control.css';
import './components/Sucus/Sucus.css';
import NavBar from './components/NavBar/NavBar';
import Control from './components/Control/Control';
import Sucus from './components/Sucus/Sucus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <Control />
      <Sucus />
      </header>
    </div>
  );
}

export default App;
