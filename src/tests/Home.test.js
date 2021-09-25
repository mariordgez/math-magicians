import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

describe('Test Calculator Homepage', () => {
  test('Home element id to exist', () => {
    render(<Home />);
    expect(screen.getByTestId('homepage')).toBeInTheDocument();
  });

  test('Text element to exist', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  });
});
