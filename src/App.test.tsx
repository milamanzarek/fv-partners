import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import App from './App';

it('renders FV Partners title', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/FV Partners/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
