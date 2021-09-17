import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

function CalcButton(props) {
  return (
    <button type="button" className={props.color}>
      {props.content}
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
        <CalcButton content="1" color="white" />
      </div>
    );
  }
}

Calculator.propTypes = {
  content: PropTypes.string,
  color: PropTypes.string,
};
export default Calculator;
