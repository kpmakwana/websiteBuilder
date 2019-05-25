import React, { Component } from 'react';



export default class Navbar extends Component {
  getButton(props){
    var buttonText;
    if(this.props.editMode) buttonText = "Get Preview";
    else buttonText = "Start Editing";
      return(
        <button className='btn btn-primary' type="button" 
                onClick= {()=>{
                  this.props.toggleEditMode()}}
                > 
                {buttonText}
                </button>
      );
  }

  
  render() {
    return (
      <div >
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#services">Services</a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#team">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
            {
              this.getButton()
            }
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    )
  }
}
