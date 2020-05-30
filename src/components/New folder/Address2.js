import React, { Component } from 'react';
import data from './data'

class Json extends Component {
getData()
{   var flg=0;
      data.map((player,index)=>{
          flg=0;
            const playerName =player.playerName
            const playerAge=player.playerAge
            const bloodGroup=player.bloodGroup
            const drugName=player.drugName
            const quantity=window.web3.utils.toWei(player.quantity.toString(), 'Ether')
        this.props.reports.map((report,key)=>{
            const playerName1=report.playerName
            if(playerName===playerName1)
              flg=1
          })
            if(flg===0)
               this.props.createReport(playerName, playerAge, bloodGroup, drugName, quantity)
                 
         } )
      
}
constructor(props)
{
   super(props)
   this.getData=this.getData.bind(this)
}
  render() {
    return (
        <div id="content">
          <h1>Add Data</h1>   
         
           <button className="btn btn-primary" onClick={this.getData} >Add Report</button>
               


       </div>

    )
  }
}

export default Json;
