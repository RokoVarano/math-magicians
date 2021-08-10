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
    const { content } = this.props;
    return (
      <p className={this.classy + this.orange}>{ content }</p>
    );
  }
}

Button.propTypes = {
  content: PropTypes.string,
};

Button.defaultProps = {
  content: '',
};

export default Button;
