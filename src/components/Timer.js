import React, { Component } from 'react';
import '../App.css';
import beep from '../sounds/beep.wav';


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'play',
      status: 'session',
      toggle: 'false',
      time: this.props.sessValue * 60,
      min: Math.ceil(this.props.sessValue * 60 / 60),
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
      display: 'pause',
      toggle: false,
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
        toggle: 'session',
      })
    }//end of if time === 0 and status === session
    if (this.state.time === 0 && this.state.status === 'break') {
      this.setState({
        time: this.props.sessValue * 60,
        status: 'session',
        toggle: 'break',
      })
    }//end of if time===0 and status === session
  }

  render() {
    return (
      <React.Fragment>
        {/* The following two statements will add an added 0 when seconds is below 10*/}
        {this.state.sec >= 10 && <div id="timer"><h5 id="timer-label">{this.state.status} time</h5><h5 id="time-display">{this.state.min}:{this.state.sec}</h5></div>}
        {this.state.sec < 10 && <div id="timer"><h5 id="timer-label">{this.state.status} time</h5><h5 id="time-display">{this.state.min}:0{this.state.sec}</h5></div>}
        <div className="index__timerControlWrapper">
          {this.state.display === 'play' && <span id="start_stop" className="fas fa-play" onClick={this.timerStart}></span>}
          {this.state.display === 'pause' && <span id="start_stop" className="fas fa-pause" onClick={this.timerPause}></span>}
          {/* Add the noise switch timer functionality */}
          {this.state.toggle === 'session' && <audio id="beep" src={beep} autoPlay />}
          {this.state.toggle === 'break' && <audio id="beep" src={beep} autoPlay />}
          <span id="reset" className="fas fa-sync-alt" onClick={this.timerReset}></span>
        </div>
      </React.Fragment>
    );
  }
}

export default Timer