import React, { Component } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor() {
    super();
    this.buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  onClickBtn = (obj, text) => {
    const newobj = calculate(obj, text);
    if (newobj.total === null) newobj.total = '0';
    this.setState(newobj);
  }

  updateDisplay = () => {
    const { total } = this.state;
    const { next } = this.state;

    if (next === null) return total;

    return next;
  }

  render() {
    return (
      <section className="mainframe">
        <p className="result">{ this.updateDisplay() }</p>
        {this.buttons.map((text) => <Button content={text} key={`btn-${text}`} click={() => this.onClickBtn(this.state, text)} />)}
      </section>
    );
  }
}

export default Calculator;
