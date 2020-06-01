import React, { Component } from 'react';
import dataEntry from './dataEntry.jpg';
import Tabletop from 'tabletop';
class Main extends Component {
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

constructor(props)
{
   super(props)
   this.state={
    data:[]
   }
}
resetPage(){
  window.location.href = "http://localhost:3000/addManually/";
}

  render() {
    const {data}= this.state;
    return (
        <div id="content">
        <img src={dataEntry} alt="dataEntry" style={{height:"350px",borderRadius:"6px"}}/><hr />
        <h1 style={{borderRadius:'6px',backgroundColor:"lightblue", color:"black",width:"400px", height:"50px"}}><b>Add Report Values</b></h1><hr />
        <form style={{background:"transperant",border:"none"}} autocomplete="off" onSubmit={(event) => {
          event.preventDefault()
          let flg=0
          const playerName = this.antiDopingPlayerName.value
          const playerAge = this.antiDopingPlayerAge.value
          const bloodGroup = this.antiDopingPlayerBloodGroup.value
          const drugName = this.antiDopingDrugName.value
          const quantity = window.web3.utils.toWei(this.antiDopingQuantity.value.toString(), 'Ether')
          data.map(player => {
            let pName =player.Name
            const pAge=player.Age
            const bGroup=player.Bgroup
            const dName=player.DrugName
            const quant=window.web3.utils.toWei(String(player.Quantity), 'Ether')
         
          if(playerName===pName && pAge===playerAge && bloodGroup===bGroup && drugName===dName && quantity===quant)
            {alert("Player data already exist")
              flg=1;
        }
        return null;
          })
          if(flg===0)
               {this.props.createReport(playerName, playerAge, bloodGroup, drugName, quantity)
                this.resetPage()}

         
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="antiDopingPlayerName"
              type="text"
              ref={(input) => { this.antiDopingPlayerName = input }}
              className="form-control"
              placeholder="Player Name"
              style={{width:"600px"}}
              required /><hr />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="antiDopingPlayerAge"
              type="text"
              ref={(input) => { this.antiDopingPlayerAge = input }}
              className="form-control"
              placeholder="Player Age"
              style={{width:"600px"}}
              required /><hr />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="antiDopingPlayerBloodGroup"
              type="text"
              ref={(input) => { this.antiDopingPlayerBloodGroup = input }}
              className="form-control"
              placeholder="Blood Group"
              style={{width:"600px"}}
              required /><hr />

          </div>
          <div className="form-group mr-sm-2">
            <input
              id="antiDopingDrugName"
              type="text"
              ref={(input) => { this.antiDopingDrugName = input }}
              className="form-control"
              placeholder="Drug Name"
              style={{width:"600px"}}
              required /><hr />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="antiDopingQuantity"
              type="text"
              ref={(input) => { this.antiDopingQuantity = input }}
              className="form-control"
              placeholder="Drug quantity"
              style={{width:"600px"}}
              required /><hr />
          </div>

          <button type="submit" className="btn btn-primary">Add Report</button>
               
 </form>

        </div>

    );
  }
}

export default Main;
