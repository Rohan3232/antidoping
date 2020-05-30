import React, { Component } from 'react';

import Tabletop from 'tabletop';
class Manually extends Component {
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
            let pName =player.Name
            const pAge=player.Age
            const bGroup=player.Bgroup
            const dName=player.DrugName
            const quant=window.web3.utils.toWei(String(player.Quantity), 'Ether')

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
    const {data}= this.state;
    return (

        <div id="content">

              <h1 style = {{color:'black'}}>Add Report Values</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          let flg=0;
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
          }) 
          if(flg===0)
               {this.props.createReport(playerName, playerAge, bloodGroup, drugName, quantity)}
        
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="antiDopingPlayerName"
              type="text"
              ref={(input) => { this.antiDopingPlayerName = input }}
              className="form-control"
              placeholder="Player Name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="antiDopingPlayerAge"
              type="text"
              ref={(input) => { this.antiDopingPlayerAge = input }}
              className="form-control"
              placeholder="Player Age"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="antiDopingPlayerBloodGroup"
              type="text"
              ref={(input) => { this.antiDopingPlayerBloodGroup = input }}
              className="form-control"
              placeholder="Blood Group"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="antiDopingDrugName"
              type="text"
              ref={(input) => { this.antiDopingDrugName = input }}
              className="form-control"
              placeholder="Drug Name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="antiDopingQuantity"
              type="text"
              ref={(input) => { this.antiDopingQuantity = input }}
              className="form-control"
              placeholder="Drug quantity"
              required />
          </div>

          <button type="submit" className="btn btn-primary" >Add Report</button>
               
 </form>

        </div>

    );
  }
}

export default Mannually;
