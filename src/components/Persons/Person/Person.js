import React from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends React.Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }
    componentWillMount() {
        console.log('[Person.js] Inside Will Mount');
    }
    componentDidMount() {
        console.log('[Person.js] Inside Did Mount');
    }
    render() {
        console.log('[Person.js] Inside Render Method');
        return (
            <React.Fragment>
                <p onClick={this.props.click}>
                    I`m {this.props.name} and I`m {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.chenged} value={this.props.name} />
            </React.Fragment>
        );

    }
}

export default withClass(Person, classes.Person);
