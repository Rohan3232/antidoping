import React, { Component } from 'react';

class WADA extends Component {
 
  render() {
    return (
        <div id="content"> 

        <h2>drug report</h2>
        
        <table className="table">

          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Player Name</th>
              <th scope="col">Player Age</th>
              <th scope="col">Blood Group</th>
              <th scope="col">Drug Name</th>
              <th scope="col">Quantity_ng/ml</th>
              <th scope="col">Valid/Invalid</th>
             
            </tr>
          </thead>
          <tbody id="antiDopingList">
            {this.props.reports1.map((report,key)=>{
              return (
                <tr key={key} >
                <th scope="row">{report.id.toString()}</th>
                <td>{report.playerName}</td>
                <td>{report.playerAge}</td>
                <td>{report.bloodGroup}</td>
                <td>{report.drugName}</td>
                <td>{window.web3.utils.fromWei(report.quantity.toString(),'Ether')}</td>
                <td>{report.isValid}</td> 
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
