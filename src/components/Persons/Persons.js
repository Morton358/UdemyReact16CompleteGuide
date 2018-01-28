import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
    }
    componentWillMount() {
        console.log('[Persons.js] Inside Will Mount');
    }
    componentDidMount() {
        console.log('[Persons.js] Inside Did Mount');
    }
    render() {
        console.log('[Persons.js] Inside Render Method');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    name={person.name}
                    key={person.id}
                    age={person.age}
                    click={() => {
                        this.props.clicked(index);
                    }}
                    chenged={event => {
                        this.props.changed(event, person.id);
                    }}
                />
            );
        });
    }
}
export default Persons;
