import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import AntiDoping from '../abis/AntiDoping.json' 
import Navbar from './Navbar'
import Main from './Main'
import Show from './show'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import WADA from './WADA'
import Login from './Login'
import fire from './fire'
import Address from './Address'
import Auth from './Auth'
import Log from './Log'
import PLAYER from './PLAYER'
export class App extends Component {

   authListener() {
    fire.auth().onAuthStateChanged((user) => {
     // console.log(user);
      if (user) {
        this.setState({ user });
       // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        //localStorage.removeItem('user');
      }
    });
  }
  async componentWillMount(){
    await this.loadWeb3()
    await this.loadBlockchainData()

    await this.loadBlockchainData1()
    await this.checkReports()
    this.authListener()
    console.log(window.web3)
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
      console.log(this.state.reports)
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
      console.log(this.state.reports1)
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
      console.log({b})

    }

      this.setState({loading : false})
      console.log(this.state.checks)
    
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
  checkReport(key){
    this.setState({loading:true})
    this.state.antiDoping.methods.checkReport(key).send({from:this.state.account})
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
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/Log" component={Log} />
    </Switch>
    
     <Navbar account={this.state.account} />
      <Route exact={true} path='/Address' render={() => (
            <div className="App">
            <Address/>
              </div>
         )}/>   
      
         <Route exact={true} path='/Main' render={() => (
            <div className="App">
              <Main reports = {this.state.reports}
                 createReport={this.createReport}
                 />
            </div>
         )}/>
         <Route exact={true} path='/WADA' render={() => (
            <div className="App">
              <Show reports = {this.state.reports}
                 createReport={this.createReport}
                  a={this.state.a}
                 checkReport={this.checkReport}
                 b={this.state.b}
                 />
            </div>
         )}/>
         <Route exact={true} path='/loadreport' render={() => (
            <div className="App">
              <WADA reports1 = {this.state.reports1}
                    checks={this.state.checks}
                    a={this.state.a}

                 />
            </div>

         )}/>
          <Route exact={true} path='/PLAYER' render={() => (
            <div className="App">
              <PLAYER reports1 = {this.state.reports1}
                    checks={this.state.checks}
                    a={this.state.a}

                 />
            </div>

         )}/>

          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Log reports1 = {this.state.reports1}
                    checks={this.state.checks}
                    a={this.state.a}

                 />
            </div>

         )}/>

</BrowserRouter>
</div>
);
  }
}

export default App;
 