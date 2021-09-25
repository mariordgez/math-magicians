import { render } from '@testing-library/react';
import operate from '../logic/operate';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

beforeEach(() => {
  render(<Calculator />);
});

describe('Testing operate logic function', () => {
  test('Return 10 when 4 is added with 6', () => {
    const firstAmount = 4;
    const secondAmount = 6;
    const operationPlus = '+';
    expect(operate(firstAmount, secondAmount, operationPlus)).toBe('10');
  });
  test('Return 2 when 4 is substracted from 6', () => {
    const firstAmount = 6;
    const secondAmount = 4;
    const operationMinus = '-';
    expect(operate(firstAmount, secondAmount, operationMinus)).toBe('2');
  });
  test('Return 24 when 4 is in 6 times', () => {
    const firstAmount = 4;
    const secondAmount = 6;
    const operationMultiply = 'x';
    expect(operate(firstAmount, secondAmount, operationMultiply)).toBe('24');
  });
  test('Return 1 when 3 is divided by 3', () => {
    const firstAmount = 3;
    const secondAmount = 3;
    const operationDivide = '÷';
    expect(operate(firstAmount, secondAmount, operationDivide)).toBe('1');
  });
});