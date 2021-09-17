import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

let calculator = { total: 0, next: null, operation: null };

const total = (cal) => {
  if (cal.total === null && cal.next !== null) return '';
  if (cal.total == null) return '0';

  return cal.total;
};
const calc = (e) => {
  const result = document.getElementById('result');
  calculator = calculate(calculator, e.target.innerText);
  result.innerHTML = total(calculator) + (calculator.operation || '') + (calculator.next || '');
};

const CalcButton = ({ color, content }) => (
  <button onClick={calc} type="button" className={color}>
    {content}
  </button>
);

CalcButton.propTypes = {
  content: PropTypes.string,
  color: PropTypes.string,
};

CalcButton.defaultProps = {
  content: '1',
  color: 'white',
};

export default CalcButton;
