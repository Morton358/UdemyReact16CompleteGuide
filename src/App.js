import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent.js';
import CharComponent from './CharComponent/CharComponent.js';

class App extends Component {
  state = {
    str: '',
    count: 0
  }

  countChar = (event) => {
    const str = event.target.value;
    this.setState({str: str, count: str.length})
  }

  delateCharHendler = (event, charackter) => {
    const arrOfChars = this.state.str.split('');
    const newArrOfChars = arrOfChars.filter((element) => {
      return element !== charackter
    })
    const newStr = newArrOfChars.join('')
    this.setState({str: newStr})
  }
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="np. Hello!"
          onChange={(event) => {this.countChar(event)}} />
        <p>Count of charackters is: {this.state.count}</p>
        <ValidationComponent text={this.state.str}
          lengthOfStr={this.state.count} />
        <CharComponent str={this.state.str}
          delateChar={this.delateCharHendler} />
      </div>
    );
  }
}

export default App;
