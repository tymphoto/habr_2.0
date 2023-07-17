import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('Button showing text inside', () => {
    render(
      <Button>
        TEST
      </Button>,
    );
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Button showing text inside', () => {
    render(
      <Button variant='clear'>
        TEST
      </Button>,
    );
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
