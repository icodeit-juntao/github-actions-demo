import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Quote } from '../Quote';

test('renders page title', () => {
  render(<Quote content="Code never lies, comments sometimes do." author="Ron Jeffries" />);
  expect(screen.getByText("Code never lies, comments sometimes do.")).toBeInTheDocument();
});