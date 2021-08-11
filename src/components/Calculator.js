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

  onClickButton = (obj, text) => {
    const newobj = calculate(obj, text);
    if (newobj.total === null) newobj.total = '0';
    this.setState(newobj);
  }

  render() {
    const { total } = this.state;
    return (
      <section className="mainframe">
        <p className="result">{ total }</p>
        {this.buttons.map((text) => <Button content={text} key={`btn-${text}`} click={() => this.onClickButton(this.state, text)} />)}
      </section>
    );
  }
}

export default Calculator;
