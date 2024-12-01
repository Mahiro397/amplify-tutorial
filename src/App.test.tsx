import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App signOut={() => {}} user={{ username: 'testUser' }} />);
  const linkElement = screen.getByText(/こんにちは/i);
  expect(linkElement).toBeInTheDocument();
});
