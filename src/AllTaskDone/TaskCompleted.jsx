import React from "react";
import {withRouter} from "react-router";


class TaskCompleted extends React.Component{
    
    render(){
        return(
        <div align='center'>
           <h1>Task ' 
              {
                this.props.taskArr.find(delTask=> delTask.taskId == this.props.match.params.deletedTaskId).taskName
              } 
               ' is Pending. </h1>
        </div>
        );        
    }//end of render
}//end of class


export default withRouter(TaskCompleted);