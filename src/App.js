import logo from "./logo.png";
import Dictionary from "./Dictionary"
import './App.css';

function App() {
  return (
      <div className="container">
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
        Codded by Rachel Zilberstein
        </small>
      </footer>
    </div>
    </div>
  );
}

export default App;
