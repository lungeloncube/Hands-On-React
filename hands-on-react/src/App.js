import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Welcome extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <h1>Meet us {this.props.name}</h1>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
<Welcome name="Lungelo"/>
<Welcome  name="Lungelo"/>
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
      </header>
    </div>
  );
}

export default App;
