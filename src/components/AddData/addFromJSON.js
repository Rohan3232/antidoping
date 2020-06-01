import React, { Component } from 'react';
import data from './data'

class AddFromJSON extends Component {
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
            const pAge=report.playerAge
            const Bgroup=report.bloodGroup
            const dName=report.drugName
            const quant=report.quantity
            if(playerName===playerName1 && pAge===playerAge && Bgroup===bloodGroup && dName===drugName && quant===quantity )
              flg=1

            return null;
          })
            if(flg===0)
               this.props.createReport(playerName, playerAge, bloodGroup, drugName, quantity)

            return null;
                 
         } )
      
}
constructor(props)
{
   super(props)
   this.getData=this.getData.bind(this)
}
  render() {
    return (
       <div className="App" style={{backgroundColor:"lightblue",padding:"40px",borderRadius:"20px"}}>
         <h1 className="App-title" style={{color:'black'}}>Click To Add Player Data From JSON file</h1>   
         <hr />
           <button className="btn btn-primary" onClick={this.getData} >Add Report</button>
               


       </div>

    )
  }
}

export default AddFromJSON;
