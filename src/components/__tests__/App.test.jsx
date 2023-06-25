import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';

test('renders page title', () => {
  render(<App />);
  expect(screen.getByTestId("quote-container")).toBeInTheDocument();
});