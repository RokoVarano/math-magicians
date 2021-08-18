import Calculator from "./Calculator";
import { render, fireEvent, screen, queryByText } from '@testing-library/react';

describe('Render calculator and update the display with numbers', () => {
  it('should show 9', () => {
    const values = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    render(<Calculator />);

    expect(screen.queryByText(...values)).toBeInTheDocument();
  })

  it('should show number 9 in the display', () => {
    render(<Calculator />);

    fireEvent.click(screen.queryByText('9'))
    fireEvent.click(screen.queryByText('3'))

    expect(screen.getByText('93')).toBeInTheDocument();
  })

  it('should show result 27 in the display', () => {
    render(<Calculator />);

    fireEvent.click(screen.queryByText('9'))
    fireEvent.click(screen.queryByText('x'))
    fireEvent.click(screen.queryByText('3'))
    fireEvent.click(screen.queryByText('='))

    expect(screen.getByText('27')).toBeInTheDocument();
  })
});