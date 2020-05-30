import React, { Component } from 'react';

class AddData extends Component {
setLocation()
{
  window.location.href = "http://localhost:3000/Manually";
}
setLocation2()
{

  window.location.href = "http://localhost:3000/Sheet";
}

  render() {
    return (
        <div id="content">

              <h1 style = {{color:'black'}}>Add Report Data</h1>
    <button  style = {{backgroundColor:'Red'}} className="btn btn-primary"onClick={this.setLocation}>Add Manually</button>
<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
     <button  style = {{backgroundColor:'blue'}} className="btn btn-primary"onClick={this.setLocation2}>Add through sheet</button>
   
        </div>

    );
  }
}

export default AddData;
