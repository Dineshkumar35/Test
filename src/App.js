import React from 'react';
import {Button} from "react-bootstrap"
import './App.css';

class App extends React.Component {
	constructor(){
    super()
    this.state={
      earning:18300,
      salary:"",
      fees:""
    }
  }
  componentDidMount(){
    this.calculation()
  }
  onChange=(e)=>{
    this.setState({
      earning:e.target.value
    },()=>{
      this.calculation()
    });
  }

  calculation=()=>{
    let salaryPer = this.state.earning * -1.16 / 100;
    let fessPer = salaryPer * 10 / 100
     this.setState({
      salary: salaryPer,
      fees:fessPer
     })
  }


  render() {
  	return <div className="ccontainer">
              <div className="blackCon">
                <h1>
                  Lending made easy
                </h1>
                <label className="marTop20">
                  Earn up to -1.16%* a year across a wide range of P2P sites with InvestUP
                </label>
                <div>
              <Button className="BtnClass marTop20" variant="outline-primary">GET STARTED</Button>
              </div>
              </div>
              <div className="calculation">
                With <input className="no-outline width" maxLength={5} type="text" min={500} max={250000}
                    value={this.state.earning} onChange={this.onChange}
                  />  your estimated earning could be $ {this.state.salary.toString().substring(0,8)}
                * per year with fees of just $ {this.state.fees.toString().substring(0,5)} per year
              </div>
              <div className="container">
                  <input className="" type="range" min={500} max={250000}
                    value={this.state.earning} onChange={this.onChange}
                  />
                  <h3>
                    {this.state.earning}
                  </h3>
              </div>
          </div>
  }
}
export default App;
