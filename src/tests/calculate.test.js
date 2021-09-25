import calculate from '../logic/calculate';
import '@testing-library/jest-dom';

describe('Testing calculate logic function', () => {
  test('Number should be enter first in calculate file', () => {
    let obj = { total: null, next: null, operation: null };
    obj = calculate(obj, '=');
    expect(obj.total).toEqual(undefined);
  });
  test('Undefined if second number is not in calculate file', () => {
    let obj = { total: null, next: null, operation: null };
    obj = calculate(obj, '5');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual(undefined);
  });
  test('Plus function in calculate file', () => {
    let obj = { total: null, next: null, operation: null };
    obj = calculate(obj, '5');
    obj = calculate(obj, '+');
    obj = calculate(obj, '10');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('15');
  });
  test('Minus function in calculate file', () => {
    let obj = { total: null, next: null, operation: null };
    obj = calculate(obj, '20');
    obj = calculate(obj, '-');
    obj = calculate(obj, '15');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('5');
  });
  test('Divide function in calculate file', () => {
    let obj = { total: null, next: null, operation: null };
    obj = calculate(obj, '125');
    obj = calculate(obj, '÷');
    obj = calculate(obj, '5');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('25');
  });
  test('Multiplication function in calculate file', () => {
    let obj = { total: null, next: null, operation: null };
    obj = calculate(obj, '30');
    obj = calculate(obj, 'x');
    obj = calculate(obj, '20');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('600');
  });
  test('Float calculation in calculate file', () => {
    let obj = { total: null, next: null, operation: null };
    obj = calculate(obj, '30');
    obj = calculate(obj, '.');
    obj = calculate(obj, '5');
    obj = calculate(obj, '+');
    obj = calculate(obj, '20');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('50.5');
  });
  test('Check functionality of AC button', () => {
    let obj = { total: null, next: null, operation: null };
    obj = calculate(obj, '30');
    obj = calculate(obj, '.');
    obj = calculate(obj, '5');
    obj = calculate(obj, '+');
    obj = calculate(obj, '20');
    obj = calculate(obj, '=');
    obj = calculate(obj, 'AC');
    expect(obj.total).toEqual(null);
    expect(obj.next).toEqual(null);
    expect(obj.operation).toEqual(null);
  });
  test('Check functionality of +/- button', () => {
    let obj = { total: null, next: null, operation: null };
    obj = calculate(obj, '30');
    obj = calculate(obj, '.');
    obj = calculate(obj, '5');
    obj = calculate(obj, '+');
    obj = calculate(obj, '20');
    obj = calculate(obj, '=');
    obj = calculate(obj, '+/-');
    expect(obj.total).toEqual('-50.5');
  });
});
