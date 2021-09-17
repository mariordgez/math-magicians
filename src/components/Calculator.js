import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const CalcButton = ({ color, content }) => (
  <button type="button" className={color}>
    {content}
  </button>
);
const Calculator = () => {
  const calculator = { total: null, next: null, operation: null };
  const calc = (e) => {
    e.preventDefault();
    calculate(calculator, e.target.content);
  };
  return (
    <div className="container">
      <div className="gray result">
        <p className="calc-result">this.calculator.total</p>
      </div>
      <CalcButton content="AC" onClick={calc} color="white calc-btn ac" />
      <CalcButton
        content="+/-"
        onClick={calc}
        color="white calc-btn plusminus"
      />
      <CalcButton content="%" onClick={calc} color="white calc-btn percent" />
      <CalcButton content="÷" onClick={calc} color="orange calc-btn division" />
      <CalcButton content="1" onClick={calc} color="white calc-btn one" />
      <CalcButton content="2" onClick={calc} color="white calc-btn two" />
      <CalcButton content="3" onClick={calc} color="white calc-btn three" />
      <CalcButton content="x" onClick={calc} color="orange calc-btn multi" />
      <CalcButton content="4" onClick={calc} color="white calc-btn four" />
      <CalcButton content="5" onClick={calc} color="white calc-btn five" />
      <CalcButton content="6" onClick={calc} color="white calc-btn six" />
      <CalcButton content="-" onClick={calc} color="orange calc-btn minus" />
      <CalcButton content="7" onClick={calc} color="white calc-btn seven" />
      <CalcButton content="8" onClick={calc} color="white calc-btn eight" />
      <CalcButton content="9" onClick={calc} color="white calc-btn nine" />
      <CalcButton content="+" onClick={calc} color="orange calc-btn plus" />
      <CalcButton content="0" onClick={calc} color="white calc-btn cero" />
      <CalcButton content="." onClick={calc} color="white calc-btn dot" />
      <CalcButton content="=" onClick={calc} color="orange calc-btn equal" />
    </div>
  );
};

CalcButton.propTypes = {
  content: PropTypes.string,
  color: PropTypes.string,
};

CalcButton.defaultProps = {
  content: '1',
  color: 'white',
};

export default Calculator;
