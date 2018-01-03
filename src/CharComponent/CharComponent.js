import React, { Component } from 'react';
import './CharComponent.css';

const charComponent = (props) => {
  let listItems = '-//-';
  if (props.str.length > 4) {
    const arrChars = [...new Set(props.str.split(''))];
    listItems = arrChars.map((elem, index) => {
      return(
        <li key={index} onClick={(event) => {
          props.delateChar(event, elem)}}>{elem}</li>
      );
    })
  }

  return(
    <div className="CharComponent">
      <h3>Please check charackter which you want to delate: </h3>
      <ul className="CharComponentList">
        {listItems}
      </ul>

    </div>
  );
}
export default charComponent;
