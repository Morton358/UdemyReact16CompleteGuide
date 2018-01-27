import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    render() {
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
