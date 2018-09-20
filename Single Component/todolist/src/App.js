import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     inputTerm:"",
     itemlist: [],
     todolist:[],
     id:0,
     markall:false
      };
  }


  handleChange = e =>{
    this.setState({
      inputTerm: e.target.value
    })
  }

  addItem = () =>{
    const{itemlist,inputTerm,todolist,id} = this.state
    if (inputTerm !== ""){
    const itemobject = { "_id": id, "inputTerm": inputTerm }
    this.setState({
      id:id+1,
      itemlist: [...itemlist,itemobject],
      todolist:[...todolist, itemobject],
      inputTerm: ""
    })
  }
  }

  KeyPress = e =>{
    
    if(e.keyCode === 13){
      this.addItem()
    }
  }

  handlemarkall = () =>{
    this.setState({
        todolist:[]
      })

  }


  HandleDelete = id =>{
    const newarray = this.state.todolist.filter(item => item._id !== id);
    this.setState({todolist:newarray})
  }

  recover = () =>{
    const{itemlist} = this.state;
    this.setState({
      todolist:itemlist
    })
  }


  render() {
    const { inputTerm, itemlist, todolist} = this.state
    return (
      <div className="App">
        <input list = "todolist" type="text" value={inputTerm} onKeyDown = {this.KeyPress} onChange = {this.handleChange} ></input>
        <button onClick={this.addItem}>Add</button>
        <div className="mainframe">
          <div className="functionbox">
        <button onClick={this.handlemarkall} >Mark All</button>
        <button onClick={this.recover}>Recover</button>
          </div>
        
          <div>
            {todolist.map((item) => 
            <div className="eachitem">
                <button onClick={()=>this.HandleDelete(item._id)}/>---
                <li key={item._id}>{item.inputTerm}</li>
            </div>
            )}
          </div>
        
        </div>

        <datalist id = "todolist">
          {itemlist.map((item)=><option key= {item._id} value={item.inputTerm}/>
          )}
        
        </datalist>
      </div>
    );
  }
}

export default App;
