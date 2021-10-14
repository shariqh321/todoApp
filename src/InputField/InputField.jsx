import React from 'react';
import './InputFieldStyle.css'

class InputField extends React.Component{
constructor(props){
super(props);
this.state={
};
//this.handleChange = this.handleChange.bind(this);
}// end of constructor


render(){
   
    return(
        <div align="center" className="spacing">
        <input type='text' 
         placeholder='Add Task' 
         id = "myTask"
         value={this.props.searchVar}
         onChange={this.props.handleChange} />
        </div>
    );
}

}//end of class


export default InputField;