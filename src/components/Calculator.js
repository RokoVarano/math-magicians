import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const [total, setTotal] = useState('0');
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const onClickBtn = (obj, text) => {
    console.log(obj);

    const newobj = calculate(obj, text);
    if (newobj.total !== undefined) setTotal(newobj.total);
    if (newobj.next !== undefined) setNext(newobj.next);
    if (newobj.operation !== undefined) setOperation(newobj.operation);
  };

  const updateDisplay = () => (next === null ? total : next);

  return (
    <section className="mainframe">
      <p className="result">{ updateDisplay() }</p>
      {buttons.map((text) => <Button content={text} key={`btn-${text}`} click={() => onClickBtn({ total, next, operation }, text)} />)}
    </section>
  );
};

export default Calculator;
