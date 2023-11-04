import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Exemplo Frontend React</p>
        <a href="http://localhost:5000/api/v1">Backend na porta 5000</a>
      </header>
    </div>
  );
}

export default App;
