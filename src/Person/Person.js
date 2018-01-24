import React from 'react';
import classes from './Person.css';

const person = props => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>
                I`m {props.name} and I`m {props.age} years old!
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.chenged} value={props.name} />
        </div>
    );
};

export default person;

// import React, { Component } from 'react';
//
// class Person extends Component {
//   constructor(props){
//     super(props)
//   }
//
//   changeParagraph = () => {
//     return this.props.click()
//   }
//
//   render() {
//     return (
//       <div>
//         <p onClick={this.changeParagraph}>I`m {this.props.name} and I`m {this.props.age} years old!</p>
//         <p>{this.props.children}</p>
//       </div>
//     );
//   }
//
// }
//
// export default Person;
