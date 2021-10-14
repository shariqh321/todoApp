import React from 'react';
import InputField from '../InputField/InputField.jsx'
import TaskButton from '../TaskButton/TaskButton.jsx'
import '../App.css';

class AddTodo extends React.Component{
constructor(props){
super(props);
this.state={
    searchVar : '',
};
this.updateArray = this.updateArray.bind(this);
this.handleChange = this.handleChange.bind(this);
}// end od constructor

updateArray(){
    if(this.state.searchVar === "" || this.state.searchVar === " "){
        alert("Enter some value");
    }else{
        this.props.updateArray(this.state.searchVar);
        this.setState({searchVar:''});
    }
    document.getElementById("myTask").focus();
}

handleChange(event){
    this.setState({searchVar : event.target.value})
}

render(){
    return(
        <div className="spacing">

           <InputField 
                searchVar={this.state.searchVar}
                handleChange = {this.handleChange}
           />
           <TaskButton
                //searchVar={this.state.searchVar}
                handleSubmit = {this.updateArray}
           />
           
        </div>
    );// end of return
} //end of render
}//end of class


export default AddTodo;
