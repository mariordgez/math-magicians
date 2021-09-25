import total from '../components/total';

describe('Test total function', () => {
  test('returns empty result since no operation made', () => {
    const calculator = { total: null, next: '7', operation: null };
    expect(total(calculator)).toBe('');
  });
  test('returns empty result since no operation made', () => {
    const calculator = { total: null, next: null, operation: null };
    expect(total(calculator)).toBe('0');
  });
  test('returns empty result since no operation made', () => {
    const calculator = { total: '2.5', next: null, operation: null };
    expect(total(calculator)).toBe('2.5');
  });
});
