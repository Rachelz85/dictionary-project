
import Dictionary from "./Dictionary"
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container">
      <header>
<h1  className="App-header">Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
        Coded by Rachel Zilberstein and is open-sourced on <a href="https://github.com/Rachelz85/dictionary-project" target="_blank" rel="noreferrer" className="github-link"
        >
          Github{" "}
        </a>
        </small>
      </footer>
    </div>
    </div>
  );
}

export default App;
