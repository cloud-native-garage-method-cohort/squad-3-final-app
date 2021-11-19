import { render, screen } from '@testing-library/react';
import App from './App';

test('renders list', () => {
  render(<App />);
  const linkElement = screen.getByText(/Employees/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders add new employee', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add new employee/i);
  expect(linkElement).toBeInTheDocument();
});