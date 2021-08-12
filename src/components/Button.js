import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { content, click } = props;
  const classy = content === '0' ? 'btn0' : 'btn';
  const orange = ['÷', 'x', '+', '-', '='].includes(content) ? ' orange' : '';

  return (
    <button type="button" onClick={click} className={classy + orange}>
      { content }
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string,
  click: PropTypes.func,
};

Button.defaultProps = {
  content: '',
  click: {},
};

export default Button;
