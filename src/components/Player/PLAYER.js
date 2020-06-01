import React, { Component } from 'react';

class Player extends Component {
 
  render() {
    const mystyle={
      color:"white",
      backgroundColor:"dodgerblue",
      padding:"10px"
    };
    const dataStyle={
      color:"black",
      backgroundColor:"white",
      align: "center"

    };
    return (
        <div id="content"> 

        <h2 style={{backgroundColor:"lightblue",padding:"20px",color:"black",borderRadius:"20px"}}><b>Player Report</b></h2>
        
        <table className="table">

          <thead>
            <tr>
              <th scope="col" style={mystyle}>#</th>
              <th scope="col" style={mystyle}>Player Name</th>
              <th scope="col" style={mystyle}>Valid/Invalid</th>
             
            </tr>
          </thead>
          <tbody id="antiDopingList">
            {this.props.reports1.map((report,key)=>{
              return (
                <tr key={key} style={dataStyle}>
                <th scope="row" style={dataStyle}>{report.id.toString()}</th>
                <td style={dataStyle}>{report.playerName}</td>
                <td style={dataStyle}>{report.isValid}</td> 
                </tr>

                )
            })} 

          </tbody>

        </table>
      

          
        </div>
    );
  }
}

export default Player;
