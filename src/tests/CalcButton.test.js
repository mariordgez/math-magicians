import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CalcButton from '../components/CalcButton';

describe('Test Calcbutton function', () => {
  test('Home element id to exist', () => {
    render(<CalcButton content="AC" color="white calc-btn ac" calc="ac" />);
    expect(screen.getByText('AC')).toBeInTheDocument();
  });
  test('Home element id to exist', () => {
    render(<CalcButton content="=" color="white calc-btn ac" calc="ac" />);
    expect(screen.getByText('=')).toBeInTheDocument();
  });
  test('Home element id to exist', () => {
    render(<CalcButton content="=" color="white calc-btn ac" calc="ac" />);
    expect(screen.getByText('=')).toHaveClass('white calc-btn ac');
  });
});
