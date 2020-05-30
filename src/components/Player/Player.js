import React, { Component } from 'react';
import './Player.css';
class Player extends Component {
 
  render() {
    return (
        <div id="content"> 

        <h2 style = {{color:'black'}}>Report Result</h2>
        
        <table className="table" id='player'>

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
