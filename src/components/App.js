/* Finish 5 and 6 
   https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-pomodoro-clock
 */

import React, { Component } from 'react';
import '../App.css';
import beep from '../sounds/beep.wav';
import LabelComp from './LabelComp';
import Timer from './Timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakVal: 5,
      sessionVal: 25,
      isClicked: false,
     }
    this.increaseBreak = this.increaseBreak.bind(this);
    this.increaseSession = this.increaseSession.bind(this);
    this.decreaseBreak = this.decreaseBreak.bind(this);
    this.decreaseSession = this.decreaseSession.bind(this);
  }

  increaseBreak() {
      if (this.state.breakVal < 60) {
        this.setState({
          breakVal: this.state.breakVal + 1,
          isClicked: !this.state.isClicked,
        })
       }//end of breakVal validation cannot go past 60
  }//end of this.increaseBreak

  decreaseBreak() {
    if (this.state.breakVal > 0) {
      this.setState({
        breakVal: this.state.breakVal - 1,
        isClicked: !this.state.isClicked,
      })
    }//end of breakVal validation cannot go below 0
  }//end of this.decreaseBreak

  increaseSession() {
      if (this.state.sessionVal < 60) {
        this.setState({
          sessionVal: this.state.sessionVal + 1,
          isClicked: !this.state.isClicked,
        })
       }//end of SessionVal validation cannot go past 60
  }//end of this.increaseSession

  decreaseSession() {
    if (this.state.sessionVal > 1) {
      this.setState({
        sessionVal: this.state.sessionVal - 1,
        isClicked: !this.state.isClicked,
      })
    }//end of SessionVal validation cannot go below 0
  }//end of this.increaseSession


  render() {
    return(
      <div className="App">
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
          {/* isClicked state is used whenever you increase or decreasing session or break time this forces Timer component to render and always set the time in the component*/}
          {this.state.isClicked === false && <Timer sessValue={this.state.sessionVal} breakValue={this.state.breakVal} />}
          {this.state.isClicked === true && <Timer sessValue={this.state.sessionVal} breakValue={this.state.breakVal} />}
        </main>
    </div>
    );
  }
}

export default App;
