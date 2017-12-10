import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { id: 0, name: 'Bob', age: 28 },
      { id: 1, name: 'Nick', age: 26 },
      { id: 2, name: 'Sam', age: 32 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event, personId) => {
    const newpersons = [...this.state.persons];
    const personIndex = newpersons.findIndex(p => {
      return p.id === personId;
    });
    newpersons[personIndex].name = event.target.value;
    this.setState({persons: newpersons})
  }

  switchPersonsHandler = () =>{
    const tempShowPersons = this.state.showPersons
    this.setState({showPersons: !tempShowPersons})
  }

  deletePersonHandler = (index) => {
    const newpersons = [...this.state.persons];
    newpersons.splice(index, 1)
    this.setState({persons: newpersons})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        this.state.persons.map((person, index) => {
          return (
            <Person name={person.name}
            age={person.age}
            click={(index) => {this.deletePersonHandler(index)}}
            key={person.id}
            chenged={(event) => {this.nameChangeHandler(event, person.id)}}/>
          )
        })
      )
    }
    return (
      <div className="App">
        <h1>Hi I am React App!</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.switchPersonsHandler}> toggle persons component </button>
        {persons}
      </div>
    );
  }
}

export default App;
