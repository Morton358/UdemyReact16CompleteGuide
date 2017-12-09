import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Bob', age: 28 },
      { name: 'Nick', age: 26 },
      { name: 'Sam', age: 32 }
    ],
    otherState: 'some other value'
  }
  switchNameHandler = (newName) => {
    this.setState({persons: [
      { name: 'Maximilian' + ' ' + newName, age: 28 },
      { name: 'Nick', age: 26 },
      { name: 'Sam', age: 35 }
    ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 26 },
      { name: 'Sam', age: 32 }
    ]
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi I am React App!</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maximilianus!!')}>switch now</button>
        <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          chenged = {this.nameChangeHandler}
          click = {this.switchNameHandler.bind(this, 'velociped')} >
          My hobby is racing! </Person>
        <Person name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
