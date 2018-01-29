import React from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

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
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
    }
    render() {
        console.log('[Person.js] Inside Render Method');
        return (
            <React.Fragment>
                <p onClick={this.props.click}>
                    I`m {this.props.name} and I`m {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input
                    ref={ (inp) => {this.inputElement = inp} }
                    type="text"
                    onChange={this.props.chenged}
                    value={this.props.name} />
            </React.Fragment>
        );

    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);
