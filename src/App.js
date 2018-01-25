import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';

class App extends Component {
    state = {
        persons: [
            {
                id: 0,
                name: 'Bob',
                age: 28
            },
            {
                id: 1,
                name: 'Nick',
                age: 26
            },
            {
                id: 2,
                name: 'Sam',
                age: 32
            }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    nameChangeHandler = (event, personId) => {
        const newpersons = [...this.state.persons];
        const personIndex = newpersons.findIndex(p => {
            return p.id === personId;
        });
        newpersons[personIndex].name = event.target.value;
        this.setState({ persons: newpersons });
    };

    switchPersonsHandler = () => {
        const tempShowPersons = this.state.showPersons;
        this.setState({
            showPersons: !tempShowPersons
        });
    };

    deletePersonHandler = index => {
        const newpersons = [...this.state.persons];
        newpersons.splice(index, 1);
        this.setState({ persons: newpersons });
    };

    render() {
        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        let persons = null;
        let buttonStyle = '';

        if (this.state.showPersons) {
            persons = this.state.persons.map((person, index) => {
                return (
                    <Person
                        name={person.name}
                        key={person.id}
                        age={person.age}
                        click={() => {
                            this.deletePersonHandler(index);
                        }}
                        chenged={event => {
                            this.nameChangeHandler(event, person.id);
                        }}
                    />
                );
            });
            buttonStyle = classes.Red;
        }
        return (
            <div className={classes.App}>
                <h1>Hi I am React App!</h1>
                <p className={assignedClasses.join(' ')}>
                    {' '}
                    This is really working!
                </p>
                <button
                    className={buttonStyle}
                    onClick={this.switchPersonsHandler}
                >
                    Toggle persons component
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
