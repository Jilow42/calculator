import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Result from './components/Result';
import ClearBtn from './components/ClearBtn';
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: ""
    };
  }

  addInput = val => {
    this.setState({ result: this.state.result + val });
  }
  handleCalc = () => {
    this.setState({ result: math.evaluate(this.state.result) })
  };

  render() {
    return <div className='App' >
      <div className='calculator' >
        console.log({math.evaluate("3+5")});
         
        <Result result={this.state.result}></Result>
        <div className='row' >
          <ClearBtn handleAC={() => this.setState({ result: "" })} >AC</ClearBtn>
          <Button handleClick={this.addInput}> +- </Button>
          <Button handleClick={this.addInput}> % </Button>
          <Button handleClick={this.addInput}> / </Button>
        </div>
        <div className='row' >
          <Button handleClick={this.addInput}> 7 </Button>
          <Button handleClick={this.addInput}> 8 </Button>
          <Button handleClick={this.addInput}> 9 </Button>
          <Button handleClick={this.addInput}> x </Button>
        </div>
        <div className='row' >
          <Button handleClick={this.addInput}> 4 </Button>
          <Button handleClick={this.addInput}> 5 </Button>
          <Button handleClick={this.addInput}> 6 </Button>
          <Button handleClick={this.addInput}> - </Button>
        </div>
        <div className='row' >
          <Button handleClick={this.addInput}> 1 </Button>
          <Button handleClick={this.addInput}> 2 </Button>
          <Button handleClick={this.addInput}> 3 </Button>
          <Button handleClick={this.addInput}> + </Button>
        </div>
        <div className='row' >
          <Button handleClick={this.addInput}> 0 </Button>
          <Button handleClick={this.addInput}> . </Button>
          <Button handleClick={() => this.handleCalc()}> = </Button>
        </div>
      </div>
    </div>
  }
}

export default App;