/* Finish 5 and 6 
   https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-pomodoro-clock
 */

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LabelComp idName="break-label" />
        <LabelComp idName="session-label" />
        <LengthComp idName="break-length" />
        <LengthComp idName="session-length" />
      </div>
    );
  }
}

const LabelComp = (props) => {
  return (
    <div id={props.idName}></div>     
  )
}
/*  break is 5 and session is 25 must add a props*/
const LengthComp = (props) => {
  return (
    <div id={props.idName}></div>  
  )
}

class IncreaseClick extends React.Component {

/* Need to add a increase method AND make sure it can work with 
 * break and session*/
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={this.props.idName}></div>  
    )
  }
}

class DecreaseClick extends React.Component {

  /* Need to add a decrease method AND make sure it can work with 
   * break and session*/
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={this.props.idName}></div>
    )
  }
}


export default App;
