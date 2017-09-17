import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TransactionCard from './components/transaction-cards';
import StateLess from './components/hello-stateless';
import TransactionList from './components/transaction-list';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state={
        transactions: [
          {
            id: 1,
            description: 'Potwierdzenie uczestnictwa w warsztatach WarsawJS',
            value: 20,
            date: '16.09.2017',
            category: 'Edukacja'
          },
          {
            id: 2,
            description: 'Bilet na pociąg',
            value: 120,
            date: '07.09.2017',
            category: 'Transport'
          },
          {
            id: 3,
            description: 'Części do samochodu',
            value: 430,
            date: '26.08.2017',
            category: 'Samochód'
          }
        ],
      counter: 0,
      lista: ["a", "b", "c"]  // <div>{this.state.lista}</div> wyświetla cala liste! czesciej uzywamy do wyswietlenia listy elementowDOM
    }
  }

  render() {
    console.log(this.props);
    const name="Hamer";
    let myList = this.state.lista.map((element)=>{
      return <li key={element}>{element}</li>
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
        {/* <div>{this.state.lista}</div>  */}
        <ul>{myList}</ul>
        <br />

        <div>
          <h1 className="emphesize">Counter component</h1>
          <Counter />
        </div>
        <br />
        
        <div>
          <StateLess name={"KTOŚ"}/>
          <h1 className="emphesize">Transaction Card component</h1>
          <TransactionCard item= {this.state.transactions[1]} />
        </div>

        <div>
          <h1 className="emphesize">Transaction List component</h1>
          <TransactionList
            items={this.state.transactions}
            onRemoveTransaction = {this.handleRemoveTransactions}
          />
        </div>

      </div>
    );
  }

  handleRemoveTransactions = ({ id }) => {
    const { transactions } = this.state;  //decompositin - z obiektu this.state wybierz transactions
    this.setState({ transactions: transactions.filter(transaction => transaction.id !== id) });
  }

  clickCounter = ()=> {
    this.setState({ counter: this.state.counter + 1 }); //wywoluje metode render w komponencie    
  }
}

export default App;
