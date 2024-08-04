import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Test Button', () => {
  test('Button should be render correctly', () => {
    render(<Button>Next</Button>);

    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  test('Button should be disabled', () => {
    render(<Button disabled>Next</Button>);

    expect(screen.getByText('Next')).toBeDisabled();
  });

  test('When button clicked, "onClick" function must be called', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Next</Button>);

    fireEvent.click(screen.getByText('Next'));
    expect(handleClick).toHaveBeenCalled();
  });
});
