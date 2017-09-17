import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App2(props) {
  return <button onClick={props.func}> {props.name}</button>    //wywolanie funkcji rodzica
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      counter: 0,
      lista: ["a", "b", "c"]  // <div>{this.state.lista}</div> wyświetla cala liste! czesciej uzywamy do wyswietlenia listy elementowDOM
    }
  }

  render() {
    console.log(this.props);
    const name="Hamer";
    let myList = this.state.lista.map((element)=>{
      return <li>{element}</li>
    }); 

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          HI {name} {this.state.counter}
        </p>
        <button onClick={this.clickCounter}> Click me </button>
        <div>{this.state.lista}</div> 
        <ul>{myList}</ul>
      </div>
    );
  }


  clickCounter = ()=> {
    this.setState({ counter: this.state.counter + 1 }); //wywoluje metode render w komponencie    
  }
}

export default App;
