import React, { useState } from 'react';
import '../App.css';
import CalcButton from './CalcButton';
import CalcNumbers from './CalcNumbers';
import calculate from '../logic/calculate';
import total from './total';

const Calculator = () => {
  const [calculator, setCalculator] = useState({ total: 0, next: null, operation: null });

  const calc = (e) => setCalculator((calc) => calculate(calc, e.target.innerText));

  return (
    <div className="home">
      <div>
        <h2>Let&apos;s do some math!</h2>
      </div>
      <div className="container">
        <div className="gray result">
          <p className="calc-result" id="result">
            {total(calculator) + (calculator.operation || '') + (calculator.next || '')}
          </p>
        </div>
        <CalcNumbers calc={calc} />
        <CalcButton content="AC" color="white calc-btn ac" calc={calc} />
        <CalcButton content="+/-" color="white calc-btn plusminus" calc={calc} />
        <CalcButton content="%" color="white calc-btn percent" calc={calc} />
        <CalcButton content="÷" color="orange calc-btn division" calc={calc} />
        <CalcButton content="x" color="orange calc-btn multi" calc={calc} />
        <CalcButton content="-" color="orange calc-btn minus" calc={calc} />
        <CalcButton content="+" color="orange calc-btn plus" calc={calc} />
        <CalcButton content="." color="white calc-btn dot" calc={calc} />
        <CalcButton content="=" color="orange calc-btn equal" calc={calc} />
      </div>
    </div>
  );
};
export default Calculator;
