import React, { Component } from 'react';
// import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Content from '../components/Content/Content';

class App extends Component {
    constructor(props){
        super(props);
        console.log('[App.js] Inside Constructor', props);

        this.state = {
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
            showPersons: false,
            toggleClicked: 0
        };
    }

    componentWillMount() {
        console.log('[App.js] Inside WillMount');
    }
    componentDidMount() {
        console.log('[App.js] Inside Did Mount');
    }

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
        this.setState( (prevState) => {
            return {
                showPersons: !tempShowPersons,
                toggleClicked: prevState.toggleClicked + 1
            }
        }
        );
    };

    deletePersonHandler = index => {
        const newpersons = [...this.state.persons];
        newpersons.splice(index, 1);
        this.setState({ persons: newpersons });
    };

    render() {
        console.log('[App.js] Inside Render Method');
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                />)
        }
        return (
            <React.Fragment>
                <Content
                    appTitle={this.props.title}
                    countPersons={this.state.persons.length}
                    showPersons={this.state.showPersons}
                    click={this.switchPersonsHandler}
                />
                {persons}
            </React.Fragment>
        );
    }
}

export default App;
