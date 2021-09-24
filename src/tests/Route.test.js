import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Route from '../components/Route';

describe('Test Calculator Result', () => {
  test('Result to be in the document', () => {
    render(<Route />);
    const elementSeven = screen.getByTestId('homepage');
    expect(elementSeven).toBeInTheDocument();
  });
});
