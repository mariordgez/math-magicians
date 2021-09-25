import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Route from '../components/Route';

describe('Test Routes', () => {
  test('Home element id to exist', () => {
    render(<Route />);
    expect(screen.getByTestId('homepage')).toBeInTheDocument();
  });

  test('Text element to exist', () => {
    render(<Route />);
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  });

  test('Navbar elements should exist', () => {
    render(<Route />);
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  });

  test('Calculator should display', () => {
    render(<Route />);
    fireEvent.click(screen.getByText('Calculator'));
    expect(screen.getByText('Lets do some math!')).toBeInTheDocument();
  });

  test('Quote page should display', () => {
    render(<Route />);
    fireEvent.click(screen.getByText('Quote'));
    expect(screen.getByTestId('quotepage')).toBeInTheDocument();
  });
});
