import React from 'react';
import '../App.css';
import CalcButton from './CalcButton';

const Calculator = () => (
  <div className="container">
    <div className="gray result">
      <p className="result" id="result">
        0
      </p>
    </div>
    <CalcButton content="AC" color="white calc-btn ac" />
    <CalcButton content="+/-" color="white calc-btn plusminus" />
    <CalcButton content="%" color="white calc-btn percent" />
    <CalcButton content="÷" color="orange calc-btn division" />
    <CalcButton content="1" color="white calc-btn one" />
    <CalcButton content="2" color="white calc-btn two" />
    <CalcButton content="3" color="white calc-btn three" />
    <CalcButton content="x" color="orange calc-btn multi" />
    <CalcButton content="4" color="white calc-btn four" />
    <CalcButton content="5" color="white calc-btn five" />
    <CalcButton content="6" color="white calc-btn six" />
    <CalcButton content="-" color="orange calc-btn minus" />
    <CalcButton content="7" color="white calc-btn seven" />
    <CalcButton content="8" color="white calc-btn eight" />
    <CalcButton content="9" color="white calc-btn nine" />
    <CalcButton content="+" color="orange calc-btn plus" />
    <CalcButton content="0" color="white calc-btn cero" />
    <CalcButton content="." color="white calc-btn dot" />
    <CalcButton content="=" color="orange calc-btn equal" />
  </div>
);

export default Calculator;
