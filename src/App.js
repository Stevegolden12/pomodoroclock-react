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

          <Timer sessValue={this.state.sessionVal} breakValue={this.state.breakVal}/>
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
      display: 'play',
      status: 'session',
      time: this.props.sessValue * 60,
      min: Math.ceil(this.props.sessValue * 60/60),
      sec: this.props.sessValue * 60 % 60,
    }
    this.timerStart = this.timerStart.bind(this);
    this.timerPause = this.timerPause.bind(this);
    this.timerReset = this.timerReset.bind(this);
  }

 
  //Timer play functionality
  timerStart() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.setState({
      display: 'pause'
    })
  }
  //Timer pause functionality
  timerPause() {
    clearInterval(this.timerID);
    this.setState({
      display: 'play'
    })
  }

  //Timer reset functionality
  timerReset() {
    this.setState({
      time: this.props.sessValue * 60,
      min: Math.ceil(this.props.sessValue * 60 / 60),
      sec: this.props.sessValue * 60 % 60,
    })
    console.log(this.state.time)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
    });
    this.setState({
      min: Math.floor(this.state.time / 60),
      sec: this.state.time % 60,
    })
      //Switch timer functionality
    if (this.state.time === 0 && this.state.status === 'session') {
      this.setState({
        time: this.props.breakValue * 60,

        status: 'break',
      })
    }//end of if time === 0 and status === session
    if (this.state.time === 0 && this.state.status === 'break') {
      this.setState({
        time: this.props.sessValue * 60,
        status: 'session',
      })
    }//end of if time===0 and status === session
  }
     
  //Add the noise switch timer functionality
  
   render() {
    return (
      <React.Fragment>     
        {this.state.sec >= 10 && <div id="timer">{this.state.min}:{this.state.sec}</div>}
        {this.state.sec < 10 && <div id="timer">{this.state.min}:0{this.state.sec}</div>}
            <div className="index__timerControlWrapper">
          {this.state.display === 'play' && <span id="start_stop" className="fas fa-play" onClick={this.timerStart}></span> }
          {this.state.display === 'pause' && <span id="start_stop" className="fas fa-pause" onClick={this.timerPause}></span> }
          <span id="reset" className="fas fa-sync-alt" onClick={this.timerReset}></span>
        </div>
       </React.Fragment>
    );
  }
}


export default App;
