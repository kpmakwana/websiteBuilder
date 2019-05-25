import React, { Component } from 'react';
import { HashRouter as Router, Route,  NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import './App.css';

export default class welcome extends Component {
  render() {
    return (
      <Router >
      <div className="welcome">
          <div className="welcome__Aside"></div>
          <div className="welcome__Form">
            <div className="PageSwitcher">
                <NavLink to="/auth/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/auth/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/auth/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/auth" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/auth/" component={SignUpForm}></Route>
              <Route  path ="/auth/sign-in" component={SignInForm} > </Route>

            </div>
        </div>
      </Router>
    )
  }
}