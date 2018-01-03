import React, { Component } from 'react';

const validationComponent = (props) => {
  const lenStr = props.lengthOfStr;
  let messege = null;
  if (lenStr <= 4) {
    messege = (
      <p>Text too short</p>
    );
  }
  else {
    messege = (
      <div>
        <p>Text has acceptable length</p>
        <h2>Text: {props.text}</h2>
      </div>
    );
  }
  return (
    <div>
      {messege}
    </div>

  );
}

export default validationComponent;
