import React, { Component } from "react";
import styles from './styles.css';
var match1;
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
    const matches = password === c_password && email==c_email;
    matches ? alert(" Match") : alert("No Match");  
  	const {Address}=this.state;
  		if(matches)
  		{if(Address==='0b19290dba70a58c886f72b7592e6105741385363d1587171753d3eb93843e35')
  	    		window.location.href = "http://localhost:3000/Main	";
  	   else if(Address==='0413de96484c15ccab5628d9a66be0c376a101ac474c58d675043e291dc78e5d')
  	    		window.location.href = "http://localhost:3000/WADA	";
  	   else if(Address==='78c118deb9c9299a99b02a674f5e28ad42fd53c54e10beff47f686776319d6c4')
  	    		window.location.href = "http://localhost:3000/loadReport	";
  	    else if(Address==='Player')
  	    	window.location.href = "http://localhost:3000/Player	";
  }
  	}
  render() {
    return (
      <div>

        <form className={styles.loginForm} onSubmit={this.submitData}>
          Email:
         <input
            type="email"
            name="Email"
            onChange={this.inputEmail}
          />
          <br></br>
         password:
          <input
            type="password"
            name="c_password"
            onChange={this.inputPassword}
          />  
        
          <br></br>

		Address:
		 <input
            type="hexadecimal"
            name="Address"
            onChange={this.inputAddress}
          />  

          <br></br>
           <button    type="submit"> submit</button>
        </form>
      </div>
    );
  }
}
export default Log;