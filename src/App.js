import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ContadorComponent } from './contador/contador.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ContadorComponent/>
      </div>
    );
  }
}

export default App;
