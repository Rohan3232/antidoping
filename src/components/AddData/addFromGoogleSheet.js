import React, { Component } from 'react';
import Tabletop from 'tabletop';
class AddFromGoogleSheet extends Component {
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
            const bloodGroup=player.Bgroup
            const drugName=player.DrugName
            const quantity=window.web3.utils.toWei(String(player.Quantity), 'Ether')
             this.props.reports.map((report,key)=>{
            const playerName1=report.playerName
            const pAge=report.playerAge
            const Bgroup=report.bloodGroup
            const dName=report.drugName
            
            if(playerName===playerName1 && pAge===playerAge && Bgroup===bloodGroup && dName===drugName )
              flg=1

            return null;
          })
            if(flg===0)
               this.props.createReport(playerName, playerAge, bloodGroup, drugName, quantity)
                 
            return null;
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
       <div className="App" style={{backgroundColor:"lightblue",padding:"40px",borderRadius:"20px"}}>
              <header className="App-header">
              <h1 className="App-title" style={{color:'black'}}>Click To Add Player Data From Google Sheet</h1>
              </header><hr />
            
             <button className="btn btn-primary" onClick={this.getData} >Add Report</button>
               

          </div>
        
    )
  }
}

export default AddFromGoogleSheet;
