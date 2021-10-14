import React from 'react';
import '../App.css'

 class TodoTask extends React.Component {
    // name, onDelete
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSelectTask = this.handleSelectTask.bind(this);
    }

    handleSelectTask(){
      this.props.onSelectTask(this.props.id)
    }

    handleDelete(){
      this.props.onDeleteTask(this.props.id);
    }
  
    render(){
      return (
        <div>
          <table>
            <tbody>
            <tr>
              <td>{this.props.id +" . "}</td>
              <td onClick={this.handleSelectTask} style={{cursor:'pointer'}}>{this.props.name}</td>
              <td><button onClick={this.handleDelete}>Delete</button></td>
            </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
    
export default TodoTask;