import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';
import React from 'react';

describe('Test Calculator', () => {
  test('Expect correct text to render', () => {
    render(<Calculator />);
    expect(screen.getByText('Lets do some math!')).toBeInTheDocument();
  });
  test('Expect number buttons to exist', () => {
    render(<Calculator />);
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
  test('Expect symbol buttons to exist', () => {
    render(<Calculator />);
    expect(screen.getByText('+/-')).toBeInTheDocument();
    expect(screen.getByText('AC')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
    expect(screen.getByText('.')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByText('x')).toBeInTheDocument();
    expect(screen.getByText('%')).toBeInTheDocument();
  });
  test('23 x 3', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('3'));

    expect(screen.getByText('233')).toBeInTheDocument();
  });
});
