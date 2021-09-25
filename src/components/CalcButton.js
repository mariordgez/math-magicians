import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const CalcButton = ({
  color,
  content,
  calc,
  key,
}) => (
  <button id={key} onClick={calc} type="button" className={color}>
    {content}
  </button>
);

CalcButton.propTypes = {
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  calc: PropTypes.func,
};

CalcButton.defaultProps = {
  key: 1,
  content: '1',
  color: 'white',
  calc: PropTypes.func,
};

export default CalcButton;
