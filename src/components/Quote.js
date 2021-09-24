import React from 'react';
import '../App.css';
import getRandomInt from './randomInt';

const Quote = () => {
  const rnd = getRandomInt(3);
  const quoteArr = [
    'Pure mathematics is, in its way, the poetry of logical ideas. — Albert Einstein',
    'Mathematics is the most beautiful and most powerful creation of the human spirit.— Stefan Banach',
    'What is mathematics? It is only a systematic effort of solving puzzles posed by nature.— Shakuntala Devi',
  ];
  return (
    <div className="home">
      <h2>{quoteArr[rnd]}</h2>
    </div>
  );
};
export default Quote;
