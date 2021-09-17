import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

function CalcButton({ color, content }) {
  return (
    <button type="button" className={color}>
      {content}
    </button>
  );
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <CalcButton content="AC" color="white" />
        <CalcButton content="+/-" color="white" />
        <CalcButton content="%" color="white" />
        <CalcButton content="÷" color="orange" />
        <CalcButton content="1" color="white" />
        <CalcButton content="2" color="white" />
        <CalcButton content="3" color="white" />
        <CalcButton content="x" color="orange" />
        <CalcButton content="4" color="white" />
        <CalcButton content="5" color="white" />
        <CalcButton content="6" color="white" />
        <CalcButton content="-" color="orange" />
        <CalcButton content="7" color="white" />
        <CalcButton content="8" color="white" />
        <CalcButton content="9" color="white" />
        <CalcButton content="+" color="orange" />
        <CalcButton content="0" color="white" />
        <CalcButton content="." color="white" />
        <CalcButton content="=" color="white" />
      </div>
    );
  }
}

CalcButton.propTypes = {
  content: PropTypes.string,
  color: PropTypes.string,
};

CalcButton.defaultProps = {
  content: '1',
  color: 'white',
};

export default Calculator;
