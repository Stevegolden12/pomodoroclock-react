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
        <main class="index__container">
          <div class="index__Titlename">Pomodoro Clock</div>
          <LabelComp idName="break-label" labelName="Break Length" />
          <div class="index_breakWrapper">
            <DecreaseClick idName="break-decrement"/>
            <label id="break-length">{this.state.breakVal}</label>
            <IncreaseClick idName="break-increment" />
          </div>
          <LabelComp idName="session-label" labelName="Session Length" />
          <div class="index_sessionWrapper">
            <DecreaseClick idName="session-decrement"/>
            <label id="session-length">{this.state.sessionVal}</label>
            <IncreaseClick idName="session-increment" />
         </div>

          <Timer />
        </main>
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
      <div id={this.props.idName} class="fas fa-arrow-up"></div>  
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
      <div id={this.props.idName} class="fas fa-arrow-down"></div>
    )
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'stop',
    }
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
        <div id="timer">Timer</div>
        <div class="index__timerControlWrapper">
          {this.state.display === 'play' && <span id="start_stop" class="fas fa-play"></span> }
          {this.state.display === 'stop' && <span id="start_stop" class="fas fa-stop"></span> }
          <span id="reset" class="fas fa-sync-alt"></span>
        </div>
       </React.Fragment>
    );
  }
}


export default App;
