import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> A React App </h1>
        <Person name="Max" />
        <Person name="Erick"> I'm sad </Person>
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App!'));
  }
}

export default App;
