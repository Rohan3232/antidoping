import React, { Component } from 'react';

class Navbar3 extends Component {
 constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
     logout() {
       window.location.href = "http://localhost:3000 ";
    }

  
  render() {
    return (
        <nav className="navbar navbar-dark fixed-top bg-light flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            target="_blank"
            rel="noopener noreferrer"
            style={{backgroundColor: "dodgerblue"}}
          >
          Blockchain AntiDoping
          </a>
          <ul className = "navbar-nav px-3">
            <li className = "nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white"><span id="account"><button  style = {{backgroundColor:'red'}} className="btn btn-primary"onClick={this.logout}>Logout</button> 
      </span></small>
            </li>
          </ul> 
      </nav>
    );
  }
}

export default Navbar3;
