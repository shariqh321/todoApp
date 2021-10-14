import React ,{Fragment} from 'react';
import AddTodo from './AddTodo/AddTodo.jsx' 
import TodoList from './TodoList/TodoList.jsx';
import {withRouter} from "react-router";


class Home extends React.Component{

  updateArray = (searchVar) =>{
    this.props.updateArray(searchVar);
  };
    
    onDeleteTask= (delTask) => { 
      this.props.onDeleteTask(delTask);
      //this.props.history.push("/completedtask/"+delTask)
    };
    
    onSelectTask= (delTask) => {
      this.props.history.push("/completedtask/"+delTask)
    };
  
    render(){
      return(
        <Fragment>
        <div>        
          <AddTodo 
            taskArr = {this.props.taskArr} 
            updateArray={this.updateArray}
          />
  
          <TodoList 
           taskArr = {this.props.taskArr} 
           onDeleteTask = {this.onDeleteTask}  
           onSelectTask = {this.onSelectTask}
          /> 
        
       </div>
       </Fragment>
      );
    }//end of render
  }// end of class app
  
  export default withRouter(Home);
  