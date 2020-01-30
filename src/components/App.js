import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import AntiDoping from '../abis/AntiDoping.json' 
import Navbar from './Navbar'
import Main from './Main'

class App extends Component {

  async componentWillMount(){
    await this.loadWeb3()
    await this.loadBlockchainData()
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

      //load reports
      for(var i=1;i<=reportCount;i++){
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

  createReport(playerName, playerAge, bloodGroup, drugName, quantity){
    this.setState({loading:true})
    this.state.antiDoping.methods.createReport(playerName, playerAge, bloodGroup, drugName, quantity).send({from:this.state.account})
    .once('receipt', (receipt)=>{
      this.setState({loading:false})
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account:'',
      reportCount:0,
      reports:[],
      loading:true
    }
    this.createReport = this.createReport.bind(this)
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex">
              {this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div> 
                : <Main
                 reports = {this.state.reports}
                 createReport={this.createReport}/>
              }
            </main>
          </div>
        </div>
      </div>  
    );
  }
}

export default App;
 