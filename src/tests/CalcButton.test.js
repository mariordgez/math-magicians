import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CalcButton from '../components/CalcButton';

describe('Test Calcbutton function', () => {
  test('AC symbol is returned by CalcButton', () => {
    render(<CalcButton content="AC" color="white calc-btn ac" calc="ac" />);
    expect(screen.getByText('AC')).toBeInTheDocument();
  });
  test('Equals symbol is returned by CalcButton', () => {
    render(<CalcButton content="=" color="white calc-btn ac" calc="ac" />);
    expect(screen.getByText('=')).toBeInTheDocument();
  });
  test('Equals symbol class is returned by CalcButton', () => {
    render(<CalcButton content="=" color="white calc-btn ac" calc="ac" />);
    expect(screen.getByText('=')).toHaveClass('white calc-btn ac');
  });
});
