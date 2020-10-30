import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi to <code>React</code>
        </p>
        <a
          className="App-link"
          href="https://ekinkaradag.github.io"
          rel="noopener noreferrer"
        >
          Visit my GitHub Pages
        </a>
        <a
          className="App-link"
          href="https://ekinkaradag.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my blog
        </a>
      </header>
    </div>
  );
}

export default App;
