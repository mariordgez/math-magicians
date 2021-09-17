import CalcButton from './CalcButton';

const calcNumbers = ({ calc }) => {
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    const att = `white calc-btn num${i}`;
    result.push(<CalcButton content={i} color={att} calc={calc} />);
  }
  return result;
};

export default calcNumbers;
