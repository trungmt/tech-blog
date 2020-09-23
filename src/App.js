import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to TJ's blog</h1>
        </header>
        <h1>[2020-09-24] How to deploy React app into Netlify</h1>
        <ol>
          <li><a href="https://www.youtube.com/watch?v=JwWvD_fWJFY">Register free account and link account with github</a></li>
          <li>Deploy React project to Netlify</li>
          <li>Link Netlify host with own domain</li>
        </ol>
      </div>
    );
  }
}

export default App;
