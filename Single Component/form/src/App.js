import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Username: '', Email: '', Password: '', skill:'', checked:false};
  }

  handleUsernameChange = e => {
    this.setState({ Username: e.target.value });
    console.log('set Username to: ', e.target.value);
  };

  handlePasswordChange = e => {
    this.setState({ Password: e.target.value });
    console.log('set Password to: ', e.target.value);
  };


  handleEmailChange = e => {
    this.setState({ Email: e.target.value });
    console.log('set Email to: ', e.target.value);
  };

  handleskillChange = e =>{
    this.setState({skill: e.target.value})
    console.log('set Skill to:', e.target.value)
  }

  handleCheckChange = e =>{
    const{checked} = this.state
    this.setState({checked:!checked})
  }
 
  handleSubmit = e => {
    e.preventDefault(); // prevent Default HTML action
    console.log('The values in the form are: ', this.state);
  };

  render() {
    const{Username,Password,Email,skill} =  this.state
    const PasswordRegex = "(?=.*[0-9])(?=.*[a-z]).{8,}";
    const PasswordRegexStandard = new RegExp(PasswordRegex);
    const EmailRegex = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
    const EmailRegexStandard = new RegExp(EmailRegex);
    console.log()
    const formStyle = {
      margin: 'auto',
      padding: '50px',
    };
   
    return (
     
      <form style={formStyle} onSubmit={this.handleSubmit}>
        <h1>Register Form</h1>
        <div className = "rowstyle">
          Username
          <input required 
          type="text" 
          value={this.state.Username} 
          onChange={this.handleUsernameChange}
          className={Username !== "" ? "pass" : "fail"} />
        </div>
        <div className = "rowstyle">
          Email
          <input required type="email" 
          value={this.state.Email} 
          onChange={this.handleEmailChange} 
          pattern={EmailRegex}
          className={EmailRegexStandard.test(Email) ? "pass" : "fail"} />
        </div>
        <div className = "rowstyle">
          Password
          <input required type="password" 
                title="Your Password must contain at least 8 characters, one numeric character and one lowercase character"
                pattern={PasswordRegex}  
                value={this.state.Password} 
                onChange={this.handlePasswordChange} 
            className={PasswordRegexStandard.test(Password)? "pass": "fail"} />
          <div>Your Password must contain at least 8 characters, one numeric character and one lowercase character</div>
        </div>
        <div className = "rowstyle">
          Dev Skill
          <input  type="number" 
          value={this.state.skill} 
          onChange={this.handleskillChange}
          className={skill !== "" ? "pass" : "fail"} />
        </div>
        <div className = "rowstyle">
          
          <input required type="checkbox" checked={this.state.checked} onChange={this.handleCheckChange} />
          Accept Terms and Conditions
        </div>
        <input type = "submit"/>
      </form>
    )
  }
};

export default App;
