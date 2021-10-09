import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../pages/home/home";
import LogIn from "../pages/login/login";
import Profile from "../pages/profile/profile";
import SignUp from "../pages/signup/signup";

export default function RouterDom() {
  return (
    <Router>
    
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/login" component={LogIn} />
          <Route  path="/signup" component={SignUp} />
          <Route  path="/profile" component={Profile} />
           
          
          
        </Switch>
     
    </Router>
  );
}