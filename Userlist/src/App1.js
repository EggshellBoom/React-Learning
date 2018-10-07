import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types';
import { Creatable } from 'react-select';
import { VictoryChart, VictoryVoronoiContainer, VictoryAxis, VictoryLine, VictoryTooltip} from 'victory'
class Button extends Component {
  render() {
    const {
      onClick,
      className,
      children,
    } = this.props;

    return (
      <button
        onClick={onClick}
        className={className}
        type="button"
      >
        {children}
      </button>
    );
  }
}




class CreatableDemo extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
    multi: true,
    multiValue: [],
    value: undefined
  }
}
 
  handleOnChange = (value) => {
    const { multi } = this.state;
    const {newTag} = this.props;
    if (multi) {
      this.setState({ multiValue: value });
    } else {
      this.setState({ value });
    }
    newTag(value)
  }
  render() {
    const { multi, multiValue,  value } = this.state;
    const{options} = this.props;
    return (
      <div className="section">
        <h3 className="section-heading">{this.props.label} <a href="https://github.com/JedWatson/react-select/tree/master/examples/src/components/Creatable.js">(Source)</a></h3>
        <Creatable
          multi={multi}
          options={options}
          onChange={this.handleOnChange}
          value={multi ? multiValue : value}
        />
        <div className="hint">{this.props.hint}</div>
        <div className="checkbox-list">
          <label className="checkbox">
            <input
              type="radio"
              className="checkbox-control"
              checked={multi}
              onChange={() => this.setState({ multi: true })}
            />
            <span className="checkbox-label">Multiselect</span>
          </label>
          <label className="checkbox">
            <input
              type="radio"
              className="checkbox-control"
              checked={!multi}
              onChange={() => this.setState({ multi: false })}
            />
            <span className="checkbox-label">Single Value</span>
          </label>
        </div>
      </div>
    );
  }
}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { value: 'R', label: 'Red' },
        { value: 'G', label: 'Green' },
        { value: 'B', label: 'Blue' }
      ]
    }

  //const cacheHits = localStorage.getItem('options');
  
    //this.setState({options:cacheHits});
  }
 

  newTagCreated = newTag =>{
    const { options } = this.state;
    options.push(newTag);
   // localStorage.setItem('options',options);
    //console.log(localStorage.getItem('options'));
    this.setState({options:options});
  }

  render() {
    const coloroptions = ["blue", "yellow","green"]
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
       {/* <Flexbox flexDirection="column" maxHeight ="640px" maxWidth = "720px" style = {{ backgroundColor: 'white' }} margin = "auto" > 
          <Flexbox flexDirection = "row"  height="20%" style = {{ backgroundColor: 'white' }} justifyContent = "center" alignContent= "center"  >
             <Flexbox  style = {{ backgroundColor: 'salmon' }} margin ="5px"   alignContent= "center" justifyContent = "center">
              <CreatableDemo
                hint="Enter a value that's NOT in the list, then hit return"
                label="Custom tag creation"
                options = {this.state.options}
                newTag={this.newTagCreated}
              />
             </Flexbox>
               
             <Flexbox width = "10%" style = {{ backgroundColor: 'salmon' }} margin ="5px"  alignContent= "center" justifyContent = "center"  >
              <ul>{
                this.state.options.map(({ value, label }) =>
                  <li>{value}</li>)
              }</ul>
             </Flexbox>
             <Flexbox width = "10%" style = {{ backgroundColor: 'salmon' }} margin ="5px"  alignContent= "center" justifyContent = "center"  >
                cell
             </Flexbox>
          </Flexbox>
         
          </Flexbox> */}
        <Flexbox maxHeight = "500px" maxWidth = "500px">
        <VictoryChart  animate
          containerComponent={
            <VictoryVoronoiContainer voronoiDimension="x"
              labels={(d) => `y: ${d.y} x:${d.x} l:${d.l}`}
              labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{ fill: "white" }} />}
            />
          }
        >
          <VictoryAxis />
          <VictoryLine
            data={[
              { x: 1, y: 5, l: "blue" },
              { x: 1.5, y: 5, l: "yellow" },
              { x: 2, y: 4, l: "black" },
              { x: 3, y: -2, l: "salmon" }
            ]}
            style={{
              data: { stroke: (d) => console.log(d) , strokeWidth: (d, active) => active ? 4 : 2 },
              labels: { fill: "tomato" }
            }}
          />

          <VictoryLine
            data={[
              { x: 1, y: -3, l: "red" },
              { x: 2, y: 5, l: "green" },
              { x: 3, y: 3, l: "blue" }
            ]}
            style={{
              data: { stroke: "blue", strokeWidth: (d, active) => active ? 4 : 2 },
              labels: { fill: "blue" }
            }}
          />

          <VictoryLine
            data={[
              { x: 1, y: 5, l: "cat" },
              { x: 2, y: -4, l: "dog" },
              { x: 3, y: -2, l: "bird" }
            ]}
            style={{
              data: { stroke: "black", strokeWidth: (d, active) => active ? 4 : 2 },
              labels: { fill: "black" }
            }}
          />
        </VictoryChart>
        </Flexbox>
      
      </div>
    );
  }
}

export default App;

