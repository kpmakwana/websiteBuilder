import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Wootick from './Wootick';


import './App.css';


/*
const landingPage = () =>(
  <div id='lpcontent'>
    <h3>Welcome to wootick </h3>
    <Link to='/auth'> Proceed to login signup</Link>
  </div>
);

const noMatch= () =>(
  <div id='lpcontent'>
    <h3>
    You have hit an broken link
    </h3>
    <Link to='Wootick'>Click here to go back</Link>
  </div>
  )
*/

class App extends Component {

 
  
  render() {
    return (
          <Router>
              <div>
              
              <Wootick />
              </div>
          </Router>
    );
  }
}

export default App;