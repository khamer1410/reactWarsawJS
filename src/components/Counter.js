import React, {Component} from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increaseCount() {
    this.setState({
      count: ++this.state.count
    });
  }

  decreaseCount() {
    this.setState({
      count: --this.state.count
    });
  }

  render() {
    const {count} = this.state;
    const h2Class = (this.state.count > 10) ? 'blue' : 'green'; //patent na przekazanie dynamicznej klasy zależnej od state

    return (
      <div>
        <h2 className={h2Class}> Diablo character lvl.</h2>
        <h3>{count}</h3>
        <button onClick={this.increaseCount.bind(this)}>Level Up!</button>
        <button onClick={this.decreaseCount.bind(this)}>Level Down!</button>
      </div>
    )
  }

}

export default Counter;