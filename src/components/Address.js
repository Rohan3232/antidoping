import React, { Component } from 'react';
import fire from './fire'
var input;
class Address extends Component {


  render() {
    return (
        <div id="content">

              <h1>Provide Address</h1>
        <form >
          <div className="form-group mr-sm-2">
            <input
              id="Address"
              type="text"
              ref={(input) => { this.antiDopingPlayerName = input }}
              className="form-control"
              placeholder="Player Name"
              required />
          </div>
          
          <button type="submit" className="btn btn-primary" onClick={this.getValue} >Add Report</button>
               
 </form>

        </div>

    );
  }
}

export default Address;
