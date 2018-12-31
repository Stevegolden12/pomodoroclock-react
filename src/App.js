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
    this.increaseBreak = this.increaseBreak.bind(this);
    this.increaseSession = this.increaseSession.bind(this);
    this.decreaseBreak = this.decreaseBreak.bind(this);
    this.decreaseSession = this.decreaseSession.bind(this);
  }

  increaseBreak() {
      if (this.state.breakVal < 60) {
        this.setState({
          breakVal: this.state.breakVal + 1
        })
       }//end of breakVal validation cannot go past 60
  }//end of this.increaseBreak

  decreaseBreak() {
    if (this.state.breakVal > 0) {
      this.setState({
        breakVal: this.state.breakVal - 1
      })
    }//end of breakVal validation cannot go below 0
  }//end of this.decreaseBreak

  increaseSession() {
      if (this.state.sessionVal < 60) {
        this.setState({
          sessionVal: this.state.sessionVal + 1
        })
      }//end of SessionVal validation cannot go past 60
  }//end of this.increaseSession

  decreaseSession() {
    if (this.state.sessionVal > 0) {
      this.setState({
        sessionVal: this.state.sessionVal - 1
      })
    }//end of SessionVal validation cannot go below 0
  }//end of this.increaseSession

  render() {
    return (
      <div className="App">
        {/*                                 Add Container/Grid CSS layout                                       */}
        <main className="index__container">
          <div className="index__Titlename">Pomodoro Clock</div>
          <LabelComp idName="break-label" labelName="Break Length" />
          <div className="index_breakWrapper">
            <div id="break-decrement" className="fas fa-arrow-down" onClick={this.decreaseBreak}></div>
            <label id="break-length">{this.state.breakVal}</label>
            <div id="break-increment" className="fas fa-arrow-up" onClick={this.increaseBreak}></div>
          </div>
          <LabelComp idName="session-label" labelName="Session Length" />
          <div className="index_sessionWrapper">
            <div id="session-decrement" className="fas fa-arrow-down" onClick={this.decreaseSession}></div>
            <label id="session-length">{this.state.sessionVal}</label>
            <div id="session-increment" className="fas fa-arrow-up" onClick={this.increaseSession}></div>
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
        <div className="index__timerControlWrapper">
          {this.state.display === 'play' && <span id="start_stop" className="fas fa-play"></span> }
          {this.state.display === 'stop' && <span id="start_stop" className="fas fa-stop"></span> }
          <span id="reset" className="fas fa-sync-alt"></span>
        </div>
       </React.Fragment>
    );
  }
}


export default App;
