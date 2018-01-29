import React from 'react';
import classes from './Content.css';
import withClass from '../../hoc/withClass';

const content = props => {
    const assignedClasses = [];
    let buttonStyle = '';
    if (props.countPersons <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.countPersons <= 1) {
        assignedClasses.push(classes.bold);
    }

    if (props.showPersons) {
        buttonStyle = classes.Red;
    }

    return (
        <React.Fragment>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>
                This is really working!
            </p>
            <button
                className={buttonStyle}
                onClick={props.click}>
                Toggle persons component
            </button>
        </React.Fragment>
    )
}

export default withClass(content, classes.Content);
