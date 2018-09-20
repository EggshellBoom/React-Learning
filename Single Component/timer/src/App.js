import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      seconds: 0,
      minutes:0,
      timerStatus: true, // true---to start| false---to stop
      log:[]
      };
  }


  componentWillUnmount() {
    //clear interval when page is closed
    clearInterval(this.timerID);
  }


  resetTimer = () =>{
    this.setState(
      {
        seconds:0,
        minutes:0
      })

  }

  toggleTimer = () => {
    const {timerStatus} = this.state;
    if (timerStatus)//to start
      this.timerID = setInterval(() => this.tick(), 1000); 
    else // to stop
      clearInterval(this.timerID);
    this.setState({
      timerStatus: !timerStatus
    })
    
  }
  
  tick = () => {
    this.setState((prevstate)=>{
      //update from seconds to minute 60 seconds-->1 minute
      if(prevstate.seconds >= 59)
        return{
          seconds:0,
          minutes: prevstate.minutes+1
        }
      else
        return {
          seconds: prevstate.seconds+1     
        }
  });
  }


  LogTime = () =>{
    const {seconds,minutes,log} = this.state;
    this.setState({
      log: [<li>{minutes}:{seconds <= 9 ? "0" + seconds : seconds}</li>, ...log]
    })
  }

  render() {
    const { seconds,minutes,timerStatus,log} = this.state;
    return (
      <div className="App">
      <div className= "timerFrame">
        <h1>Simple Timer</h1>
        <h2>{minutes}:{seconds <= 9 ? "0" + seconds : seconds }</h2>
        <svg width="120" height="120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" strokeWidth="12" />
          <circle cx="60" cy="60" r="54" fill="none" stroke="#f77a52" strokeWidth="12"
            strokeDasharray="339.292" strokeDashoffset={339.292 * (1 - (seconds / 60))} />
        </svg> 
        <div>
        <button onClick={this.toggleTimer}>{timerStatus? "Start":"Stop"}</button>
        <button onClick={this.resetTimer}>Reset</button>
        <button onClick={this.LogTime}>Log</button>
        </div>
      </div>
      
        <div className="LOGFrame">
          <h1>Log</h1>
          {log.map((item,i)=><div key = {i}>{item}</div>)}
        </div>
      
      </div>
      
    );
  }
}

export default App;
