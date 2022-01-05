import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Result from './components/Result';
import ActionBtn from './components/ActionBtn';
import ReverseBtn from './components/ReverseBtn';
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
        <Result result={this.state.result}></Result>
        <div className='row' >
          <ActionBtn handleAction={() => this.setState({ result: "" })} >AC</ActionBtn>
          {/* manque d'un peu de temps */}
          <ActionBtn handleAction={() => this.setState({ result: (this.state.result) })}> +- </ActionBtn>
          {/* manque d'un peu de temps */}
          <ActionBtn handleAction={() => this.setState({ result: (this.state.result) })}> % </ActionBtn>
          <ActionBtn handleAction={() => this.setState({ result: math.divide(this.state.result) })}> / </ActionBtn>
        </div>
        <div className='row' >
          <Button handleClick={this.addInput}> 7 </Button>
          <Button handleClick={this.addInput}> 8 </Button>
          <Button handleClick={this.addInput}> 9 </Button>
          <Button handleClick={this.addInput}> * </Button>
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
    </div >
  }
}

export default App;