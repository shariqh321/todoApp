import React from 'react';
import Home from './Home';
import TaskCompleted from './AllTaskDone/TaskCompleted'
import NavHeader from './NavHeader/NavHeader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
    taskArr: [
      {
        taskId:1,
        taskName:'WakeUp'
      },{
        taskId:2,
        taskName:'Breakfast'
      }
    ],// end of array declaration
    deletedTaskId : 0,
    }// end of state
  }// end of constructor
 

  updateArray = (searchVar) =>{
    this.setState({taskArr: 
      this.state.taskArr.concat([{
        taskId:this.state.taskArr.length+1,
        taskName:searchVar
      }])
    })
  };


  onDeleteTask= (delTask) => {
    this.setState({deletedTaskId : delTask})
    this.setState({taskArr: this.state.taskArr.filter(task=> task.taskId !== delTask)})
  };  
  

  render(){
    return(
      <Router>
        <div>
          <NavHeader/>
          <Switch>
            <Route exact path = "/">
              <Home 
              taskArr={this.state.taskArr} 
              updateArray = {this.updateArray}
              onDeleteTask = {this.onDeleteTask}
              />
            </Route>
           
            <Route exact path = {"/completedtask/:deletedTaskId"}>
              <TaskCompleted
              taskArr={this.state.taskArr}   
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}// end of class app

export default App;

/*swappingArrayIndex = (arr) =>{
    arr.map((currentEle, index)=>{
      currentEle.taskId = index+1
      return currentEle;
    })
    return arr;
  }*/