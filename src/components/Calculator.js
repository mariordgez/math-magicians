import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Calculator = () => {
  let calculator = { total: 0, next: null, operation: null };
  const total = (cal) => {
    if (cal.total === null && cal.next !== null) return '';
    if (cal.total == null) return '0';

    return cal.total;
  };
  const calc = (e) => {
    const result = document.getElementById('result');
    console.log(calculator.total);
    console.log(calculator.next);
    console.log(calculator.operation);

    console.log(e.target.innerText);
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
  return (
    <div className="container">
      <div className="gray result">
        <p className="result" id="result">
          {calculator.total}
        </p>
      </div>
      <CalcButton content="AC" onClick={calc} color="white calc-btn ac" />
      <CalcButton content="+/-" onClick={calc} color="white calc-btn plusminus" />
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

export default Calculator;
