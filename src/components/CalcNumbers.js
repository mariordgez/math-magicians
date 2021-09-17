import CalcButton from './CalcButton';

const calcNumbers = () => {
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    const att = `white calc-btn num${i}`;
    result.push(<CalcButton content={i} color={att} />);
  }
  return result;
};

export default calcNumbers;
