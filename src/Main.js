import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";

import Home from "./Component/Home";
import Stuff from "./Component/Stuff";
import Contact from "./Component/Contact";
import Users from "./Component/Users"
import ClockTime from "./Component/ClockTime"

class Main extends Component {
  render() {
    return (
      <div>
        <ClockTime />
      <HashRouter>
        <div>
          <h1 div className= "firstTitle" >My first Website by React</h1>
          <ul className="header">
            {/* must to write "/Home" */}
            <li div className = "buttonHeader"><NavLink to="/Home">Home</NavLink></li>
            <li div className = "buttonHeader"><NavLink to="/stuff">Stuff</NavLink></li>
            <li div className = "buttonHeader"><NavLink to="/contact">Contact</NavLink></li>
            <li div className = "buttonHeader"><NavLink to="/users">Users</NavLink></li>

          </ul>
          <div className="content">
            <Route path="/Home" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/users" component={Users}/>
          </div>
        </div>
      </HashRouter>
      </div>
    );
  }
}

export default Main
