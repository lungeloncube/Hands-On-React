import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import Support from './components/Support'
import ListCast from './components/ListCast'
//Class components


function App() {
  return (
    <div className="App">
      <article>
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
       
        <ListCast/>
        <Support/>
 
      </article>
    </div>
  );
}

export default App;
