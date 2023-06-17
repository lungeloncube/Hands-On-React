import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import Support from './components/Support'
//Class components


function App() {
  return (
    <div className="App">
      <header className="App-header">
<Welcome name="Lungelo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Support/>
      </header>
    </div>
  );
}

export default App;
