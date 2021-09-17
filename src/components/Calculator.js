import React from 'react';
import '../App.css';
import CalcButton from './CalcButton';
import CalcNumbers from './CalcNumbers';

const Calculator = () => (
  <div className="container">
    <div className="gray result">
      <p className="calc-result" id="result">
        0
      </p>
    </div>
    <CalcNumbers />
    <CalcButton content="AC" color="white calc-btn ac" />
    <CalcButton content="+/-" color="white calc-btn plusminus" />
    <CalcButton content="%" color="white calc-btn percent" />
    <CalcButton content="÷" color="orange calc-btn division" />
    <CalcButton content="x" color="orange calc-btn multi" />
    <CalcButton content="-" color="orange calc-btn minus" />
    <CalcButton content="+" color="orange calc-btn plus" />
    <CalcButton content="." color="white calc-btn dot" />
    <CalcButton content="=" color="orange calc-btn equal" />
  </div>
);

export default Calculator;
