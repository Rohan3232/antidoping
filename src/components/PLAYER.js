import React, { Component } from 'react';

class Player extends Component {
 
  render() {
    return (
        <div id="content"> 

        <h2>drug report</h2>
        
        <table className="table">

          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Player Name</th>
              <th scope="col">Valid/Invalid</th>
             
            </tr>
          </thead>
          <tbody id="antiDopingList">
            {this.props.reports1.map((report,key)=>{
              return (
                <tr key={key} >
                <th scope="row">{report.id.toString()}</th>
                <td>{report.playerName}</td>
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

export default Player;