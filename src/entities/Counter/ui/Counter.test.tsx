import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentrender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
  test('Counter render on a screen', () => {
    componentRender(
      <Counter />,
      { initialState: { counter: { value: 10 } } },
    );
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', () => {
    componentRender(
      <Counter />,
      { initialState: { counter: { value: 10 } } },
    );
    userEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', () => {
    componentRender(
      <Counter />,
      { initialState: { counter: { value: 10 } } },
    );
    userEvent.click(screen.getByTestId('decrement-button'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
