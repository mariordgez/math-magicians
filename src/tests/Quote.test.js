import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../components/Quote';

describe('Test Calculator quote page', () => {
  test('Quote element id to exist', () => {
    render(<Quote />);
    expect(screen.getByTestId('quotepage')).toBeInTheDocument();
  });
});
