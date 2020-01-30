import React, { Component } from 'react';


class Main extends Component {

  
  render() {
    return (
        <div id="content">
              <h1>Add Report Values</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const playerName = this.antiDopingPlayerName.value
          const playerAge = this.antiDopingPlayerAge.value
          const bloodGroup = this.antiDopingPlayerBloodGroup.value
          const drugName = this.antiDopingDrugName.value
          const quantity = window.web3.utils.toWei(this.antiDopingQuantity.value.toString(), 'Ether')
          this.props.createReport(playerName, playerAge, bloodGroup, drugName, quantity)
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
          <button type="submit" className="btn btn-primary">Add Report</button>
        </form>
        <p>&nbsp;</p>
        <h2>Add drug report</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Player Name</th>
              <th scope="col">Player Age</th>
              <th scope="col">Blood Group</th>
              <th scope="col">Drug Name</th>
              <th scope="col">Quatity_ng/ml</th>
              <th scope="col">WADA</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="antiDopingList">
            {this.props.reports.map((report, key)=>{
              return (
                <tr key={key}>
                <th scope="row">{report.id.toString()}</th>
                <td>{report.playerName}</td>
                <td>{report.playerAge}</td>
                <td>{report.bloodGroup}</td>
                <td>{report.drugName}</td>
                <td>{window.web3.utils.fromWei(report.quantity.toString(),'Ether')}</td>
                </tr>

                )
            })} 
          </tbody>
        </table>
        </div>
    );
  }
}

export default Main;
