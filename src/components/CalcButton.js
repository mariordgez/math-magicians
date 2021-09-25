import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const CalcButton = ({ color, content, calc }) => (
  <button data-testid={content} onClick={calc} type="button" className={color}>
    {content}
  </button>
);

CalcButton.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  calc: PropTypes.func,
};

CalcButton.defaultProps = {
  content: '1',
  color: 'white',
  calc: PropTypes.func,
};

export default CalcButton;
