import total from '../components/total';

describe('Test total function', () => {
  test('Total is empty when next: value is defined is not used already', () => {
    const calculator = { total: null, next: '7', operation: null };
    expect(total(calculator)).toBe('');
  });
  test('Returns 0 when nothing is added inside the calculator object', () => {
    const calculator = { total: null, next: null, operation: null };
    expect(total(calculator)).toBe('0');
  });
  test('Total amount is returned from calculator object', () => {
    const calculator = { total: '2.5', next: null, operation: null };
    expect(total(calculator)).toBe('2.5');
  });
});
