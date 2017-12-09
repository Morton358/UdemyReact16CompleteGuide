import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';


class App extends Component {
  state = {
    username: 'username',
    message: 'Hello theare'
  }

  eventHandlerUsername = (event) => {
    this.setState({username: event.target.value})
  }

  eventHandlerMessage = (event) => {
    this.setState({message: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserInput eventHandlerUsername={this.eventHandlerUsername}
          eventHandlerMessage={this.eventHandlerMessage}
          username={this.state.username} message={this.state.message}/>
        <UserOutput message={this.state.message}
          username={this.state.username} />
        <UserOutput message={this.state.message}
          username={this.state.username} />
        <UserOutput message={this.state.message}
          username={this.state.username} />
        <UserOutput message={this.state.message}
          username={this.state.username} />
      </div>
    );
  }
}

export default App;
