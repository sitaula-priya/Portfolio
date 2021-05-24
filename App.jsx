import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router';

import Navbar from "./Navbar";
import Home from "./Home";
import Project from "./Project";
import Fotter from "./Fotter";






class App extends Component {
    
    state = {  }
    render() { 
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Project" component={Project}/>
                    <Redirect to="/" />
                </Switch>
                <Fotter/>


               
  


            </div>
          );
    }
}
 
export default App;