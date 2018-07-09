import React, { Component } from 'react';
import './App.css';
import Person from '../components/Person';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  state = {
    person: [
      { name: 'Max', age: 28 },
      { name: 'Erick', age: 29 },
      { name: 'Johnny' },
    ],
  };

  switchNameHandler = () => {
    console.log('Was clicked!');
    this.setState({ person: [
        { name: 'Carlos' },
        { name: 'Sla' }
      ],
      showPersons: false,
    });
  }

  togglePersonsHangler = () => {

  }

  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <h1> A React App </h1>
          <button onClick={this.switchNameHandler}> Switch Name </button>
          <div >
            <Person 
              name={this.state.person[0].name} 
              age={this.state.person[0].age}
              click={() => this.switchNameHandler()} />
            <Person 
              name={this.state.person[1].name}
              click={() => this.switchNameHandler()} > I'm sad </Person>
          </div>
        </ErrorBoundary>
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App!'));
  }
}

export default App;
