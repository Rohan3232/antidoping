import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import AntiDoping from '../abis/AntiDoping.json' 
import NavbarAddFromGoogleSheet from './Navbar/Navbar_AddFromGoogleSheet'
import Navbar from "./Navbar/Navbar"
import AddManually from './AddData/addManually'
import DataEntry from './AddData/dataEntry'
import Show from './BCCI/ShowReport'
import {BrowserRouter, Route} from 'react-router-dom'
import WADA from './WADA/WADA'
import AddFromGoogleSheet from './AddData/addFromGoogleSheet'
import AddFromJSON from './AddData/addFromJSON'
import Log from './LogIn/Log'
import PLAYER from './Player/PLAYER'
export class App extends Component {

     async componentWillMount(){
    await this.loadWeb3()
    await this.loadBlockchainData()

    await this.loadBlockchainData1()
    await this.checkReports()
 
  }

  async loadWeb3(){

      if (window.ethereum) {
          window.web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
        }
      else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider)
        }
      else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }
    }
  
  async loadBlockchainData(){
    const web3 = window.web3
    //load account
    const accounts =await web3.eth.getAccounts()
    this.setState({account : accounts[0]}) 
    const networkId = await web3.eth.net.getId()
    const networkData = AntiDoping.networks[networkId]
    if(networkData){
      const antiDoping = web3.eth.Contract (AntiDoping.abi,networkData.address)
      this.setState({antiDoping})
      const reportCount = await antiDoping.methods.reportCount().call()
      this.setState({reportCount})
       for(var i=1;i<=reportCount;i++)
      {
        const report = await antiDoping.methods.reports(i).call()
        this.setState({
          reports:[...this.state.reports, report]
        })
    }
      this.setState({loading : false})
      }else{
      window.alert("contract is not deployed to network")
    }
   
  }
    async loadBlockchainData1(){
    const web3 = window.web3

    //load account
    const accounts =await web3.eth.getAccounts()
    this.setState({account : accounts[0]}) 
    const networkId = await web3.eth.net.getId()
    const networkData = AntiDoping.networks[networkId]
    if(networkData){
      const antiDoping = web3.eth.Contract (AntiDoping.abi,networkData.address)
      this.setState({antiDoping})
      const reportCount = await antiDoping.methods.reportCount().call()
      this.setState({reportCount})
      for(var i=1;i<=reportCount;i++)
      {
        const report1 = await antiDoping.methods.reports(i).call()
        this.setState({
          reports1:[...this.state.reports1, report1]
        })
    }
      this.setState({loading : false})
      }else{
      window.alert("contract is not deployed to network")
    }
   
  }

  async checkReports(){
    const web3 = window.web3

    //load account
    const accounts =await web3.eth.getAccounts()
    this.setState({account : accounts[0]}) 
    const networkId = await web3.eth.net.getId()
    const networkData = AntiDoping.networks[networkId]
    if(networkData){
      const antiDoping = web3.eth.Contract (AntiDoping.abi,networkData.address)
      this.setState({antiDoping})
      const reportCount = await antiDoping.methods.reportCount().call()
      this.setState({reportCount})
          for(var i=1;i<=reportCount;i++){
        const check = await antiDoping.methods.checks(i).call()
        this.setState({
          checks:[...this.state.checks, check]
        })
      var a=check[2]

      this.setState({a})
    
      var b=check[0].toNumber()
      this.setState({b})
    }

      this.setState({loading : false})
    
      }else{
      window.alert("contract is not deployed to network")
    }

  }
createReport(playerName, playerAge, bloodGroup, drugName, quantity){
    this.setState({loading:true})
    this.state.antiDoping.methods.createReport(playerName, playerAge, bloodGroup, drugName, quantity).send({from:this.state.account})
    .once('receipt', (receipt)=>{
      this.setState({loading:false})
    })
  }

  checkReport(key,data){
    this.setState({loading:true})
    this.state.antiDoping.methods.checkReport(key,data).send({from:this.state.account})
    .once('receipt', (receipt)=>{
      this.setState({loading:false})
    })
  }

  
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      account:'',
      reportCount:0,
      reports:[],
      reports1:[],
      checks:[],
      loading:true

   
    }

    this.createReport = this.createReport.bind(this)
    
    this.checkReport = this.checkReport.bind(this)
  }


  render() {
    return (

    
           <div className="container-fluid mt-5">
      <BrowserRouter>
   
          <Route exact={true} path='/dataEntry' render={() => (
            <div className="App">
              <DataEntry reports1 = {this.state.reports1}
                    checks={this.state.checks}
                    a={this.state.a}

                 />
                 
                    <NavbarAddFromGoogleSheet account={this.state.account} />
            </div>

         )}/>

      
         <Route exact={true} path='/addManually' render={() => (

            <div className="App">
              <AddManually reports = {this.state.reports}
                 createReport={this.createReport}
                 />
                          <Navbar account={this.state.account} />

   
            </div>
         )}/>
         <Route exact={true} path='/WADA' render={() => (
            <div className="App">
              <WADA reports = {this.state.reports}
                 createReport={this.createReport}
                  a={this.state.a}
                 checkReport={this.checkReport}
                 b={this.state.b}

                 />

                          <NavbarAddFromGoogleSheet account={this.state.account} />
            </div>
         )}/>
         <Route exact={true} path='/ShowReport' render={() => (
            <div className="App">
              <Show reports1 = {this.state.reports1}
                    checks={this.state.checks}
                    a={this.state.a}

                 />
                 <NavbarAddFromGoogleSheet account={this.state.account} />

            </div>

         )}/>
          <Route exact={true} path='/PLAYER' render={() => (
            <div className="App">
              <PLAYER reports1 = {this.state.reports1}
                    checks={this.state.checks}
                    a={this.state.a}

                 />
                 
                    <NavbarAddFromGoogleSheet account={this.state.account} />
            </div>

         )}/>

          <Route exact={true} path='/AddFromGoogleSheet' render={() => (
          <div className="App">
                <AddFromGoogleSheet reports = {this.state.reports}
                 createReport={this.createReport}
                  a={this.state.a}
                 checkReport={this.checkReport}
                 b={this.state.b}
/>
            <NavbarAddFromGoogleSheet account={this.state.account} />
            </div>

         )}/>

           <Route exact={true} path='/' render={() => (
            <div className="App">
              <Log reports = {this.state.reports}
                 createReport={this.createReport}
                 />
            </div>
         )}/>
          <Route exact={true} path='/AddFromJSON' render={() => (
            <div className="App">
              <AddFromJSON reports = {this.state.reports}
                 createReport={this.createReport}
                 />
            <NavbarAddFromGoogleSheet account={this.state.account} />
            </div>
         )}/>
</BrowserRouter>
</div>
);
  }
}

export default App;
 