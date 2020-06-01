import React, { Component } from 'react';

class Navb extends Component {
 constructor(props) {
        super(props);
        this.loadManual = this.loadManual.bind(this);
    }
    loadManual() {
       window.location.href = "http://localhost:3000/addManually";
    }
    loadSheet() {
       window.location.href = "http://localhost:3000/addFromGoogleSheet";
    }
    loadJSON() {
       window.location.href = "http://localhost:3000/addFromJSON";
    }
  
  render() {
    return (
    		<React.Fragment>
            <button  style = {{backgroundColor:'dodgerblue',width:"300px",height:"60px",size:"10px"}} className="btn btn-primary" onClick={this.loadManual}>Add Manually</button><hr />
             
            <button  style = {{backgroundColor:'dodgerblue',width:"300px",height:"60px"}} className="btn btn-primary" onClick={this.loadSheet}>Add From Google Sheet</button><hr />
     
            <button  style = {{backgroundColor:'dodgerblue',width:"300px",height:"60px"}} className="btn btn-primary" onClick={this.loadJSON}>Add From JSON</button><hr />
            </React.Fragment>
    );
  }
}

export default Navb;