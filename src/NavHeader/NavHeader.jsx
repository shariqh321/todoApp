import React from "react";
import { Route, Switch, withRouter } from "react-router";
import '../App.css';

class NavHeader extends React.Component{

    constructor(props){
        super(props);
        this.openHomePage = this.openHomePage.bind(this);
      }//end of constructor
    

      openHomePage(){
        this.props.history.push("");
    }

    render(){
        return(
            <nav>
            <h3 onClick={this.openHomePage}> Home page </h3>
            <Switch>
               <Route exact path = "/">
               
                 <h3>Page : Home</h3>
            
            </Route>
            <Route exact path = "/completedtask/:deletedTaskId">
                
                 <h3> Page : Completed </h3>
                
            </Route>
            </Switch>
            </nav>
            
        );
    }

}//end of class

export default withRouter(NavHeader);