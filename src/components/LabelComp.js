import React, { Component } from 'react';
import '../App.css';
import beep from '../sounds/beep.wav';

const LabelComp = (props) => {
  return (
    <div id={props.idName}>{props.labelName}</div>
  )
}

export default LabelComp