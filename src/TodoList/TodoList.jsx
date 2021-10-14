import React from 'react';
import TodoTask from '../TodoTask/TodoTask.jsx'

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.onDeleteTask = this.onDeleteTask.bind(this);
  }//end of constructor

  onSelectTask(delTask){
    this.props.onSelectTask(delTask);
  }

  onDeleteTask(delTask){
    this.props.onDeleteTask(delTask);
  }

  render() {  
    const arr = this.props.taskArr.map((task,index) => {
      return (
        <TodoTask 
          name={task.taskName}
          id={task.taskId}
          key={index}
          onDeleteTask={this.props.onDeleteTask}
          onSelectTask = {this.props.onSelectTask}
        />
      );
    })// end of map 

    return (
      <div>
        {arr}
      </div>
    );

  }//end of render
}// end of class

export default TodoList;