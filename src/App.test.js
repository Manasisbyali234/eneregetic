import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders engineering excellence heading', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const headingElement = screen.getByText(/Engineering Excellence/i);
  expect(headingElement).toBeInTheDocument();
});
