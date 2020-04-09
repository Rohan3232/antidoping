import React, { Component } from 'react';

import AntiDoping from '../abis/AntiDoping.json' 
import {App} from './App'

export class Auth extends Component {
getValue()
{

}
  render() {
    return (
        <div id="content"> 

        <h2>Authentication</h2>
       <ul>
         <tbody id="antiDopingList">
            {this.props.reports1.map((report,key)=>{
              return (
                <tr key={key} >
                <th scope="row">{report.id.toString()}</th>
                <td>{report.owner.toString()}</td>
                </tr>

                )
            })} 

          </tbody>
          </ul>
      </div>
      );
  }
}

export default Auth;
