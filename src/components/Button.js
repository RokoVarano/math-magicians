import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    const { content } = this.props;
    this.classy = content === '0' ? 'btn0' : 'btn';
    this.orange = ['÷', 'x', '+', '-', '='].includes(content) ? ' orange' : '';
  }

  render() {
    const { content, click } = this.props;
    return (
      <button type="button" onClick={click} className={this.classy + this.orange}>
        { content }
      </button>
    );
  }
}

Button.propTypes = {
  content: PropTypes.string,
  click: PropTypes.func,
};

Button.defaultProps = {
  content: '',
  click: {},
};

export default Button;
