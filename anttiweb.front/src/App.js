
import React, { Component } from 'react';
import SuperConsole from './components/SuperConsole';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="modal-container">
        <div className="modal-window">
          <div className="modal-content">
          <SuperConsole  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
