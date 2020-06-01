import React, { Component } from 'react';

import Tabletop from 'tabletop';
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
           
if(value===id)
{
 data.map(drug => {
            const drugName =drug.DrugName
            const Threshold=drug.Threshold
          if(dName===drugName &&dValue<Threshold )
          {
              flg=1;
          }
          if(dName!==drugName)
          {
            flg1=1;
          }

          return null;
          })
}
         if(flg===1)
            output="valid"
         if(flg1===1)
          {

           output="cannot be validated" 
          }
          return null;
          })
  this.checkReport(value,output)
}
 
constructor(props)
{
   super(props)
   this.state={
    data:[],
    display: 'none',
   }
   this.getData=this.getData.bind(this)
this.checkReport=this.props.checkReport.bind(this)
}
  render() {
  const mystyle={
      color:"white",
      backgroundColor:"dodgerblue",
      padding:"10px",
      borderRadius:"10px"
    };
    const dataStyle={
      color:"black",
      backgroundColor:"white",
      align: "center",
      borderRadius:"5px",
      padding:"10px"
    };
    return (
          <div id="content"> 

        <h2 class="header" style={{backgroundColor:"lightblue",padding:"20px",color:"black",borderRadius:"20px"}}><b>Player's drug report</b></h2>
        
        <table className="table">

          <thead>
            <tr>
              <th scope="col" style={mystyle}>#</th>
              <th scope="col" style={mystyle}>Player Name</th>
              <th scope="col" style={mystyle}>Player Age</th>
              <th scope="col" style={mystyle}>Blood Group</th>
              <th scope="col" style={mystyle}>Drug Name</th>
              <th scope="col" style={mystyle}>Quantity_ng/ml</th>
            
             
            </tr>
          </thead>
          <tbody id="antiDopingList">
            {this.props.reports.map((report,key)=>{
              return (
               <tr key={key}>
                <th scope="row" style={dataStyle}>{report.id.toString()}</th>
                <td style={dataStyle}>{report.playerName}</td>
                <td style={dataStyle}>{report.playerAge}</td>
                <td style={dataStyle}>{report.bloodGroup}</td>
                <td style={dataStyle}>{report.drugName}</td>
                <td style={dataStyle}>{window.web3.utils.fromWei(report.quantity.toString(),'Ether')}</td>
                
               <td><button disabled={report.isValid} className="btn btn-primary" onClick={this.getData.bind(this,report.id.toString())}>Verify</button></td>

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