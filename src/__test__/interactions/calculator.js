import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

export default () => describe('Test calculator works properly', () => {
  beforeEach(() => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: /Calculator/i }));
  });

  it('Display 0 when clicking on the digit 0', () => {
    userEvent.click(screen.getByRole('button', { name: '0' }));
    expect(screen.getByRole('textbox', { name: '0' })).toBeInTheDocument();
  });

  it('Display 0 when clicking on the digit 0 twice', () => {
    userEvent.click(screen.getByRole('button', { name: '0' }));
    userEvent.click(screen.getByRole('button', { name: '0' }));
    expect(screen.getByRole('textbox', { name: '0' })).toBeInTheDocument();
  });

  it('Display 1 when clicking on the digit 1', () => {
    userEvent.click(screen.getByRole('button', { name: '1' }));
    expect(screen.getByRole('textbox', { name: '1' })).toBeInTheDocument();
  });

  it('Display 12 when clicking on the digits 1 and 2', () => {
    userEvent.click(screen.getByRole('button', { name: '1' }));
    userEvent.click(screen.getByRole('button', { name: '2' }));

    expect(screen.getByRole('textbox', { name: '12' })).toBeInTheDocument();
  });

  it('Append "." when click on the "." button', () => {
    userEvent.click(screen.getByRole('button', { name: '1' }));
    userEvent.click(screen.getByRole('button', { name: '.' }));
    userEvent.click(screen.getByRole('button', { name: '2' }));

    expect(screen.getByRole('textbox', { name: '1.2' })).toBeInTheDocument();
  });

  it('Append "." once when click on the "." button twice', () => {
    userEvent.click(screen.getByRole('button', { name: '1' }));
    userEvent.click(screen.getByRole('button', { name: '.' }));
    userEvent.click(screen.getByRole('button', { name: '.' }));
    userEvent.click(screen.getByRole('button', { name: '2' }));

    expect(screen.getByRole('textbox', { name: '1.2' })).toBeInTheDocument();
  });

  // test the AC button
  it('Clear the screen when clicking on AC button', () => {
    userEvent.click(screen.getByRole('button', { name: '1' }));
    userEvent.click(screen.getByRole('button', { name: '2' }));
    userEvent.click(screen.getByRole('button', { name: 'AC' }));

    expect(screen.getByRole('textbox', { name: '0' })).toBeInTheDocument();
  });

  // test the +/- button
  it('Change the sign of the number when clicking on +/- button', () => {
    userEvent.click(screen.getByRole('button', { name: '1' }));
    userEvent.click(screen.getByRole('button', { name: '2' }));
    userEvent.click(screen.getByRole('button', { name: '+/-' }));

    expect(screen.getByRole('textbox', { name: '-12' })).toBeInTheDocument();
  });

  // test the +/- button for double click
  it('Change the sign of the number when clicking on +/- button twice', () => {
    userEvent.click(screen.getByRole('button', { name: '1' }));
    userEvent.click(screen.getByRole('button', { name: '2' }));
    userEvent.click(screen.getByRole('button', { name: '+/-' }));
    userEvent.click(screen.getByRole('button', { name: '+/-' }));

    expect(screen.getByRole('textbox', { name: '12' })).toBeInTheDocument();
  });

  // test the + operator
  it('Display 3 when clicking on the digit 1, the button + and then clicking on the digit 2 and the button +', () => {
    userEvent.click(screen.getByRole('button', { name: '1' }));
    userEvent.click(screen.getByRole('button', { name: '+' }));
    userEvent.click(screen.getByRole('button', { name: '2' }));
    userEvent.click(screen.getByRole('button', { name: '+' }));

    expect(screen.getByRole('textbox', { name: '3' })).toBeInTheDocument();
  });

  // test the - operator
  it('Display -1 when clicking on the digit 1, the button - and then clicking on the digit 2 and the button -', () => {
    userEvent.click(screen.getByRole('button', { name: '1' }));
    userEvent.click(screen.getByRole('button', { name: '-' }));
    userEvent.click(screen.getByRole('button', { name: '2' }));
    userEvent.click(screen.getByRole('button', { name: '-' }));

    expect(screen.getByRole('textbox', { name: '-1' })).toBeInTheDocument();
  });

  // test the x operator
  it('Display 2 when clicking on the digit 1, the button x and then clicking on the digit 2 and the button x', () => {
    userEvent.click(screen.getByRole('button', { name: '1' }));
    userEvent.click(screen.getByRole('button', { name: 'x' }));
    userEvent.click(screen.getByRole('button', { name: '2' }));
    userEvent.click(screen.getByRole('button', { name: 'x' }));

    expect(screen.getByRole('textbox', { name: '2' })).toBeInTheDocument();
  });

  // test the ÷ operator
  it('Display 0.5 when clicking on the digit 1, the button ÷ and then clicking on the digit 2 and the button ÷', () => {
    userEvent.click(screen.getByRole('button', { name: '1' }));
    userEvent.click(screen.getByRole('button', { name: '÷' }));
    userEvent.click(screen.getByRole('button', { name: '2' }));
    userEvent.click(screen.getByRole('button', { name: '÷' }));

    expect(screen.getByRole('textbox', { name: '0.5' })).toBeInTheDocument();
  });

  // test division by zero
  it('Display "Can\'t divide by 0." when clicking on the digit 1, the button ÷ and then clicking on the digit 0 and the button =', () => {
    userEvent.click(screen.getByRole('button', { name: '1' }));
    userEvent.click(screen.getByRole('button', { name: '÷' }));
    userEvent.click(screen.getByRole('button', { name: '0' }));
    userEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByRole('textbox', { name: /Can't divide by 0./i })).toBeInTheDocument();
  });

  // test the modulo % operator
  it('Display 1 when clicking on the digit 3, the button % and then clicking on the digit 2 and the button %', () => {
    userEvent.click(screen.getByRole('button', { name: '3' }));
    userEvent.click(screen.getByRole('button', { name: '%' }));
    userEvent.click(screen.getByRole('button', { name: '2' }));
    userEvent.click(screen.getByRole('button', { name: '%' }));

    expect(screen.getByRole('textbox', { name: '1' })).toBeInTheDocument();
  });

  // test modulo by zero
  it('Display "Can\'t find modulo as can\'t divide by 0." when clicking on the digit 1, the button % and then clicking on the digit 0 and the button =', () => {
    userEvent.click(screen.getByRole('button', { name: '1' }));
    userEvent.click(screen.getByRole('button', { name: '%' }));
    userEvent.click(screen.getByRole('button', { name: '0' }));
    userEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByRole('textbox', { name: /Can't find modulo as can't divide by 0./i })).toBeInTheDocument();
  });

  // test the = operator
  it('Display 3 when clicking on the digit 1, the button + and then clicking on the digit 2 and the button =', () => {
    userEvent.click(screen.getByRole('button', { name: '1' }));
    userEvent.click(screen.getByRole('button', { name: '+' }));
    userEvent.click(screen.getByRole('button', { name: '2' }));
    userEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByRole('textbox', { name: '3' })).toBeInTheDocument();
  });
});
