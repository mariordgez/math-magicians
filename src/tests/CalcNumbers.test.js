import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CalcNumbers from '../components/CalcNumbers';

describe('Test Calcbutton function', () => {
  test('All numbers are returned by CalcNumbers', () => {
    render(<CalcNumbers />);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('9')).toBeInTheDocument();
  });
  test('Classes from number are returned by CalcNumbers', () => {
    render(<CalcNumbers />);
    expect(screen.getByText('0')).toHaveClass('white calc-btn num0');
  });
});
