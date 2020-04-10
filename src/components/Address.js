import React, { Component } from 'react';

import Tabletop from 'tabletop';
class Address extends Component {
componentDidMount() {
    Tabletop.init({
      key: '1p9Xku0AX6SRFUDyvE_QDbxkTtflyERSOlCLsvaLSWgY',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }
getData()
{
     const { data } = this.state 
  var flg=0;          
 data.map(player => {
                flg=0;
            const playerName =player.Name
            const playerAge=player.Age
            const bloodGroup=String(player.BloodGroup)
            const drugName=player.DrugName
            const quantity=window.web3.utils.toWei(String(player.Quantity), 'Ether')
             this.props.reports.map((report,key)=>{
            const playerName1=report.playerName
            if(playerName===playerName1)
              flg=1
          })
            if(flg===0)
               this.props.createReport(playerName, playerAge, bloodGroup, drugName, quantity)
                 
 
            })

}
 
constructor(props)
{
   super(props)
   this.state={
    data:[]
   }
   this.getData=this.getData.bind(this)
}
  render() {
    return (
       <div className="App">
              <header className="App-header">
              <h1 className="App-title" style={{color:'black'}}>Player Data</h1>
              </header>
             <button className="btn btn-primary" onClick={this.getData} >Add Report</button>
               

          </div>
        
    )
  }
}

export default Address;
