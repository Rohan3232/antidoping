import React, { Component } from "react";
import style from "./styles.css"
class Log extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      c_password: "rohan",
      c_email:"rohanardhapure012@gmail.com",
    	email:" ",
    	Address:" ",
    };

    this.submitData = this.submitData.bind(this);
  }
  inputPassword = event => {
    this.setState({ password: event.target.value });
  };
  inputEmail = event =>{
  	this.setState({email:event.target.value});
  }

  inputAddress = event =>{
  	this.setState({Address:event.target.value});
  }
  submitData(event) {
    event.preventDefault();
    const { password, c_password,email,c_email } = this.state;
    const matches = password === c_password && email===c_email;
  	const {Address}=this.state;
  		if(matches)
  		{
        if(Address==='e113b075c23df8e2cb48f74b8712d2f6815b59387f3f83dd909baa00d41df0d9')
  	    		window.location.href = "http://localhost:3000/dataEntry";
  	   else if(Address==='7751059dc4ae30691a3e3ccbbb0868641b70a2a71bda41275bb149977ea4e712')
  	    		window.location.href = "http://localhost:3000/WADA";
  	   else if(Address==='7596383739b2660f00581264206d0ed7abb8b19068c89001aed58013df603af4')
  	    		window.location.href = "http://localhost:3000/ShowReport";
  	    else if(Address==='Player'||Address==='player'||Address==='PLAYER')
  	    	{
            window.location.href = "http://localhost:3000/Player";
            alert("Log in Successfull");
          }
          else{
            alert("Incorrect credentials, Please try again");
          }

  }
}

  render() {
    return (

      <div className="Login">
      <h1 style={{color:"dodgerblue", backgroundColor:"white"}}>Welcome to Blockchain Portal</h1>
        <form className="loginform" onSubmit={this.submitData} autocomplete="off">
          <div className="container">
        <h1>Login</h1>
         <label for="email"><b>Email :</b></label>
         <br></br>
         <input
            type="email"
            name="Email"
            onChange={this.inputEmail}
          />

          <br></br>
        <label for="c_password"><b>Password :</b></label>
         <br></br>
          <input
            type="password"
            name="c_password"
            onChange={this.inputPassword}
          />  
        <br></br>
  <label for="hexadecimal"><b>Private Key :</b></label>
         <br></br>
         	 <input
            type="hexadecimal"
            name="Private Key"
            onChange={this.inputAddress}
          />  

          <br></br>
           <button class="button"  type="submit"> submit</button>
           </div>
        </form>
      </div>
    );
  }
}
export default Log;