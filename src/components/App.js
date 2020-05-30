import React, { Component } from 'react';
import Web3 from 'web3'
import AntiDoping from '../abis/AntiDoping.json' 
import data from './AddData/data.json'
import Navbar_login from './Navbar_login'//login 
import Navbar_other from './Navbar_other'//WADA
import AddData from './AddData/AddData'
import Manually from './AddData/Manually'
import WADA from './WADA/WADA'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import BCCI from './BCCI/BCCI'
import Sheet from './AddData/Sheet'
import Json from './AddData/Json'
import Login from './Login/Login'
import Player from './Player/Player'
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
   
         
      
         <Route exact={true} path='/AddData' render={() => (

            <div className="App">
              <AddData reports = {this.state.reports}
                 createReport={this.createReport}
                 />
                          <Navbar_other account={this.state.account} />

   
            </div>
         )}/>
          <Route exact={true} path='/Manually' render={() => (

            <div className="App">
              <Manually reports = {this.state.reports}
                 createReport={this.createReport}
                 />
                          <Navbar_other account={this.state.account} />

   
            </div>
         )}/>
         <Route exact={true} path='/Sheet' render={() => (

            <div className="App">
              <Sheet reports = {this.state.reports}
                 createReport={this.createReport}
                 />
                          <Navbar_other account={this.state.account} />

   
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

                          <Navbar_other account={this.state.account} />
            </div>
         )}/>
         <Route exact={true} path='/BCCI' render={() => (
            <div className="App">
              <BCCI reports1 = {this.state.reports1}
                    checks={this.state.checks}
                    a={this.state.a}

                 />
                 <Navbar_other account={this.state.account} />

            </div>

         )}/>
          <Route exact={true} path='/Player' render={() => (
            <div className="App">
              <Player reports1 = {this.state.reports1}
                    checks={this.state.checks}
                    a={this.state.a}

                 />
                 
                    <Navbar_other account={this.state.account} />
            </div>

         )}/>

           <Route exact={true} path='/' render={() => (
            <div className="App">
              <Login reports = {this.state.reports}
                 createReport={this.createReport}
                 />
                  <Navbar_login account={this.state.account} />
            
            </div>
         )}/>
          <Route exact={true} path='/Json' render={() => (
            <div className="App">
              <Json reports = {this.state.reports}
                 createReport={this.createReport}
                 />

                  <Navbar_other account={this.state.account} />
            </div>
         )}/>

</BrowserRouter>
</div>
);
  }
}

export default App;
 