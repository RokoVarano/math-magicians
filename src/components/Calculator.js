import React from 'react';
import PropTypes from 'prop-types';

const Calculator = () => {
  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  return (
    <section className="mainframe">
      <p className="result">0</p>
      {buttons.map((text) => <Button content={text} key={`btn-${text}`} />)}
    </section>
  );
};

const Button = ({ content }) => {
  const classy = content === '0' ? 'btn0' : 'btn';

  return <p className={classy}>{content}</p>;
};

Button.propTypes = {
  content: PropTypes.string,
};

Button.defaultProps = {
  content: '',
};

export default Calculator;
