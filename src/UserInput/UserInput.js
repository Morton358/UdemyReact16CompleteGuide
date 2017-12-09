import React, { Component } from 'react';
import './UserInput.css';

const userInput = (props) => {
  return(
    <div className="UserInput">
      <div className='UserInputName'>
        <label for="name">Write your name: </label>
        <input id='name' type='text' value={props.username}
          onChange={props.eventHandlerUsername}/>
      </div>
      <div className='UserInputMessage'>
        <label for="name">Write your message:  </label>
        <input id='message' type='text' value={props.message}
          onChange={props.eventHandlerMessage}/>
      </div>
    </div>
  )
}

export default userInput;
