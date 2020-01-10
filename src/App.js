
import React, { Component } from 'react';
import './App.css';
import ButtonAdd from './buttons'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      task: "",
      tab:[]
      }
  }
  

  render() { 
    return (   <div className="App">
    <div className="first">
      <h1>To-Do App!</h1>
      <p>Add New To-Do</p>
      <input type="text" placeholder="Enter new task" className="taskname" onChange={(e)=>this.setState({task: e.target.value})}/>
      <br />
      <button className="add" onClick={()=>this.setState({tab:this.state.tab.concat([{btn1:"Complete",btn2:"Delete",taskname:this.state.task,b:true}])})}>Add</button>
    </div>
    <div className="second">
      <h2>Let's get some work done!</h2>
      <hr />
    </div>
    <ButtonAdd tab={this.state.tab}/>
  </div>);
  }
}
 
export default App ;
