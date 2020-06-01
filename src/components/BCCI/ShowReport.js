import React, { Component } from 'react';

class WADA extends Component {
 
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

          <h1 className="btn btn-primary">Player Report</h1>
        
        <table className="table">

          <thead>
            <tr>
              <th scope="col" style={mystyle}>#</th>
              <th scope="col" style={mystyle}>Player Name</th>
              <th scope="col" style={mystyle}>Player Age</th>
              <th scope="col" style={mystyle}>Blood Group</th>
              <th scope="col" style={mystyle}>Drug Name</th>
              <th scope="col" style={mystyle}>Quantity_ng/ml</th>
              <th scope="col" style={mystyle}>Valid/Invalid</th>
             
            </tr>
          </thead>
          <tbody id="antiDopingList">
            {this.props.reports1.map((report,key)=>{
              return (
                <tr key={key} >
                <th scope="row" style={dataStyle}>{report.id.toString()}</th>
                <td style={dataStyle}>{report.playerName}</td>
                <td style={dataStyle}>{report.playerAge}</td>
                <td style={dataStyle}>{report.bloodGroup}</td>
                <td style={dataStyle}>{report.drugName}</td>
                <td style={dataStyle}>{window.web3.utils.fromWei(report.quantity.toString(),'Ether')}</td>
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

export default WADA;
