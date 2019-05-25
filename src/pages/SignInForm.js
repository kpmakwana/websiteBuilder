import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Data=JSON.parse(localStorage.getItem('Data'));
const pstyle ={
  color : '#c11f29',
  fontWeight: 'bold',
  margin: '0 3%',
  display: 'none',
}

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if(!this.state.email){
          alert("Please enter email");
        }
        else {
        if(!this.state.password){
          alert("Please enter Password");
        }
        else{
        const Data=JSON.parse(localStorage.getItem('Data'));
        const length= Data.length;
        var i=0;
        
        for(i;i<length;i++)
        {
          if(Data[i].email === this.state.email)
            {
              if(Data[i].password=== this.state.password)
              {
              document.getElementById('invalid_password').style.display='none';
              document.getElementById('email_not_available').style.display='none';

              console.log('Welcome back !!');
              this.props.history.push('/Wootick');
              }
              else
              document.getElementById('invalid_password').style.display='block'
              break;
            }
            else{
              document.getElementById('email_not_available').style.display='block'
            
            }
        }
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

  }
}
    logData=()=>{
      console.log(Data);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" >
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              <p style={pstyle} id='email_not_available'>We could not find you.Please signup to continue.</p>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                <p style={pstyle}  id='invalid_password'>Invalid Password</p>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>

        );
    }
}

export default SignInForm;
