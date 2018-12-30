/* Finish 5 and 6 
   https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-pomodoro-clock
 */

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakVal: 5,
      sessionVal: 25,
    }
  }
  render() {
    return (
      <div className="App">
        {/*                                 Add Container/Grid CSS layout                                       */}
        <div>Pomodoro Clock</div>
        <DecreaseClick />
        <LabelComp idName="break-label" labelName="Break Label" />
        <IncreaseClick />
        <DecreaseClick />
        <LabelComp idName="session-label" labelName="Session Label" />
        <IncreaseClick />
        <label idName="break-length">{this.state.breakVal}</label>
        <label idName="session-length">{this.state.sessionVal}</label>
        <Timer />
      </div>
    );
  }
}


const LabelComp = (props) => {
  return (
    <div id={props.idName}>{props.labelName}</div>     
  )
}
/*                               break is 5 and session is 25 must add a props                                                  */

class IncreaseClick extends React.Component {

  constructor(props) {
    super(props);

  }
                             //Add the methods breakIncrease and sessionIncrease


  render() {
    return (
                      //Add the code that whatever session/break props is passed you use that method to adjust the inputs
      <div id={this.props.idName}></div>  
    )
  }
}

class DecreaseClick extends React.Component {
    //Add the methods breakDecrease and sessionDecrease


 constructor(props) {
    super(props);
  }
  render() {
    return (
    //Add the code that whatever session/break props is passed you use that method to adjust the inputs
      <div id={this.props.idName}></div>
    )
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);

  }
  //Add the basic timer functionality
  //Add the switch timer functionality
  //Add the noise switch timer functionality

  //Add the play functionality
  //Add the pause functionality
  //Add the stop functionality
  render() {
    return (
      <React.Fragment>
        <div>Timer</div>
        <span>Play</span>
        <span>Pause</span>
        <span>Stop</span>
       </React.Fragment>
    );
  }
}


export default App;
