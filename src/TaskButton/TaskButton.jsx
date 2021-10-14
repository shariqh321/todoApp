
import React from 'react';

class TaskButton extends React.Component{
    constructor(props){
    super(props);
    this.state={
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
    }// end of constructor
    
    
    render(){
        return(
            <div align="center" className="addtodo">
            
            <input 
            type="submit" 
            value="Add Task"
            onClick={this.props.handleSubmit} />

            </div>
        );
    }
}//end of class
    
    
export default TaskButton;