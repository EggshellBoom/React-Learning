import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const day = new Date()
    this.state = {
      year: day.getFullYear(),
      month: day.getMonth()
    };
  }

  MonthChange = (month) =>{
    this.setState({month:month})
  }

  prevMonth = () =>{
    const { month } = this.state;
    this.setState({ month: month - 1 })
  }

  nextMonth = () =>{
    const { month } = this.state;
    this.setState({ month: month + 1 })
  }

  YearChange = (year) =>{
    this.setState({year:year})
  }


  prevYear = () => {
    const { year } = this.state;
    this.setState({ year: year - 1 })
  }

  nextYear = () => {
    const { year } = this.state;
    this.setState({ year: year + 1 })
  }


  render() {
    const { month,year } = this.state;
    return (
      <div className="App">     
        <YearSelect year = {year} YearChange = {this.YearChange} prevYear = {this.prevYear} nextYear = {this.nextYear}/>
        <MonthSelect month = {month} MonthChange = {this.MonthChange} prevMonth = {this.prevMonth} nextMonth = {this.nextMonth} />
        <Calendar date={new Date(`${year}/${month}/01`)}/>
      </div>
    );
  }
}


class YearSelect extends Component {


  handleChange = (e) =>{
    this.props.YearChange(parseInt(e.target.value))
  
  }

  render() {
    const {year} = this.props;
    return (
      <div>
        <button onClick={this.props.prevYear}> {"<<<"} </button>
        <input className="YMselect"   type="number" min={1582}   value = {year} onChange={this.handleChange}/>
        <button onClick={this.props.nextYear}> {">>>"} </button>
      </div>
    );
  }
}


class MonthSelect extends Component {
 
  handleChange = (e) => {
    this.props.MonthChange(parseInt(e.target.value))
  }

  render() {
    const { month } = this.props;
    return (
      <div>
        <button disabled={month <= 1} onClick={this.props.prevMonth}> {"<<<"} </button>
        <select  className="YMselect"  value={month} onChange={this.handleChange}>
          <option value={1}>Jan</option>
          <option value={2}>Feb</option>
          <option value={3}>Mar</option>
          <option value={4}>Apr</option>
          <option value={5}>May</option>
          <option value={6}>Jun</option>
          <option value={7}>Jul</option>
          <option value={8}>Aug</option>
          <option value={9}>Sep</option>
          <option value={10}>Oct</option>
          <option value={11}>Nov</option>
          <option value={12}>Dec</option>      
        </select>
        <button disabled={month >= 12} onClick={this.props.nextMonth }> {">>>"} </button>
      </div>
    );
  }
}


class Calendar extends Component {
  constructor(props) {
    super(props);
    const day = new Date()
    this.state = {
      year: day.getFullYear(),
      month: day.toLocaleDateString("en-us",{month:"long"})
    };
  }

   


  render() {
    const {date} = this.props
    const month = date.getMonth()
    const display_year = date.getFullYear()
    const display_month = date.toLocaleDateString("en-us", { month: "long" })
    const starting_day = date.getDay()
    var dates = []
    var j = null
   
    for (let i=1; i<=42; i++){
      
      if (j !== null){
        j++
        date.setDate(j)
       
      }
      //console.log(starting_day)
      if (starting_day == i-1)
        j = 1

      if (date.getMonth() != month) 
        j = null
           

      dates[i] = j

      console.log(date)
      //console.log(month)
      
    } 
    console.log(dates)

    const calendar = dates.map((item,i)=><li key= {i}>{item}</li>);
    return (
      <div>
        <ul className="weekdays">{display_year}--{display_month}</ul>
        <ul className="weekdays">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>  
        </ul>

        <ul className="days">
          {calendar}
        </ul>
     </div>
    );
  }
}

export default App;
