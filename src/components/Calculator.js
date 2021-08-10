import React, { Component } from 'react';
import Button from './Button';

class Calculator extends Component {
  constructor() {
    super();
    this.buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  }

  render() {
    return (
      <section className="mainframe">
        <p className="result">0</p>
        {this.buttons.map((text) => <Button content={text} key={`btn-${text}`} />)}
      </section>
    );
  }
}

export default Calculator;
