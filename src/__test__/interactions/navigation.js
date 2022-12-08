import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

export default () => describe('Test routing is working correctly', () => {
  it('Displays home page when clicking on the Home menu', () => {
    render(<App />);

    userEvent.click(screen.getByRole('link', { name: /Home/i }));

    expect(screen.getByText(/Welcome to our page!/i)).toBeInTheDocument();
  });

  it('Displays calculator page when clicking on the Calculator menu', () => {
    render(<App />);

    userEvent.click(screen.getByRole('link', { name: /Calculator/i }));

    expect(screen.getByText(/Let's do some math!/i)).toBeInTheDocument();
  });

  it('Displays quote page when clicking on the Quote menu', () => {
    render(<App />);

    userEvent.click(screen.getByRole('link', { name: /Quote/i }));

    expect(screen.getByText(/Mathematics is not about numbers/i)).toBeInTheDocument();
  });
});
