import React, { Component } from 'react';
import './show.css';
import Tabletop from 'tabletop';
var x;
class Address extends Component {
componentDidMount() {
    Tabletop.init({
      key: '1NZ25YjnMAjJs7uCC5bIzRuf7DGnPvklBuMxHYGOHP68',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

getData(value)
{
     
     const { data } = this.state 
     let output="Invalid";
  var flg=0;
  var flg1=0;      
 this.props.reports.map((report,key)=>{
                flg=0;
           const dName=report.drugName
          const dValue=window.web3.utils.fromWei(report.quantity.toString(),'Ether')
          const id=report.id.toString();
           
if(value==id)
{
 data.map(drug => {
            const drugName =drug.DrugName
            const Threshold=drug.Threshold
          if(dName==drugName &&dValue<Threshold )
          {
              flg=1;
          }
          if(dName!=drugName)
          {
            flg1=1;
          }


          })
}
         if(flg==1)
            output="valid"
         if(flg1==1)
          {

           output="cannot be validated" 
          }
          })
  this.checkReport(value,output)
}
 
 
constructor(props)
{
   super(props)
   this.state={
    data:[],
   }
   this.getData=this.getData.bind(this)
this.checkReport=this.props.checkReport.bind(this)
}
  render() {
    return (
          <div id="content"> 

        <h2 class="header" style = {{color:'black'}}>Drug Report</h2>
        
        <table className="table" id='report'>

          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Player Name</th>
              <th scope="col">Player Age</th>
              <th scope="col">Blood Group</th>
              <th scope="col">Drug Name</th>
              <th scope="col">Quantity_ng/ml</th>
             <th scope="col">Verify</th>
               
             
            </tr>
          </thead>
          <tbody id="antiDopingList">
            {this.props.reports.map((report,key)=>{
              return (
                <tr key={key}>
                <th scope="row">{report.id.toString()}</th>
                <td>{report.playerName}</td>
                <td>{report.playerAge}</td>
                <td>{report.bloodGroup}</td>
                <td>{report.drugName}</td>
                <td>{window.web3.utils.fromWei(report.quantity.toString(),'Ether')}</td>
    
                
<td>        <button className="btn btn-primary" onClick={this.getData.bind(this,report.id.toString())}>Verify</button></td>
                </tr>

                )
            })} 

          </tbody>

        </table>


        </div>

        
    )
  }
}

export default Address;
