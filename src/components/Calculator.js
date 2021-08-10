import React from 'react';
import PropTypes from 'prop-types';

const Calculator = () => {
  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  return (
    <main className="mainframe">
      <p className="result">0</p>
      {buttons.map((text) => <Button content={text} key={`btn-${text}`} />)}
    </main>
  );
};

const Button = ({ content }) => {
  const classy = content === '0' ? 'btn0' : 'btn';
  const orange = ['÷', 'x', '+', '-', '='].includes(content) ? ' orange' : '';

  return <p className={classy + orange}>{content}</p>;
};

Button.propTypes = {
  content: PropTypes.string,
};

Button.defaultProps = {
  content: '',
};

export default Calculator;
